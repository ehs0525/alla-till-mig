import { store } from "../../app/store";
import { setOnlineUsers, removeOfflineUser } from "../mapSlice";

export const onlineUsersDispatch = (socketID, data) => {
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

export const offlineUserDispatch = (socketID) => {
  store.dispatch(removeOfflineUser(socketID));
};
