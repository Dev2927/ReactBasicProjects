import React from "react";

function Video({ videoSrc }) {
  return (
    <div>
      <video loop controls autostart="true" autoPlay muted src={videoSrc} />
    </div>
  );
}

export default Video;
