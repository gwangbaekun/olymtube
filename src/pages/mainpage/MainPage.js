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
  const user_info = useSelector((state) => state.user.userinfo);
  const [category, setCategory] = useState([]);
  const [onlyCategory, setOnlyCategory] = useState("0");
  const [showVideos, setShowVideos] = useState([]);

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
      setShowVideos(_video);
    } else if (id === "sub") {
      let __video = [];
      const _video = videos.filter((e) =>
        category.includes(e.categoryNumber) ? __video.push(e) : null
      );
      setShowVideos(__video);
    } else if (id === undefined) {
      dispatch(videoActions.setVideoDB());
    }
  }, [id]);

  useEffect(() => {
    let subscribes = [];
    apis.subscribes().then((res) => {
      res.data.map((e) => subscribes.push(e.categoryNumber));
      setCategory(subscribes);
    });

    // if (category !== 0) {
    //   category__list.map((e, i) => {
    //     const _video = videos.filter((e) => e.categoryNumber == i);
    //     setShowVideos(_video);
    //   });
    // }
  }, [id]);

  console.log(onlyCategory);

  return (
    <>
      <div className="recommendedvideos">
        <Category setShowVideos={setShowVideos} setCategory={setOnlyCategory} />
        {/* {isLoading ? (
          <CircularProgress className="loading" color="secondary" />
        ) : null} */}
        {id === "sub" || id === "myvideo" || onlyCategory !== "0" ? (
          <>
            <div className="recommendedvideos__videos">
              {showVideos.map((item) => {
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
          </>
        ) : (
          <>
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
          </>
        )}
      </div>
    </>
  );
}

export default MainPage;
