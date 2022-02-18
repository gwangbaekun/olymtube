import "../App.css";
import Header from "./header/Header";
import SideBar from "./sidebar/Sidebar";
import styled from "styled-components";
import { Route, Router, Routes } from "react-router-dom";

import MainPage from "../pages/mainpage/MainPage";
import Login from "../pages/Login";
import Signup from "../pages/Signup";

function App() {
  return (
    <div className="App">
      <Header />
        <Routes><Route path="/" element={<MainPage />}/></Routes>
        <Routes><Route path="/login" element={<Login />}/></Routes>
        <Routes><Route path="/signup" element={<Signup />}/></Routes>
      <SideBar />
    </div>
  );
}

export default App;
