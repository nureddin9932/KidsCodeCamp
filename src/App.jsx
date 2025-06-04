// src/App.jsx
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Marquee from './components/Marquee'
import Hero from './components/Hero'
import Languages from './components/Languages'
import Articles from './components/Articles'
import Footer from './components/Footer'
import Testimonials from './components/Testimonials'


// الصفحات الإضافية
import About from './pages/About'
import Contact from './pages/Contact'
import Rights from './pages/Rights'
import NotFound from './pages/NotFound'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Marquee />
              <Hero />
              <Languages />
              <Articles />
            </>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/rights" element={<Rights />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Testimonials />

      <Footer />
    </>
  )
}

export default App
