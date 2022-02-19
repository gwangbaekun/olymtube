import React from "react";
import "./videoRow.css";

const VideoRow = ({ views, createdAt, username, title, image, profile }) => {
  return (
    <div className="videorow">
      <img src={image} alt="" />
      <div className="videorow__text">
        <h3>{title}</h3>
        <p className="videorow__headline">
          {profile} {username} • {views} views • {createdAt}
        </p>
      </div>
    </div>
  );
};

export default VideoRow;
