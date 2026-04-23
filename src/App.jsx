import { useState, useEffect, useRef } from 'react'

// Wraps numeric metrics (70+, 95.3K, 3,000+, 9 months, etc.) in a highlight span
function HighlightedText({ text }) {
  const parts = text.split(/(\d[\d,.]*)([+KM%]?)(\s*months?)?/g)
  const result = []
  let i = 0
  while (i < parts.length) {
    if (/^\d[\d,.]*$/.test(parts[i])) {
      const suffix = (parts[i + 1] || '') + (parts[i + 2] || '')
      result.push(
        <strong key={i} className="stat-highlight">
          {parts[i]}{suffix}
        </strong>
      )
      i += 3
    } else {
      if (parts[i]) result.push(parts[i])
      i++
    }
  }
  return <>{result}</>
}

function useScrollReveal(threshold = 0.12) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return [ref, visible]
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const close = () => setMenuOpen(false)

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <a href="#hero" className="nav-logo">Amy Donald</a>
      <button
        className={`nav-toggle${menuOpen ? ' open' : ''}`}
        onClick={() => setMenuOpen(o => !o)}
        aria-label="Toggle menu"
      >
        <span /><span /><span />
      </button>
      <ul className={`nav-links${menuOpen ? ' open' : ''}`}>
        {['About', 'Services', 'Work', 'Contact'].map(item => (
          <li key={item}>
            <a href={`#${item.toLowerCase()}`} onClick={close}>{item}</a>
          </li>
        ))}
        <li>
          <a href="#contact" className="nav-cta" onClick={close}>Let's Talk</a>
        </li>
      </ul>
    </nav>
  )
}

function Hero() {
  return (
    <div className="hero-wrapper">
      <div className="hero-dots" aria-hidden="true" />
      <div className="hero-aurora" aria-hidden="true">
        <div className="aurora-blob aurora-blob--pink" />
        <div className="aurora-blob aurora-blob--lavender" />
        <div className="aurora-blob aurora-blob--gold" />
      </div>

      <section id="hero" className="hero">
      <div className="hero-bg-text" aria-hidden="true">AMY</div>

      <div className="hero-content">
        {/* <div className="hero-badge">✦ Available for new projects</div> */}
        <h1 className="hero-headline">
          Turning<br />
          <span className="gradient-text">Scroll Stops</span><br />
          Into Brand<br />
          Stories
        </h1>
        <p className="hero-sub">
          Social Media & Content Specialist helping brands build authentic connections
          through bold, culturally relevant content.
        </p>
        <div className="hero-stats">
          <div className="stat">
            <span className="stat-num">5+</span>
            <span className="stat-label">Years Experience</span>
          </div>
          <div className="stat-divider" />
          <div className="stat">
            <span className="stat-num">70+</span>
            <span className="stat-label">Brand Activations</span>
          </div>
          <div className="stat-divider" />
          <div className="stat">
            <span className="stat-num">95K</span>
            <span className="stat-label">Organic Reach</span>
          </div>
        </div>
        <div className="hero-cta">
          <a href="#contact" className="btn-primary">Work with me</a>
          <a href="#work" className="btn-ghost">See my work ↓</a>
        </div>
      </div>

      <div className="hero-image-wrap">
        <div className="hero-image-frame">
          <img src="/hero.jpg" alt="Amy Donald — Social Media Specialist" className="hero-img" />
        </div>
        <div className="hero-float-card">
          <div className="card-dot" />
          Social Media Specialist
        </div>
        <div className="hero-float-card2">
          <div>
            <div className="reach-num">146K</div>
            <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.45)', marginTop: 2 }}>Total views</div>
          </div>
        </div>
      </div>
      </section>
    </div>
  )
}

const TICKER_ITEMS = [
  { text: 'Social Media Strategy', highlight: false, icon: '📱' },
  { text: 'Content Creation',      highlight: true,  icon: '🎨' },
  { text: 'Brand Storytelling',    highlight: false, icon: '💬' },
  { text: 'Community Management',  highlight: true,  icon: '🤝' },
  { text: 'Analytics & Growth',    highlight: false, icon: '📊' },
  { text: 'Brand Activations',     highlight: true,  icon: '🚀' },
]

function Ticker() {
  const doubled = [...TICKER_ITEMS, ...TICKER_ITEMS]
  return (
    <div className="ticker" aria-hidden="true">
      <div className="ticker-track">
        {doubled.map((item, i) => (
          <span key={i} className={`ticker-item${item.highlight ? ' highlight' : ''}`}>
            <span className="ticker-icon">{item.icon}</span> {item.text}
          </span>
        ))}
      </div>
    </div>
  )
}

