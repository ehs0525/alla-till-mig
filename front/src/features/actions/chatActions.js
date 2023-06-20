import { v4 as uuidv4 } from "uuid";

import { store } from "../../app/store";
import { addChatHistory, addOpenChatRoom } from "../chatSlice";
import { sendChatMessage } from "../../socket";

export const sendChatMessageDispatch = async (recipientSocketID, data) => {
  const chatMessage = {
    recipientSocketID,
    id: uuidv4(),
    content: data,
    isMine: true,
  };

  // socket 전송
  sendChatMessage(chatMessage);

  // local store 추가
  store.dispatch(
    addChatHistory({
      socketID: chatMessage.recipientSocketID,
      id: chatMessage.id,
      content: chatMessage.content,
      isMine: chatMessage.isMine,
    })
  );
};

export const receiveChatMessageDispatch = (data) => {
  store.dispatch(
    addChatHistory({
      socketID: data.senderSocketID,
      id: data.id,
      content: data.content,
      isMine: data.isMine,
    })
  );
};

export const openChatRoomDispatch = (socketID) => {
  if (store.getState().chat.openRooms.find((cr) => cr.socketID === socketID))
    return;

  const username = store
    .getState()
    .map.onlineUsers.find((user) => user.socketID === socketID)?.username;

  store.dispatch(addOpenChatRoom({ socketID, username }));
};
