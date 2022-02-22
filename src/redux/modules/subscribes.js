import { title } from "case";
import produce from "immer";
import { createAction, handleActions } from "redux-actions";
import mockdata from "./mockdata.png";
import CgProfile from "react-icons/cg";
import speedSkating from "./speedSkating.png";

// actions
const SET_SUBSCRIBE = "SET_SUBSCRIBE";
const ADD_SUBSCRIBE = "ADD_SUBSCRIBE";
const SET_SUB_CATEGORY = "SET_SUB_CATEGORY";

// action creators
const setSubscribeVideo = createAction(SET_SUBSCRIBE, (subscribe_list) => ({
  subscribe_list,
}));
const setSubscribeCategory = createAction(
  SET_SUB_CATEGORY,
  (sub_category_list) => ({
    sub_category_list,
  })
);

const initialVideo = [
  {
    user: {
      user_id: "0",
      username: "제열",
      profile: "img",
    },
    video_id: "video_id",
    title: "title",
    img: "img",
    category: "봅슬레이",
  },
];

const initialState = {
  list: [...initialVideo],
  category_list: [
    {
      category: "speed skating",
      img: speedSkating,
    },
  ],
};

export default handleActions(
  {
    [SET_SUBSCRIBE]: (state, action) =>
      produce(state, (draft) => {
        draft.list = action.payload.subscribe_list;
        draft.is_loading = false;
      }),
    [SET_SUB_CATEGORY]: (state, action) =>
      produce(state, (draft) => {
        draft.category_list = action.payload.sub_category_list;
      }),
  },
  initialState
);

const actionCreators = {
  setSubscribeCategory,
  setSubscribeVideo,
};

export { actionCreators };
