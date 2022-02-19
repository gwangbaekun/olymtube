import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Video from "../../component/Video/Video";
import VideoInfo from "../../component/Video/VideoInfo";
import VideoRow from "../../component/videoRow/VideoRow";
import SubscribePage from "../subPage/SubscribePage";
import "./detail.css";

function Detail() {
  let { videoId } = useParams();

  const videoInfo = useSelector((state) => state.video[1]);

  console.log(videoInfo);

  useEffect(() => {
    console.log("axios");
    // videoId 로 요청하기
  });

  return (
    <>
      <div className="videoplayer">
        <div className="videoplayer__videodetails">
          <div className="videoplayer__video">
            <Video videoId={videoId} />
          </div>
          <div className="videoplayer__videoinfo">
            <VideoInfo
              title={videoInfo.title}
              username={videoInfo.username}
              profile={videoInfo.profile}
              views={videoInfo.views}
              likes={videoInfo.likes}
              createdAt={videoInfo.createdAt}
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
