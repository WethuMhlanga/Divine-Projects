import useReveal from '../hooks/useReveal'

const services = [
  {
    num: '01',
    icon: 'bi-stars',
    title: 'Event Catering',
    desc: 'Full-service catering for weddings, corporate events, and private celebrations — tailored precisely to your vision and guest count.',
  },
  {
    num: '02',
    icon: 'bi-grid-3x3-gap-fill',
    title: 'Platter Creation',
    desc: 'Artfully arranged platters designed to delight the eye and the palate — a showstopping centrepiece at any gathering.',
  },
  {
    num: '03',
    icon: 'bi-cup-straw',
    title: 'Artisanal Cocktails',
    desc: 'Handcrafted cocktails and mocktails made with premium ingredients, mixed by expert mixologists for every taste.',
  },
  {
    num: '04',
    icon: 'bi-egg-fried',
    title: 'Fine Meals',
    desc: 'Chef-crafted dishes blending rich South African tradition with contemporary culinary technique — bold, balanced, memorable.',
  },
]

function Services() {
  useReveal()

  return (
    <section id="our-services" className="services-section">
      <div className="container">
        <div className="section-title" data-reveal>
          <span className="section-label">What We Offer</span>
          <h2>Our Services</h2>
          <p>
            Every service is crafted to bring exceptional quality, creativity, and care to your table.
          </p>
        </div>

        <div className="services-grid">
          {services.map((s, i) => (
            <div key={i} className="service-card" data-reveal data-delay={String(i + 1)}>
              <span className="service-number">{s.num}</span>
              <i className={`bi ${s.icon} service-icon`} />
              <div className="service-divider" />
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
