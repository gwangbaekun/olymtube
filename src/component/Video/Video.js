import React from "react";
import YouTube from "react-youtube";
import ReactPlayer from "react-player";
import "./_video.css";

const Video = (props) => {
  console.log(props);
  const opts = {};

  return (
    <div className="player-wrapper">
      <ReactPlayer
        className="react-player"
        url={props.videoUrl}
        width="100%"
        height="100%"
        controls="true"
      />
    </div>
  );
};

export default Video;
