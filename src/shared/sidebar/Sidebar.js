import React from "react";
import SideBarRow from "./SideBarRow";
import "./sidebar.css";

const SideBar = () => {
  return (
    <>
      <div className="sidebar">
        <SideBarRow selected title="Home" />
        <SideBarRow title="Trending" />
        <SideBarRow title="Subscription" />
        <hr />
        <SideBarRow title="Library" />
        <SideBarRow title="History" />
        <SideBarRow title="Your videos" />
        <SideBarRow title="Watch later" />
        <SideBarRow title="Liked vides" />
        <hr />
      </div>
    </>
  );
};

export default SideBar;
