import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./header.css";

function Header() {
  let navigate = useNavigate();

  function handleClick() {
    navigate("/");
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
          <input type="text" />
        </div>

        <div className="header__right">
          <img
            alt="Nouman Ahmed"
            stc="https://avatars1.githubusercontent.com/u/35970677?s=60&v=4"
          />
        </div>
      </div>
    </>
  );
}

export default Header;
