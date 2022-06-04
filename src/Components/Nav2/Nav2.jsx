import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Profile from "../../Assets/Img/Profile.png"
import Logout from "../../Assets/Img/Logout.png"
import LogOut from '../../Pages/LogOut/LogOut';
import Desktop from '../../Pages/Desktop/Desktop';
import BirinchiIkkinchi3 from '../../Pages/Birinchi_ikkinchi3/Birinchi_ikkinchi3';
import Header3 from '../Header3/Header3';
import Arxiv3 from '../../Pages/BoshqaArxiv/BoshqaArxiv';
import BoshqaApp from '../../Pages/BoshqaApp/BoshqaApp';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import useToken from '../../Hook/UseToken';
const Nav2 = ({ obj}) => {
  const { Ismi, roli, Familya } = obj
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
        <h3>{Ismi} {Familya}</h3>
        <img src={Profile} alt="" />
      </div>
      {/* <Link className='Logout' to="/LogOut">
        <h3>Tizimdan chiqish</h3>
        <img src={Logout} alt="" />
      </Link> */}
      <Link onClick={handleOpen} className='Logout' to="#">
        <h3 style={{margin:"auto 10px"}}>Tizimdan chiqish</h3>
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
      <Route path='/' element={<Header3 obj={obj.roli} />}/>
      <Route path='/BirinchiIkkinchi3' element={<BirinchiIkkinchi3/>}/>
      <Route path='/Arxiv3' element={<Arxiv3/>}/>
      <Route path='/BoshqaApp' element={<BoshqaApp/>}/>
      <Route path='/Desktop' element={<Desktop/>}/>
      <Route path='/LogOut' element={<LogOut/>}/>
    </Routes>
    </div>
    
  );
}

export default Nav2;
