import { motion } from 'framer-motion';
import './SectionHeading.css';

export default function SectionHeading({ eyebrow, title, description, align = 'left' }) {
  const words = title.split(' ');
  return (
    <header className={`section-heading section-heading--${align}`}>
      {eyebrow && (
        <motion.div
          className="section-heading__eyebrow"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="section-heading__dot" />
          {eyebrow}
        </motion.div>
      )}
      <h2 className="section-heading__title" data-cursor="text">
        {words.map((w, i) => (
          <span key={i} className="section-heading__word">
            <motion.span
              initial={{ y: '110%' }}
              whileInView={{ y: '0%' }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: i * 0.06 }}
            >
              {w}
              {i < words.length - 1 ? '\u00A0' : ''}
            </motion.span>
          </span>
        ))}
      </h2>
      {description && (
        <motion.p
          className="section-heading__desc"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        >
          {description}
        </motion.p>
      )}
    </header>
  );
}
