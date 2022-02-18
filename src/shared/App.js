import "./App.css";
import Header from "./header/Header";
import SideBar from "./sidebar/Sidebar";
import { Route, Router, Routes } from "react-router-dom";
import MainPage from "../pages/mainpage/MainPage";

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
      </Routes>
    </div>
  );
}

export default App;
