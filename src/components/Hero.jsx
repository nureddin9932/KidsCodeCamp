// src/components/Hero.jsx
// قسم رئيسي موجه للأطفال لتعلم البرمجة

import React, { useEffect, useState } from 'react'
import '../styles/hero.css'
import cocukImg from '../assets/cocuk.png'

const Hero = () => {
  const [textIndex, setTextIndex] = useState(0)

  const phrases = [
    'Haydi çocuklar, kodlama dünyasına adım atın! 👧🧒',
    'Kendi oyunlarını yapmayı öğren! 🎮',
    'HTML, CSS ve JavaScript ile renkli projeler hazırla! 🎨',
    'Hayal et, kodla ve eğlen! 🧠✨',
    'Kodlama geleceğin süper gücüdür! 💪🚀'
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % phrases.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="hero">
      <div className="container py-5">
        <div className="row align-items-center">
          {/* ✅ صورة داخل خلفية مائلة */}
          <div className="col-md-6 text-center mb-4 mb-md-0">
            <div className="hero-image-wrapper">
              <img src={cocukImg} alt="Çocuk Kodluyor" className="hero-img" />
            </div>
          </div>

          {/* ✅ النصوص */}
          <div className="col-md-6 text-center text-md-start">
            <h1 className="hero-title mb-3">
              <i className="bi bi-emoji-smile-fill me-2"></i>
              Kodlama Eğlencesine Hoş Geldiniz!
            </h1>
            <p className="hero-subtitle">{phrases[textIndex]}</p>

            <div className="hero-icons my-4">
              <i className="bi bi-controller icon"></i>
              <i className="bi bi-puzzle-fill icon"></i>
              <i className="bi bi-lightbulb-fill icon"></i>
              <i className="bi bi-stars icon"></i>
            </div>

            <button className="hero-btn mt-2">Hemen Başla</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
