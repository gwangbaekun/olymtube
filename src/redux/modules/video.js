import { title } from "case";
import produce from "immer";
import { createAction, handleActions } from "redux-actions";
import mockdata from "./mockdata.png";
import CgProfile from "react-icons/cg";

// actions
const SET_VIDEO = "SET_VIDEO";
const ADD_VIDEO = "ADD_VIDEO";

// action creators
const setVideo = createAction(SET_VIDEO, (video_list) => ({ video_list }));

const initialVideo = [
  {
    video_id: "0",
    title: "대한민국 봅슬레이",
    img: mockdata,
    category: "봅슬레이",
    views: "200",
    likes: "10",
    createdAt: "2022-01-01",
    is_loading: false,
    username: "제열",
    profile: "프로필사진",
  },
];

// axios 요청해서 video 리스트 만드는 미들웨어 함수
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
        draft.list = action.payload;
      }),
  },
  initialVideo
);

const actionCreators = {
  setVideo,
};

export { actionCreators };
