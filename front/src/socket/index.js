import { io } from "socket.io-client";
import {
  offlineUserDispatch,
  onlineUsersDispatch,
} from "../features/actions/userActions";
import {
  openChatRoomDispatch,
  receiveChatMessageDispatch,
} from "../features/actions/chatActions";
import { listVideoRoomsDispatch } from "../features/actions/videoActions";
import { call } from "../peer";

let socket = null;

export const connectWithSocketIOServer = () => {
  socket = io("http://localhost:3003");

  socket.on("connect", () => {
    console.log(`connected to socket server: ${socket.id}`);
  });

  socket.on("online-users", (data) => {
    onlineUsersDispatch(socket.id, data);
  });

  socket.on("offline-users", (socketID) => {
    offlineUserDispatch(socketID);
  });

  socket.on("chat-message", (data) => {
    receiveChatMessageDispatch(data);
    openChatRoomDispatch(data.senderSocketID);
  });

  socket.on("video-rooms", (data) => {
    listVideoRoomsDispatch(data);
  });

  socket.on("init-video-room", (peerID) => {
    call(peerID); // 기존 참여자가 새로 온 참여자에게 call
  });

  socket.on("disconnect", () => {
    console.log(`disconnected to socket server: ${socket.id}`); // undefined
  });
};

export const login = (data) => {
  socket.emit("user-login", data);
};

export const sendChatMessage = (data) => {
  socket.emit("chat-message", data);
};

export const createVideoRoom = (data) => {
  socket.emit("create-video-room", data);
};

export const joinVideoRoom = (data) => {
  console.log("emitting join-video-room event", data);
  socket.emit("join-video-room", data);
};
