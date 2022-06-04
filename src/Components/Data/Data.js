const data = [
  {
    materialName: "Yuz Mumtoz Faylasuf",
    author: "Saida Jo'rayeva",
    file: "pdf",
    photo: "https://kitobxon.com/img_knigi/4205.jpg",
    file_name: "/kitoblar/100_mumtoz_faylasuf.pdf",
    roll: ['student'],
    categories: ['other_universities', 'collage_libraries', 'student', 'public']
  },
  {
    materialName: "o'tkan kunlar 1-qism",
    author: "Abdulla Qodiriy",
    file: "mp3",
    photo: "/image/utkan kunlar.jpg",
    file_name: "/kitoblar/01_otkan_kunlar.mp3",
    roll: ['digitalArchive'],
    categories: ["other_universities", "collage_libraries", "student", "public"]
  },
  {
    materialName: "O'tkan kunlar 2-qism",
    author: "Abdulla Qodiriy",
    file: "mp3",
    photo: "/image/utkan kunlar.jpg",
    file_name: "/kitoblar/02_otkan_kunlar.mp3",
    roll: ['digitalArchive'],
    categories: ["other_universities", "collage_libraries", "student", "public"]
  },
  {
    materialName: "O'tkan kunlar 4-qism",
    author: "Abdulla Qodiriy",
    file: "mp3",
    photo: "/image/utkan kunlar.jpg",
    file_name: "/kitoblar/04_otkan_kunlar.mp3",
    roll: ['digitalArchive'],
    categories: ["other_universities", "collage_libraries", "student", "public"]
  },
  {
    materialName: "60 yoshda san'atning nurli yo'li",
    author: "Farg'ona kolleki",
    file: "mp3",
    photo: "/image/nurli_yul.jpg",
    file_name: "../kitoblar/60_yoshda_sanatning_nurli_yoli.pdf",
    roll: ['digitalArchive'],
    categories: ["collage_libraries", "student"]
  },
  {
    materialName: "Abay she'rlar va poemalari",
    author: "Abay",
    file: "pdf",
    photo: "../image/abay.jpg",
    file_name: "../kitoblar/abay_sherlar_va_poemalar.pdf",
    roll: ['digitalArchive'],
    categories: ["other_universities", "collage_libraries", "student", "public"]
  },
  {
    materialName: "Yana Bahor hokim",
    author: "Zulfiya",
    file: "mp3",
    photo: "",
    file_name: "../kitoblar/zulfiya_yana_bahor_hokim.mp3",
    roll: ['digitalArchive'],
    categories: ["other_universities", "collage_libraries", "student", "public"]
  },
  {
    materialName: "Yillar Sadosi",
    author: "Zulfiya",
    file: "pdf",
    photo: "../image/",
    file_name: "../kitoblar/zulfiya_yillar_sadosi.pdf",
    roll: ['digitalArchive'],
    categories: ["other_universities", "collage_libraries", "student", "public"]
  },
  {
    materialName: "Torga Tashrif",
    author: "Zulfiya",
    file: "mp3",
    photo: "../image/",
    file_name: "../kitoblar/zulfiya_torga_tashrif.mp3",
    roll: ['digitalArchive'],
    categories: ["other_universities", "collage_libraries", "student", "public"]
  },
  {
    materialName: "Tong",
    author: "Zulfiya",
    file: "mp3",
    photo: "../image/",
    file_name: "../kitoblar/zulfiya_tong.mp3",
    roll: ['digitalArchive'],
    categories: ["other_universities", "collage_libraries", "student", "public"]
  },
  {
    materialName: "Suq",
    author: "Zufiya",
    file: "pdf",
    photo: "../image/",
    file_name: "../kitoblar/zulfiya_suq.mp3",
    roll: ['digitalArchive'],
    categories: ["other_universities", "collage_libraries", "student", "public"]
  },
  {
    materialName: "Sharait",
    author: "Shareit",
    file: "app",
    photo: "",
    file_name: "https://play.google.com/store/apps/details?id=com.lenovo.anyshare.gps&hl=ru&gl=US",
    roll: ['application'],
    categories: ["other_universities", "collage_libraries", "student", "public"]
  },

  {
    materialName: "Referat",
    author: "3-kurs talabasi",
    file: "docx",
    photo: "",
    file_name: "/Новый документ (5).docx",
    roll: ['student_material'],
    categories: ["other_universities", "collage_libraries", "student", "public"]
  },

]
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