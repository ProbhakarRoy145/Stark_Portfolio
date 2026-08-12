import { motion } from 'framer-motion';
import { profile } from '../data/portfolio';
import './Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container">
        <motion.div
        
          className="footer__cta"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="footer__cta-eyebrow">Open to collaborations</span>
          <h2 className="footer__cta-title" data-cursor="text">
            Let's make the <em className="text-gradient">internet</em>
            <br />
            a little more <em className="text-gradient">alive.</em>
          </h2>
        </motion.div>

        <div className="footer__bar">
          <span>© {year} {profile.name}. Crafted with care.</span>
          <span className="footer__bar-mid">Built with React · Framer Motion · Lenis</span>
          <div className="footer__bar-socials">
            {profile.social.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noreferrer" data-cursor="hover">
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="footer__big" aria-hidden="true">
        {profile.name}
      </div>
    </footer>
  );
}