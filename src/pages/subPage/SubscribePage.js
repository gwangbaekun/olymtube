import React, { useState, useEffect } from "react";
import "./subscribePage.css";
import VideoRow from "../../component/videoRow/VideoRow";
import { useParams } from "react-router";
import axios from "axios";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { MdTune } from "react-icons/md";
import { FiAlertCircle } from "react-icons/fi";
import { apis } from "../../shared/api";
import { actionCreators as videoActions } from "../../redux/modules/video";

const SearchPage = (props) => {
  let { searchQuery } = useParams();
  const dispatch = useDispatch();

  const userCategoryResponseDtoList = useSelector(
    (state) => state.user.userinfo.userCategoryResponseDtoList
  );
  const videoRow = useSelector((state) => state.video.list);

  // const userSubVideo =

  const [channelRow, setChannelRow] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    apis.get().then((res) => {
      // userCategoryResponseDtoList.map(category => {

      //   res.data.filter((e) => e.)
      // })
      dispatch(videoActions.setVideoDB());
    });
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
      {videoRow.map((item) => {
        return (
          <Link key={item.video_id} to={`/video/${item.video_id}`}>
            <VideoRow
              title={item.title}
              image={item.img}
              views={item.views}
              createdAt={item.createdAt}
              category={item.category}
              username={item.username}
              profile={item.profile}
            />
          </Link>
        );
      })}
    </div>
  );
};

export default SearchPage;
