import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./dashboard";
import Login from "./login";

const AllPages = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
        <Route exact path="/" element={<Dashboard/>}/>
        <Route exact path="/dashoard" element={<Dashboard/>}/>
        <Route exact path="/login" element={<Login/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default AllPages;
