import produce from "immer";
import { Navigate } from "react-router-dom";
import { createAction, handleActions } from "redux-actions";

import { apiForms, apis } from "../../shared/api";
import { getCookie, setCookie, deleteCookie } from "../../shared/cookie";

// actions
const LOG_OUT = "LOG_OUT";
const GET_USER = "GET_USER";
const SET_USER = "SET_USER";
const USERINFO = "USERINFO";
const SET_USER_CATEGORY = "SET_USER_CATEGORY";

// action creators
const setUser = createAction(SET_USER, (user, token) => ({ user, token }));
const logOut = createAction(LOG_OUT, (user) => ({ user }));
const getUser = createAction(GET_USER, (user) => ({ user }));
const userInfo = createAction(SET_USER, (user) => ({ user }));
const setUserCategory = createAction(SET_USER_CATEGORY, (list) => ({ list }));

const initialUser = {
  userinfo: { username: "", profile: "", userCategoryResponseDtoList: [] },
  token: null,
  is_login: false,
};

// middleware actions
// 회원가입, user정보입력하고 뒤에 사진업로드....한건데...
const SignUpDB = (frm) => {
  return async function (dispatch, getState) {
    await apiForms
      .signup(frm)
      .then((res) => {
        console.log(res);
        console.log("회원가입이 완료되었습니다.");
        window.location.replace("/login");
      })
      .then(() => {})
      .catch((error) =>
        error.response.data.httpStatus === "BAD_REQUEST"
          ? window.alert("다시 작성해주세요")
          : null
      );
  };
};

// const SignUpDB = (user_info) => {
//   return function (dispatch, getState ) {
//     apis
//       .signup(
//         user_info.username,
//         user_info.password,
//         user_info.check_password,
//         user_info.profile )
//       .then((res) => {
//         console.log('회원가입성공', res)
//       })
//       .catch((error) => {
//         console.log('회원가입 실패', error)
//       });
//   };
// };

const loginDB = (user_data) => {
  return async function (dispatch, getState, { history }) {
    await apis
      .login(user_data)
      .then((res) => {
        const token = res.data.token;
        if (!getCookie("is_login")) {
          setCookie("is_login", token);
        }

        apis
          .userInfo(token)
          .then(
            (res) =>
              dispatch(
                setUser(
                  {
                    username: res.data.username,
                    profile: res.data.profile,
                  },
                  token
                )
              ),
            window.location.replace("/")
          )
          .catch((err) => console.log(err));
      })
      .catch((err) => window.alert("아이디와 비밀번호를 확인하세요"));
  };
};

const loginCheckDB = (Auth) => {
  return async function (dispatch, getState) {
    if (Auth === null) {
      return;
    } else if (Auth) {
      await apis.userInfo(Auth).then((res) => {
        dispatch(
          setUser(
            {
              username: res.data.username,
              profile: res.data.profile,
              userCategoryResponseDtoList: res.data.userCategoryResponseDtoList,
            },
            Auth
          )
        );
      });
    }
  };
};

export default handleActions(
  {
    [SET_USER]: (state, action) =>
      produce(state, (draft) => {
        draft.token = action.payload.token;
        draft.is_login = true;
        draft.userinfo = {
          username: action.payload.user.username,
          profile: action.payload.user.profile,
          userCategoryResponseDtoList:
            action.payload.user.userCategoryResponseDtoList,
        };
      }),
    [SET_USER_CATEGORY]: (state, action) =>
      produce(state, (draft) => {
        draft.userinfo.userCategoryResponseDtoList = action.payload.list;
      }),

    [LOG_OUT]: (state, action) =>
      produce(state, (draft) => {
        // deleteCookie("is_login");
        draft.userinfo = null;
        draft.token = null;
      }),

    [GET_USER]: (state, action) => produce(state, (draft) => {}),

    [USERINFO]: (state, action) =>
      produce(state, (draft) => {
        // draft.user = action.payload.user;
        // draft.username = action.payload.username;
        // console.log(state)
        // console.log(action)
      }),
  },
  initialUser
);

const actionCreators = {
  logOut,
  getUser,
  setUser,
  loginDB,
  SignUpDB,
  loginCheckDB,
  setUserCategory,
};

export { actionCreators };
