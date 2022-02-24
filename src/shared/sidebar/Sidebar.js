import React, { useEffect, useState } from "react";
import SideBarRow from "./SideBarRow";
import "./sidebar.css";
import { BiHomeHeart } from "react-icons/bi";
import { MdSubscriptions, MdOndemandVideo } from "react-icons/md";
import { GiCampfire } from "react-icons/gi";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Category from "../category/Category";
import { category__list } from "../../component/category/Category";

const SideBar = () => {
  const navigate = useNavigate();
  const user_info = useSelector((state) => state.user.userinfo);
  console.log(user_info);
  const category = user_info.userCategoryResponseDtoList;

  const [category_list, setCategory_list] = useState([]);

  useEffect(() => {
    // const _category = category.category_img?.split("/");
    setCategory_list(category);
  }, [category_list]);

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
        {category_list.map((e) => {
          return (
            <Category
              key={e.id + e.img}
              img={e.category_img}
              title={category__list[e.categoryNumber]}
            />
          );
        })}
        <hr />
      </div>
      <Outlet />
    </>
  );
};

export default SideBar;
