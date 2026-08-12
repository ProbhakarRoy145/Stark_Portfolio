import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import { skills, marqueeSkills } from '../data/portfolio';
import './Skills.css';

export default function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <SectionHeading
          eyebrow="Toolkit"
          title="Tools I reach for daily."
          description="A rotating palette of frameworks, languages and design tools — picked for the job, not for the hype."
        />

        <div className="skills__grid">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              className="skill"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{
                duration: 0.7,
                delay: (i % 5) * 0.06,
                ease: [0.16, 1, 0.3, 1],
              }}
              data-cursor="hover"
            >
              <div className="skill__head">
                <span className="skill__name">{skill.name}</span>
                <span className="skill__group">{skill.group}</span>
              </div>
              <div className="skill__bar">
                <motion.div
                  className="skill__fill"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                />
              </div>
              <span className="skill__level">{skill.level}</span>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="skills__marquee" aria-hidden="true">
        <motion.div
          className="skills__track"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 40, ease: 'linear', repeat: Infinity }}
        >
          {[...marqueeSkills, ...marqueeSkills].map((tag, i) => (
            <span key={i} className="skills__tag">
              <span className="skills__tag-dot" />
              {tag}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
