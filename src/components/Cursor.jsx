import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import './Cursor.css';

/**
 * Two-layer cursor: a soft glow dot and a delayed outline ring.
 * Grows when hovering interactive elements.
 */
export default function Cursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);

  const ringX = useSpring(x, { stiffness: 220, damping: 22, mass: 0.6 });
  const ringY = useSpring(y, { stiffness: 220, damping: 22, mass: 0.6 });

  const dotX = useSpring(x, { stiffness: 700, damping: 38, mass: 0.4 });
  const dotY = useSpring(y, { stiffness: 700, damping: 38, mass: 0.4 });

  const [variant, setVariant] = useState('default');
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const move = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
      if (!visible) setVisible(true);
    };
    const leave = () => setVisible(false);

    const handleOver = (e) => {
      const target = e.target;
      if (target.closest('a, button, [data-cursor="hover"]')) {
        setVariant('hover');
      } else if (target.closest('[data-cursor="text"]')) {
        setVariant('text');
      } else {
        setVariant('default');
      }
    };

    window.addEventListener('mousemove', move);
    window.addEventListener('mouseleave', leave);
    window.addEventListener('mouseover', handleOver);
    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseleave', leave);
      window.removeEventListener('mouseover', handleOver);
    };
  }, [x, y, visible]);

  return (
    <>
      <motion.div
        className={`cursor-ring cursor-ring--${variant}`}
        style={{ x: ringX, y: ringY, opacity: visible ? 1 : 0 }}
      />
      <motion.div
        className={`cursor-dot cursor-dot--${variant}`}
        style={{ x: dotX, y: dotY, opacity: visible ? 1 : 0 }}
      />
    </>
  );
}
