import React from "react";
import "./videoRow.css";

const VideoRow = ({ views, title, image }) => {
  return (
    <div className="videorow">
      <img src={image} alt="" />
      <div className="videorow__text">
        <h3>{title}</h3>
        <p className="videorow__headline">{views} views</p>
      </div>
    </div>
  );
};

export default VideoRow;
