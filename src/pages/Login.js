import React from "react";
import "./Login.css";

import { useDispatch, useSelector } from "react-redux";
import { Route, Routes, useNavigate } from "react-router-dom";
import { actionCreators as userActions } from "../redux/modules/user";

import { getCookie, setCookie, deleteCookie } from "../shared/cookie";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const idRef = React.useRef(null);
  const pwdRef = React.useRef(null);

  const goLogin = async () => {
    const logIn_data = {
      username: idRef.current.value,
      password: pwdRef.current.value,
    };
    await dispatch(userActions.loginDB(logIn_data)).then(() => navigate("/"));
  };

  return (
    <React.Fragment>
      <div className="login__page">
        <div className="login__title">
          <img className="title__logo" src="/img/olympic.png" />
          <p className="title__text">로그인</p>
        </div>
        <div className="login__input__box">
          <div className="login__input">
            <input
              type="text"
              ref={idRef}
              placeholder="아이디를 입력해주세요"
            />
            <input
              type="password"
              ref={pwdRef}
              placeholder="비밀번호를 입력해주세요"
            />
            <button onClick={goLogin}>로그인하기</button>
            <a
              onClick={() => {
                navigate("/signup");
              }}
            >
              회원이 아니신가요?
            </a>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Login;
