import useReveal from '../hooks/useReveal'

// Photos 1, 3, 5, 6 from the original list
const drinkPhotos = [
  { src: '/img/Cocktail.jpeg', alt: 'Artisanal Cocktail' },
  { src: '/img/5.png', alt: 'Beverage' },
  { src: '/img/4.png', alt: 'Mixed Drink' },
  { src: '/img/6.png', alt: 'Special Drink' },
]

function Drinks() {
  useReveal()

  return (
    <>
      <section className="page-hero">
        <div className="page-hero-bg">
          <img src="/img/Cocktail.jpeg" alt="Beverages" />
        </div>
        <div className="page-hero-overlay" />
        <div className="container page-hero-content">
          <span className="eyebrow">Our Menu</span>
          <h1>Beverages</h1>
          <p>
            Discover our exquisite range of beverages — from refreshing mocktails to artisanal
            cocktails, crafted to perfection for every palate.
          </p>
        </div>
      </section>

      <section className="menu-display">
        <div className="container">
          <div data-reveal>
            <span className="section-label">Menu</span>
            <h2 className="menu-heading">Our Drinks Menu</h2>
            <p className="menu-subtext">
              Here&rsquo;s a menu showing the prices and various drinks we have in store.
              Order a drink and enjoy.
            </p>
          </div>

          <div className="row justify-content-center" data-reveal data-delay="1">
            <div className="col-lg-8">
              <div className="menu-img-frame">
                <img src="/img/1.png" alt="Drinks Menu" />
              </div>
            </div>
          </div>

          <p className="text-center menu-contact-note" data-reveal data-delay="2">
            Contact us for more information, custom orders, or event bar packages.
          </p>
        </div>
      </section>

      <section className="photos-section">
        <div className="container">
          <div className="section-title" data-reveal>
            <span className="section-label">Gallery</span>
            <h2>A Look at Our Drinks</h2>
            <p>A selection of the beverages our mixologists craft for every occasion.</p>
          </div>

          <div className="photos-grid" data-reveal data-delay="1">
            {drinkPhotos.map((photo, i) => (
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

export default Drinks
