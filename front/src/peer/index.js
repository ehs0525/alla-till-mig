import { Peer } from "peerjs";

import { store } from "../app/store";
import { remoteStreamDispatch } from "../features/actions/videoActions";

let peer;
let peerID;

export const connectWithPeerServer = () => {
  // Create the Peer object
  // const peer = new Peer([id], [options]);
  peer = new Peer(undefined, {
    host: "localhost",
    port: 9000,
    path: "/peer",
  });

  // Emitted when a connection to the PeerServer is established
  peer.on("open", (id) => {
    console.log("My peer id is", id);
    peerID = id;
  });

  // Emitted when a remote peer attempts to call you
  // 수신자 쪽
  peer.on("call", (mediaConnection) => {
    const localStream = store.getState().video.localStream;

    // mediaConnection.answer([stream], [options]);
    // accept the call and optionally send your own media stream
    mediaConnection.answer(localStream);

    // Set listeners for media connection events
    // Emitted when a remote peer adds a stream
    mediaConnection.on("stream", (stream) => {
      console.log("remote peer added a stream");
      remoteStreamDispatch(stream);
    });
  });
};

// 발신자 쪽
export const call = (remotePeerID) => {
  const localStream = store.getState().video.localStream;

  const mediaConnection = peer.call(remotePeerID, localStream);

  mediaConnection.on("stream", (stream) => {
    remoteStreamDispatch(stream);
  });
};

export { peerID };
