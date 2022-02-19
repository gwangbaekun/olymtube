import axios from "axios";

const tokenCheck = document.cookie;
const token = tokenCheck.split("=")[1];
const api = axios.create({
  // 실제 베이스 유알엘
  baseURL: "http://binscot.shop",
  // baseURL: "http://3.36.71.110",
  // baseURL: "http://52.78.96.234:8080",
  headers: {
    "content-type": "application/json;charset=UTF-8",
    accept: "application/json",
    // accept: "application/json,",
    token: token,
  },
});

api.interceptors.request.use(function (config) {
  const accessToken = document.cookie.split("=")[1];
  config.headers.common["authorization"] = `${accessToken}`;
  return config;
});

export const apis = {
  login: (username, password) =>
    api.post("/login", { 
      username: username, 
      password: password, 
    }),

  signup: (username, password, nickname, user_profile) =>
    api.post("/signup", {
      username: username,
      password: password,
      nickname: nickname,
      user_profile: user_profile,
    }),

  userInfo: (token) =>
    api.post(`/user`, {
      authorization: token,
    }),

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
