import React from "react";
import "./videoInfo.css";
import { FaRegThumbsUp } from "react-icons/fa";

import SideBarRow from "../../shared/sidebar/SideBarRow";

const VideoInfo = ({ title, username, profile, views, likes, createdAt }) => {
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
          {/* <Avatar className="videoinfo__avatar" alt={username} src={profile} /> */}
          <div className="videoinfo__channelinfo">
            <h3 className="videoinfo__channeltitle">{title}</h3>
          </div>
        </div>
        <div className="videoinfo__subscribe">
          {/* <Button color="secondary">SUBSCRIBE</Button> */}
        </div>
      </div>
    </div>
  );
};

export default VideoInfo;
