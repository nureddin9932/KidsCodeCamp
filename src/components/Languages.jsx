// src/components/Languages.jsx

import React from 'react'
import '../styles/languages.css'

// استيراد الصور
import jsImg from '../assets/javascript.png'
import pythonImg from '../assets/python.png'
import cppImg from '../assets/cpp.png'
import javaImg from '../assets/java.png'
import goImg from '../assets/go.png'
import phpImg from '../assets/php.png'

const languages = [
  {
    name: 'JavaScript',
    desc: 'Web sitelerine hayat ver! Butonlar, animasyonlar ve daha fazlası.',
    img: jsImg,
  },
  {
    name: 'Python',
    desc: 'Robotlar, veri bilimi ve eğlenceli projelerle kolay başlangıç!',
    img: pythonImg,
  },
  {
    name: 'C++',
    desc: 'Oyun geliştirme ve güçlü algoritmalar için birebir!',
    img: cppImg,
  },
  {
    name: 'Java',
    desc: 'Android uygulamalarını kendi başına geliştirmeye başla!',
    img: javaImg,
  },
  {
    name: 'Go',
    desc: 'Hızlı ve sade yapısıyla geleceğin dili!',
    img: goImg,
  },
  {
    name: 'PHP',
    desc: 'Dinamik ve interaktif web siteleri için süper bir seçim!',
    img: phpImg,
  }
]

const Languages = () => {
  return (
    <section className="languages py-5">
      <div className="container">
        <h2 className="section-title text-center mb-5">
          Çocuklar İçin Programlama Dilleri
        </h2>
        <div className="row gy-4">
          {languages.map((lang, index) => (
            <div key={index} className="col-12 col-md-6 col-lg-4">
              <div className="language-card text-center shadow-sm">
                <div className="lang-img">
                  <img src={lang.img} alt={lang.name} />
                </div>
                <div className="language-content p-3">
                  <h4 className="language-title">{lang.name}</h4>
                  <p className="language-desc">{lang.desc}</p>
                  <button className="start-btn mt-3">🚀 Derse Başla</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Languages
