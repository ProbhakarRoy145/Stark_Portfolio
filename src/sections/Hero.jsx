import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { profile } from '../data/portfolio';
import MagneticButton from '../components/MagneticButton';
import Typewriter from '../components/Typewriter';
import { scrollTo } from '../hooks/useSmoothScroll';
import './Hero.css';

const avatarUrl = '/avatar.png';
const headline = ['Engineering', 'systems', 'that', 'scale.'];

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.94]);
  const avatarY = useTransform(scrollYProgress, [0, 1], ['0%', '-12%']);

  return (
    <section id="home" ref={ref} className="hero">
      <div className="hero__inner container">
        <motion.div className="hero__copy" style={{ y, opacity, scale }}>
          <motion.div
            className="hero__tag"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="hero__tag-pulse" />
            Software Consulting Engineer · Cisco
          </motion.div>

          <h1 className="hero__title" data-cursor="text">
            {headline.map((word, i) => (
              <span key={i} className="hero__word">
                <motion.span
                  initial={{ y: '110%' }}
                  animate={{ y: '0%' }}
                  transition={{
                    duration: 1.05,
                    delay: 0.15 + i * 0.07,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className={i === 3 ? 'text-gradient hero__word--accent' : ''}
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </h1>

          <p className="hero__lede">
            <Typewriter
              text={`I'm ${profile.name} — a ${profile.role.toLowerCase()} at Cisco in ${profile.location}. I build full-stack network platforms, AI/ML-driven applications and deployment automation.`}
              speed={35}
              delay={900}
            />
          </p>

          <motion.div
            className="hero__actions"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <MagneticButton className="btn btn--primary" onClick={() => scrollTo('#work')}>
              See selected work
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </MagneticButton>
            <MagneticButton className="btn btn--ghost" onClick={() => scrollTo('#contact')} strength={16}>
              Get in touch
            </MagneticButton>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero__avatar"
          style={{ y: avatarY }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="hero__avatar-stage">
            <div className="hero__avatar-ring hero__avatar-ring--1" />
            <div className="hero__avatar-ring hero__avatar-ring--2" />
            <div className="hero__avatar-glow" />
            <motion.img
              src={avatarUrl}
              alt={`${profile.name} — 3D avatar`}
              className="hero__avatar-img"
              draggable={false}
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, ease: 'easeInOut', repeat: Infinity }}
            />
            <div className="hero__orbit">
              <motion.div
                className="hero__chip hero__chip--1"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.7 }}
              >
                <span className="hero__chip-dot" /> SWE @ Cisco
              </motion.div>
              <motion.div
                className="hero__chip hero__chip--2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.4, duration: 0.7 }}
              >
                <span className="hero__chip-emoji">⚡</span> Python · AI/ML · Django
              </motion.div>
              <motion.div
                className="hero__chip hero__chip--3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.6, duration: 0.7 }}
              >
                <span className="hero__chip-emoji">★</span> Full-Stack · React · Angular
              </motion.div>
              
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="hero__meta container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.3 }}
        style={{ opacity }}
      >
        <div>
          <span className="hero__meta-label">Currently</span>
          <span className="hero__meta-value">Software Consulting Engineerin @ CISCO</span>
        </div>
        <div>
          <span className="hero__meta-label">Based in</span>
          <span className="hero__meta-value">{profile.location}</span>
        </div>
        <div>
          <span className="hero__meta-label">Stack</span>
          <span className="hero__meta-value">Python · AI/ML · Django · Full-Stack · NSO</span>
        </div>
      </motion.div>

      <motion.div
        className="hero__scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.6 }}
        style={{ opacity }}
      >
        <span>Scroll</span>
        <div className="hero__scroll-bar"><div className="hero__scroll-fill" /></div>
      </motion.div>
    </section>
  );
}
