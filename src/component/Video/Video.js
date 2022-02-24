import React from "react";
import ReactPlayer from "react-player";
import "./_video.css";

const Video = (props) => {
  console.log(props);

  return (
    <div className="player-wrapper">
      <ReactPlayer
        className="react-player"
        url={props.videoUrl}
        width="100%"
        height="100%"
        controls={true}
        playing={true}
      />
    </div>
  );
};

export default Video;
