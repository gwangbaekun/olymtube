import React from "react";
import { useNavigate } from "react-router-dom";
import "./videoCard.css";

const VideoCard = ({
  id,
  image,
  title,
  category,
  views,
  username,
  profile,
  createTime,
}) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/video/${id}`);
  };
  console.log(image);
  return (
    <div onClick={handleClick} className="videocard">
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
