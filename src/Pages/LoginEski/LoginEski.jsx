import React from 'react';
import useToken from '../../Hook/UseToken';
import img1 from "../../Assets/Img/eskiLogin.png"
import "./LoginEski.scss"
import { Link } from 'react-router-dom';
const LoginEski = () => {
  // const [,setToken]=useToken()
  const handleSubmit=(evt)=>{
    evt.preventDefault();
  //   console.log(evt.target.elements.username.value);

  //   if(evt.target.elements.username.value && evt.target.elements.password.value){
  //     setToken({
  //       username:evt.target.elements.username.value,
  //       password:evt.target.elements.password.value
  //     })
  //   }
  }
  return (
    <div className='login'>
      <form className='login__form'
      onSubmit={handleSubmit}
      >
        <div>
          <input className='input' type="tel" name="username" placeholder='Tel raqam' />
        </div>
        <div>
          <input className='input' type="password" name="password" placeholder='Paroll' />
        </div>
        <button className='button' type='submit'>Kirish</button>
      </form>
      <div className='block'>
        <Link className='link' to="#">Tizimga kirish</Link>
        <img src={img1} alt="" />
      </div>
    </div>
  );
}

export default LoginEski;
