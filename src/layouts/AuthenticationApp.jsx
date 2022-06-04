import React, { useState } from "react";
import {Routes,Route} from "react-router-dom";
import Nav from "../Components/Nav/Nav";
import Nav1 from "../Components/Nav1/Nav1";
import Nav2 from "../Components/Nav2/Nav2";
import useToken from "../Hook/UseToken";

import "./AuthenticationApp.scss"
function AuthenticationApp() {
  const [state, setToken] = useToken() 
  console.log(state);
  return (
    <div className="App">
      {
        state.roli==="O’quvchi" &&<Nav obj={state}/>
      }
      {
         state.roli==="O’qituvchi" && <Nav1 obj={state}/>
      }
      {
         state.roli==="BoshqaShaxslar" && <Nav2 obj={state}/> 
      }
    </div>
  );
}
export default AuthenticationApp ;
