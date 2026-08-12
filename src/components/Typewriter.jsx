import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

/**
 * Typewriter effect — types out, pauses, erases, and loops forever.
 * @param {string} text — Full string to type out.
 * @param {number} speed — ms per character typing (default 38).
 * @param {number} deleteSpeed — ms per character erasing (default 20).
 * @param {number} pauseAfterType — ms to wait after full text before erasing (default 2500).
 * @param {number} pauseAfterDelete — ms to wait after erasing before retyping (default 800).
 * @param {number} delay — ms to wait before first typing starts (default 0).
 * @param {string} className — optional class on the wrapper.
 */
export default function Typewriter({
  text,
  speed = 38,
  deleteSpeed = 20,
  pauseAfterType = 2500,
  pauseAfterDelete = 800,
  delay = 0,
  className = '',
}) {
  const [displayed, setDisplayed] = useState('');
  const [phase, setPhase] = useState('waiting'); // waiting | typing | pausing | deleting | pauseBeforeType
  const timerRef = useRef(null);

  // Start after initial delay
  useEffect(() => {
    timerRef.current = setTimeout(() => setPhase('typing'), delay);
    return () => clearTimeout(timerRef.current);
  }, [delay]);

  useEffect(() => {
    if (phase === 'typing') {
      if (displayed.length < text.length) {
        timerRef.current = setTimeout(() => {
          setDisplayed(text.slice(0, displayed.length + 1));
        }, speed);
      } else {
        // Done typing — pause then start deleting
        timerRef.current = setTimeout(() => setPhase('deleting'), pauseAfterType);
      }
    } else if (phase === 'deleting') {
      if (displayed.length > 0) {
        timerRef.current = setTimeout(() => {
          setDisplayed(displayed.slice(0, -1));
        }, deleteSpeed);
      } else {
        // Done deleting — pause then retype
        timerRef.current = setTimeout(() => setPhase('typing'), pauseAfterDelete);
      }
    }

    return () => clearTimeout(timerRef.current);
  }, [phase, displayed, text, speed, deleteSpeed, pauseAfterType, pauseAfterDelete]);

  return (
    <motion.span
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      {displayed}
      <span className="typewriter-cursor" aria-hidden="true">|</span>
    </motion.span>
  );
}
