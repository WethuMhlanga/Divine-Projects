import useReveal from '../hooks/useReveal'

const photos = [
  { src: '/img/Food.jpeg', alt: 'Gourmet Food', caption: 'Fine Dining', featured: true },
  { src: '/img/Cocktail.jpeg', alt: 'Artisanal Cocktails', caption: 'Cocktails' },
  { src: '/img/lipapa.JPG', alt: 'Traditional Dish', caption: 'Traditional' },
  { src: '/img/sandwich.JPG', alt: 'Gourmet Sandwich', caption: 'Gourmet' },
  { src: '/img/drink.jpeg', alt: 'Refreshing Drink', caption: 'Beverages' },
  { src: '/img/IMG_6903.JPG', alt: 'Culinary Creation', caption: 'Our Work' },
]

function Gallery() {
  useReveal()

  return (
    <section className="gallery-section">
      <div className="container">
        <div className="section-title text-center" data-reveal>
          <span className="section-label">Our Work</span>
          <h2>A Taste of What We Do</h2>
          <p>
            A glimpse of the meals, platters, and cocktails we craft at every event.
          </p>
        </div>

        <div className="gallery-grid" data-reveal data-delay="1">
          {photos.map((photo, i) => (
            <div key={i} className={`gallery-item ${photo.featured ? 'featured' : ''}`}>
              <img src={photo.src} alt={photo.alt} loading="lazy" />
              <div className="gallery-caption">{photo.caption}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery
