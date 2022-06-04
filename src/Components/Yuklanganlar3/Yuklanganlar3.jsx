import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import "./Yuklangan.scss"
const Yuklangan3 = () => {
  const [prag,setPrag]=useState(JSON.parse(window.localStorage.getItem("BoshqaApp"))|| false);
  const [arxivOqtuvchi,setarxivOqtuvchi]=useState(JSON.parse(window.localStorage.getItem("arxivBoshqa"))|| false)
  const [Oqituvchi,setOqituvchi]=useState(JSON.parse(window.localStorage.getItem("boshqashaxs"))|| false)
  return (
    <div className='oke'>

      <div className='dovinlod'>
        <Accordion className='malumot'>
          <AccordionSummary
            // expandIcon
            aria-controls="panel1a-content"
            id="panel1a-header"
            style={{ color: "black" }}
          >
            <Typography style={{ color: "red" }}>
              <h2>Yuklab olgan materiallar ({Oqituvchi}):</h2>
              {/* {item.id} -- {item.materialName} */}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
            ({Oqituvchi}) ta yuklab olgan dasturizni download fayilzda ko'rishingiz mumkin!
            </Typography>
          </AccordionDetails>
        </Accordion>
        {/* <Link to="#"></Link> */}
      </div>
      <div className='dovinlod'>
        <Accordion className='malumot'>
          <AccordionSummary
            // expandIcon
            aria-controls="panel1a-content"
            id="panel1a-header"
            style={{ color: "black" }}
          >
            <Typography style={{ color: "red" }}>
            <h2>Men yuklab olgan raqamli arxiv ({arxivOqtuvchi})</h2>
              {/* {item.id} -- {item.materialName} */}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
            ({arxivOqtuvchi}) ta yuklab olgan dasturizni download fayilzda ko'rishingiz mumkin!
              {/* {item.categories} */}
            </Typography>
          </AccordionDetails>
        </Accordion>
        {/* <Link to="#"></Link> */}
      </div>
      <div className='dovinlod'>
        <Accordion className='malumot'>
          <AccordionSummary
            // expandIcon
            aria-controls="panel1a-content"
            id="panel1a-header"
            style={{ color: "black" }}
          >
            <Typography style={{ color: "red" }}>
            <h2>Men yuklab olgan dasturlar ({prag}) </h2>
              {/* {item.id} -- {item.materialName} */}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
            ({prag}) ta yuklab olgan dasturizni download fayilzda ko'rishingiz mumkin!
              {/* {item.categories} */}
            </Typography>
          </AccordionDetails>
        </Accordion>
        {/* <Link to="#"></Link> */}
      </div>
    </div>
  );
}

export default Yuklangan3;
