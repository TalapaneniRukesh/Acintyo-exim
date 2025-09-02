import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreen from "./components/homeScreen";
import Login from "./components/login/login";

const RoutesComponent = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomeScreen />} />
        <Route exact path="/home" element={<HomeScreen />} />
        <Route exact path="/login" element={<Login />} />
        <Route path="*" element={<HomeScreen />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesComponent;
