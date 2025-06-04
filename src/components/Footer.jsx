// src/components/Footer.jsx

import React from 'react'
import '../styles/footer.css'




const Footer = () => {
  return (
    <footer className="footer text-dark mt-5 pt-0">
      {/* ✅ الشريط الوردي العلوي */}
      <div className="footer-divider"></div>

      <div className="container py-5">
        <div className="row">
          {/* Hakkımızda */}
          <div className="col-md-4 mb-4">
            <h5>Hakkımızda</h5>
            <p>
              Çocuklara yönelik eğlenceli ve öğretici kodlama içerikleri sunuyoruz.
            </p>
          </div>

          {/* Linkler */}
          <div className="col-md-4 mb-4">
            <h5>Linkler</h5>
            <ul className="list-unstyled">
              <li><a href="#">Anasayfa</a></li>
              <li><a href="#">Yazılar</a></li>
              <li><a href="#">İletişim</a></li>
              <li><a href="#">Hakkımızda</a></li>
            </ul>
          </div>

          {/* Sosyal ve E-posta */}
          <div className="col-md-4 mb-4">
            <h5>Bize Ulaş</h5>
            <p>Email: info@kodlama.com</p>

            {/* ✅ أيقونات تواصل جنب بعض */}
            <div className="social-icons d-flex flex-wrap gap-3 mt-3">
              <a href="#"><i className="bi bi-facebook"></i></a>
              <a href="#"><i className="bi bi-instagram"></i></a>
              <a href="#"><i className="bi bi-twitter-x"></i></a>
              <a href="#"><i className="bi bi-youtube"></i></a>
              <a href="#"><i className="bi bi-linkedin"></i></a>
              <a href="#"><i className="bi bi-github"></i></a>
              <a href="#"><i className="bi bi-tiktok"></i></a>
            </div>

            {/* ✅ نموذج الإيميل */}
            <form className="subscribe-form mt-4">
              <input type="email" placeholder="E-posta adresinizi girin" required />
              <button type="submit">Gönder</button>
            </form>
          </div>
        </div>

        {/* حقوق */}
        <div className="text-center mt-4 small text-dark">
          © 2025 Muhammed Hama ❤️ Tüm hakları saklıdır.
        </div>
      </div>
    </footer>
  )
}

export default Footer
