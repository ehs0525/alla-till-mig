import { Peer } from "peerjs";

export const connectWithPeerServer = () => {
  let peerID;

  // Create the Peer object
  // const peer = new Peer([id], [options]);
  const peer = new Peer(undefined, {
    host: "localhost",
    port: 9000,
    path: "/peer",
  });

  // Emitted when a connection to the PeerServer is established
  peer.on("open", (id) => {
    console.log("My peer id is", id);
    peerID = id;
  });
};
