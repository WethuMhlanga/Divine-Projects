import useReveal from '../hooks/useReveal'

// Photos 1–5 (removed photo 6 — greatness.jpg)
const mealPhotos = [
  { src: '/img/IMG_6903.JPG', alt: 'Meal Creation' },
  { src: '/img/IMG_6904.jpg', alt: 'Plated Dish' },
  { src: '/img/IMG_6905.jpg', alt: 'Culinary Art' },
  { src: '/img/lipapa.JPG', alt: 'Traditional Meal' },
  { src: '/img/Food.jpeg', alt: 'Gourmet Food' },
]

function Meals() {
  useReveal()

  return (
    <>
      <section className="page-hero">
        <div className="page-hero-bg">
          <img src="/img/Meal.jpeg" alt="Meals" />
        </div>
        <div className="page-hero-overlay" />
        <div className="container page-hero-content">
          <span className="eyebrow">Our Menu</span>
          <h1>Super Meals</h1>
          <p>
            Savor our delectable meals, crafted with the finest ingredients and culinary expertise
            — from traditional favorites to gourmet creations.
          </p>
        </div>
      </section>

      <section className="menu-display">
        <div className="container">
          <div data-reveal>
            <span className="section-label">Menu</span>
            <h2 className="menu-heading">Menu for Super Meals</h2>
            <p className="menu-subtext">
              Check out our food variations and fill up your stomach with our super meals at lower prices.
            </p>
          </div>

          <div className="row justify-content-center" data-reveal data-delay="1">
            <div className="col-lg-8">
              <div className="menu-img-frame">
                <img src="/img/fastfoodmenu.jpg" alt="Meals Menu" />
              </div>
            </div>
          </div>

          <p className="text-center menu-contact-note" data-reveal data-delay="2">
            Contact us for more information, special requests, or to place an order.
          </p>
        </div>
      </section>

      <section className="photos-section">
        <div className="container">
          <div className="section-title" data-reveal>
            <span className="section-label">Gallery</span>
            <h2>A Taste of Our Meals</h2>
            <p>A selection of the dishes we craft for our clients.</p>
          </div>

          <div className="photos-grid" data-reveal data-delay="1">
            {mealPhotos.map((photo, i) => (
              <div key={i} className="photo-item">
                <img src={photo.src} alt={photo.alt} loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Meals
