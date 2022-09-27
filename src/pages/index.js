import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./dashboard";
import Login from "./login";

const AllPages = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route exact path="/" element={<Dashboard/>}/>
        <Route exact path="/dashoard" element={<Dashboard/>}/>
        <Route exact path="/login" element={<Login/>}/>
        <Route exact path="/details/:id" element={<Login/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default AllPages;
