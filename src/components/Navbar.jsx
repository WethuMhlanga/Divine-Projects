import { useState, useEffect } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollToSection = (id) => {
    setMenuOpen(false)
    setDropdownOpen(false)
    if (location.pathname === '/') {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    } else {
      navigate('/')
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
      }, 180)
    }
  }

  const closeAll = () => {
    setMenuOpen(false)
    setDropdownOpen(false)
  }

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-brand">
        <Link to="/" onClick={closeAll}>
          <h4>Divine Projects</h4>
          <span className="brand-dot" />
        </Link>
      </div>

      <div className="nav-links">
        <button
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? '✕' : '☰'}
        </button>

        <ul className={`menu ${menuOpen ? 'open' : ''}`}>
          <li>
            <Link to="/" onClick={closeAll}>Home</Link>
          </li>
          <li>
            <button onClick={() => scrollToSection('about-us')}>About</button>
          </li>
          <li>
            <button onClick={() => scrollToSection('our-services')}>Services</button>
          </li>

          <li
            className="catalogue"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button
              className={`catalogue-btn ${dropdownOpen ? 'open' : ''}`}
              onClick={() => setDropdownOpen(!dropdownOpen)}
              aria-expanded={dropdownOpen}
            >
              Catalogue
              <i className="bi bi-chevron-down chevron" />
            </button>
            <ul className={`nav-dropdown ${dropdownOpen ? 'visible' : ''}`}>
              <li>
                <Link to="/meals" onClick={closeAll}>Meals</Link>
              </li>
              <li>
                <Link to="/drinks" onClick={closeAll}>Drinks</Link>
              </li>
            </ul>
          </li>

          <li>
            <button onClick={() => scrollToSection('contact-us')}>Contact</button>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
