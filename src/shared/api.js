import axios from "axios";

const tokenCheck = document.cookie;
const token = tokenCheck.split("=")[1];
const api = axios.create({
  baseURL: "http://3.34.52.24",

  headers: {
    // "content-type": "application/json;charset=UTF-8",
    // accept: "application/json",
    token: token,
  },
});
const apiForm = axios.create({
  baseURL: "http://3.34.52.24",
  headers: {
    "content-type": "multipart/form-data",
  },
});

api.interceptors.request.use(function (config) {
  const accessToken = document.cookie.split("=")[1];
  config.headers.common["X-AUTH-TOKEN"] = `${accessToken}`;
  return config;
});

export const apis = {
  login: (user_data) => api.post("/login", user_data),
  signup: (frm) => api.post("/signup", frm),

  userInfo: (token) => api.post("/user", { "X-AUTH-TOKEN": token }),
  // 여기좀 user모듈 99번째 리스트에서 빼야함 한단걔.

  check: (username) => api.post(`/check`, { username: username }),

  upload: (img, title, category, video) =>
    api.post("/upload", {
      img: img,
      title: title,
      category: category,
      video: video,
      // ToDo : 비디오 어떻게 보낼지 고민중
    }),

  get: () => api.get("/video"),
  // getVideo: () => api.get(`video/${video_id}`),
  // subscribe: () => api.post(`/subscribe/${video_id}`),
  // subscribes: () => api.get("/subscribes"),
  // myVideo: () => api.get(`/myvideo/${user_id}`),
  // delete: () => api.delete(`/video/${video_id}`),
};

export const apiForms = {
  signup: (frm) => apiForm.post("/signup", frm),
};
