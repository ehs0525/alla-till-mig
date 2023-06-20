const express = require("express");
const app = express();
const http = require("http");
const cors = require("cors");
const server = http.createServer(app);
const { Server } = require("socket.io");

const port = process.env.PORT || 3003;

let onlineUsers = {};
let videoRooms = {};

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

  // user-login 이벤트
  socket.on("user-login", (data) => {
    socket.join("logged-users");

    onlineUsers[socket.id] = {
      username: data.username,
      coords: data.coords,
    };
    console.log(onlineUsers);

    io.to("logged-users").emit(
      "online-users",
      objToArray(onlineUsers, "online-users")
    );
  });

  // chat-message 이벤트
  socket.on("chat-message", (data) => {
    console.log("server received chat-message event");
    if (onlineUsers[data.recipientSocketID]) {
      io.to(data.recipientSocketID).emit("chat-message", {
        senderSocketID: socket.id,
        id: data.id,
        content: data.content,
        isMine: false,
      });
    }
  });

  // create-video-room 이벤트
  socket.on("create-video-room", (data) => {
    console.log("server create-video-room event", data);

    videoRooms[data.id] = {
      participants: [
        {
          socketID: socket.id,
          username: onlineUsers[socket.id].username,
          peerID: data.peerID,
        },
      ],
    };

    io.emit("video-rooms", objToArray(videoRooms, "video-rooms"));
  });

  socket.on("disconnect", () => {
    console.log(`a user disconnected: ${socket.id}`);

    // remove offline user from online users array
    if (onlineUsers[socket.id]) {
      delete onlineUsers[socket.id];
    }
    console.log(onlineUsers);

    io.to("logged-users").emit("offline-users", socket.id);
  });
});

server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

const objToArray = (obj, event) => {
  const arr = [];

  if (event === "online-users") {
    Object.entries(obj).forEach(([key, value]) => {
      arr.push({
        socketID: key,
        username: value.username,
        coords: value.coords,
      });
    });
  } else if (event === "video-rooms") {
    Object.entries(obj).forEach(([key, value]) => {
      arr.push({
        id: key,
        host: value.participants[0].username,
        numberOfParticipants: value.participants.lenth,
      });
    });
  }

  return arr;
};
