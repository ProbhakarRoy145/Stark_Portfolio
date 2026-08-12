import { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import { experience } from '../data/portfolio';
import './Experience.css';

export default function Experience() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 70%', 'end 60%'],
  });
  const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 25 });

  return (
    <section id="experience" className="experience">
      <div className="container">
        <SectionHeading
          eyebrow="Journey"
          title="The path so far."
          description="A timeline of teams, products and projects that shaped the way I build today."
        />

        <div className="timeline" ref={ref}>
          <div className="timeline__rail">
            <motion.div className="timeline__rail-fill" style={{ scaleY }} />
          </div>

          {experience.map((item, i) => (
            <motion.div
              key={item.role + item.company}
              className="timeline__item"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.7, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="timeline__dot">
                <span />
              </div>
              <div className="timeline__card">
                <div className="timeline__period">{item.period}</div>
                <h3 className="timeline__role">{item.role}</h3>
                <div className="timeline__company">@ {item.company}</div>
                <p className="timeline__desc">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
