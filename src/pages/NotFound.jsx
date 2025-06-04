// src/pages/NotFound.jsx
// صفحة 404 عند عدم وجود المسار

import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <section className="not-found py-5 text-center">
      <div className="container">
        <h1 className="display-4">404</h1>
        <p>Sayfa bulunamadı.</p>
        <Link to="/" className="btn btn-primary">Anasayfaya Dön</Link>
      </div>
    </section>
  )
}

export default NotFound