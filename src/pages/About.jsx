// src/pages/About.jsx

import React from 'react'
import '../styles/about.css'
import profileImg from '../assets/profile.png'
import Marquee from '../components/Marquee'

const About = () => {
  return (
    <>
      <Marquee /> {}

      <section className="about-section">
        <div className="about-card text-center">
          {/* ✅ صورة بخلفية منقطة */}
          <div className="profile-img-wrapper">
            <img
              src={profileImg}
              alt="Nuriddin Habaş"
              className="profile-img"
            />
          </div>

          <h2 className="mt-3">Nuriddin Habaş</h2>

          <div className="about-details text-start mt-3 px-3">
            <p><strong>Üniversite:</strong> Şırnak Üniversitesi</p>
            <p><strong>Unvan:</strong> Bilgisayar Mühendisi</p>
            <p><strong>Alanlar:</strong> Yazılım, Mobil, Yapay Zekâ</p>
            <p><strong>İlgi:</strong> Yenilikçilik, Teknik Projeler, Kişisel Gelişim</p>
          </div>

          <div className="social-icons d-flex justify-content-center gap-3 mt-3 mb-2">
            <a href="#"><i className="bi bi-facebook"></i></a>
            <a href="#"><i className="bi bi-instagram"></i></a>
            <a href="#"><i className="bi bi-linkedin"></i></a>
            <a href="#"><i className="bi bi-github"></i></a>
          </div>
        </div>
      </section>
    </>
  )
}

export default About
