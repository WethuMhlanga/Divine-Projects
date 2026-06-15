import useReveal from '../hooks/useReveal'

const contactItems = [
  {
    icon: 'bi-geo-alt-fill',
    title: 'Our Address',
    lines: ['P O Box 859, Sidlamafa, 1332', 'Stand No.680, Sidlamafa, 1332'],
  },
  {
    icon: 'bi-envelope-fill',
    title: 'Email Us',
    links: [{ label: 'Divineprojexts@gmail.com', href: 'mailto:Divineprojexts@gmail.com' }],
  },
  {
    icon: 'bi-telephone-fill',
    title: 'Call Us',
    links: [
      { label: '+27 82 259 2271', href: 'tel:+27822592271' },
      { label: '+27 76 311 4051', href: 'tel:+27763114051' },
    ],
  },
  {
    icon: 'bi-clock-fill',
    title: 'Office Hours',
    lines: ['Monday – Friday: 7 AM – 7 PM', 'Saturday – Sunday: 6 AM – 7 PM'],
  },
]

function Contact() {
  useReveal()

  return (
    <section id="contact-us" className="contact-section">
      <div className="container">
        <div className="section-title text-center" data-reveal>
          <span className="section-label">Reach Out</span>
          <h2>Contact Us</h2>
          <p>
            Ready to make your next event extraordinary? We&rsquo;d love to hear from you.
          </p>
        </div>

        <div className="contact-grid">
          {contactItems.map((item, i) => (
            <div key={i} className="contact-card" data-reveal data-delay={String(i + 1)}>
              <i className={`bi ${item.icon} contact-card-icon`} />
              <h4>{item.title}</h4>
              {item.lines?.map((line, j) => <p key={j}>{line}</p>)}
              {item.links?.map((link, j) => (
                <p key={j}><a href={link.href}>{link.label}</a></p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Contact
