import { useState } from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import MagneticButton from '../components/MagneticButton';
import { profile } from '../data/portfolio';
import './Contact.css';

export default function Contact() {
  const [status, setStatus] = useState('idle');
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');
    // Simulated send — replace with your actual integration.
    setTimeout(() => setStatus('sent'), 1100);
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something memorable."
          description="Have a project, a role or a wild idea? Drop me a note — I read every message and reply within a day or two."
          align="center"
        />

        <div className="contact__grid">
          <motion.div
            className="contact__info"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h3 className="contact__info-title">
              Reach out
              <br />
              <span className="text-gradient">directly.</span>
            </h3>
            <a className="contact__mail" href={`mailto:${profile.email}`} data-cursor="hover">
              {profile.email}
            </a>
            <a className="contact__mail" href={`tel:${profile.phone.replace(/\s/g, '')}`} data-cursor="hover">
              {profile.phone}
            </a>
            <div className="contact__detail">
              <span className="contact__detail-label">Location</span>
              <span>{profile.location}</span>
            </div>
            <div className="contact__detail">
              <span className="contact__detail-label">Response time</span>
              <span>Usually within 24h</span>
            </div>
            <div className="contact__socials">
              {profile.social.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noreferrer" data-cursor="hover">
                  {s.label}
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path d="M2 8L8 2M8 2H3.5M8 2V6.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              ))}
            </div>
          </motion.div>

          <motion.form
            className="contact__form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="field">
              <input
                id="name"
                name="name"
                type="text"
                value={form.name}
                onChange={handleChange}
                required
                placeholder=" "
                autoComplete="name"
              />
              <label htmlFor="name">Your name</label>
            </div>
            <div className="field">
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder=" "
                autoComplete="email"
              />
              <label htmlFor="email">Email address</label>
            </div>
            <div className="field field--area">
              <textarea
                id="message"
                name="message"
                rows={5}
                value={form.message}
                onChange={handleChange}
                required
                placeholder=" "
              />
              <label htmlFor="message">Tell me about your project</label>
            </div>

            <MagneticButton
              type="submit"
              className={`btn btn--primary contact__submit ${status === 'sent' ? 'is-sent' : ''}`}
              strength={20}
            >
              {status === 'idle' && 'Send message'}
              {status === 'sending' && 'Sending…'}
              {status === 'sent' && 'Message sent ✓'}
            </MagneticButton>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
