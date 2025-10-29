import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import Home from "./components/Home";

// Should return JSX, not use ReactDOM.render
const DashboardApp = () => {
  return (
    // <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Home />} />
      </Routes>
    // </BrowserRouter>
  );
};

export default DashboardApp;