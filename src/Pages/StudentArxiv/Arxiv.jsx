import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./Arxiv.scss"

const Arxiv = () => {
  const arxiv = [
    {
      id: 1,
      materialName: "Yuz Mumtoz Faylasuf  w",
      author: "Saida Jo'rayeva",
      file: "pdf",
      photo: "https://kitobxon.com/img_knigi/4205.jpg",
      file_name: "/BaliqchilikAsoslari.pdf",
      roll: ['student'],
      categories: ['student']
    },

    {
      id: 2,
      materialName: "Abay she'rlar va poemalari",
      author: "Abay",
      file: "pdf",
      photo: "../image/abay.jpg",
      file_name: "/abay_sherlar_va_poemalar.pdf",
      roll: ['student'],
      categories: ['student']
    },

    {
      id: 3,
      materialName: "Yillar Sadosi",
      author: "Zulfiya",
      file: "pdf",
      photo: "../image/",
      file_name: "/zulfiya_yillar_sadosi.pdf",
      roll: ['student'],
      categories: ['student']
    },


    {
      id: 4,
      materialName: "Suq",
      author: "Zufiya",
      file: "pdf",
      photo: "../image/",
      file_name: "/zulfiya_suq.mp3",
      roll: ['student'],
      categories: ['student']
    }
  ]
  const [arxivSoni, setArxivSoni] = useState(0)
  const soniArxiv = () => {
    setArxivSoni(arxivSoni + 1)
    console.log(arxivSoni);
    JSON.stringify(localStorage.setItem("arxivEl", arxivSoni))
  }
  console.log(arxiv);
  const [pdf, setPdf] = useState(arxiv)
  return (
    <div>
      {/* {arxivSoni} */}
      {
        pdf.map((item) => {
          return <div className='kitob'>
            <Accordion className='Accordion'>
              <AccordionSummary
                // expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                style={{ color: "black" }}
              >
                <Typography>
                  <div className='block'>
                    <div>
                      {item.id} -- {item.materialName}
                    </div>
                    {item.file}
                    <Link  to={item.file_name} className='korish' target="_blank">Ko'rish</Link>
                  </div>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography style={{display:"flex",alignItems:"center"}}>
                 <h4 style={{color:"red"}}>Muallifi:</h4>  <h5>{ item?.author}</h5>
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Link onClick={soniArxiv} to={item.file_name} className='havola' target="_blank" download>Ko'chirish</Link>

          </div>
        })
      }
    </div>
  );
}

export default Arxiv;
