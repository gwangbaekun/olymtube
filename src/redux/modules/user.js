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
const setUser = createAction(SET_USER, (user) => ({ user }));
const logOut = createAction(LOG_OUT, (user) => ({ user }));
const getUser = createAction(GET_USER, (user) => ({ user }));
const userInfo = createAction(SET_USER, (user) => ({ user }));



const initialUser = {
  userinfo: { username: "username", profile: "profile" },
  token: null,
};


//middleware actions
const signupUser=(user_data) =>{
  return async function (dispatch,getState){
  }
}

const SignUpDB = (user_data) => {
  return function (dispatch, getState ) {
    apis
      .signup(user_data.username, user_data.password, user_data.nickname, user_data.user_profile)
      .then((res) => {
        console.log('회원가입성공', res)
      })
      .catch((error) => {
        console.log(error)
      });
  };
};

const loginDB=(user_data,token) =>{
  return async function (dispatch,getState){
      setCookie("is_login",token);
      dispatch(setUser(user_data,token));
      console.log(user_data,token)
  }
}




// reducer
export default handleActions(
  {
    [SET_USER]: (state, action) =>
      produce(state, (draft) => {
        console.log(state,action)
        setCookie("is_login", "success");
        draft.token = action.payload.user.token;
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
        draft.user = action.payload.user;
        draft.username = action.payload.username;
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
