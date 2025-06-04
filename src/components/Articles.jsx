// src/components/Articles.jsx

import React from 'react'
import '../styles/articles.css'

const articles = [
  {
    title: 'React ile Başlangıç',
    desc: 'React ile çocuklar için interaktif web sayfaları oluşturmayı öğren!',
    icon: 'bi bi-lightning-charge-fill'
  },
  {
    title: 'Python Temelleri',
    desc: 'Python ile kodlama temellerini eğlenceli projelerle keşfet!',
    icon: 'bi bi-emoji-smile-fill'
  },
  {
    title: 'JavaScript Fonksiyonları',
    desc: 'JavaScript kullanarak kendi oyunlarını kodlamaya hazır mısın?',
    icon: 'bi bi-controller'
  },
  {
    title: 'Kodlama ile Hayal Gücünü Kullan!',
    desc: 'Çocuklar için kodlama sadece teknoloji değil, hayal gücüdür!',
    icon: 'bi bi-stars'
  }
]

const Articles = () => {
  return (
    <section className="articles py-5">
      {/* ✅ الخط الوردي العلوي */}
      <div className="section-divider"></div>

      <div className="container">
        <h2 className="articles-title text-center mb-5">Yazılar</h2>
        <div className="row gy-4">
          {articles.map((article, index) => (
            <div key={index} className="col-12">
              <div className="article-card d-flex align-items-center">
                <div className="article-icon text-center me-3">
                  <i className={`${article.icon}`}></i>
                </div>
                <div className="article-content p-3">
                  <h4 className="article-title">{article.title}</h4>
                  <p className="article-desc">{article.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Articles
