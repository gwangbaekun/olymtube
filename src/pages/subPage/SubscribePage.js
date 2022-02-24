import React, { useState, useEffect } from "react";
import "./subscribePage.css";
import VideoRow from "../../component/videoRow/VideoRow";
import { useParams } from "react-router";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FiAlertCircle } from "react-icons/fi";

const SearchPage = (props) => {
  const params = useParams();
  const thisVideoId = props.id;
  const thisVideoCategory = props.category;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userCategoryResponseDtoList = useSelector(
    (state) => state.user.userinfo.userCategoryResponseDtoList
  );
  const video = useSelector((state) => state.video.list);
  const [showVideo, setShowVideo] = useState([]);
  const [isError, setIsError] = useState(false);

  const handleClick = (e) => {
    navigate(`${e.currentTarget.id}`);
  };

  useEffect(async () => {
    let _video = [];
    video.map((e) =>
      e.categoryNumber === thisVideoCategory ? _video.push(e) : null
    );
    _video.filter((e) => e.id !== thisVideoId);
    await setShowVideo(_video);
  }, []);

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

      {showVideo?.map((item) => {
        return (
          <div
            id={item.video_id}
            onClick={handleClick}
            to={`${item.video_id}`}
            key={item.video_id}
          >
            <VideoRow
              title={item.title}
              image={item.img}
              views={item.views}
              createdAt={item.createdAt}
              category={item.category}
              username={item.username}
              profile={item.profile}
            />
          </div>
        );
      })}
    </div>
  );
};

export default SearchPage;
