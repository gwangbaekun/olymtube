import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { GrClose } from "react-icons/gr";
import { flexbox } from "@mui/system";
import { MdUpload } from "react-icons/md";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as previewActions } from "../../redux/modules/image";
import { actionCreators as videoActions } from "../../redux/modules/video";
import { BsArrowRight, BsArrowLeft, BsArrowBarUp } from "react-icons/bs";
import FormControl, { useFormControl } from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import FormHelperText from "@mui/material/FormHelperText";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import GetThumbnail from "../../component/getThumbnail/getThumbnail";
function MyFormTitle() {
  const { focused } = useFormControl() || {};

  const helperText = React.useMemo(() => {
    if (focused) {
      return "카테고리를 명시해 주면 좋습니다.";
    }

    return "제목(필수항목)";
  }, [focused]);

  return <FormHelperText>{helperText}</FormHelperText>;
}

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 750,
  height: 600,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  borderRadius: "10px",
};

const header__style = {
  display: "flex",
  width: "200",
  margin: "auto",
};

const icon__style = {
  float: "left",
};

function AddVideo(props) {
  const open = props.open;
  const dispatch = useDispatch();
  const handleClose = props.handleClose;
  const [page, setPage] = useState(0);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState(0);
  const video = useSelector((state) => state.image.videoPreview);
  const [img, setImg] = useState();
  const [file, setFile] = useState("");
  const videoFile = React.useRef();
  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  const uploadVideo = () => {
    let myInput = document.getElementById("video");
    myInput.click();
  };

  const videoInput = (e) => {
    dispatch(previewActions.setVideoPreview(videoFile.current.files[0]));
    console.log(video);
    setFile(videoFile.current.files[0]);
    setPage(1);
  };

  const nextPage = () => {
    setPage(1);
  };

  const previousPage = () => {
    setPage(0);
  };

  const handleTitle = (e) => {
    console.log(title);
    setTitle(e.currentTarget.value);
  };

  const handleSubmitVideo = (e) => {
    console.log(img, file);
    const contents = {
      title: title,
      category: category,
    };
    const frm = new FormData();
    frm.append(
      "contents",
      new Blob([JSON.stringify(contents)], { type: "application/json" })
    );
    frm.append("img", img);
    frm.append("video", file);
    dispatch(videoActions.addVideoDB(frm));
  };

  {
    if (page === 0) {
      return (
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Box sx={header__style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                동영상 업로드
              </Typography>
            </Box>
            <div>
              {" "}
              <GrClose
                style={{ float: "right", marginTop: "0" }}
                onClick={handleClose}
              />
            </div>
            <hr />
            <Box
              style={{
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "150",
                  height: "150",
                }}
              >
                <MdUpload
                  style={{
                    width: "150",
                    height: "150",
                    backgroundColor: "#EEEEEE",
                    color: "#398AB9",
                    borderRadius: "50%",
                    marginTop: "100px",
                  }}
                  onClick={uploadVideo}
                />
              </Box>
              <Box
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: "50px",
                }}
              >
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  <strong>동영상 파일을 드래그 앤 드롭하여 업로드</strong>
                </Typography>
              </Box>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography
                  id="modal-modal-description"
                  sx={{ fontSize: "13px" }}
                >
                  동영상을 게시하기 전에는 비공개로 설정됩니다.
                </Typography>
              </div>
              <input
                ref={videoFile}
                onChange={videoInput}
                style={{ visibility: "hidden" }}
                id="video"
                type="file"
              />
              <div
                style={{
                  marginTop: "10px",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                {" "}
                <Button
                  style={{
                    width: "90px",
                    height: "40px",
                    backgroundColor: "#3EA6FF",
                    borderRadius: "3px",
                  }}
                  variant="primary"
                  onClick={uploadVideo}
                >
                  파일 선택
                </Button>{" "}
              </div>
            </Box>{" "}
          </Box>
        </Modal>
      );
    }
    if (page === 1) {
      return (
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Box sx={header__style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                동영상 업로드
              </Typography>
            </Box>
            <div>
              <GrClose
                style={{ float: "right", marginTop: "0" }}
                onClick={handleClose}
              />
            </div>
            <hr />
            <h2>세부정보</h2>
            <div>
              <Box component="form" noValidate autoComplete="off">
                <FormControl sx={{ width: "45ch" }}>
                  <OutlinedInput
                    value={title}
                    onChange={handleTitle}
                    placeholder="Please enter text"
                  />
                  <MyFormTitle />
                </FormControl>
              </Box>
            </div>
            <div style={{ marginTop: "50px" }}>
              <FormControl sx={{ minWidth: "45ch" }}>
                <InputLabel id="demo-simple-select-autowidth-label">
                  category
                </InputLabel>
                <Select
                  labelId="demo-simple-select-autowidth-label"
                  id="demo-simple-select-autowidth"
                  value={category}
                  onChange={handleChange}
                  autoWidth
                  label="category"
                  sx={{ m: 1, minWidth: "45ch" }}
                >
                  <MenuItem value={1}>봅슬레이</MenuItem>
                  <MenuItem value={2}>스노우보드 </MenuItem>
                  <MenuItem value={3}>스피드 스케이팅</MenuItem>
                  <MenuItem value={4}>스키점프 </MenuItem>
                  <MenuItem value={5}>스켈레톤</MenuItem>
                  <MenuItem value={6}>쇼트트랙 스피드 스케이팅</MenuItem>
                  <MenuItem value={7}>아이스하키</MenuItem>
                  <MenuItem value={8}>컬링</MenuItem>
                  <MenuItem value={9}>피겨 스케이팅</MenuItem>
                  <MenuItem value={10}>프리스타일 스키</MenuItem>
                </Select>
              </FormControl>
              <div style={{ display: "flex", marginTop: "20px" }}>
                <GetThumbnail setImg={setImg} video={file} />
              </div>
            </div>

            <BsArrowBarUp
              style={{
                marginTop: "80px",
                float: "right",
                width: "90px",
                height: "40px",
                display: "fixed",
              }}
              variant="primary"
              onClick={handleSubmitVideo}
            />
            <BsArrowLeft
              style={{
                marginTop: "80px",
                float: "right",
                width: "90px",
                height: "40px",
              }}
              variant="primary"
              onClick={previousPage}
            />
          </Box>
        </Modal>
      );
    }
  }
}

export default AddVideo;
