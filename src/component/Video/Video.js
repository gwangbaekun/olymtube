import React from "react";
import YouTube from "react-youtube";
import ReactPlayer from "react-player";
import "./_video.css";

const Video = ({ videoId }) => {
  const opts = {};

  return (
    <div className="player-wrapper">
      <ReactPlayer
        className="react-player"
        url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
        width="100%"
        height="100%"
        controls="true"
      />
    </div>
  );
};

export default Video;
