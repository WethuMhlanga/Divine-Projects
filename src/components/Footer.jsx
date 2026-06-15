function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-brand">Divine Projects</div>
        <p className="footer-tagline">Catering · Platters · Cocktails · Meals</p>
        <hr className="footer-divider" />
        <div className="social-icons">
          <a
            href="https://www.facebook.com/profile.php?id=61561457879688&mibextid=LQQJ4d"
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook"
          >
            <i className="bi bi-facebook" />
          </a>
          <a href="https://tiktok.com" target="_blank" rel="noreferrer" aria-label="TikTok">
            <i className="bi bi-tiktok" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
            <i className="bi bi-instagram" />
          </a>
        </div>
        <p className="footer-copy">
          &copy; {new Date().getFullYear()} Divine Projects. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
