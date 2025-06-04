// src/components/Header.jsx

import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/header.css'
import logo from '../assets/logo.png'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <header className="custom-header py-3">
      <div className="container d-flex justify-content-between align-items-center flex-wrap">
        {/* ✅ شعار */}
        <div className="logo d-flex align-items-center">
          <img src={logo} alt="Logo" className="logo-img me-2" />
          <span className="logo-text">Kids Code World</span>
        </div>

        {/* ✅ زر همبرغر للجوال */}
        <button className="menu-toggle d-md-none" onClick={toggleMenu}>
          <i className="bi bi-list"></i>
        </button>

        {/* ✅ قائمة الروابط */}
        <nav className={`nav-wrapper ${menuOpen ? 'open' : ''}`}>
          <ul className="nav-list d-flex flex-md-row flex-column m-0 p-0">
            <li><Link to="/" className="nav-link" onClick={() => setMenuOpen(false)}>Anasayfa</Link></li>
            <li><Link to="/about" className="nav-link" onClick={() => setMenuOpen(false)}>Bizkimdir</Link></li>
            <li><Link to="/contact" className="nav-link" onClick={() => setMenuOpen(false)}>İletişim</Link></li>
            <li><Link to="/rights" className="nav-link" onClick={() => setMenuOpen(false)}>Haklarımız</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
