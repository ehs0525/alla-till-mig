import { v4 as uuidv4 } from "uuid";

import { store } from "../../app/store";
import { addChatHistory } from "../chatSlice";
import { sendChatMessage } from "../../socket";

export const sendChatMessageDispatcher = (recipientSocketID, data) => {
  const chatMessage = {
    recipientSocketID,
    id: uuidv4(),
    content: data,
    isMine: true,
  };

  // socket 전송
  sendChatMessage(chatMessage);

  // local store 추가
  store.dispatch(addChatHistory(chatMessage));
};
