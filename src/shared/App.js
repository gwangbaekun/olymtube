import React from "react";
import "./App.css";
import Header from "./header/Header";
import SideBar from "./sidebar/Sidebar";
import { Route, Router, Routes } from "react-router-dom";
import MainPage from "../pages/mainpage/MainPage";
import Detail from "../pages/detailPage/Detail";
import {useDispatch, useSelector} from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";
import { getCookie, setCookie, deleteCookie } from "../shared/cookie";

import SubscribePage from "../pages/subPage/SubscribePage";
import Login from "../pages/Login";
import Signup from "../pages/Signup";


function App() {
  
  const dispatch = useDispatch()
  // const is_login= useSelector((state)=>state.user.is_login)


  React.useEffect(() => {    
    const is_cookie = getCookie("is_login");
    if( is_cookie ){
        console.log('로그인체크로가자')
        dispatch(userActions.loginCheckDB());
    }
},[]);


  return (
    <div className="App">
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <div className="app__mainpage">
              <SideBar />
              <MainPage />
            </div>
          }
        />
        <Route
          path="video"
          element={
            <div className="app__mainpage">
              <SideBar />
              <Detail />
            </div>
          }
        />

        <Route
          path="sub"
          element={
            <div className="app__mainpage">
              <SideBar />
              <SubscribePage />
            </div>
          }
        >
          <Route
            path=":id"
            element={
              <div className="app__mainpage">
                <SideBar />
                <SubscribePage />
              </div>
            }
          />
        </Route>
        <Route
          path="/login"
          element={
            <div className="app__mainpage">
              <SideBar />
              <Login />
            </div>
          }
        />
        <Route
          path="/signup"
          element={
            <div className="app__mainpage">
              <SideBar />
              <Signup />
            </div>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
