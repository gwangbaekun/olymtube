import React, { useState, useEffect } from "react";
import "./subscribePage.css";
import VideoRow from "../../component/videoRow/VideoRow";
import { useParams } from "react-router";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FiAlertCircle } from "react-icons/fi";
import { apis } from "../../shared/api";
import { actionCreators as videoActions } from "../../redux/modules/video";

const SubscribePage = (props) => {
  const thisVideoId = props.id;
  const sameCategory = props.sameCategory;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [video, setVideo] = useState([]);
  const videoList = useSelector((state) => state.video.list);

  const [showVideo, setShowVideo] = useState(videoList);
  const [isError, setIsError] = useState(false);

  const handleClick = (e) => {
    navigate(`${e.currentTarget.id}`);
  };

  useEffect(async () => {
    await apis.getVideo(`${thisVideoId}`).then((res) => {
      setShowVideo(res.data.sameCategoryVideoResponseDtos);
      dispatch(videoActions.setVideo(res.data.sameCategoryVideoResponseDtos));
    });
  }, [showVideo]);

  if (isError) {
    return (
      <FiAlertCircle severity="error" className="loading">
        No Results found!
      </FiAlertCircle>
    );
  }

  return (
    <div className="searchpage">
      {/* {isLoading ? (
        <CircularProgress className="loading" color="secondary" />
      ) : null} */}

      {showVideo.map((item) => {
        return (
          <div
            id={item.video_id}
            onClick={handleClick}
            to={`${item.video_id}`}
            key={item.video_id}
          >
            <VideoRow title={item.title} image={item.img} views={item.views} />
          </div>
        );
      })}
    </div>
  );
};

export default SubscribePage;
