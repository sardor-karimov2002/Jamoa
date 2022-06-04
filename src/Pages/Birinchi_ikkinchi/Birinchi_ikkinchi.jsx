import { Accordion, AccordionSummary } from '@mui/material';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./style.scss"
const BirinchiIkkinchi = () => {
  const uquvchi = [
    {
      id:1,
      materialName: "Yuz Mumtoz Faylasuf",
      author: "Saida Jo'rayeva",
      file: "pdf",
      photo: "https://kitobxon.com/img_knigi/4205.jpg",
      file_name: "/yuriy_trifonov.pdf",
      roll: ['student'],
      categories: ['student']
    },
    {
      id:2,
      materialName: "o'tkan kunlar 1-qism",
      author: "Abdulla Qodiriy",
      file: "mp3",
      photo: "/image/utkan kunlar.jpg",
      file_name: "/01_otkan_kunlar.mp3",
      roll: ['student'],
      categories: ['student']
    },
    {
      id:3,
      materialName: "O'tkan kunlar 2-qism",
      author: "Abdulla Qodiriy",
      file: "mp3",
      photo: "/image/utkan kunlar.jpg",
      file_name: "/02_otkan_kunlar.mp3",
      roll: ['student'],
      categories: ['student']
    },
    {
      id:4,
      materialName: "O'tkan kunlar 4-qism",
      author: "Abdulla Qodiriy",
      file: "mp3",
      photo: "/image/utkan kunlar.jpg",
      file_name: "/04_otkan_kunlar.mp3",
      roll: ['student'],
      categories: ['student']
    },
    {
      id:5,
      materialName: "60 yoshda san'atning nurli yo'li",
      author: "Farg'ona kolleki",
      file: "mp3",
      photo: "/image/nurli_yul.jpg",
      file_name: "60_yoshda_sanatning_nurli_yoli.pdf",
      roll: ['student'],
      categories: ['student']
    },
    {
      id:6,
      materialName: "Abay she'rlar va poemalari",
      author: "Abay",
      file: "pdf",
      photo: "../image/abay.jpg",
      file_name: "../abay_sherlar_va_poemalar.pdf",
      roll: ['student'],
      categories: ['student']
    },
    {
      id:7,
      materialName: "Yana Bahor hokim",
      author: "Zulfiya",
      file: "mp3",
      photo: "",
      file_name: "../zulfiya_yana_bahor_hokim.mp3",
      roll: ['student'],
      categories: ['student']
    },
    {
      id:8,
      materialName: "Yillar Sadosi",
      author: "Zulfiya",
      file: "pdf",
      photo: "../image/",
      file_name: "../zulfiya_yillar_sadosi.pdf",
      roll: ['student'],
      categories: ['student']
    },
    {
      id:9,
      materialName: "Torga Tashrif",
      author: "Zulfiya",
      file: "mp3",
      photo: "../image/",
      file_name: "../zulfiya_torga_tashrif.mp3",
      roll: ['student'],
      categories: ['student']
    },
    {
      id:10,
      materialName: "Tong",
      author: "Zulfiya",
      file: "mp3",
      photo: "../image/",
      file_name: "../zulfiya_tong.mp3",
      roll: ['student'],
      categories: ['student']
    },
    {
      id:11,
      materialName: "Suq",
      author: "Zufiya",
      file: "pdf",
      photo: "../image/",
      file_name: "../zulfiya_suq.mp3",
      roll: ['student'],
      categories: ['student']
    },
    {
      id:12,
      materialName: "Sharait",
      author: "Shareit",
      file: "app",
      photo: "",
      file_name: "https://play.google.com/store/apps/details?id=com.lenovo.anyshare.gps&hl=ru&gl=US",
      roll: ['student'],
      categories: ['student']
    },

    {
      id:13,
      materialName: "Referat",
      author: "3-kurs talabasi",
      file: "docx",
      photo: "",
      file_name: "/Новый документ (5).docx",
      roll: ['student'],
      categories: ['student']
    },
  ]
  const [arxivSoni,setArxivSoni]=useState(0)
  const soniMatirial=()=>{
    setArxivSoni(arxivSoni+1)
    console.log(arxivSoni);
    JSON.stringify(localStorage.setItem("matiral", arxivSoni))
  }
  console.log(arxivSoni);
  const [sardor, setSardor] = useState(uquvchi)
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

export default BirinchiIkkinchi;
