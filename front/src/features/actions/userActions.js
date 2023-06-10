import { store } from "../../app/store";
import { setOnlineUsers, removeOfflineUser } from "../mapSlice";

export const onlineUsersDispatcher = (socketID, data) => {
  store.dispatch(
    setOnlineUsers(
      data.map((user) => {
        if (user.socketID === socketID) {
          user.isMe = true;
        }
        return user;
      })
    )
  );
};

export const offlineUserDispatcher = (socketID) => {
  store.dispatch(removeOfflineUser(socketID));
};
