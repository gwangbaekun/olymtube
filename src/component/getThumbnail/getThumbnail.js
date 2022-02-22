import React, { useEffect } from "react";
import { useRef, useState } from "react";
import ReactPlayer from "react-player";
import { useDispatch } from "react-redux";
import { actionCreators as imageActions } from "../../redux/modules/image";
// import Thumbnail from "./Thumbnail";
// 1. Make sure user is uploading a video
// This is already checked in the Illfact videoupload

// 2. Do some testing before implementing it.
// 3. You have to get the file URL with the Form Apped

export default function GetThumbnail(props) {
  const dispatch = useDispatch();
  const file = props.video;
  console.log(file);
  const videoElem = useRef();
  const [imgSrc, setImgSrc] = useState();

  const captureThumbnail = () => {
    const canvas = document.createElement("canvas");
    canvas.width = videoElem.current.videoWidth;
    canvas.height = videoElem.current.videoHeight;

    canvas
      .getContext("2d")
      .drawImage(
        videoElem.current,
        0,
        0,
        videoElem.current.videoWidth,
        videoElem.current.videoHeight
      );

    setImgSrc(canvas.toDataURL(), "image.jpg");
    fetch(imgSrc)
      .then((res) => res.blob())
      .then((blob) => {
        const NewFile = new File([blob], "video_thumbnail", {
          type: "image/jpg",
        });
        console.log(NewFile);
        dispatch(imageActions.setPreview(NewFile));
      });
  };

  return (
    <>
      {file ? (
        <video
          id="video"
          className="w-100"
          ref={videoElem}
          src={URL.createObjectURL(file)}
          type="video/mp4"
          controls
        ></video>
      ) : (
        ""
      )}
      {imgSrc ? (
        <div>
          <img className="w-100" src={imgSrc} alt="" />
        </div>
      ) : (
        ""
      )}
      <button onClick={captureThumbnail}>Capture image</button>
    </>
  );
}
