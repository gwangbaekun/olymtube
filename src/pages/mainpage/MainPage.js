import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import VideoCard from "../../component/VideoCard/VideoCard";
import "./mainpage.css";

function MainPage() {
  const videos = useSelector((state) => state.video);
  console.log(videos);
  useEffect(() => {
    console.log("axios");
    // axios
    //   .get(`https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=9&regionCode=PK&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`)
    //   .then(response => {
    //     console.log(response.data.items);
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   })
  }, []);

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
                key={item.videoId}
                title={item.title}
                image={item.image}
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
