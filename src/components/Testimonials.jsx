// src/components/Testimonials.jsx

import React from 'react'
import '../styles/testimonials.css'

// ⭐ مكون لتوليد نجوم حسب التقييم
const Stars = ({ count }) => {
  return (
    <div className="stars">
      {Array.from({ length: 5 }, (_, i) => (
        <i
          key={i}
          className={`bi ${i < count ? 'bi-star-fill' : 'bi-star'}`}
        ></i>
      ))}
    </div>
  )
}

const testimonials = [
  {
    name: 'Ayşe Yıldız',
    text: 'Gerçekten harika bir site! Kodlama çok eğlenceli hale geldi.',
    rating: 5,
    img: 'https://i.pravatar.cc/100?img=1'
  },
  {
    name: 'Mehmet Demir',
    text: 'Çocuklar için mükemmel hazırlanmış, renkli ve anlaşılır.',
    rating: 4,
    img: 'https://i.pravatar.cc/100?img=2'
  },
  {
    name: 'Zeynep Koç',
    text: 'Yapay zekâ kısmını çok sevdik! Eğlenceli ve öğretici.',
    rating: 5,
    img: 'https://i.pravatar.cc/100?img=3'
  }
]

const Testimonials = () => {
  return (
    <section className="testimonials-section">
      <div className="section-divider"></div>

      <div className="container">
        <h2 className="text-center mb-4">Ne Diyorlar?</h2>

        <div className="row justify-content-center">
          {testimonials.map((item, i) => (
            <div className="col-md-4 mb-4" key={i}>
              <div className="testimonial-card p-4 text-center">
                <img src={item.img} alt={item.name} className="testimonial-img mb-3" />
                <h5>{item.name}</h5>
                <p className="text">{item.text}</p>
                <Stars count={item.rating} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
