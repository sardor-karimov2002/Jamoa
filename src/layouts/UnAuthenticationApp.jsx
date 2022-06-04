import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../Pages/Login/Login";
import LoginEski from "../Pages/LoginEski/LoginEski";
import LogOut from "../Pages/LogOut/LogOut";

const UnAuthenticationApp = () => {
  return (<div>
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/LoginEski" element={<LoginEski/>}/>
    </Routes>
  </div>)
}
export default UnAuthenticationApp;