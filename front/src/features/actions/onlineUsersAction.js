import { store } from "../../app/store";
import { setOnlineUsers } from "../mapSlice";

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
