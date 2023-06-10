import { io } from "socket.io-client";
import {
  offlineUserDispatcher,
  onlineUsersDispatcher,
} from "../features/actions/userActions";

let socket = null;

export const connectWithSocketIOServer = () => {
  socket = io("http://localhost:3003");

  socket.on("connect", () => {
    console.log(`connected to socket server: ${socket.id}`);
  });

  socket.on("online-users", (data) => {
    onlineUsersDispatcher(socket.id, data);
  });

  socket.on("offline-users", (socketID) => {
    offlineUserDispatcher(socketID);
  });

  socket.on("disconnect", () => {
    console.log(`disconnected to socket server: ${socket.id}`); // undefined
  });
};

export const login = (data) => {
  socket.emit("user-login", data);
};
