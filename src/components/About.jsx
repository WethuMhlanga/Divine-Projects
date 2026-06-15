import useReveal from '../hooks/useReveal'

function About() {
  useReveal()

  return (
    <section id="about-us" className="about-section">
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-md-6" data-reveal>
            <div className="section-title">
              <span className="section-label">Our Story</span>
              <h2>About Divine Projects</h2>
            </div>
            <div className="about-text">
              <p>
                At Divine Projects, we specialize in curating extraordinary culinary experiences.
                Our team of expert chefs and mixologists craft exquisite menus that blend traditional
                South African flavors with modern techniques, ensuring every dish and drink is a
                masterpiece.
              </p>
              <p>
                From intimate gatherings to grand celebrations, we provide bespoke catering services
                tailored to your exact needs. Our platters are meticulously designed to satisfy both
                the palate and the eye — a visual feast that elevates the ambiance of your event.
              </p>
              <p>
                We believe that every event is an opportunity to create lasting memories, and we are
                committed to making your occasion truly extraordinary.
              </p>
            </div>

          </div>

          <div className="col-md-6 text-center" data-reveal data-delay="1">
            <div className="about-img-wrap">
              <div className="about-img-ring-2" />
              <div className="about-img-ring" />
              <img src="/img/devine.jpeg" alt="Divine Projects" className="about-img" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
