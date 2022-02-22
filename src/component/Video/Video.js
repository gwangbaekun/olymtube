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
        url="https://youngbin.s3.ap-northeast-2.amazonaws.com/video/6b146c00-1ba5-41ff-86e6-99b6d606a790KakaoTalk_Video_2022-02-17-22-25-15.mp4"
        width="100%"
        height="100%"
        controls="true"
      />
    </div>
  );
};

export default Video;
