const router = require("express").Router();
const pool = require("../db/postgres");

router.get("/:streamId", async (req, res) => {
  try {
    const { streamId } = req.params;

    const result = await pool.query(
      `SELECT message, created_at
       FROM messages
       WHERE stream_id = $1
       ORDER BY created_at ASC`,
      [streamId]
    );

    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to load chat" });
  }
});

module.exports = router;