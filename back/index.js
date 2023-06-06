const express = require("express");
const app = express();
const http = require("http");
const cors = require("cors");
const server = http.createServer(app);
const { Server } = require("socket.io");

const port = process.env.PORT || 3003;

app.use(cors());

const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

app.get("/", (req, res) => {
  res.send("Alla Till Mig!");
});

io.on("connection", (socket) => {
  console.log(`a user connected: ${socket.id}`);
  socket.on("disconnect", () => {
    console.log(`a user disconnected: ${socket.id}`);
  });
});

server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
