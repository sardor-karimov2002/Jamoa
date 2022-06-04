import React from "react";
import { Context } from "../Context/TokenContext";

const useToken=()=>{
  const ctx=React.useContext(Context)
  // console.log(ctx.state.username);
  return [ctx.state, ctx.setState]
}
export default useToken;