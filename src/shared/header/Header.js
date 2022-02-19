import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./header.css";
import {useDispatch, useSelector} from "react-redux";

import { AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import { BsFillCameraVideoFill } from "react-icons/bs";
import { IoIosNotifications } from "react-icons/io";
import { CgProfile } from "react-icons/cg";

function Header() {
  
  const user = useSelector((state)=> state.user)
  // console.log(user)
  let navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };
  function login() {
    console.log('로그인버튼')
    navigate('/login')
  }
  return (
    <>
      <div className="header">
        <AiOutlineMenu />
        <div className="header__left">
          <div>
            <Link to="/">
              <img
                className="header__logo"
                src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg"
                alt=""
              />
            </Link>
          </div>
        </div>

        <div className="header__center">
          <input type="text" />
          <AiOutlineSearch className="header__searchbutton" />
        </div>

        <div className="header__right">
          <BsFillCameraVideoFill />
          <IoIosNotifications />
          <CgProfile
            alt="Nouman Ahmed"
            stc="https://avatars1.githubusercontent.com/u/35970677?s=60&v=4"
          />
          //ToDo : 프로필 사진 좀 더 크게
        </div>

        <div className="header__right">
          <div onClick={login}>{user.userinfo.username}로그인 </div>
        </div>

      </div>
    </>
  );
}

export default Header;
