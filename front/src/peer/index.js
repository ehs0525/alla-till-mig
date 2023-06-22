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
  peer.on("call", (mediaConnection) => {
    const localStream = store.getState().video.localStream;

    // mediaConnection.answer([stream], [options]);
    // accept the call and optionally send your own media stream
    mediaConnection.answer(localStream);

    // Set listeners for media connection events
    mediaConnection.on("stream", (stream) => {
      console.log("remote peer added a stream");
      remoteStreamDispatch(stream);
    });
  });
};

export const call = (remotePeerID) => {
  const localStream = store.getState().video.localStream;

  peer.call(remotePeerID, localStream);
};

export default peerID;
