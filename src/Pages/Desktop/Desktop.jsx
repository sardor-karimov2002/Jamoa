import React, { useState } from 'react';
import image4 from "../../Assets/Img/image4.png"
import image5 from "../../Assets/Img/image5.png"
import image3 from "../../Assets/Img/image3.png"
import { Link, Route, Routes } from 'react-router-dom';
import { DataGrid } from '@mui/x-data-grid';
import DenseTable from '../Statika/statika';
import Statika from '../Statika/statika';
import "./Desktop.scss"
const Desktop = () => {
  const jami = [
    {
      materialName: "Yuz Mumtoz Faylasuf",
      author: "Saida Jo'rayeva",
      file: "pdf",
      photo: "https://kitobxon.com/img_knigi/4205.jpg",
      file_name: "/kitoblar/100_mumtoz_faylasuf.pdf",
      file_name: "/kitoblar/100_mumtoz_faylasuf.pdf",
      roll: ['student'],
      categories: ['student']
    },
    {
      materialName: "o'tkan kunlar 1-qism",
      author: "Abdulla Qodiriy",
      file: "mp3",
      photo: "/image/utkan kunlar.jpg",
      file_name: "/kitoblar/01_otkan_kunlar.mp3",
      roll: ['student'],
      categories: ['student']
    },
    {
      materialName: "O'tkan kunlar 2-qism",
      author: "Abdulla Qodiriy",
      file: "mp3",
      photo: "/image/utkan kunlar.jpg",
      file_name: "/kitoblar/02_otkan_kunlar.mp3",
      roll: ['student'],
      categories: ['student']
    },
    {
      materialName: "O'tkan kunlar 4-qism",
      author: "Abdulla Qodiriy",
      file: "mp3",
      photo: "/image/utkan kunlar.jpg",
      file_name: "/kitoblar/04_otkan_kunlar.mp3",
      roll: ['student'],
      categories: ['student']
    },
    {
      materialName: "60 yoshda san'atning nurli yo'li",
      author: "Farg'ona kolleki",
      file: "mp3",
      photo: "/image/nurli_yul.jpg",
      file_name: "../kitoblar/60_yoshda_sanatning_nurli_yoli.pdf",
      roll: ['student'],
      categories: ['student']
    },
    {
      materialName: "Abay she'rlar va poemalari",
      author: "Abay",
      file: "pdf",
      photo: "../image/abay.jpg",
      file_name: "../kitoblar/abay_sherlar_va_poemalar.pdf",
      roll: ['student'],
      categories: ['student']
    },
    {
      materialName: "Yana Bahor hokim",
      author: "Zulfiya",
      file: "mp3",
      photo: "",
      file_name: "../kitoblar/zulfiya_yana_bahor_hokim.mp3",
      roll: ['student'],
      categories: ['student']
    },
    {
      materialName: "Yillar Sadosi",
      author: "Zulfiya",
      file: "pdf",
      photo: "../image/",
      file_name: "../kitoblar/zulfiya_yillar_sadosi.pdf",
      roll: ['student'],
      categories: ['student']
    },
    {
      materialName: "Torga Tashrif",
      author: "Zulfiya",
      file: "mp3",
      photo: "../image/",
      file_name: "../kitoblar/zulfiya_torga_tashrif.mp3",
      roll: ['student'],
      categories: ['student']
    },
    {
      materialName: "Tong",
      author: "Zulfiya",
      file: "mp3",
      photo: "../image/",
      file_name: "../kitoblar/zulfiya_tong.mp3",
      roll: ['student'],
      categories: ['student']
    },
    {
      materialName: "Suq",
      author: "Zufiya",
      file: "pdf",
      photo: "../image/",
      file_name: "../kitoblar/zulfiya_suq.mp3",
      roll: ['student'],
      categories: ['student']
    },
    {
      materialName: "Sharait",
      author: "Shareit",
      file: "app",
      photo: "",
      file_name: "https://play.google.com/store/apps/details?id=com.lenovo.anyshare.gps&hl=ru&gl=US",
      roll: ['student'],
      categories: ['student']
    },

    {
      materialName: "Referat",
      author: "3-kurs talabasi",
      file: "docx",
      photo: "",
      file_name: "/Новый документ (5).docx",
      roll: ['student'],
      categories: ['student']
    },
  ]
  const arxiv = [
    {
      id: 1,
      materialName: "Yuz Mumtoz Faylasuf",
      author: "Saida Jo'rayeva",
      file: "pdf",
      photo: "https://kitobxon.com/img_knigi/4205.jpg",
      file_name: "/kitoblar/100_mumtoz_faylasuf.pdf",
      file_name: "/kitoblar/100_mumtoz_faylasuf.pdf",
      roll: ['student'],
      categories: ['student']
    },

    {
      id: 2,
      materialName: "Abay she'rlar va poemalari",
      author: "Abay",
      file: "pdf",
      photo: "../image/abay.jpg",
      file_name: "../kitoblar/abay_sherlar_va_poemalar.pdf",
      roll: ['student'],
      categories: ['student']
    },

    {
      id: 3,
      materialName: "Yillar Sadosi",
      author: "Zulfiya",
      file: "pdf",
      photo: "../image/",
      file_name: "../kitoblar/zulfiya_yillar_sadosi.pdf",
      roll: ['student'],
      categories: ['student']
    },


    {
      id: 4,
      materialName: "Suq",
      author: "Zufiya",
      file: "pdf",
      photo: "../image/",
      file_name: "../kitoblar/zulfiya_suq.mp3",
      roll: ['student'],
      categories: ['student']
    },
    {
      id: 5,
      materialName: "Sohil siz dengiz",
      author: "Muhammad Yusuf",
      file: "pdf",
      photo: "../image/",
      file_name: "../kitoblar/zulfiya_suq.mp3",
      roll: ['student'],
      categories: ['student']
    },
    {
      id: 6,
      materialName: "Peshonamdagi nur",
      author: "",
      file: "pdf",
      photo: "../image/",
      file_name: "../kitoblar/zulfiya_suq.mp3",
      roll: ['student'],
      categories: ['student']
    },
    {
      id: 7,
      materialName: "Qaytishi yuq manzil",
      author: "",
      file: "pdf",
      photo: "../image/",
      file_name: "../kitoblar/zulfiya_suq.mp3",
      roll: ['student'],
      categories: ['student']
    },
    {
      id: 8,
      materialName: "Jahalot asirasi",
      author: "",
      file: "pdf",
      photo: "../image/",
      file_name: "../kitoblar/zulfiya_suq.mp3",
      roll: ['public'],
      categories: ['student']
    },
    {
      id: 9,
      materialName: "Furqon tavsiri",
      author: "",
      file: "pdf",
      photo: "../image/",
      file_name: "../kitoblar/zulfiya_suq.mp3",
      roll: ['public'],
      categories: ['student']
    },
    {
      id: 10,
      materialName: "Мулойимлик тўғрисида",
      author: "",
      file: "pdf",
      photo: "../image/",
      file_name: "../kitoblar/zulfiya_suq.mp3",
      roll: ['public'],
      categories: ['student']
    },
  ]
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
    {
      id: 2,
      materialName: "Hemis",
      author: "Hemis",
      file: "app",
      photo: "",
      file_name: "https://play.google.com/store/apps/details?id=com.lenovo.anyshare.gps&hl=ru&gl=US",
      roll: ['student'],
      categories: ['student']
    },
    {
      id: 3,
      materialName: "Zoodmool",
      author: "Zoodmool",
      file: "app",
      photo: "",
      file_name: "https://play.google.com/store/apps/details?id=com.lenovo.anyshare.gps&hl=ru&gl=US",
      roll: ['student'],
      categories: ['student']
    },
    {
      id: 4,
      materialName: "Translate",
      author: "Translate",
      file: "app",
      photo: "",
      file_name: "https://play.google.com/store/apps/details?id=com.lenovo.anyshare.gps&hl=ru&gl=US",
      roll: ['student'],
      categories: ['public']
    },
    {
      id: 5,
      materialName: "Imo",
      author: "Imo",
      file: "app",
      photo: "",
      file_name: "https://play.google.com/store/apps/details?id=com.lenovo.anyshare.gps&hl=ru&gl=US",
      roll: ['student'],
      categories: ['student']
    },
    {
      id: 6,
      materialName: "Watsap",
      author: "Watsap",
      file: "app",
      photo: "",
      file_name: "https://play.google.com/store/apps/details?id=com.lenovo.anyshare.gps&hl=ru&gl=US",
      roll: ['student'],
      categories: ['public']
    },
    {
      id: 7,
      materialName: "Photoshoop",
      author: "Photoshoop",
      file: "app",
      photo: "",
      file_name: "https://play.google.com/store/apps/details?id=com.lenovo.anyshare.gps&hl=ru&gl=US",
      roll: ['student'],
      categories: ['student']
    },
    {
      id: 8,
      materialName: "MatCad",
      author: "MatCad",
      file: "app",
      photo: "",
      file_name: "https://play.google.com/store/apps/details?id=com.lenovo.anyshare.gps&hl=ru&gl=US",
      roll: ['student'],
      categories: ['public']
    },
  ]
  const [baza, setBaza] = useState(jami)
  const [elektron, setEltron] = useState(arxiv)
  const [pragramma, setPragramma] = useState(app)
  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },

    // {
    //   field: 'age',
    //   headerName: 'Age',  
    //   type: 'number',
    //   width: 90,
    // },
    {
      field: 'fullName',
      headerName: 'Name',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 550,
      valueGetter: (params) =>
        `${params.row.materialName || ''} ${params.row.materialName || ''}`,
    },
    { field: 'file', headerName: 'fayili', width: 140 },
    { field: 'author', headerName: 'Muallifi', width: 200 },
  ];
  const [soniw,setSoniw]=useState(JSON.parse(window.localStorage.getItem("soni"))|| false)
  const rows = [
    {
      id: 1,
      materialName: "Yuz Mumtoz Faylasuf",
      author: "Saida Jo'rayeva",
      file: "pdf",
      photo: "https://kitobxon.com/img_knigi/4205.jpg",
      file_name: "/kitoblar/100_mumtoz_faylasuf.pdf",
      file_name: "/kitoblar/100_mumtoz_faylasuf.pdf",
      roll: ['student'],
      categories: ['student']
    },
    {
      id: 2,
      materialName: "o'tkan kunlar 1-qism",
      author: "Abdulla Qodiriy",
      file: "mp3",
      photo: "/image/utkan kunlar.jpg",
      file_name: "/kitoblar/01_otkan_kunlar.mp3",
      roll: ['student'],
      categories: ['student']
    },
    {
      id: 3,
      materialName: "O'tkan kunlar 2-qism",
      author: "Abdulla Qodiriy",
      file: "mp3",
      photo: "/image/utkan kunlar.jpg",
      file_name: "/kitoblar/02_otkan_kunlar.mp3",
      roll: ['student'],
      categories: ['student']
    },
    {
      id: 4,
      materialName: "O'tkan kunlar 4-qism",
      author: "Abdulla Qodiriy",
      file: "mp3",
      photo: "/image/utkan kunlar.jpg",
      file_name: "/kitoblar/04_otkan_kunlar.mp3",
      roll: ['student'],
      categories: ['student']
    },
    {
      id: 5,
      materialName: "60 yoshda san'atning nurli yo'li",
      author: "Farg'ona kolleki",
      file: "mp3",
      photo: "/image/nurli_yul.jpg",
      file_name: "../kitoblar/60_yoshda_sanatning_nurli_yoli.pdf",
      roll: ['student'],
      categories: ['student']
    },
    {
      id: 6,
      materialName: "Abay she'rlar va poemalari",
      author: "Abay",
      file: "pdf",
      photo: "../image/abay.jpg",
      file_name: "../kitoblar/abay_sherlar_va_poemalar.pdf",
      roll: ['student'],
      categories: ['student']
    },
    {
      id: 7,
      materialName: "Yana Bahor hokim",
      author: "Zulfiya",
      file: "mp3",
      photo: "",
      file_name: "../kitoblar/zulfiya_yana_bahor_hokim.mp3",
      roll: ['student'],
      categories: ['student']
    },
    {
      id: 8,
      materialName: "Yillar Sadosi",
      author: "Zulfiya",
      file: "pdf",
      photo: "../image/",
      file_name: "../kitoblar/zulfiya_yillar_sadosi.pdf",
      roll: ['student'],
      categories: ['student']
    },
    {
      id: 9,
      materialName: "Torga Tashrif",
      author: "Zulfiya",
      file: "mp3",
      photo: "../image/",
      file_name: "../kitoblar/zulfiya_torga_tashrif.mp3",
      roll: ['student'],
      categories: ['student']
    },
    {
      id: 10,
      materialName: "Tong",
      author: "Zulfiya",
      file: "mp3",
      photo: "../image/",
      file_name: "../kitoblar/zulfiya_tong.mp3",
      roll: ['student'],
      categories: ['student']
    },
    {
      id: 11,
      materialName: "Suq",
      author: "Zufiya",
      file: "pdf",
      photo: "../image/",
      file_name: "../kitoblar/zulfiya_suq.mp3",
      roll: ['student'],
      categories: ['student']
    },
    {
      id: 12,
      materialName: "Sharait",
      author: "Shareit",
      file: "app",
      photo: "",
      file_name: "https://play.google.com/store/apps/details?id=com.lenovo.anyshare.gps&hl=ru&gl=US",
      roll: ['student'],
      categories: ['student']
    },

    {
      id: 13,
      materialName: "Referat",
      author: "3-kurs talabasi",
      file: "docx",
      photo: "",
      file_name: "/Новый документ (5).docx",
      roll: ['student'],
      categories: ['student']
    },
    {
      id: 14,
      materialName: "Peshonamdagi nur",
      author: "",
      file: "pdf",
      photo: "../image/",
      file_name: "../kitoblar/zulfiya_suq.mp3",
      roll: ['student'],
      categories: ['student']
    },
    {
      id: 15,
      materialName: "Qaytishi yuq manzil",
      author: "",
      file: "pdf",
      photo: "../image/",
      file_name: "../kitoblar/zulfiya_suq.mp3",
      roll: ['student'],
      categories: ['student']
    },
    {
      id: 16,
      materialName: "Jahalot asirasi",
      author: "",
      file: "pdf",
      photo: "../image/",
      file_name: "../kitoblar/zulfiya_suq.mp3",
      roll: ['public'],
      categories: ['student']
    },
    {
      id: 17,
      materialName: "Furqon tavsiri",
      author: "",
      file: "pdf",
      photo: "../image/",
      file_name: "../kitoblar/zulfiya_suq.mp3",
      roll: ['public'],
      categories: ['student']
    },
    {
      id: 18,
      materialName: "Мулойимлик тўғрисида",
      author: "",
      file: "pdf",
      photo: "../image/",
      file_name: "../kitoblar/zulfiya_suq.mp3",
      roll: ['public'],
      categories: ['student']
    },
    {
      id: 19,
      materialName: "Hemis",
      author: "Hemis",
      file: "app",
      photo: "",
      file_name: "https://play.google.com/store/apps/details?id=com.lenovo.anyshare.gps&hl=ru&gl=US",
      roll: ['student'],
      categories: ['student']
    },
    {
      id: 20,
      materialName: "Zoodmool",
      author: "Zoodmool",
      file: "app",
      photo: "",
      file_name: "https://play.google.com/store/apps/details?id=com.lenovo.anyshare.gps&hl=ru&gl=US",
      roll: ['student'],
      categories: ['student']
    },
    {
      id: 21,
      materialName: "Translate",
      author: "Translate",
      file: "app",
      photo: "",
      file_name: "https://play.google.com/store/apps/details?id=com.lenovo.anyshare.gps&hl=ru&gl=US",
      roll: ['student'],
      categories: ['public']
    },
    {
      id: 22,
      materialName: "Imo",
      author: "Imo",
      file: "app",
      photo: "",
      file_name: "https://play.google.com/store/apps/details?id=com.lenovo.anyshare.gps&hl=ru&gl=US",
      roll: ['student'],
      categories: ['student']
    },
    {
      id: 23,
      materialName: "Watsap",
      author: "Watsap",
      file: "app",
      photo: "",
      file_name: "https://play.google.com/store/apps/details?id=com.lenovo.anyshare.gps&hl=ru&gl=US",
      roll: ['student'],
      categories: ['public']
    },
    {
      id: 24,
      materialName: "Photoshoop",
      author: "Photoshoop",
      file: "app",
      photo: "",
      file_name: "https://play.google.com/store/apps/details?id=com.lenovo.anyshare.gps&hl=ru&gl=US",
      roll: ['student'],
      categories: ['student']
    },
    {
      id: 25,
      materialName: "MatCad",
      author: "MatCad",
      file: "app",
      photo: "",
      file_name: "https://play.google.com/store/apps/details?id=com.lenovo.anyshare.gps&hl=ru&gl=US",
      roll: ['student'],
      categories: ['public']
    },
    {
      id: 26,
      materialName: "Peshonamdagi nur",
      author: "",
      file: "pdf",
      photo: "../image/",
      file_name: "../kitoblar/zulfiya_suq.mp3",
      roll: ['student'],
      categories: ['student']
    },
    {
      id: 28,
      materialName: "Qaytishi yuq manzil",
      author: "",
      file: "pdf",
      photo: "../image/",
      file_name: "../kitoblar/zulfiya_suq.mp3",
      roll: ['student'],
      categories: ['student']
    },
    {
      id: 29,
      materialName: "Jahalot asirasi",
      author: "",
      file: "pdf",
      photo: "../image/",
      file_name: "../kitoblar/zulfiya_suq.mp3",
      roll: ['public'],
      categories: ['student']
    },
    {
      id:30,
      materialName: "Furqon tavsiri",
      author: "",
      file: "pdf",
      photo: "../image/",
      file_name: "../kitoblar/zulfiya_suq.mp3",
      roll: ['public'],
      categories: ['student']
    },
    {
      id: 31,
      materialName: "Мулойимлик тўғрисида",
      author: "",
      file: "pdf",
      photo: "../image/",
      file_name: "../kitoblar/zulfiya_suq.mp3",
      roll: ['public'],
      categories: ['student']
    },

  ]
  return (
    <div className='header' style={{ display: "flex", justifyContent: "center", margin: "40px auto" }}>
      <h1>Mening Malumotlarim!</h1>
      <div className='header__render'>
        <Link to="#" className='card'>
          <img className='card__img' src={image4} alt="" />
          <h2>{baza.length}</h2>
          <h4>1-2-3-4 kurs materiallari</h4>
        </Link>
        <Link to="#" className='card'>
          <img className='card__img' src={image3} alt="" />
          <h2>{elektron.length}</h2>
          <h4>Raqamli arxiv</h4>
        </Link>
        <Link to="#" className='card'>
          <img className='card__img' src={image5} alt="" />
          <h2>{pragramma.length}</h2>
          <h4>Dasturiy ta'minot</h4>
        </Link>
      </div>
      <div>
        <h2>Bazadagi barcha malumotlarimiz !</h2>
      </div>
      <div style={{ height: 400, width: '100%' }}>
        <DataGrid className='baza' style={{ width: "80%", display: "flex", justifyContent: "center", margin: "0 auto", fontFamily: "sans-serif", fontSize: "18px", scrollbarColor: "red" }}
          rows={rows}
          columns={columns}
          pageSize={31}
          rowsPerPageOptions={[31]}
          checkboxSelection
        />
      </div>
      <h2 style={{marginTop:"20px"}}>Foydalanish reytinge!</h2>
      <Statika/>

    </div>
  );
}

export default Desktop;
