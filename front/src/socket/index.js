import { io } from "socket.io-client";

export const connectWithSocketIOServer = () => {
  const socket = io("http://localhost:3003");

  socket.on("connect", () => {
    console.log(`connected to socket server: ${socket.id}`);
  });

  socket.on("disconnect", () => {
    console.log(`disconnected to socket server: ${socket.id}`); // undefined
  });
};
