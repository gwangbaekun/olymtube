import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./header.css";

function Header() {
  let navigate = useNavigate();

  function handleClick() {
    navigate("/");
  }

  function login() {
    console.log('로그인버튼')
    navigate('/login')
  }

  
  return (
    <>
      <div className="header">
        <div className="header__left">
          <div onClick={handleClick}>
            <img
              className="header__logo"
              src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg"
              alt=""
            />
          </div>
        </div>
        <div className="header__center">
          <input type="text" placeholder="검색어를 입력하세요"/>
        </div>
        <div className="header__right">
          <div onClick={login}>로그인 </div>
        </div>
      </div>
    </>
  );
}

export default Header;
