// src/pages/Rights.jsx

import React from 'react'
import '../styles/rights.css'
import Marquee from '../components/Marquee'

const Rights = () => {
  return (
    <>
      <Marquee />

      <section className="rights-section">
        <div className="container d-flex justify-content-center align-items-center">
          <div className="rights-card text-center p-4">
            <div className="rights-icon">
              <i className="bi bi-shield-lock-fill"></i>
            </div>
            <h1 className="mb-2">Telif Hakları</h1>
            <div className="divider"></div>
            <p className="mt-3">
              Bu sitede yer alan tüm içerikler <strong>Nuriddin Habaş</strong>'ya aittir.
              İzinsiz şekilde kopyalanamaz, paylaşılamaz veya kullanılamaz.
            </p>
            <p className="copyright">© 2025 Tüm Hakları Saklıdır.</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Rights
