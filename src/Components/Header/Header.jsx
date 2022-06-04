import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';

import image4 from "../../Assets/Img/image4.png"
import image3 from "../../Assets/Img/image3.png"
import image5 from "../../Assets/Img/image5.png"
import "./Header.scss"
import { Link } from 'react-router-dom';
import BirinchiIkkinchi from '../../Pages/Birinchi_ikkinchi/Birinchi_ikkinchi';
import Yuklangan from '../Yuklanganlar/Yuklangan';
const Header = () => {
  const uquvchi = [
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
      materialName: "Abay she'rlar va poemalari",
      author: "Abay",
      file: "pdf",
      photo: "../image/abay.jpg",
      file_name: "../kitoblar/abay_sherlar_va_poemalar.pdf",
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
      materialName: "Suq",
      author: "Zufiya",
      file: "pdf",
      photo: "../image/",
      file_name: "../kitoblar/zulfiya_suq.mp3",
      roll: ['student'],
      categories: ['student']
    }
  ]
  const app = [
    {
      materialName: "Sharait",
      author: "Shareit",
      file: "app",
      photo: "",
      file_name: "https://play.google.com/store/apps/details?id=com.lenovo.anyshare.gps&hl=ru&gl=US",
      roll: ['student'],
      categories: ['student']
    },

  ]
  const [student, setStudent] = useState(uquvchi)
  console.log(student);
  return (
    <div>
      <div className='header' style={{ display: "flex", justifyContent: "center", margin: "40px auto" }}>
        <h1>Mening malumotlarim!</h1>
        <div className='header__render'>
          <Link to="/BirinchiIkkinchi" className='card'>
            <img className='card__img' src={image4} alt="" />
            <h2>{student.length}</h2>
            <h4>1-2-3-4 kurs materiallari</h4>
          </Link>
          <Link to="/Arxiv" className='card'>
            <img className='card__img' src={image3} alt="" />
            <h2>{arxiv.length}</h2>
            <h4>Raqamli arxiv</h4>
          </Link>
          <Link to="/StudentApp" className='card'>
            <img className='card__img' src={image5} alt="" />
            <h2>{app.length}</h2>
            <h4>Dasturiy ta'minot</h4>
          </Link>
        </div>
      </div>
      <Yuklangan/>
    </div>
  );
}

export default Header;
