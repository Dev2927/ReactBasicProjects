import { useState } from "react";
import "./App.css";
import Menu from "./Menu";
import Video from "./Video";

const videos = {
  deer: "https://s3.amazonaws.com/codecademy-content/courses/React/react_video-fast.mp4",
  snail:
    "https://s3.amazonaws.com/codecademy-content/courses/React/react_video-slow.mp4",
  cat: "https://s3.amazonaws.com/codecademy-content/courses/React/react_video-cute.mp4",
  spider:
    "https://s3.amazonaws.com/codecademy-content/courses/React/react_video-eek.mp4",
};

const VideoNames = Object.keys(videos);

function App() {
  const [videoSrc, setVideoSrc] = useState(videos.spider);

  function onSelectVideo(video){
    const vid = videos[video]
    setVideoSrc(vid)
  }

  return (
    <>
      <div>
        <h1>Project 6: Video Player</h1>
        <Menu onSelectVideo={onSelectVideo} videoValues={VideoNames}/>
        <Video videoSrc={videoSrc} />
      </div>
    </>
  );
}

export default App;
