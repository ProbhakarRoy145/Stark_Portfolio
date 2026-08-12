import { useRef, useState } from 'react';
import { motion } from 'framer-motion';

/**
 * Button that subtly follows the cursor when hovered.
 */
export default function MagneticButton({
  children,
  onClick,
  className = '',
  strength = 24,
  as: Tag = 'button',
  ...rest
}) {
  const ref = useRef(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);
    setPos({ x: (x / rect.width) * strength, y: (y / rect.height) * strength });
  };

  const reset = () => setPos({ x: 0, y: 0 });

  const MotionTag = motion[Tag] || motion.button;

  return (
    <MotionTag
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      onClick={onClick}
      className={className}
      data-cursor="hover"
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: 'spring', stiffness: 180, damping: 18, mass: 0.4 }}
      {...rest}
    >
      <motion.span
        animate={{ x: pos.x * 0.4, y: pos.y * 0.4 }}
        transition={{ type: 'spring', stiffness: 180, damping: 18, mass: 0.4 }}
        style={{ display: 'inline-flex', alignItems: 'center', gap: '0.55rem' }}
      >
        {children}
      </motion.span>
    </MotionTag>
  );
}
