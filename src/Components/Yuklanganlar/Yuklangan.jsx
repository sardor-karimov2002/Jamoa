import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./Yuklangan.scss"
const Yuklangan = () => {
  const [ok,setOk]=useState(JSON.parse(window.localStorage.getItem("soni"))|| false);
  const [arxiv,setArxiv]=useState(JSON.parse(window.localStorage.getItem("arxivEl"))|| false)
  const [matiral,setmatiral]=useState(JSON.parse(window.localStorage.getItem("matiral"))|| false)
  return (
    <div className='oke'>

      <div className='dovinlod'>
        <Accordion className='malumot'>
          <AccordionSummary className='Typography'
            // expandIcon
            aria-controls="panel1a-content"
            id="panel1a-header"
            style={{ color: "black" }}
          >
            <Typography  style={{ color: "red" }}>
              <h2>Yuklab olgan materiallar ({matiral}):</h2>
              {/* {item.id} -- {item.materialName} */}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
            ({matiral}) ta yuklab olgan dasturizni download fayilzda ko'rishingiz mumkin!
              {/* {item.categories} */}
            </Typography>
          </AccordionDetails>
        </Accordion>
        {/* <Link to="#"></Link> */}
      </div>
      <div className='dovinlod'>
        <Accordion className='malumot'>
          <AccordionSummary className='Typography'
            // expandIcon
            aria-controls="panel1a-content"
            id="panel1a-header"
            style={{ color: "black" }}
          >
            <Typography  style={{ color: "red" }}>
            <h2>Men yuklab olgan raqamli arxiv ({arxiv})</h2>
              {/* {item.id} -- {item.materialName} */}
            </Typography>
          </AccordionSummary>
          <AccordionDetails className='Typography'>
            <Typography >
            ({arxiv}) ta yuklab olgan dasturizni download fayilzda ko'rishingiz mumkin!
              {/* {item.categories} */}
            </Typography>
          </AccordionDetails>
        </Accordion>
        {/* <Link to="#"></Link> */}
      </div>
      <div className='dovinlod'>
        <Accordion className='malumot'>
          <AccordionSummary className='Typography'
            // expandIcon
            aria-controls="panel1a-content"
            id="panel1a-header"
            style={{ color: "black" }}
          >
            <Typography  style={{ color: "red" }}>
            <h2>Men yuklab olgan dasturlar ({ok}) </h2>
              {/* {item.id} -- {item.materialName} */}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
            ({ok}) ta yuklab olgan dasturizni download fayilzda ko'rishingiz mumkin!
              {/* {item.categories} */}
            </Typography>
          </AccordionDetails>
        </Accordion>
        {/* <Link to="#"></Link> */}
      </div>
    </div>
  );
}

export default Yuklangan;
