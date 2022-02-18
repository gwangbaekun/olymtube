import "./App.css";
import Header from "./header/Header";
import SideBar from "./sidebar/Sidebar";
import { Route, Router, Routes } from "react-router-dom";
import MainPage from "../pages/mainpage/MainPage";
import Detail from "../pages/detailPage/Detail";
import SubscribePage from "../pages/subPage/SubscribePage";
import Login from "../pages/Login";
import Signup from "../pages/Signup";

function App() {
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
