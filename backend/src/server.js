const express = require("express");
const cors = require("cors");
const http = require("http");
const { Server } = require("socket.io");
require("dotenv").config();

const authRoutes = require("./routes/auth");
const streamRoutes = require("./routes/stream");
const socketHandler = require("./websocket/socketHandler");

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*"
  }
});

socketHandler(io);

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/stream", streamRoutes);

app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

server.listen(5000, () => {
  console.log("Backend running on port 5000");
});