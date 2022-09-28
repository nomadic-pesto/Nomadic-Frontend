<<<<<<< HEAD
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Resetpassword from "../components/auth/resetPassword";
import Dashboard from "./dashboard";
import Login from "./login";
import Signup from "./signup"
import Forgotpassword from "./forgotpassword";


const AllPages = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route exact path="/" element={<Dashboard/>}/>
        <Route exact path="/dashoard" element={<Dashboard/>}/>
        <Route exact path="/login" element={<Login/>}/>
        <Route exact path="/details/:id" element={<Login/>}/>
        <Route exact path="/signup" element={<Signup/>}/>
        <Route exact path="/resetpassword" element={<Resetpassword/>}/>
        <Route exact path="/forgotPassword" element={<Forgotpassword/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default AllPages;
=======
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Resetpassword from "../components/auth/resetPassword";
import Dashboard from "./dashboard";
import Login from "./login";
import Signup from "./signup"
import Forgotpassword from "./forgotpassword";


const AllPages = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route exact path="/" element={<Dashboard/>}/>
        <Route exact path="/dashboard" element={<Dashboard/>}/>
        <Route exact path="/login" element={<Login/>}/>
        <Route exact path="/details/:id" element={<Login/>}/>
        <Route exact path="/signup" element={<Signup/>}/>
        <Route exact path="/resetpassword" element={<Resetpassword/>}/>
        <Route exact path="/forgotPassword" element={<Forgotpassword/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default AllPages;
>>>>>>> 176447a (login integration done)
