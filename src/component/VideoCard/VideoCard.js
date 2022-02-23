import { Avatar } from "@mui/material";
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
  return (
    <div onClick={handleClick} className="videocard">
      <img className="videocard__image" src={image} alt="" />
      <div className="videocard__info">
        <div className="video__master">
          <Avatar width={25} height={25} alt="171x180" src={profile} />
        </div>
        {/* <img className="videocard__category" src={category}></img> */}
        {/* <Avatar className="videocard__avatar" alt={username} src={profile} /> */}
        <div className="videocard__text">
          <h4>{title}</h4>
          <p></p>
          <p>
            {views} views •{" "}
            {createTime[0] +
              "년 " +
              createTime[1] +
              "월 " +
              createTime[2] +
              "일"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
