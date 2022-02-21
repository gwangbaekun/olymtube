import produce from "immer";
import { createAction, handleActions } from "redux-actions";

import { apis } from "../../shared/api";
import { getCookie, setCookie, deleteCookie } from "../../shared/cookie";

// actions
const LOG_OUT = "LOG_OUT";
const GET_USER = "GET_USER";
const SET_USER = "SET_USER";
const USERINFO = "USERINFO";

// action creators
const setUser = createAction(SET_USER, (user, token) => ({ user, token }));
const logOut = createAction(LOG_OUT, (user) => ({ user }));
const getUser = createAction(GET_USER, (user) => ({ user }));
const userInfo = createAction(SET_USER, (user) => ({ user }));

const initialUser = {
  userinfo: { username: "", profile: "" },
  token: null,
  is_login: false,
};

// middleware actions
// 회원가입, user정보입력하고 뒤에 사진업로드....한건데...
const SignUpDB = (user_info, profile) => {
  return function (dispatch, getState) {
    apis
      .signup(user_info.username, user_info.password, user_info.check_password)
      .then((res) => {
        apis
          .signup(profile)
          .then((res) => {
            console.log("회원가입성공", res);
          })
          .catch((error) => {
            console.log("사진업로드 실패", error);
          });
      })
      .catch((error) => {
        console.log("회원가입 실패");
      });
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
  return async function (dispatch, getState) {
    apis
      .login(user_data.username, user_data.password)
      .then((res) => {
        console.log(res);
        const token = res.data.token;
        setCookie("is_login", token);
        let loginUserData = {
          username: res.data.username,
          profile: res.data.profile,
        };
        apis.userInfo(token).then((res) => {
          console.log(res);
        });
        dispatch(setUser(loginUserData, token));
        console.log(loginUserData, token);
      })
      .catch((error) => alert("회원정보가 일치하지 않습니다."));
  };
};

const loginCheckDB = () => {
  //   // 로그인 유지 토큰이 있으면 서버에서 유저 데이터 가지고 와라
  return async function (dispatch, getState) {
    const Auth = getCookie("is_login");
    console.log(Auth ? true : false);

    if (Auth !== undefined) {
      apis
        .userInfo(Auth)
        .then((res) => {
          res.data.is_login = true;
          console.log("로그인체크됨", res);
          const user = {
            user_id: res.data.id,
            is_login: res.data.is_login,
            username: res.data.username,
            profile: res.data.profile,
            // subscribe_category : [
            //   { category : res.category, }
            // ]
          };
          console.log(user, Auth, "로그인정보출력");
          dispatch(setUser({ user, Auth }));
        })
        .catch((err) => console.log("로그인실ㅎ패"));
    }
  };
};

export default handleActions(
  {
    [SET_USER]: (state, action) =>
      produce(state, (draft) => {
        draft.token = action.payload.user.Auth;
        draft.is_login = true;
        draft.userinfo = {
          username: action.payload.user.username,
          profile: action.payload.user.profile,
        };
        console.log(action.payload.user.username);
        console.log(draft.user.is_login);
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
};

export { actionCreators };
