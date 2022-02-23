import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./header.css";
import { useDispatch, useSelector } from "react-redux";
import Avatar from "@mui/material/Avatar";

import { AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import { BsFillCameraVideoFill } from "react-icons/bs";
import { IoIosNotifications } from "react-icons/io";
import Figure from "react-bootstrap/Figure";
import AddVideo from "../../pages/addVideo/AddVideo";

function Header() {
  const user_info = useSelector((state) => state.user.userinfo);
  const is_login = useSelector((state) => state.user.is_login);
  console.log(user_info);
  const [menu, setMenu] = useState(true);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  console.log(is_login);

  let navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  const handleMenu = () => {
    setMenu((prev) => !prev);
  };

  function login() {
    console.log("로그인버튼");
    navigate("/login");
  }
  return (
    <>
      <div className="header">
        <div onClick={handleMenu} className="header__left">
          <AiOutlineMenu />
          <div>
            <Link to="/">
              <img className="header__logo" src="/img/olympic.png" alt="" />
            </Link>
          </div>
        </div>

        <div className="header__center">
          <input type="text" />
          <AiOutlineSearch className="header__searchbutton" />
        </div>

        <div className="header__right">
          <div className="header__icon">
            <BsFillCameraVideoFill
              style={{ marginTop: "10px", marginRight: "30px" }}
              onClick={handleOpen}
            />
            <AddVideo
              style={{ marginTop: "10px", marginRight: "30px" }}
              open={open}
              handleClose={handleClose}
            />
            <IoIosNotifications
              style={{ marginTop: "10px", marginRight: "30px" }}
            />
            {is_login ? (
              <div className="header__profile">
                <Avatar
                  width={35}
                  height={35}
                  alt="171x180"
                  src={user_info.profile}
                />
              </div>
            ) : (
              <div className="header__profile">
                <Avatar
                  width={35}
                  height={35}
                  alt="171x180"
                  src={user_info.profile}
                />
              </div>
            )}
          </div>
          <div>{is_login ? null : <div onClick={login}>로그인</div>}</div>
        </div>
      </div>
    </>
  );
}

export default Header;
