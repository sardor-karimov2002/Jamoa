import React, { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
const Statika = () => {
  //talaba
  const [soniw,setSoniw]=useState(JSON.parse(window.localStorage.getItem("soni"))|| false)
  const [arxiv,setArxiv]=useState(JSON.parse(window.localStorage.getItem("arxivEl"))|| false)
  const [ok,setOk]=useState(JSON.parse(window.localStorage.getItem("matiral"))|| false);
  
  //oqtuvchi
  const [Oqituvchi,setOqituvchi]=useState(JSON.parse(window.localStorage.getItem("Oqituvchi"))|| false);
  const [OqtuvchiApp,sas]=useState(JSON.parse(window.localStorage.getItem("OqtuvchiApp"))|| false);
  const [arxivOqtuvchi,sasds]=useState(JSON.parse(window.localStorage.getItem("arxivOqtuvchi"))|| false);
  //boshqa shaxs
  const [boshqashaxs,setboshqashaxs]=useState(JSON.parse(window.localStorage.getItem("boshqashaxs"))|| false);
  const [BoshqaApp,sasdssdd]=useState(JSON.parse(window.localStorage.getItem("BoshqaApp"))|| false);
  const [arxivBoshqa,sasddsss]=useState(JSON.parse(window.localStorage.getItem("arxivBoshqa"))|| false);
  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  const rows = [
    createData("O'quvchilar yuklab olgan", soniw, arxiv, ok, ( (100*(soniw+arxiv+ok)/31).toFixed(2) ) ),
    createData("O'qtuvchilar yuklab olgan", OqtuvchiApp, arxivOqtuvchi, Oqituvchi, ( (100*(OqtuvchiApp+arxivOqtuvchi+Oqituvchi)/31).toFixed(2) ) ),
    createData('Boshqa shaxslar yuklab olgan', BoshqaApp, arxivBoshqa, boshqashaxs, ( (100*(BoshqaApp+arxivBoshqa+boshqashaxs)/31).toFixed(2) ) ),
    createData('Jami yuklab olingan', (soniw+OqtuvchiApp+BoshqaApp), (arxiv+arxivOqtuvchi+arxivBoshqa), (ok+Oqituvchi+boshqashaxs),  ( (100*((soniw+OqtuvchiApp+BoshqaApp)+(arxiv+arxivOqtuvchi+arxivBoshqa)+(ok+Oqituvchi+boshqashaxs))/31).toFixed(2) ) ),
    // createData('Gingerbread', 356, 16.0, 49, 3.9),
  ];
  return (
    <div>
      
      <TableContainer style={{marginTop:"30px"}} component={Paper}>
      <Table sx={{ minWidth: 1080 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow style={{backgroundColor:"aqua",}}>
            <TableCell style={{color:"black", fontFamily:"sans-serif",fontWeight:"600",fontSize:"17px"}}>Foydalanuvchilar</TableCell>
            <TableCell style={{color:"black", fontFamily:"sans-serif",fontWeight:"600",fontSize:"17px"}} align="right">Dasturlar(n)</TableCell>
            <TableCell style={{color:"black", fontFamily:"sans-serif",fontWeight:"600",fontSize:"17px"}} align="right">Raqamli arxivli(n)</TableCell> 
            <TableCell style={{color:"black", fontFamily:"sans-serif",fontWeight:"600",fontSize:"17px"}} align="right">1-2-3-4 kurs matiriallari(n)</TableCell>
            <TableCell style={{color:"black", fontFamily:"sans-serif",fontWeight:"600",fontSize:"17px"}} align="right">(Jami / Foydalanish)%</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell style={{color:"red",fontWeight:"400",fontSize:"17px"}} component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell style={{ fontFamily:"sans-serif",fontWeight:"400",fontSize:"17px"}} align="right">{row.calories}</TableCell>
              <TableCell style={{ fontFamily:"sans-serif",fontWeight:"400",fontSize:"17px"}} align="right">{row.fat}</TableCell>
              <TableCell style={{ fontFamily:"sans-serif",fontWeight:"400",fontSize:"17px"}} align="right">{row.carbs}</TableCell>
              <TableCell style={{ fontFamily:"sans-serif",fontWeight:"400",fontSize:"17px"}} align="right">{row.protein}%</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}

export default Statika;
