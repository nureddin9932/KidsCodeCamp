// src/pages/Contact.jsx

import React from 'react'
import '../styles/contact.css'
import Marquee from '../components/Marquee'

const Contact = () => {
  return (
    <>
      <Marquee />

      <section className="contact-section">
        <div className="container d-flex justify-content-center">
          <div className="contact-card text-center p-4">
            <h1 className="mb-3">
              <i className="bi bi-chat-dots-fill me-2"></i>İletişim
            </h1>

            <p className="contact-desc">
              Bizimle iletişime geçmek çok kolay! Aşağıdaki formu doldurarak mesajınızı bırakabilirsiniz.
            </p>

            {/* ✅ نموذج تواصل */}
            <form className="contact-form mt-4">
              <input type="text" placeholder="Adınız" required />
              <input type="email" placeholder="E-posta" required />
              <textarea rows="4" placeholder="Mesajınız" required></textarea>
              <button type="submit">
                <i className="bi bi-send-fill me-2"></i>Gönder
              </button>
            </form>

            {/* ✅ معلومات إضافية */}
            <div className="mt-4 contact-info">
              <p><i className="bi bi-envelope-fill me-2"></i> info@kodlama.com</p>
              <p><i className="bi bi-telephone-fill me-2"></i> +90 123 456 7890</p>
              <p><i className="bi bi-geo-alt-fill me-2"></i> İstanbul, Türkiye</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
