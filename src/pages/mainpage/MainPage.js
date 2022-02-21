import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import VideoCard from "../../component/VideoCard/VideoCard";
import video, {
  actionCreators as videoActions,
} from "../../redux/modules/video";
import "./mainpage.css";

function MainPage() {
  const params = useParams();
  const dispatch = useDispatch();
  const id = params.id;
  const videos = useSelector((state) => state.video.list);
  const is_loading = useSelector((state) => state.video.is_loading);
  useEffect(() => {
    if (id === "trends") {
      // video sort
    } else if (id === "myvideo") {
      const _video = videos.filter((e) => e.username == "소영");
      dispatch(videoActions.setVideo(_video));
      console.log(_video);
    } else if (id === undefined) {
      console.log("axios 동영상 받아오기");
    }
    // dispatch(videoActions.setVideo({ videos, is_loading }));
    // dispatch(videoActions.setVideo());
    // 시간순 sort
    // 만약 파라미터가 trend -> 좋아요순 sort
    // 만약 파라미터가 yourvideos -> 내꺼만
    // dispatch 로 setvideo 불러오기
    // axios
    //   .get(`https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=9&regionCode=PK&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`)
    //   .then(response => {
    //     console.log(response.data.items);
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   })
  }, [id]);

  return (
    <>
      <div className="recommendedvideos">
        {/* {isLoading ? (
          <CircularProgress className="loading" color="secondary" />
        ) : null} */}
        //ToDo: 로딩화면 보여주기
        <div className="recommendedvideos__videos">
          {videos.map((item) => {
            return (
              <VideoCard
                id={item.video_id}
                key={item.video_id + item.title}
                title={item.title}
                image={item.img}
                views={item.views}
                createTime={item.createdAt}
                username={item.username}
                profile={item.profile}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default MainPage;
