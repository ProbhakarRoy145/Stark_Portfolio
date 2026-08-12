import { useEffect, useRef } from 'react';
import './AuroraBackground.css';

/**
 * Animated cosmic background:
 *  - three floating gradient orbs (parallax to mouse)
 *  - subtle grid + noise overlay
 */
export default function AuroraBackground() {
  const wrapRef = useRef(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;

    let rafId;
    let targetX = 0;
    let targetY = 0;
    let currX = 0;
    let currY = 0;

    const onMove = (e) => {
      targetX = (e.clientX / window.innerWidth - 0.5) * 2;
      targetY = (e.clientY / window.innerHeight - 0.5) * 2;
    };

    const tick = () => {
      currX += (targetX - currX) * 0.04;
      currY += (targetY - currY) * 0.04;
      wrap.style.setProperty('--mx', currX.toFixed(3));
      wrap.style.setProperty('--my', currY.toFixed(3));
      rafId = requestAnimationFrame(tick);
    };

    window.addEventListener('mousemove', onMove);
    rafId = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div ref={wrapRef} className="aurora" aria-hidden="true">
      <div className="aurora__grid" />
      <div className="aurora__orb aurora__orb--cyan" />
      <div className="aurora__orb aurora__orb--violet" />
      <div className="aurora__orb aurora__orb--magenta" />
      <div className="aurora__noise" />
      <div className="aurora__vignette" />
    </div>
  );
}
