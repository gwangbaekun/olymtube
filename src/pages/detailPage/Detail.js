import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Video from "../../component/Video/Video";
import VideoInfo from "../../component/Video/VideoInfo";
import VideoRow from "../../component/videoRow/VideoRow";

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
          <div className="videoplayer__videoinfo">
            <Video />
            <VideoInfo
              title={videoInfo.title}
              username={videoInfo.username}
              profile={videoInfo.profile}
              views={videoInfo.views}
              likes={videoInfo.likes}
              createdAt={videoInfo.createdAt}
            />
          </div>
          <div className="videoplayer__suggested">
            <VideoRow />
          </div>
        </div>
      </div>
    </>
  );
}

export default Detail;