const PLATFORMS = ['Meta', 'TikTok', 'YouTube', 'Canva', 'CapCut', 'Microsoft 365', 'Google Workspace']
const STRATEGIC = ['Social Analytics', 'Brand Voice', 'Visual Storytelling', 'SEO', 'Copywriting']
const SOFT = ['Communication', 'Resilience', 'Teamwork', 'Adaptability']

function About() {
  const [ref, visible] = useScrollReveal()
  return (
    <section id="about" className="about" ref={ref}>
      <div className={`about-inner${visible ? ' reveal' : ''}`}>
        <div className="about-image-wrap">
          <div className="about-img-frame">
            <img src="/about.jpeg" alt="Amy Donald" />
          </div>
          <div className="about-quote-card">
            <p>"Content that converts, community that stays."</p>
            <span>Amy Donald</span>
          </div>
        </div>

        <div className="about-content">
          <span className="section-label">About Me</span>
          <h2 className="section-title">
            Hi there, I'm<br />
            <span className="gradient-text">Amy 👋</span>
          </h2>
          <p className="about-bio">
            I'm a passionate Community Manager and Social Media Specialist with over 5 years
            of experience helping brands build authentic connections with their audiences.
          </p>
          <p className="about-bio">
            When I'm not crafting the perfect post or analysing metrics, you'll find me
            exploring coffee shops, practising yoga, or planning my next travel adventure.
          </p>

          <div className="skills-wrap">
            <div className="skill-group">
              <h4>Platforms</h4>
              <div className="tags">
                {PLATFORMS.map(p => <span key={p} className="tag">{p}</span>)}
              </div>
            </div>
            <div className="skill-group">
              <h4>Creative & Strategic</h4>
              <div className="tags">
                {STRATEGIC.map(s => <span key={s} className="tag tag-pink">{s}</span>)}
              </div>
            </div>
            <div className="skill-group">
              <h4>Soft Skills</h4>
              <div className="tags">
                {SOFT.map(s => <span key={s} className="tag tag-purple">{s}</span>)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const SERVICES = [
  {
    num: '01',
    title: 'Social Media Strategy',
    desc: 'Comprehensive social media planning and brand positioning across all platforms to grow your presence.',
  },
  {
    num: '02',
    title: 'Content Creation',
    desc: "Scroll-stopping visual and written content crafted for each platform's unique algorithm and audience.",
  },
  {
    num: '03',
    title: 'Brand Storytelling',
    desc: 'Authentic narratives that connect your brand emotionally and build long-term audience loyalty.',
  },
  {
    num: '04',
    title: 'Community Management',
    desc: 'Active engagement, audience building, and genuine relationship management with your followers.',
  },
  {
    num: '05',
    title: 'Analytics & Reporting',
    desc: 'Data-driven performance tracking and actionable insights to continuously optimise your results.',
  },
  {
    num: '06',
    title: 'Brand Activations',
    desc: 'High-impact field and digital campaigns that generate measurable impressions and brand loyalty.',
  },
]

function Services() {
  const [ref, visible] = useScrollReveal()
  return (
    <section id="services" className="services" ref={ref}>
      <div className="section-header">
        <span className="section-label light">What I Offer</span>
        <h2 className="section-title light">
          What I bring<br />to the <span className="gradient-text">table</span>
        </h2>
      </div>
      <div className={`services-grid${visible ? ' reveal' : ''}`}>
        {SERVICES.map(s => (
          <div key={s.num} className="service-card">
            <span className="service-num">{s.num}</span>
            <h3 className="service-title">{s.title}</h3>
            <p className="service-desc">{s.desc}</p>
            <div className="service-arrow">→</div>
          </div>
        ))}
      </div>
    </section>
  )
}

const WORK = [
  {
    title: 'Digital Marketing Assistant',
    company: 'ETZ Ltd',
    date: 'Oct 2025 – Present',
    location: 'Aberdeen, United Kingdom',
    tag: 'Corporate Communications',
    image: '/job3.webp',
    highlights: [
      'Creating digital content for corporate communication campaigns across multiple channels',
      'Supporting the organisation of conferences and events in the energy sector',
      'Coordinating with multiple stakeholders to manage organisational communications',
      'Developing strategic content to strengthen the organisation\'s digital presence',
    ],
  },
  {
    title: 'Beefeater Brand Ambassador',
    company: 'Beefeater Gin',
    date: '2025',
    location: 'Málaga, Spain',
    tag: 'Influencer Marketing',
    image: '/job1.jpeg',
    highlights: [
      'Organised 70+ brand activations generating over 3,000 gross impressions per hour (GIH)',
      'Built and maintained relationships with 200+ bars and venues across Andalucía',
      'Delivered consistent, high-impact brand presence over 9 months of field activity',
    ],
  },
  {
    title: 'Marketing Assistant',
    company: 'Beefeater Gin',
    date: '2024',
    location: 'London, United Kingdom',
    tag: 'Social Media',
    image: '/job2.jpeg',
    highlights: [
      'Achieved organic reach of 95.3K accounts with over 146K total views',
      'Significantly boosted brand engagement across key target demographics',
      'Designed and executed a content calendar that grew the audience month-on-month',
    ],
  },
]

function Work() {
  const [ref, visible] = useScrollReveal()
  return (
    <section id="work" className="work" ref={ref}>
      <div className="section-header">
        <span className="section-label">Selected Work</span>
        <h2 className="section-title">
          Portfolio &<br /><span className="gradient-text">Experience</span>
        </h2>
      </div>
      <div className={`work-list${visible ? ' reveal' : ''}`}>
        {WORK.map((job, i) => (
          <div key={i} className="work-card">
            <div className="work-card-image">
              <img src={job.image} alt={job.title} />
              <div className="work-card-overlay">
                <span className="work-tag">{job.tag}</span>
              </div>
            </div>
            <div className="work-card-content">
              <div className="work-card-meta">
                <span className="work-date">{job.date}</span>
                <span className="work-location">📍 {job.location}</span>
              </div>
              <h3 className="work-title">{job.title}</h3>
              <p className="work-company">{job.company}</p>
              <ul className="work-highlights">
                {job.highlights.map((h, j) => <li key={j}><span><HighlightedText text={h} /></span></li>)}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const update = field => e => setForm(f => ({ ...f, [field]: e.target.value }))

  const handleSubmit = async e => {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      const res = await fetch('https://amy-donald-portfolio-backend.onrender.com/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (data.success) {
        setSent(true)
      } else {
        setError('Something went wrong. Please try again.')
      }
    } catch {
      setError('Could not send message. Check your connection.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="contact">
      <div className="contact-inner">
        <div className="contact-left">
          <span className="section-label light">Get In Touch</span>
          <h2 className="section-title light">
            Let's work<br /><span className="gradient-text">together!</span>
          </h2>
          <p className="contact-sub">
            Got a project in mind? I'd love to hear about it. Let's create
            something amazing together.
          </p>
          <div className="social-links">
            <a href="https://www.instagram.com/zoyerox?igsh=MTNlNnIzMXM2MjA1OA==" className="social-link social-link--instagram" target="_blank" rel="noreferrer">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <circle cx="12" cy="12" r="4"/>
                <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none"/>
              </svg>
              Instagram
            </a>
            <a href="http://www.linkedin.com/in/amydonald145" className="social-link social-link--linkedin" target="_blank" rel="noreferrer">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                <rect x="2" y="9" width="4" height="12"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
              LinkedIn
            </a>
            {/* <a href="https://tiktok.com" className="social-link social-link--tiktok" target="_blank" rel="noreferrer">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.16 8.16 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z"/>
              </svg>
              TikTok
            </a> */}
          </div>
        </div>

        <div className="contact-form-wrap">
          {sent ? (
            <div className="form-success">
              <div className="success-icon">✦</div>
              <h3>Message sent!</h3>
              <p>Thanks for reaching out — I'll get back to you soon!</p>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input
                  id="name"
                  type="text"
                  placeholder="Your full name"
                  value={form.name}
                  onChange={update('name')}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={update('email')}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Your Project</label>
                <textarea
                  id="message"
                  placeholder="Tell me about your project..."
                  rows={5}
                  value={form.message}
                  onChange={update('message')}
                  required
                />
              </div>
              {error && <p className="form-error">{error}</p>}
              <button type="submit" className="btn-primary full" disabled={loading}>
                {loading ? 'Sending…' : 'Send Message'}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <p>© 2026 Amy Donald · Social Media & Content Specialist</p>
    </footer>
  )
}

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Ticker />
      <About />
      <Services />
      <Work />
      <Contact />
      <Footer />
    </>
  )
}
