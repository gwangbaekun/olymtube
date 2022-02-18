import React from "react";
import "./videoCard.css";

const VideoCard = ({
  image,
  title,
  category,
  views,
  username,
  profile,
  createTime,
}) => {
  return (
    <div className="videocard">
      <img className="videocard__image" src={image} alt="" />
      <div className="videocard__info">
        {/* <Avatar className="videocard__avatar" alt={username} src={profile} /> */}
        <div className="videocard__text">
          <h4>{title}</h4>
          <p>{category}</p>
          <p>
            {views} views • {createTime}
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
