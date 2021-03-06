import { title } from "case";
import produce from "immer";
import { createAction, handleActions } from "redux-actions";
import mockdata from "./mockdata.png";
import CgProfile from "react-icons/cg";
import { apiForms, apis } from "../../shared/api";

// actions
const SET_VIDEO = "SET_VIDEO";
const ADD_VIDEO = "ADD_VIDEO";
const SELECT_CATEGORY = "SELECT_CATEGORY";

// action creators
const setVideo = createAction(SET_VIDEO, (video_list) => ({ video_list }));
const addVideo = createAction(ADD_VIDEO, (videoInfo) => ({ videoInfo }));
const selectCategory = createAction(SELECT_CATEGORY, (category) => ({
  category,
}));

const initialVideo = [
  {
    video_id: "0",
    title: "대한민국 봅슬레이",
    img: mockdata,
    category: "봅슬레이",
    views: "200",
    likes: "10",
    createdAt: "2022-01-01",
    username: "제열",
    profile: "프로필사진",
  },
  {
    video_id: "1",
    title: "대한민국 봅슬레이",
    img: mockdata,
    category: "봅슬레이",
    views: "300",
    likes: "15",
    createdAt: "2022-01-01",
    username: "소영",
    profile: "프로필사진",
  },
  {
    video_id: "2",
    title: "대한민국 봅슬레이",
    img: mockdata,
    category: "봅슬레이",
    views: "300",
    likes: "15",
    createdAt: "2022-01-01",
    username: "소영",
    profile: "프로필사진",
  },
];

const initialState = {
  list: initialVideo,
  is_loading: true,
};

const setVideoDB = () => {
  return async function (dispatch, getState) {
    apis.get().then((res) => {
      dispatch(setVideo(res.data));
    });
  };
};

const addVideoDB = (frm) => {
  return async function (dispatch, getState) {
    apiForms
      .upload(frm)
      .then((res) => {
        window.location.replace("/");
      })
      .catch((error) => {
        window.alert("동영상을 업로드 할 수가 없습니다.");
      });
  };
};

// async function createVideoRows(videos) {
//   let newVideoRows = [];
//   for (const video of videos) {
//     const videoId = video.id.videoId;
//     const response = await axios.get(
//       `https://www.googleapis.com/youtube/v3/videos?part=statistics%2C%20snippet&id=${videoId}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`
//     );
//     const views = response.data.items[0].statistics.viewCount;
//     const snippet = video.snippet;
//     const title = snippet.title;
//     const timestamp = DateTime.fromISO(snippet.publishedAt).toRelative();
//     const channel = snippet.channelTitle;
//     const description = snippet.description;
//     const image = snippet.thumbnails.medium.url;

//     newVideoRows.push({
//       videoId,
//       title,
//       image,
//       views,
//       timestamp,
//       channel,
//       description,
//     });
//   }
//   setVideoRows(newVideoRows);
//   // dispatch setvideo 써야겠지
//   setIsLoading(false);
// }

export default handleActions(
  {
    [SET_VIDEO]: (state, action) =>
      produce(state, (draft) => {
        draft.list = action.payload.video_list;
        draft.is_loading = false;
      }),
    [ADD_VIDEO]: (state, action) =>
      produce(state, (draft) => {
        draft.list.push(action.payload.videoInfo);
      }),
    [SELECT_CATEGORY]: (state, action) =>
      produce(state, (draft) => {
        draft.list.filter((e) => e.category === action.payload.category);
      }),
  },
  initialState
);

const actionCreators = {
  setVideo,
  setVideoDB,
  selectCategory,
  addVideoDB,
};

export { actionCreators };
