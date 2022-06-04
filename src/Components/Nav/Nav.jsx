import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Profile from "../../Assets/Img/Profile.png"
import Logout from "../../Assets/Img/Logout.png"
import "./Nav.scss"
import Header from '../Header/Header';
import LogOut from '../../Pages/LogOut/LogOut';
import useToken from '../../Hook/UseToken';
import BirinchiIkkinchi from '../../Pages/Birinchi_ikkinchi/Birinchi_ikkinchi';
import StudentApp from "../../Pages/Student/StudentApp"
import Arxiv from '../../Pages/StudentArxiv/Arxiv';
import Desktop from '../../Pages/Desktop/Desktop';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const Nav = ({ obj}) => {
  const { Ismi, roli,tel, Familya } = obj
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [,setToken]=useToken()
  return (
    <div className='render'>
      <nav className='navbar'>
      <Link className='logo' to="/Desktop">TATU MA’LUMOTLAR MARKAZI</Link>
      <div className='admin'>
        <h5 style={{margin:"auto 5px"}}>{Ismi} {Familya}</h5>
        <img src={Profile} alt="" />
      </div>
      <Link onClick={handleOpen} className='Logout' to="#">
        <h5 style={{margin:"auto 10px"}}>Tizimdan chiqish</h5>
        <img src={Logout} alt="" />
      </Link>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Tizimdan haqiqatdan ham chiqib ketmoqchimisz?
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          <Link to="/"  style={{padding:"13px" ,backgroundColor:"red",color:"whitesmoke",fontFamily:"sans-serif",border:"0",marginLeft:"50px",textDecoration:"none"}} onClick={()=>setToken(false)}>Xa</Link>
          <Link to="#"  onClick={handleClose} style={{padding:"13px" ,backgroundColor:"red",color:"whitesmoke",fontFamily:"sans-serif",border:"0",marginLeft:"50px",textDecoration:"none"}} >Yuq</Link>
          </Typography>
        </Box>
      </Modal>
    </nav >
    <Routes>
      <Route path='/' element={<Header key={obj.tel} obj={obj.roli} />}/>
      <Route path='/LogOut' element={<LogOut/>}/>
      <Route path='/BirinchiIkkinchi' element={<BirinchiIkkinchi/>}/>
      <Route path='/StudentApp' element={<StudentApp/>}/>
      <Route path='/Arxiv' element={<Arxiv/>}/>
      <Route path='/Desktop' element={<Desktop/>}/>
      <Route path='/Nav' element={<Nav/>}/>
    </Routes>
    </div>
    
  );
}

export default Nav;
