const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const pool = require("../db/postgres");

exports.signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const existing = await pool.query(
      "SELECT id FROM users WHERE email=$1",
      [email]
    );

    if (existing.rows.length) {
      return res.status(400).json({
        error: "Email already exists"
      });
    }

    const hash = await bcrypt.hash(password, 10);

    await pool.query(
      "INSERT INTO users(name,email,password_hash) VALUES($1,$2,$3)",
      [name, email, hash]
    );

    res.json({ message: "Signup successful" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const result = await pool.query(
      "SELECT * FROM users WHERE email=$1",
      [email]
    );

    if (!result.rows.length) {
      return res.status(401).json({
        error: "Invalid credentials"
      });
    }

    const user = result.rows[0];

    const ok = await bcrypt.compare(
      password,
      user.password_hash
    );

    if (!ok) {
      return res.status(401).json({
        error: "Invalid credentials"
      });
    }

    const token = jwt.sign(
      {
        id: user.id,
        email: user.email
      },
      process.env.JWT_SECRET || "livestream-secret",
      { expiresIn: "7d" }
    );

    res.json({ token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
};