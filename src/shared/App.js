import React from "react";
import "./App.css";
import Header from "./header/Header";
import SideBar from "./sidebar/Sidebar";
import { Route, Router, Routes, useNavigate } from "react-router-dom";
import MainPage from "../pages/mainpage/MainPage";
import Detail from "../pages/detailPage/Detail";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";
import { getCookie, setCookie, deleteCookie } from "../shared/cookie";
import SubscribePage from "../pages/subPage/SubscribePage";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import { ConnectedRouter } from "connected-react-router";
import { history } from "../redux/store";

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const is_login= useSelector((state)=>state.user.is_login)

  React.useEffect(() => {
    const Auth = getCookie("is_login");
    if (Auth) {
      dispatch(userActions.loginCheckDB(Auth));
    }
  }, []);

  return (
    // <ConnectedRouter history={history}>
    <div className="App">
      <Header />
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route
          path="/*"
          element={
            <div className="app__mainpage">
              <SideBar />
              <MainPage />
            </div>
          }
        >
          <Route path=":id" element={<></>} />
        </Route>
        <Route
          path="video"
          element={
            <div className="app__mainpage">
              <Detail />
            </div>
          }
        >
          <Route
            path=":id"
            element={
              <div className="app__mainpage">
                <Detail />
              </div>
            }
          />
        </Route>
        <Route
          path="sub"
          element={
            <div className="app__mainpage">
              <SideBar />
              <SubscribePage />
            </div>
          }
        >
          {/* <Route
            path=":id"
            element={
              <div className="app__mainpage">
                <SubscribePage />
              </div>
            }
          /> */}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
