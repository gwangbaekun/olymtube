import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Video from "../../component/Video/Video";
import VideoInfo from "../../component/Video/VideoInfo";
import VideoRow from "../../component/videoRow/VideoRow";
import { actionCreators as videoActions } from "../../redux/modules/video";
import { apis } from "../../shared/api";
import SubscribePage from "../subPage/SubscribePage";
import "./detail.css";

function Detail() {
  let params = useParams();
  const [videoInfo, setVideo] = useState([]);
  console.log(videoInfo);
  // const videoInfo = useSelector((state) => state.video.list[params.id]);

  useEffect(async () => {
    await apis.getVideo(params.id).then((res) => {
      console.log(res);
      setVideo(res.data);
    });
    // videoId 로 요청하기
  }, []);
  console.log(videoInfo);
  return (
    <>
      <div className="videoplayer">
        <div className="videoplayer__videodetails">
          <div className="videoplayer__video">
            <Video videoUrl={videoInfo.videoUrl} />
          </div>
          <div className="videoplayer__videoinfo">
            <VideoInfo
              id={videoInfo.video_id}
              title={videoInfo.title}
              username={videoInfo.videoUserResponseDto?.username}
              profile={videoInfo.videoUserResponseDto?.profile}
              views={videoInfo.views}
              likes={videoInfo.likes}
              createdAt={videoInfo.createdAt}
              category={videoInfo.category}
              category_img={videoInfo.category_img}
            />
          </div>
        </div>
        <div className="videoplayer__suggested">
          <SubscribePage />
        </div>
      </div>
    </>
  );
}

export default Detail;
