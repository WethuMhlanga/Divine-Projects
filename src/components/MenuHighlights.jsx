import { Link } from 'react-router-dom'
import useReveal from '../hooks/useReveal'

const menus = [
  {
    img: '/img/Meal.jpeg',
    label: 'Food Menu',
    title: 'Our Meals',
    desc: 'From beloved traditional favourites to gourmet creations — a menu crafted to satisfy every appetite.',
    link: '/meals',
    cta: 'View Meals Menu',
  },
  {
    img: '/img/Cocktail.jpeg',
    label: 'Drinks Menu',
    title: 'Our Drinks',
    desc: 'Artisanal cocktails, mocktails, and refreshing beverages crafted to complement every occasion.',
    link: '/drinks',
    cta: 'View Drinks Menu',
  },
]

function MenuHighlights() {
  useReveal()

  return (
    <section id="menu-highlights" className="menus-section">
      <div className="container">
        <div className="section-title" data-reveal>
          <span className="section-label">Explore</span>
          <h2>Our Menus</h2>
          <p>
            Every item on our menus is crafted with the finest ingredients and served with excellence.
          </p>
        </div>

        <div className="menu-cards-row">
          {menus.map((menu, i) => (
            <div key={i} className="menu-highlight-card" data-reveal data-delay={String(i + 1)}>
              <img src={menu.img} alt={menu.title} loading="lazy" />
              <div className="menu-highlight-overlay" />
              <div className="menu-highlight-content">
                <span className="card-label">{menu.label}</span>
                <h3>{menu.title}</h3>
                <p>{menu.desc}</p>
                <Link to={menu.link} className="btn-gold">{menu.cta}</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default MenuHighlights
