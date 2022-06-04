import { Accordion, AccordionSummary } from '@mui/material';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import "./style.scss"
const BirinchiIkkinchi2 = () => {
  const Oqituvchi = [
    {
      id:1,
      materialName: "o'tkan kunlar 1-qism",
      author: "Abdulla Qodiriy",
      file: "mp3",
      photo: "/image/utkan kunlar.jpg",
      file_name: "/kitoblar/01_otkan_kunlar.mp3",
      roll: ['student'],
      categories: ['student']
    },
    {
      id:2,
      materialName: "O'tkan kunlar 2-qism",
      author: "Abdulla Qodiriy",
      file: "mp3",
      photo: "/image/utkan kunlar.jpg",
      file_name: "/kitoblar/02_otkan_kunlar.mp3",
      roll: ['student'],
      categories: ['student']
    },
    {
      id:3,
      materialName: "O'tkan kunlar 4-qism",
      author: "Abdulla Qodiriy",
      file: "mp3",
      photo: "/image/utkan kunlar.jpg",
      file_name: "/kitoblar/04_otkan_kunlar.mp3",
      roll: ['student'],
      categories: ['student']
    },
    {
      id:4,
      materialName: "60 yoshda san'atning nurli yo'li",
      author: "Farg'ona kolleki",
      file: "mp3",
      photo: "/image/nurli_yul.jpg",
      file_name: "../kitoblar/60_yoshda_sanatning_nurli_yoli.pdf",
      roll: ['student'],
      categories: ['student']
    },
    {
      id:5,
      materialName: "Abay she'rlar va poemalari",
      author: "Abay",
      file: "pdf",
      photo: "../image/abay.jpg",
      file_name: "../kitoblar/abay_sherlar_va_poemalar.pdf",
      roll: ['student'],
      categories: ['student']
    },
    {
      id:6,
      materialName: "Tong",
      author: "Zulfiya",
      file: "mp3",
      photo: "../image/",
      file_name: "../kitoblar/zulfiya_tong.mp3",
      roll: ['student'],
      categories: ['student']
    },
    {
      id:7,
      materialName: "Sharait",
      author: "Shareit",
      file: "app",
      photo: "",
      file_name: "https://play.google.com/store/apps/details?id=com.lenovo.anyshare.gps&hl=ru&gl=US",
      roll: ['student'],
      categories: ['student']
    },
  ]
  const [arxivSoni,setArxivSoni]=useState(0)
  const soniMatirial=()=>{
    setArxivSoni(arxivSoni+1)
    console.log(arxivSoni);
    JSON.stringify(localStorage.setItem("Oqituvchi", arxivSoni))
  }
  console.log(arxivSoni);
  const [sardor, setSardor] = useState(Oqituvchi)
  return (
    <div>
      {arxivSoni}
      {
        sardor.map((item)=>{
          return <div className='kitob'>
          <Accordion className='Accordion'>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              style={{ color: "black" }}
            >
              <Typography style={{display:"flex", justifyContent:"space-between"}}>{item.id} -- {item.materialName} <Link onClick={soniMatirial} to={item.file_name} style={{marginLeft:"600px",padding:'0',backgroundColor:"aqua",padding:"5px",textDecoration:'none'}} target="_blank" >Ko'rish</Link>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography style={{display:"flex"}}>
                 <h5 style={{color:"red"}}>Muallifi</h5>:  {item.author}
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Link onClick={soniMatirial} to={item.file_name} className='havola' target="_blank" download>Ko'chirish</Link>
    
        </div>
        })
      }
    </div>
  );
}

export default BirinchiIkkinchi2;
