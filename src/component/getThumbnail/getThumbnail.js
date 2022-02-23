import { getFunctionName } from "@mui/utils/getDisplayName";
import React, { useEffect } from "react";
import { useRef, useState } from "react";
import ReactPlayer from "react-player";
import { useDispatch, useSelector } from "react-redux";
import YouTube from "react-youtube";
import { actionCreators as imageActions } from "../../redux/modules/image";
// import Thumbnail from "./Thumbnail";
// 1. Make sure user is uploading a video
// This is already checked in the Illfact videoupload

// 2. Do some testing before implementing it.
// 3. You have to get the file URL with the Form Apped

export default function GetThumbnail(props) {
  const dispatch = useDispatch();
  const file = props.video;
  console.log(props.setImg);
  const videoElem = useRef();
  const imageInput = useRef();
  const [imgSrc, setImgSrc] = useState();

  function dataURLtoFile(imgBase, filename) {
    console.log(imgBase);
    var arr = imgBase.split(","),
      mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[1]),
      n = bstr.length,
      u8arr = new Uint8Array(n);

    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }

    const imgFile = new File([u8arr], filename, { type: mime });
    console.log(imgFile);
    props.setImg(imgFile);
  }

  const captureThumbnail = () => {
    const canvas = document.createElement("canvas");
    canvas.width = videoElem.current.videoWidth;
    canvas.height = videoElem.current.videoHeight;

    canvas
      .getContext("2d")
      .drawImage(videoElem.current, 0, 0, canvas.width, canvas.height);

    // setImgSrc(canvas.toDataURL(), "image.jpg");
    setImgSrc(canvas.toDataURL());
    console.log(imgSrc);
    // fetch(imgSrc)
    //   .then((res) => res.blob())
    //   .then((blob) => {
    //     const NewFile = new File([blob], "video_thumbnail.jpg", {
    //       type: "image/jpg",
    //     });
    //     console.log(NewFile);
    //   });

    // dispatch(imageActions.setPreview(imgSrc));

    // .then((res) => res.blob())
    // .then((blob) => {
    //   const NewFile = new File([blob], "video_thumbnail", {
    //     type: "image/jpg",
    //   });
    //   console.log(NewFile);
    //   dispatch(imageActions.setPreview());
    // });
  };

  useEffect(() => {
    if (imgSrc) {
      dataURLtoFile(imgSrc, "thumbnail.png");
    }
  }, [imgSrc]);

  return (
    <>
      {file ? (
        <video
          style={{ width: "300px", height: "168px" }}
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
          <img
            ref={imageInput}
            style={{ width: "300px", height: "168px" }}
            className="w-100"
            src={imgSrc}
            alt=""
          />
        </div>
      ) : (
        ""
      )}
      <button onClick={captureThumbnail}>Capture image</button>
    </>
  );
}
