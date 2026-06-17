const pool = require("../db/postgres");

module.exports = function (io) {
  io.on("connection", (socket) => {
    console.log("User connected:", socket.id);

    socket.on("chat-message", async (data) => {
      try {
        const { streamId, message } = data;
        const userId = 1; // temporary until JWT auth

        await pool.query(
          `INSERT INTO messages (stream_id, user_id, message)
           VALUES ($1, $2, $3)`,
          [streamId, userId, message]
        );

        io.emit("chat-message", {
          streamId,
          message
        });
      } catch (err) {
        console.error("Chat save error:", err.message);
      }
    });

    socket.on("disconnect", () => {
      console.log("User disconnected");
    });
  });
};