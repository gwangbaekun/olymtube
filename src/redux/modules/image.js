import { createAction, handleActions } from "redux-actions";
import produce from "immer";

const SET_PREVIEW = "SET_PREVIEW";
const SET_VIDEO_PREVIEW = "SET_VIDEO_PREVIEW";

const setPreview = createAction(SET_PREVIEW, (preview) => ({ preview }));
const setVideoPreview = createAction(SET_VIDEO_PREVIEW, (preview) => ({
  preview,
}));
const initialState = {
  preview: null,
};

export default handleActions(
  {
    [SET_PREVIEW]: (state, action) =>
      produce(state, (draft) => {
        draft.preview = action.payload.preview;
      }),
    [SET_VIDEO_PREVIEW]: (state, action) =>
      produce(state, (draft) => {
        draft.preview = action.payload.preview;
      }),
  },
  initialState
);

const actionCreators = {
  setPreview,
  setVideoPreview,
};

export { actionCreators };
