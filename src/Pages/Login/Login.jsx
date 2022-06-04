import React, { useState } from 'react';
import useToken from '../../Hook/UseToken';
import login__img from "../../Assets/Img/login__img.png"
import "./Login.scss"
import { Link } from 'react-router-dom';
const Login = () => {
  const [, setToken] = useToken()
  const [select, setselect] = useState('Choose a role')
  let error=document.querySelector(".error")
  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (evt.target.elements.username.value && evt.target.elements.password.value===evt.target.elements.password1.value && evt.target.select.value) {
      error.textContent=" "
      setToken({
        Ismi: evt.target.elements.username.value,
        Familya: evt.target.elements.lastname.value,
        tel: evt.target.elements.phone.value,
        password: evt.target.elements.password.value,
        roli: evt.target.select.value,
      })
    }else{
      error.textContent="Birxillik parol bajarilmadi"
    }
  };
  return (
    <div className='login'>
      <form className='login__form from-control' onSubmit={handleSubmit}>
        <input className='input' type="text" name="username" placeholder='Ism' />
        <input className='input' type="text" name="lastname" placeholder='Familiya' />
        <input className='input' type="tel" name="phone" placeholder='Tel raqam' />
        <select className='input' name="select" value={select} onChange={evt => setselect(evt.target.value)}>
          <option  >Rolni tanlang</option>
          <option value="O’quvchi">O’quvchi</option>
          <option value="O’qituvchi">O’qituvchi</option>
          <option value="BoshqaShaxslar">Boshqa Shaxslar</option>
        </select>
        <input className='input' type="password" name="password" placeholder='Parol' />
        <input className='input' type="password" name="password1" placeholder='Parolni tasdiqlang' />
        <div  className='error'></div>
        <div className='response'>
          <button className='button btn btn-button' type='submit'>Ro’yxatdan o’tish</button>
        </div>
      </form>
      <div className='login__left'>
      <Link to="/LoginEski">Tizimga kirish</Link>
        <img src={login__img} alt="" />
      </div>
    </div>
  );
}

export default Login;
