import React, { useState } from "react";

import "./Signup.css";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes, useNavigate } from "react-router-dom";
import { actionCreators as userActions } from "../redux/modules/user";
import { actionCreators as imageActions } from "../redux/modules/image";
import axios from "axios";

const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const nameRef = React.useRef(null);
  const pwdRef = React.useRef(null);
  const pwdCheckRef = React.useRef(null);
  const fileInput = React.useRef();
  const [imageFile, setImageFile] = useState(null);

  const preview = useSelector((state) => state.image.preview);

  const filePreview = (e) => {
    const reader = new FileReader();
    const file = fileInput.current.files[0];
    reader.onloadend = () => {
      dispatch(imageActions.setPreview(reader.result));
    };
    if (file) {
      setImageFile(file);
    }
  };

  const goSignup = async () => {
    const user_info = {
      username: nameRef.current.value,
      password: pwdRef.current.value,
      check_password: pwdCheckRef.current.value,
    };
    // dispatch(userActions.SignUpDB(user_info))
    // console.log(user_info)
    const frm = new FormData();
    frm.append(
      "user_info",
      new Blob([JSON.stringify(user_info)], { type: "application/json" })
    );
    frm.append("profile", imageFile);

    await dispatch(userActions.SignUpDB(frm)).then(() => navigate("/login"));
  };

  const pwdCheck = () => {
    if (pwdRef.current.value !== pwdCheckRef.current.value) {
      console.log("중복체크기능 - 나중");
    } else {
      console.log("중복체크기능 - 나중");
    }
  };

  return (
    <React.Fragment>
      <div className="signup__page">
        <div className="login__title">
          <img className="title__logo" src="/img/olympic.png" />
          <p className="title__text">Olymtube에 회원가입 합니다</p>
        </div>
        <div className="signup__input__box">
          <div className="signup__input">
            <div className="signup__box">
              <input
                className="signup__text"
                type="text"
                ref={nameRef}
                placeholder="아이디를 입력해주세요"
              />
              <button className="signup__double" onClick={pwdCheck}>
                중복체크
              </button>
            </div>
            <input
              className="signup__pw"
              type="password"
              ref={pwdRef}
              placeholder="비밀번호를 입력해주세요"
            />
            <input
              className="signup__pwCheck"
              type="password"
              ref={pwdCheckRef}
              placeholder="비밀번호를 한번 더 입력해주세요"
            />
            <input
              className="signup__file"
              type="file"
              onChange={filePreview}
              ref={fileInput}
              accept="image/*"
            />
            <button className="signup__btn" onClick={goSignup}>
              회원가입
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Signup;
