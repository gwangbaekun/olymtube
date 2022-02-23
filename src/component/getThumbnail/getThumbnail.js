import React, { useEffect } from "react";
import { useRef, useState } from "react";
// import Thumbnail from "./Thumbnail";
// 1. Make sure user is uploading a video
// This is already checked in the Illfact videoupload

// 2. Do some testing before implementing it.
// 3. You have to get the file URL with the Form Apped

export default function GetThumbnail(props) {
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
  };

  useEffect(() => {
    if (imgSrc) {
      dataURLtoFile(imgSrc, "thumbnail.png");
    }
  }, [imgSrc]);

  return (
    <>
      {file ? (
        <div className="video">
          <video
            style={{ width: "300px", height: "168px" }}
            id="video"
            className="w-100"
            ref={videoElem}
            src={URL.createObjectURL(file)}
            type="video/mp4"
            controls
          ></video>
        </div>
      ) : (
        ""
      )}
      {imgSrc ? (
        <div className="video__thumbnail">
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
      <button
        style={{
          width: "90px",
          height: "40px",
          backgroundColor: "#3EA6FF",
          borderRadius: "3px",
        }}
        onClick={captureThumbnail}
      >
        Capture image
      </button>
    </>
  );
}
