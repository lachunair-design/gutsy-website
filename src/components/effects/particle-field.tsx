'use client';

import { useRef, useEffect } from 'react';

interface Particle {
  x: number;
  y: number;
  vy: number;
  vx: number;
  phase: number;
  radius: number;
  alpha: number;
  alphaDir: number;
  color: string;
}

// When fixed=true (site-wide overlay) we keep particles very subtle so they
// don't obscure text on light sections. On dark sections (hero, CTA) they
// become naturally more visible due to the contrast.
const COLORS_GLOBAL = [
  'rgba(255,179,0,0.9)',    // gutsy gold
  'rgba(243,238,228,0.9)',  // gutsy cream
  'rgba(255,255,255,0.8)',  // soft white
  'rgba(255,179,0,0.6)',    // faded gold
];

const COLORS_LOCAL = [
  '#ffb300',
  'rgba(243,238,228,0.75)',
  'rgba(255,255,255,0.55)',
  'rgba(255,179,0,0.4)',
];

interface ParticleFieldProps {
  count?: number;
  /**
   * When true the canvas is position:fixed and covers the full viewport —
   * suitable for use in layout to add ambient particles across all pages.
   * Particles are rendered at lower opacity so they don't obscure content.
   *
   * When false (default) the canvas is position:absolute and fills its
   * nearest positioned parent — suitable for section-level use.
   */
  fixed?: boolean;
}

export function ParticleField({ count, fixed = false }: ParticleFieldProps) {
  // Default count differs between modes
  const particleCount = count ?? (fixed ? 60 : 45);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let animId: number;
    const COLORS = fixed ? COLORS_GLOBAL : COLORS_LOCAL;
    // Global overlay: cap alpha lower so particles are subtle over page content
    const alphaMax = fixed ? 0.28 : 0.7;
    const alphaMin = fixed ? 0.05 : 0.08;

    function setSize() {
      if (!canvas) return;
      if (fixed) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      } else {
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
      }
    }
    setSize();

    const resizeHandler = () => setSize();
    if (fixed) {
      window.addEventListener('resize', resizeHandler);
    }

    const observer = fixed ? null : new ResizeObserver(setSize);
    observer?.observe(canvas);

    const particles: Particle[] = Array.from({ length: particleCount }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vy: -(Math.random() * 0.35 + 0.12),
      vx: (Math.random() - 0.5) * 0.2,
      phase: Math.random() * Math.PI * 2,
      radius: Math.random() * 3.2 + 1,
      alpha: Math.random() * (alphaMax - alphaMin) + alphaMin,
      alphaDir: Math.random() > 0.5 ? 1 : -1,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
    }));

    function tick() {
      if (!canvas || !ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (const p of particles) {
        p.phase += 0.018;
        p.x += p.vx + Math.sin(p.phase) * 0.25;
        p.y += p.vy;

        p.alpha += p.alphaDir * 0.003;
        if (p.alpha >= alphaMax) { p.alpha = alphaMax; p.alphaDir = -1; }
        if (p.alpha <= alphaMin) { p.alpha = alphaMin; p.alphaDir = 1; }

        if (p.y < -8) { p.y = canvas.height + 8; p.x = Math.random() * canvas.width; }
        if (p.x < -8) p.x = canvas.width + 8;
        if (p.x > canvas.width + 8) p.x = -8;

        ctx.save();
        ctx.globalAlpha = p.alpha;
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      animId = requestAnimationFrame(tick);
    }

    tick();

    return () => {
      cancelAnimationFrame(animId);
      observer?.disconnect();
      if (fixed) window.removeEventListener('resize', resizeHandler);
    };
  }, [particleCount, fixed]);

  if (fixed) {
    return (
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className="pointer-events-none"
        style={{
          position: 'fixed',
          inset: 0,
          width: '100vw',
          height: '100vh',
          zIndex: 15,
          // mix-blend-mode: screen makes particles show clearly on dark
          // sections and fade gracefully on light ones
          mixBlendMode: 'screen',
        }}
      />
    );
  }

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 11 }}
    />
  );
}
