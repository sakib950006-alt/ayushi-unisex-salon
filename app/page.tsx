'use client'

import { useState } from 'react'
import Image from 'next/image'
import {
  ArrowUpRight,
  ChevronDown,
  Clock3,
  Camera,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  Scissors,
  Sparkles,
  Star,
  X,
} from 'lucide-react'

const phone = '+919212536990'
const whatsapp = 'https://wa.me/919212536990?text=Hello%20Ayushi%20Unisex%20Salon%2C%20I%27d%20like%20to%20book%20an%20appointment.'

const services = [
  { group: 'Hair', icon: Scissors, items: ['Haircut', 'Hair Styling', 'Hair Spa', 'Hair Smoothening', 'Hair Coloring', 'Keratin Treatment'] },
  { group: 'Beauty', icon: Sparkles, items: ['Facial', 'Cleanup', 'Waxing', 'Threading', 'Bleach'] },
  { group: 'Nails', icon: Sparkles, items: ['Manicure', 'Pedicure', 'Nail Art'] },
  { group: 'Men Grooming', icon: Scissors, items: ['Haircut', 'Beard Styling', 'Hair Treatment'] },
]

const gallery = [
  { src: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1200&q=85', alt: 'Sunlit salon interior', tall: true },
  { src: 'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=900&q=85', alt: 'Stylist working on hair' },
  { src: 'https://images.unsplash.com/photo-1600948836101-f9ffda59d250?auto=format&fit=crop&w=900&q=85', alt: 'Luxury beauty treatment' },
  { src: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=900&q=85', alt: 'Hair styling detail', tall: true },
  { src: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=900&q=85', alt: 'Premium salon chair' },
]

const reviews = [
  ['Sandeep provided an excellent hair wash and valuable hair care advice.', 'A happy client'],
  ['Excellent service quality and premium products. Highly recommended.', 'Verified guest'],
  ['Amazing and smooth experience.', 'Regular client'],
]

function SectionHeading({ eyebrow, title, light = false }: { eyebrow: string; title: string; light?: boolean }) {
  return <div className={`section-heading ${light ? 'section-heading-light' : ''}`}><span>{eyebrow}</span><h2>{title}</h2></div>
}

function BookingModal({ onClose }: { onClose: () => void }) {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const message = [
      'Hello Ayushi Unisex Salon, I would like to book an appointment.',
      '',
      `Name: ${formData.get('name')}`,
      `Phone: ${formData.get('phone')}`,
      `Service: ${formData.get('service') || 'Not specified'}`,
      `Preferred date: ${formData.get('date')}`,
      `Preferred time: ${formData.get('time')}`,
      `Message: ${formData.get('message') || 'None'}`,
    ].join('\\n')

    window.location.href = `https://wa.me/919212536990?text=${encodeURIComponent(message)}`
  }

  return <div className="modal-backdrop" role="presentation" onMouseDown={(e) => e.target === e.currentTarget && onClose()}>
    <div className="booking-modal" role="dialog" aria-modal="true" aria-labelledby="booking-title">
      <button className="modal-close" onClick={onClose} aria-label="Close booking form"><X size={18} /></button>
      <p className="eyebrow">Reserve your ritual</p><h2 id="booking-title">Book an appointment</h2><p className="modal-intro">Complete the details below and continue in WhatsApp to send your request.</p>
      <form className="booking-form" onSubmit={handleSubmit}>
        <label>Name<input required name="name" placeholder="Your full name" /></label>
        <label>Phone<input required type="tel" name="phone" placeholder="+91 00000 00000" /></label>
        <label>Service<select required name="service" defaultValue=""><option value="" disabled>Select a service</option>{services.flatMap((s) => s.items).filter((v, i, a) => a.indexOf(v) === i).map((item) => <option key={item}>{item}</option>)}</select></label>
        <div className="form-row"><label>Date<input required type="date" name="date" /></label><label>Time<input required type="time" name="time" /></label></div>
        <label>Message <span className="optional">Optional</span><textarea name="message" placeholder="Anything we should know?" rows={3} /></label>
        <button className="button button-gold" type="submit">Continue to WhatsApp <MessageCircle size={17} /></button>
      </form>
    </div>
  </div>
}

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [bookingOpen, setBookingOpen] = useState(false)
  const [faq, setFaq] = useState<number | null>(0)
  return <main>
    <header className="site-header"><a className="brand" href="#home"><span className="brand-mark">A</span><span>Ayushi <em>Unisex Salon</em></span></a><nav className={menuOpen ? 'nav-open' : ''}>{['about', 'services', 'gallery', 'reviews', 'team', 'contact'].map((item) => <a key={item} href={`#${item}`} onClick={() => setMenuOpen(false)}>{item}</a>)}<button className="button button-small" onClick={() => { setBookingOpen(true); setMenuOpen(false) }}>Book now <ArrowUpRight size={15} /></button></nav><button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">{menuOpen ? <X /> : <Menu />}</button></header>

    <section className="hero" id="home"><Image className="hero-image" src="https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?auto=format&fit=crop&w=2200&q=90" alt="Elegant Ayushi salon interior" fill priority sizes="100vw" /><div className="hero-shade" /><div className="hero-content"><p className="eyebrow">Saket, New Delhi · Est. 2016</p><h1>Transform your style <i>with experts.</i></h1><p className="hero-copy">A considered approach to hair, beauty and grooming. Your time is precious — spend it somewhere beautiful.</p><div className="hero-actions"><button className="button button-gold" onClick={() => setBookingOpen(true)}>Book appointment <ArrowUpRight size={17} /></button><a className="button button-outline" href={`tel:${phone}`}><Phone size={16} /> Call now</a></div><div className="hero-proof"><div className="rating"><Star size={15} fill="currentColor" /> <strong>4.8</strong> <span>· 66+ reviews</span></div><div className="proof-divider" /><span>Trusted by <strong>5,000+</strong> guests</span></div></div><a className="scroll-cue" href="#about">Scroll to discover <span>↓</span></a></section>

    <section className="intro-section" id="about"><div className="intro-image-wrap"><Image src="https://images.unsplash.com/photo-1522338140262-f46f5913618a?auto=format&fit=crop&w=1100&q=85" alt="Beauty professional preparing a treatment" fill sizes="(max-width: 768px) 100vw, 45vw" /></div><div className="intro-copy"><SectionHeading eyebrow="The Ayushi experience" title="Beauty, made personal." /><p>We believe looking your best should feel like the best part of your day. At Ayushi, every detail is designed around you — from the first consultation to the final mirror moment.</p><p>As a women-owned salon, we bring warmth, expertise and an eye for the details that make a look feel unmistakably yours.</p><a className="text-link" href="#services">Explore our services <ArrowUpRight size={16} /></a></div></section>

    <section className="dark-section services-section" id="services"><SectionHeading light eyebrow="Curated care" title="Your signature, perfected." /><div className="service-grid">{services.map(({ group, icon: Icon, items }) => <article className="service-card" key={group}><div className="service-icon"><Icon size={21} /></div><h3>{group}</h3><ul>{items.map((item) => <li key={item}><span>{item}</span><span className="service-price">Starting at <b>₹—</b></span></li>)}</ul><button className="service-link" onClick={() => setBookingOpen(true)}>Enquire <ArrowUpRight size={15} /></button></article>)}</div></section>

    <section className="gallery-section" id="gallery"><div className="section-topline"><SectionHeading eyebrow="Inside Ayushi" title="A space to exhale." /><a className="text-link" href="https://instagram.com" target="_blank" rel="noreferrer"><Camera size={16} /> Follow our Instagram</a></div><div className="gallery-grid">{gallery.map((image) => <div className={`gallery-tile ${image.tall ? 'gallery-tall' : ''}`} key={image.src}><Image src={image.src} alt={image.alt} fill sizes="(max-width: 768px) 50vw, 25vw" /></div>)}</div></section>

    <section className="dark-section reviews-section" id="reviews"><SectionHeading light eyebrow="Kind words" title="The mirror tells it best." /><div className="review-summary"><div className="big-rating">4.8 <span>★★★★★</span></div><p>Based on <strong>66+ reviews</strong><br />from our salon community</p></div><div className="reviews-grid">{reviews.map(([quote, name]) => <blockquote key={quote}><div className="stars">★★★★★</div><p>“{quote}”</p><footer>— {name}</footer></blockquote>)}</div></section>

    <section className="team-section" id="team"><SectionHeading eyebrow="The hands behind the magic" title="Meet your experts." /><div className="team-grid">{[['Sandeep', 'Hair Expert', 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=800&q=85'], ['Shyam', 'Hair Specialist', 'https://images.unsplash.com/photo-1565050-2f3b1e5b6d8a?auto=format&fit=crop&w=800&q=85'], ['Annu', 'Beauty Expert', 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&w=800&q=85']].map(([name, role, src]) => <div className="team-card" key={name}><div className="team-image"><Image src={src} alt={`${name}, ${role}`} fill sizes="(max-width: 768px) 90vw, 30vw" /></div><h3>{name}</h3><p>{role}</p></div>)}</div></section>

    <section className="faq-section"><div><SectionHeading eyebrow="Good to know" title="Questions, answered." /><p className="faq-note">Still curious? <a href={`tel:${phone}`}>Give us a call.</a></p></div><div className="faq-list">{['Do I need to book in advance?', 'What products do you use?', 'Where can I park?', 'Can I bring a reference photo?'].map((question, i) => <div className={`faq-item ${faq === i ? 'faq-active' : ''}`} key={question}><button onClick={() => setFaq(faq === i ? null : i)} aria-expanded={faq === i}><span>{question}</span><ChevronDown size={18} /></button>{faq === i && <p>{i === 0 ? 'We recommend booking ahead, especially for weekends. Walk-ins are welcome subject to availability.' : i === 1 ? 'We work with premium professional ranges selected for their performance and care.' : i === 2 ? 'Street parking is available around Westend Marg, close to Rose Cafe.' : 'Absolutely. Reference photos help us understand your vision and create a look you love.'}</p>}</div>)}</div></section>

    <section className="contact-section dark-section" id="contact"><div className="contact-copy"><SectionHeading light eyebrow="Come find us" title="Your chair is waiting." /><div className="contact-details"><p><MapPin size={18} /><span>Westend Marg, Opposite Rose Cafe,<br />Saiyad Ul Ajaib Extension, Saket,<br />New Delhi 110030</span></p><p><Clock3 size={18} /><span>Open daily<br /><strong>10:00 AM — 8:00 PM</strong></span></p><p><Phone size={18} /><a href={`tel:${phone}`}>+91 92125 36990</a></p></div><div className="hero-actions"><button className="button button-gold" onClick={() => setBookingOpen(true)}>Book appointment <ArrowUpRight size={17} /></button><a className="button button-outline" href={whatsapp} target="_blank" rel="noreferrer"><MessageCircle size={16} /> WhatsApp us</a></div></div><div className="map-wrap"><iframe title="Ayushi Unisex Salon location" src="https://www.google.com/maps?q=Ayushi%20Unisex%20Salon%20Saket%20New%20Delhi&output=embed" loading="lazy" /></div></section>

    <footer className="site-footer"><a className="brand" href="#home"><span className="brand-mark">A</span><span>Ayushi <em>Unisex Salon</em></span></a><p>Luxury hair, beauty & grooming experience.</p><div><a href="#services">Services</a><a href="#contact">Contact</a><a href="https://instagram.com" target="_blank" rel="noreferrer"><Camera size={17} /></a></div><small>© {new Date().getFullYear()} Ayushi Unisex Salon. Crafted with care.</small></footer>
    <a className="floating-whatsapp" href={whatsapp} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp"><MessageCircle size={22} /></a>
    {bookingOpen && <BookingModal onClose={() => setBookingOpen(false)} />}
  </main>
}
