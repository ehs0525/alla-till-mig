import { v4 as uuidv4 } from "uuid";

import { store } from "../../app/store";
import { addChatMessage } from "../chatSlice";

export const sendChatMessageDispatcher = (recipientSocketID, data) => {
  store.dispatch(
    addChatMessage({
      socketID: recipientSocketID,
      id: uuidv4(),
      content: data,
      isMine: true,
    })
  );
};
