import React from 'react';
import { Link } from 'react-router-dom';
import useToken from '../../Hook/UseToken';

const LogOut = () => {
  const [,setToken]=useToken()
  return (
    <div className='home' style={{
      display:"flex" ,justifyContent:"center", margin:"40px auto"
    }}>
      <h2>Xaqiqatdan ham chiqib ketmoqchimisz</h2>
      <Link to="/"  style={{padding:"13px" ,backgroundColor:"red",color:"whitesmoke",fontFamily:"sans-serif",border:"0",marginLeft:"50px"}} onClick={()=>setToken(false)}>Xa</Link>
    </div>
  );
}

export default LogOut;
