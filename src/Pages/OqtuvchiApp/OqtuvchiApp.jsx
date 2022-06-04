import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import unnamed from "../../Assets/Img/unnamed.png"
import Yuklangan from '../../Components/Yuklanganlar/Yuklangan';
// import "./Student.scss"

const OqtuvchiApp = () => {
  const app = [
    {
      id: 1,
      materialName: "Sharait",
      author: "Shareit",
      file: "app",
      photo: "",
      file_name: "https://play.google.com/store/apps/details?id=com.lenovo.anyshare.gps&hl=ru&gl=US",
      roll: ['student'],
      categories: ['student']
    },

  ]
  const [dastur, setDastur] = useState(app)
  const [soni,setSoni]=useState(JSON.parse(window.localStorage.getItem("OqtuvchiApp"))|| false)
  const soniHendil=()=>{
    setSoni(soni+1)
    console.log(soni);
    JSON.stringify(localStorage.setItem("OqtuvchiApp", soni))
  }
  console.log(soni);
  return (
    <div >
      {soni}
      {
        dastur.map((item) => {
          return <div className='kitob'>
            <Accordion className='Accordion'>
              <AccordionSummary
                // expandIcon={<ExpandMoreIcon />}/ 
                aria-controls="panel1a-content"
                id="panel1a-header"
                style={{ color: "black" }}
              >
                <Typography className='app' id="app" >{item.id} -- {item.materialName}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  {item.author}
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Link onClick={soniHendil} to={item.file_name} className='havola' target="_blank" download>Ko'chirish</Link>
          </div>
        })
      }
    </div>
  );
 
}
export default OqtuvchiApp;
