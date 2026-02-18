'use client';

import { useRef } from 'react';
import { motion, useSpring } from 'framer-motion';

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  /**
   * How far (in px) the element pulls toward the cursor.
   * Range: 0–1 multiplier on the distance from center.
   * Default: 0.35 (roughly 10–15px at typical button sizes)
   */
  strength?: number;
}

/**
 * Wraps any button/link so it subtly pulls toward the cursor on hover.
 * Uses Framer Motion springs for natural, physics-based movement.
 * Returns to center automatically when the cursor leaves.
 */
export function MagneticButton({
  children,
  className,
  strength = 0.35,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);

  // Spring config: medium stiffness feels premium — not instant, not floppy
  const springConfig = { stiffness: 180, damping: 14, mass: 0.1 };
  const x = useSpring(0, springConfig);
  const y = useSpring(0, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    // Clamp to max 15px in any direction to keep it subtle
    const rawX = (e.clientX - centerX) * strength;
    const rawY = (e.clientY - centerY) * strength;
    x.set(Math.max(-15, Math.min(15, rawX)));
    y.set(Math.max(-15, Math.min(15, rawY)));
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      style={{ x, y }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
    >
      {children}
    </motion.div>
  );
}
