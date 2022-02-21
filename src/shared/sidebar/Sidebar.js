import React, { useEffect, useState } from "react";
import SideBarRow from "./SideBarRow";
import "./sidebar.css";
import { BiHomeHeart } from "react-icons/bi";
import { MdSubscriptions, MdOndemandVideo } from "react-icons/md";
import { GiCampfire } from "react-icons/gi";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Category from "../category/Category";

const SideBar = () => {
  const navigate = useNavigate();
  const category = useSelector((state) => state.subscribes.category_list);

  useEffect(() => {
    console.log("유저가 구독하고 있는 카테고리 보여주는 리덕스");
    console.log(category);
  }, []);

  return (
    <>
      <div className="sidebar">
        <Link to="/">
          <SideBarRow Icon={BiHomeHeart} title="Home" />
        </Link>
        <Link to="trends">
          <SideBarRow Icon={GiCampfire} title="Trending" />
        </Link>
        <Link to="myvideo">
          <SideBarRow Icon={MdOndemandVideo} title="Your videos" />
        </Link>
        <hr />
        <Link to="sub">
          <SideBarRow Icon={MdSubscriptions} title="Subscription" />
        </Link>
        {category.map((e) => {
          return (
            <Category key={e.id} _onClick img={e.img} title={e.category} />
          );
        })}
        <hr />
      </div>
      <Outlet />
    </>
  );
};

export default SideBar;
