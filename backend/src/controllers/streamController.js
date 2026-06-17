const crypto = require("crypto");
const pool = require("../db/postgres");

exports.createStream = async (req, res) => {
  try {
    const userId = 1; // temporary, later from JWT
    const title = req.body.title || "Untitled Stream";

    const streamKey = crypto.randomBytes(16).toString("hex");

    const result = await pool.query(
      `INSERT INTO streams (user_id, stream_key, title, is_live)
       VALUES ($1, $2, $3, true)
       RETURNING id, stream_key`,
      [userId, streamKey, title]
    );

    const stream = result.rows[0];

    res.json({
      id: stream.id,
      streamKey: stream.stream_key,
      rtmpUrl: "rtmp://54.91.27.248:1935/live"
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to create stream" });
  }
};

exports.getStream = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await pool.query(
      `SELECT id, stream_key, title
       FROM streams
       WHERE id = $1`,
      [id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ error: "Stream not found" });
    }

    const stream = result.rows[0];

    res.json({
      id: stream.id,
      title: stream.title,
      streamKey: stream.stream_key,
      playbackUrl: `/hls/${stream.stream_key}.m3u8`
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch stream" });
  }
};