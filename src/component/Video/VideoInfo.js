import React, { useEffect, useState } from "react";
import "./videoInfo.css";
import { FaRegThumbsUp } from "react-icons/fa";
import SideBarRow from "../../shared/sidebar/SideBarRow";
import Figure from "react-bootstrap/Figure";
import { Button } from "react-bootstrap";
import { Avatar } from "@mui/material";
import { apis } from "../../shared/api";

const VideoInfo = ({
  id,
  title,
  username,
  profile,
  views,
  likes,
  createdAt,
  category,
  category_img,
}) => {
  const [subClick, setSubClick] = useState(false);
  const [sub, setSub] = useState([]);
  const [user_info, setUser_info] = useState({});
  console.log(user_info.userCategoryResponseDtoList);

  const handleSubClick = () => {
    setSubClick((prev) => !prev);
    apis.subscribe(id).then((res) => console.log(res));
  };

  const handleLike = () => {};

  useEffect(() => {
    apis.userInfo().then((res) => {
      setUser_info(res.data);
    });
  }, [sub]);

  return (
    <div className="videoinfo">
      <div className="videoinfo__headline">
        <strong>
          <h3>{title}</h3>
        </strong>
      </div>
      <div className="videoinfo__stats">
        <p>{views} views</p>
        <div className="videoinfo__likes">
          {/* <SideBarRow onClick={handleLike} Icon={FaRegThumbsUp} title={likes} /> */}
          {/* <SideBarRow Icon={MoreHorizIcon} title="" /> */}
        </div>
      </div>
      <hr />
      <div className="videoinfo__channel">
        <div>
          <Avatar width={25} height={25} alt="171x180" src={profile} />
          <h2 style={{ marginLeft: "10px" }}>{username}</h2>
          {/* <h3 className="videoinfo__channeltitle">{title}</h3> */}
        </div>
        <div>
          <img src={category_img}></img>
          <button
            onClick={handleSubClick}
            className={
              subClick ||
              user_info.userCategoryResponseDtoList?.categoryNumber === category
                ? "videoinfo__subscribe__true"
                : "videoinfo__subscribe__false"
            }
          >
            subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoInfo;
