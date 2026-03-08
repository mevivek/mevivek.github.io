import React, { useRef, useEffect, useCallback } from 'react';
import { useTheme } from '../context/ThemeContext';

const AnimatedBackground: React.FC = () => {
  const { theme } = useTheme();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>(0);

  const isMobile = useCallback(() => window.innerWidth < 768, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const setCanvasSize = () => {
      if (!canvas) return;
      // Use devicePixelRatio for sharp rendering but limit for performance
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.scale(dpr, dpr);
    };

    let resizeTimer: ReturnType<typeof setTimeout>;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(setCanvasSize, 150);
    };

    window.addEventListener('resize', handleResize);
    setCanvasSize();

    // Reduce particles on mobile for battery life
    const particleCount = isMobile()
      ? Math.min(Math.max(window.innerWidth / 20, 20), 40)
      : Math.min(Math.max(window.innerWidth / 10, 50), 120);

    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;

      constructor() {
        this.x = Math.random() * window.innerWidth;
        this.y = Math.random() * window.innerHeight;
        this.size = Math.random() * 5 + 1;
        this.speedX = Math.random() * 1 - 0.5;
        this.speedY = Math.random() * 1 - 0.5;

        if (theme === 'dark') {
          const colors = [
            'rgba(94, 234, 212, 0.2)',
            'rgba(59, 130, 246, 0.2)',
            'rgba(168, 85, 247, 0.15)',
            'rgba(239, 68, 68, 0.1)',
          ];
          this.color = colors[Math.floor(Math.random() * colors.length)];
        } else {
          const colors = [
            'rgba(20, 184, 166, 0.1)',
            'rgba(37, 99, 235, 0.1)',
            'rgba(147, 51, 234, 0.08)',
            'rgba(220, 38, 38, 0.05)',
          ];
          this.color = colors[Math.floor(Math.random() * colors.length)];
        }
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > window.innerWidth || this.x < 0) this.speedX = -this.speedX;
        if (this.y > window.innerHeight || this.y < 0) this.speedY = -this.speedY;
      }

      draw() {
        if (!ctx) return;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const particles: Particle[] = [];
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    // Skip connection lines on mobile entirely
    const shouldDrawLines = !isMobile();

    function connectParticles() {
      if (!canvas || !ctx || !shouldDrawLines) return;

      const maxDistance = window.innerWidth > 1000 ? 100 : 80;

      for (let a = 0; a < particles.length; a++) {
        for (let b = a + 1; b < particles.length; b++) {
          const dx = particles[a].x - particles[b].x;
          const dy = particles[a].y - particles[b].y;
          const distSq = dx * dx + dy * dy;

          if (distSq < maxDistance * maxDistance) {
            const opacity = 1 - Math.sqrt(distSq) / maxDistance;
            ctx.strokeStyle = theme === 'dark'
              ? `rgba(148, 163, 184, ${opacity * 0.05})`
              : `rgba(100, 116, 139, ${opacity * 0.03})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particles[a].x, particles[a].y);
            ctx.lineTo(particles[b].x, particles[b].y);
            ctx.stroke();
          }
        }
      }
    }

    function animate() {
      if (!ctx || !canvas) return;

      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

      for (const particle of particles) {
        particle.update();
        particle.draw();
      }

      connectParticles();
      animationRef.current = requestAnimationFrame(animate);
    }

    animate();

    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener('resize', handleResize);
      clearTimeout(resizeTimer);
    };
  }, [theme, isMobile]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full z-0 opacity-70"
      aria-hidden="true"
    />
  );
};

export default AnimatedBackground;
