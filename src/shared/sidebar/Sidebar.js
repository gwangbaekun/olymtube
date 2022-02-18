import React from "react";
import SideBarRow from "./SideBarRow";
import "./sidebar.css";
import { BiHomeHeart } from "react-icons/bi";
import { MdSubscriptions, MdOndemandVideo } from "react-icons/md";
import { GiCampfire } from "react-icons/gi";

const SideBar = () => {
  return (
    <>
      <div className="sidebar">
        <SideBarRow selected Icon={BiHomeHeart} title="Home" />
        <SideBarRow Icon={GiCampfire} title="Trending" />
        <SideBarRow Icon={MdOndemandVideo} title="Your videos" />
        <hr />
        <SideBarRow Icon={MdSubscriptions} title="Subscription" />
        //ToDo : 구독 카테고리 보여주기
        <hr />
      </div>
    </>
  );
};

export default SideBar;
