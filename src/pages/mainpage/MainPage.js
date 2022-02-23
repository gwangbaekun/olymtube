import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Category, { category__list } from "../../component/category/Category";
import VideoCard from "../../component/VideoCard/VideoCard";
import video, {
  actionCreators as videoActions,
} from "../../redux/modules/video";
import { apis } from "../../shared/api";
import "./mainpage.css";

function MainPage() {
  const params = useParams();
  const dispatch = useDispatch();
  const id = params.id;
  const videos = useSelector((state) => state.video.list);
  const is_loading = useSelector((state) => state.video.is_loading);
  const user_info = useSelector((state) => state.user.userinfo);
  const [category, setCategory] = useState(0);

  useEffect(() => {
    if (id === "trends") {
      let __video = [];
      videos.map((e) => __video.push(e));
      const _video = __video.sort((a, b) => b.views - a.views);
      dispatch(videoActions.setVideo(_video));
    } else if (id === "myvideo") {
      const _video = videos.filter(
        (e) => e.videoUserResponseDto.username == user_info?.username
      );
      dispatch(videoActions.setVideo(_video));
      console.log(_video);
    } else if (id === undefined) {
      dispatch(videoActions.setVideoDB());
    }
  }, [id]);

  useEffect(() => {
    category__list.map((e, i) => {
      const _video = videos.filter((e) => e.categoryNumber == i);
      dispatch(videoActions.setVideo(_video));
    });
  }, [category]);

  console.log(videos);

  return (
    <>
      <div className="recommendedvideos">
        <Category setCategory={setCategory} />
        {/* {isLoading ? (
          <CircularProgress className="loading" color="secondary" />
        ) : null} */}
        <div className="recommendedvideos__videos">
          {videos.map((item) => {
            return (
              <VideoCard
                id={item.video_id}
                key={item.video_id + item.title}
                title={item.title}
                image={item.img}
                views={item.views}
                likes={item.likes}
                createTime={item.createdAt}
                category={item.category_img}
                username={item.videoUserResponseDto?.username}
                profile={item.videoUserResponseDto?.profile}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default MainPage;
