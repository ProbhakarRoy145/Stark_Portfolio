import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import { useRef } from 'react';
import SectionHeading from '../components/SectionHeading';
import { stats, languages, hobbies } from '../data/portfolio';
import './About.css';

export default function About() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ['-8%', '8%']);

  // Cursor-driven 3D tilt (mirrors Projects card behavior)
  const visualRef = useRef(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotX = useSpring(useTransform(my, [-0.5, 0.5], [8, -8]), { stiffness: 200, damping: 20 });
  const rotY = useSpring(useTransform(mx, [-0.5, 0.5], [-10, 10]), { stiffness: 200, damping: 20 });

  const handleVisualMove = (e) => {
    const rect = visualRef.current.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  };
  const resetVisual = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <section id="about" ref={ref} className="about">
      <div className="container about__inner">
        <SectionHeading
          eyebrow="About"
          title="Engineer behind the network and the AI on top of it."
          description="A Software Consulting Engineer at Cisco with hands-on experience across full-stack development, network management platforms, AI/ML-driven applications and deployment automation — from back-end to front-end."
        />

        <div className="about__grid">
          <div className="about__body">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              I build scalable solutions for network troubleshooting, data processing, observability and
              automation across <span className="about__hl">cloud and on-prem</span> infrastructure. My day-to-day
              spans Python, Django REST, React.js, AngularJS, AI/ML.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              Strong on REST APIs, frontend engineering and backend integration with a deep
              understanding of data structures & algorithms — 250+ (Counting) problems solved and counting.
              Equipped with practical knowledge of AI/ML, NLP and RAG pipelines, and happiest working in
              cross-functional teams shipping enterprise-grade applications. Outside of code, I sing, write,
              cook and edit video.
            </motion.p>

            <ul className="about__stats">
              {stats.map((s, i) => (
                <motion.li
                  key={s.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                >
                  <span className="about__stat-value text-gradient">{s.value}</span>
                  <span className="about__stat-label">{s.label}</span>
                </motion.li>
              ))}
            </ul>

            <div className="about__chips">
              <div className="about__chips-group">
                <span className="about__chips-label">Languages</span>
                <div className="about__chips-row">
                  {languages.map((l) => (
                    <span key={l} className="about__chip">{l}</span>
                  ))}
                </div>
              </div>
              <div className="about__chips-group">
                <span className="about__chips-label">Beyond code</span>
                <div className="about__chips-row">
                  {hobbies.map((h) => (
                    <span key={h} className="about__chip">{h}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <motion.div
            ref={visualRef}
            className="about__visual"
            style={{ y: imgY, rotateX: rotX, rotateY: rotY, transformPerspective: 1000 }}
            onMouseMove={handleVisualMove}
            onMouseLeave={resetVisual}
            data-cursor="hover"
          >
            <div className="about__visual-inner glass">
              <img
                src="/1000220349.jpg"
                alt="Probhakar Roy — Cisco illustration"
                className="about__photo"
                draggable={false}
              />
              <div className="about__visual-overlay">
                <div className="about__visual-row">
                  <span>// cisco.engineer</span>
                  <span className="about__visual-dot" />
                </div>
                <div className="about__visual-foot">
                    <span>Software Consulting Engineer</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}