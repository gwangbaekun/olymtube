import "./App.css";
import Header from "./header/Header";
import SideBar from "./sidebar/Sidebar";
import { Route, Router, Routes } from "react-router-dom";
import MainPage from "../pages/mainpage/MainPage";
import Detail from "../pages/detailPage/Detail";
import SubscribePage from "../pages/subPage/SubscribePage";

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
          path="video/*"
          element={
            <div className="app__mainpage">
              <SideBar />
              <Detail />
            </div>
          }
        />
        <Route
          path="sub/*"
          element={
            <div className="app__mainpage">
              <SideBar />
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
      </Routes>
    </div>
  );
}

export default App;