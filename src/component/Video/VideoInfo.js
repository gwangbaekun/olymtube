import React, { useState } from "react";
import "./videoInfo.css";
import { FaRegThumbsUp } from "react-icons/fa";
import SideBarRow from "../../shared/sidebar/SideBarRow";
import Figure from "react-bootstrap/Figure";
import { Button } from "react-bootstrap";

const VideoInfo = ({ title, username, profile, views, likes, createdAt }) => {
  const [subClick, setSubClick] = useState(false);

  const handleSubClick = () => {
    setSubClick((prev) => !prev);
    console.log("axios");
    // 구독하고있는지도 판단해야할듯
  };

  return (
    <div className="videoinfo">
      <div className="videoinfo__headline">
        <h1>{title}</h1>
      </div>
      <div className="videoinfo__stats">
        <p>
          {views} views • {createdAt}
        </p>
        <div className="videoinfo__likes">
          <SideBarRow Icon={FaRegThumbsUp} title={likes} />
          {/* <SideBarRow Icon={MoreHorizIcon} title="" /> */}
        </div>
      </div>
      <hr />
      <div className="videoinfo__channel">
        <div>
          <Figure.Image
            className="videoinfo__avatar"
            alt={username}
            src={profile}
          />
          <div className="videoinfo__channelinfo">
            <h3 className="videoinfo__channeltitle">{title}</h3>
          </div>
        </div>
        <div>
          <button
            onClick={handleSubClick}
            className={
              subClick
                ? "videoinfo__subscribe__true"
                : "videoinfo__subscribe__false"
            }
          >
            subscribe
          </button>
        </div>
      </div>
      <div>// ToDo 사용자가 구독하고 있는 채널</div>
    </div>
  );
};

export default VideoInfo;
