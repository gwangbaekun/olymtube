import produce from "immer";
import { createAction, handleActions } from "redux-actions";

import { apiForms, apis } from "../../shared/api";
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
const SignUpDB = (frm) => {
  return async function (dispatch, getState, { history }) {
    await apiForms
      .signup(frm)
      .then((res) => {
        console.log(res);
        console.log("회원가입이 완료되었습니다.");
      })
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
        setCookie("is_login", token);

        apis
          .userInfo(token)
          .then((res) =>
            dispatch(
              setUser(
                {
                  username: res.data.username,
                  profile: res.data.profile,
                },
                token
              )
            )
          )
          .catch((error) => console.log(error));
      })
      .catch((error) => console.log(""));
  };
};

const loginCheckDB = () => {
  //   // 로그인 유지 토큰이 있으면 서버에서 유저 데이터 가지고 와라
  return async function (dispatch, getState) {
    const Auth = getCookie("is_login");
    console.log(Auth);

    if (Auth !== undefined) {
      apis.userInfo(Auth).then((res) => (res.data.is_login = true));
      // .then((res) => {
      //   res.data.is_login = true;
      //   const user = {
      //     user_id: res.data.id,
      //     is_login: res.data.is_login,
      //     username: res.data.username,
      //     profile: res.data.profile,
      //     // subscribe_category : [
      //     //   { category : res.category, }
      //     // ]
      //   };
      //   dispatch(setUser({ user, Auth }));
      // })
      // .catch((err) => console.log("로그인실패"));
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
        };
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
