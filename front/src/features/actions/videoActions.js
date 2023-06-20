import { v4 as uuidv4 } from "uuid";

import { store } from "../../app/store";
import { setCurrentRoom, setRooms } from "../videoSlice";
import { createVideoRoom } from "../../socket";

export const createVideoRoomDispatch = () => {
  const id = uuidv4();

  // socket 전송
  createVideoRoom({
    id,
    peerID: 1, // change later on for real pearID
  });

  // local store 설정
  store.dispatch(setCurrentRoom(id));
};

export const listVideoRoomsDispatch = (data) => {
  store.dispatch(setRooms(data));
};
