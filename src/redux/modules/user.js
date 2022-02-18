import produce from "immer";
import { createAction, handleActions } from "redux-actions";

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
  userinfo: { username: "", profile: "" },
  token: null,
};

export default handleActions(
  {
    [SET_USER]: (state, action) =>
      produce(state, (draft) => {
        // setCookie("is_login", "success");
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
};

export { actionCreators };
