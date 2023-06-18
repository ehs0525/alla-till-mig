import { v4 as uuidv4 } from "uuid";

import { store } from "../../app/store";
import { addChatHistory } from "../chatSlice";
import { sendChatMessage } from "../../socket";

export const sendChatMessageDispatch = (recipientSocketID, data) => {
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
