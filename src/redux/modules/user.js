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
};


//middleware actions

const SignUpDB = (user_data) => {
  return function (dispatch, getState ) {
    apis
      .signup(user_data.username, user_data.password, user_data.check_password,  user_data.profile)
      .then((res) => {
        console.log('회원가입성공', res)
      })
      .catch((error) => {
        console.log(error)
      });
  };
};


const loginDB=(user_data) =>{
  return async function (dispatch,getState){
      apis
      .login(user_data.username, user_data.password )
      .then((res) => {
        console.log(res)
        const token = res.data.token;
        setCookie("is_login",token );
        // console.log(token)
        let loginUserData = {
          username : res.data.username,
          profile : res.data.profile,
          }
        dispatch(setUser(loginUserData, token));
        // apis
        //   .userInfo({})
        //   .then((res) =>{
        //       loginUserData.user_id = res.data.user_id;
        //       loginUserData.nickname = res.data.nickname;
        //       console.log('로그인성공 디스패치해')
        //       dispatch(setUser(user_data,token));
        //   })
        //   .catch((error) => console.log(error));
        })
        .catch((error) => alert("회원정보가 일치하지 않습니다."));
    };
  };

export default handleActions(
  {
    [SET_USER]: (state, action) =>
      produce(state, (draft) => {
        console.log(state)
        console.log(action)
        draft.token = action.payload.token;
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
        console.log(state)
        console.log(action)
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
};

export { actionCreators };
