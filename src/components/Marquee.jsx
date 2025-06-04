// src/components/Marquee.jsx
// شريط تعليمي برسائل مخصصة للأطفال

import React from 'react'
import '../styles/marquee.css'

const Marquee = () => {
  return (
    <div className="marquee">
      <p>
        Merhaba Çocuklar! Kodlama Eğlencesine Katılın 🚀 &nbsp; 
        Oyun Gibi Kodlama Öğrenin 🎮 &nbsp; 
        Renkli Projeler, Gerçek Uygulamalar 🎨 &nbsp; 
        HTML, CSS, ve JavaScript ile Hayal Gücünü Gerçeğe Dönüştür! 💡 &nbsp; 
        Kodlama ile Geleceği İnşa Et! 🏗️ &nbsp; 
        Küçük Geliştiriciler İçin Büyük Hayaller! 🌟
      </p>
    </div>
  )
}

export default Marquee
