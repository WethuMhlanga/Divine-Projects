import { useState, useEffect } from 'react'

const slides = [
  { src: '/img/greatness.jpg', alt: 'Culinary Excellence' },
  { src: '/img/Meal.jpeg', alt: 'Fine Dining' },
  { src: '/img/Cocktail.jpeg', alt: 'Artisanal Cocktails' },
]

function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

function Carousel() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % slides.length)
    }, 5500)
    return () => clearInterval(timer)
  }, [])

  const prev = () => setCurrent((current - 1 + slides.length) % slides.length)
  const next = () => setCurrent((current + 1) % slides.length)

  return (
    <div className="hero">
      {slides.map((slide, i) => (
        <div key={i} className={`hero-slide ${i === current ? 'active' : ''}`}>
          <img src={slide.src} alt={slide.alt} />
        </div>
      ))}

      <div className="hero-overlay" />

      <div className="hero-content">
        <span className="hero-eyebrow">Catering · Platters · Cocktails · Meals</span>
        <hr className="hero-rule" />
        <h1 className="hero-title">
          Extraordinary<br />
          <em>Culinary Experiences</em>
        </h1>
        <p className="hero-sub">
          Making your events truly unforgettable — from intimate gatherings to grand celebrations.
        </p>
        <div className="hero-actions">
          <button className="btn-gold" onClick={() => scrollTo('menu-highlights')}>
            View Our Menus
          </button>
          <button className="btn-outline" onClick={() => scrollTo('contact-us')}>
            Get in Touch
          </button>
        </div>
      </div>

      <button className="carousel-btn prev" onClick={prev} aria-label="Previous">&#10094;</button>
      <button className="carousel-btn next" onClick={next} aria-label="Next">&#10095;</button>

      <div className="carousel-dots">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`dot ${i === current ? 'active' : ''}`}
            onClick={() => setCurrent(i)}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>

      <div className="scroll-cue">
        <span>Scroll</span>
        <div className="scroll-cue-line" />
      </div>
    </div>
  )
}

export default Carousel
