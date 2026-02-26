'use client';

import { useRef, useEffect } from 'react';

interface Particle {
  x: number;
  y: number;
  vy: number; // upward drift speed
  vx: number; // base horizontal speed
  phase: number; // for sine-wave sway
  radius: number;
  alpha: number;
  alphaDir: number; // +1 or -1
  color: string;
}

const COLORS = [
  '#ffb300', // gutsy gold
  'rgba(243,238,228,0.75)', // gutsy cream
  'rgba(255,255,255,0.55)', // soft white
  'rgba(255,179,0,0.4)', // faded gold
];

export function ParticleField({ count = 55 }: { count?: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Respect reduced-motion preference
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let animId: number;

    function setSize() {
      if (!canvas) return;
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    }
    setSize();

    const observer = new ResizeObserver(setSize);
    observer.observe(canvas);

    // Build particle pool
    const particles: Particle[] = Array.from({ length: count }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vy: -(Math.random() * 0.4 + 0.15),
      vx: (Math.random() - 0.5) * 0.2,
      phase: Math.random() * Math.PI * 2,
      radius: Math.random() * 2.5 + 0.8,
      alpha: Math.random() * 0.45 + 0.1,
      alphaDir: Math.random() > 0.5 ? 1 : -1,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
    }));

    function tick() {
      if (!canvas || !ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (const p of particles) {
        // Move
        p.phase += 0.018;
        p.x += p.vx + Math.sin(p.phase) * 0.25;
        p.y += p.vy;

        // Pulse alpha
        p.alpha += p.alphaDir * 0.004;
        if (p.alpha >= 0.6) { p.alpha = 0.6; p.alphaDir = -1; }
        if (p.alpha <= 0.06) { p.alpha = 0.06; p.alphaDir = 1; }

        // Wrap top → reset at bottom
        if (p.y < -8) {
          p.y = canvas.height + 8;
          p.x = Math.random() * canvas.width;
        }
        if (p.x < -8) p.x = canvas.width + 8;
        if (p.x > canvas.width + 8) p.x = -8;

        // Draw
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
      observer.disconnect();
    };
  }, [count]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 11 }} // above hero image (z-0), below text (z-20)
    />
  );
}
