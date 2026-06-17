const pool = require("../db/postgres");

module.exports = function (io) {
  io.on("connection", (socket) => {
    console.log("User connected:", socket.id);

    socket.on("chat-message", async (msg) => {
      try {
        // Temporary hardcoded IDs for testing
        const streamId = 1;
        const userId = 1;

        await pool.query(
          `INSERT INTO messages (stream_id, user_id, message)
           VALUES ($1, $2, $3)`,
          [streamId, userId, msg]
        );

        io.emit("chat-message", msg);
      } catch (err) {
        console.error("Chat save error:", err.message);
      }
    });

    socket.on("disconnect", () => {
      console.log("User disconnected");
    });
  });
};