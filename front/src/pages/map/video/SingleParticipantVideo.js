import React, { useEffect, useRef } from "react";

const SingleParticipantVideo = ({ stream, muted }) => {
  const videoRef = useRef();

  useEffect(() => {
    videoRef.current.srcObject = stream;

    // videoRef.current.onloadedmetadata = () => {
    //   videoRef.current.play();
    // };
  }, [stream]);

  return (
    <div className="video_container">
      <video
        ref={videoRef}
        width="98%"
        height="98%"
        playsInline
        autoPlay
        muted={muted}
      />
    </div>
  );
};

export default SingleParticipantVideo;
