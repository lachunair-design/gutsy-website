'use client';

import { useId, useRef, useEffect } from 'react';
import gsap from 'gsap';

const MARQUEE_TEXT =
  'FEELS LIGHT  •  NO BLOAT  •  PRE-DIGESTED  •  VEGAN  •  GUT FRIENDLY  •  ';

interface RadialMarqueeProps {
  radius?: number;
  fontSize?: number;
  /** Duration in seconds for one full rotation */
  speed?: number;
  color?: string;
  className?: string;
}

export function RadialMarquee({
  radius = 100,
  fontSize = 10.5,
  speed = 28,
  color = 'rgba(255,255,255,0.30)',
  className = '',
}: RadialMarqueeProps) {
  const uid = useId().replace(/:/g, '');
  const pathId = `rmp-${uid}`;
  const groupRef = useRef<SVGGElement>(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const ctx = gsap.context(() => {
      gsap.to(groupRef.current, {
        rotation: 360,
        duration: speed,
        repeat: -1,
        ease: 'none',
        transformOrigin: '50% 50%',
      });
    });

    return () => ctx.revert();
  }, [speed]);

  // SVG viewport is a square just big enough to fit the text circle
  const padding = fontSize * 2;
  const size = (radius + padding) * 2;
  const cx = size / 2;
  const cy = size / 2;

  // Counter-clockwise circle path so text reads naturally when rotated
  const d = [
    `M ${cx},${cy}`,
    `m -${radius},0`,
    `a ${radius},${radius} 0 1,1 ${radius * 2},0`,
    `a ${radius},${radius} 0 1,1 -${radius * 2},0`,
  ].join(' ');

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      className={className}
      aria-hidden="true"
      style={{ overflow: 'visible' }}
    >
      <defs>
        <path id={pathId} d={d} />
      </defs>

      <g ref={groupRef}>
        <text
          fill={color}
          fontSize={fontSize}
          fontFamily="inherit"
          letterSpacing="2.5"
          fontWeight="700"
          textRendering="geometricPrecision"
        >
          <textPath href={`#${pathId}`} startOffset="0%">
            {MARQUEE_TEXT}
          </textPath>
        </text>
      </g>
    </svg>
  );
}
