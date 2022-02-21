import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./header.css";
import { useDispatch, useSelector } from "react-redux";

import { AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import { BsFillCameraVideoFill } from "react-icons/bs";
import { IoIosNotifications } from "react-icons/io";
import Figure from "react-bootstrap/Figure";

function Header() {
  const user_info = useSelector((state) => state.user.userinfo);
  const [menu, setMenu] = useState(true);
  const is_login = useSelector((state) => state.user.is_login);

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
            <BsFillCameraVideoFill />
            <IoIosNotifications />
            <div className="header__profile">
              <Figure.Image
                width={35}
                height={35}
                alt="171x180"
                src="https://freesvgfiles.org/wp-content/uploads/2021/03/Rooster-Head-Svg.jpg"
              />
              //ToDo 프로필 만들기
            </div>
          </div>
          <div>
            {is_login ? (
              <div>{user_info.username}</div>
            ) : (
              <div onClick={login}>로그인</div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
