import React, { useRef, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';

const AnimatedBackground: React.FC = () => {
  const { theme } = useTheme();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas dimensions
    const setCanvasSize = () => {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    // Handle window resize
    window.addEventListener('resize', setCanvasSize);
    setCanvasSize();
    
    // Particle class
    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;
      
      constructor() {
        this.x = Math.random() * (canvas?.width || window.innerWidth);
        this.y = Math.random() * (canvas?.height || window.innerHeight);
        this.size = Math.random() * 5 + 1;
        this.speedX = Math.random() * 1 - 0.5;
        this.speedY = Math.random() * 1 - 0.5;
        
        // Different color schemes based on theme
        if (theme === 'dark') {
          const colors = [
            'rgba(94, 234, 212, 0.2)',   // teal
            'rgba(59, 130, 246, 0.2)',   // blue
            'rgba(168, 85, 247, 0.15)',  // purple
            'rgba(239, 68, 68, 0.1)',    // red
          ];
          this.color = colors[Math.floor(Math.random() * colors.length)];
        } else {
          const colors = [
            'rgba(20, 184, 166, 0.1)',   // teal
            'rgba(37, 99, 235, 0.1)',    // blue
            'rgba(147, 51, 234, 0.08)',  // purple
            'rgba(220, 38, 38, 0.05)',   // red
          ];
          this.color = colors[Math.floor(Math.random() * colors.length)];
        }
      }
      
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        
        // Bounce off the edges
        if (this.x > (canvas?.width || window.innerWidth) || this.x < 0) {
          this.speedX = -this.speedX;
        }
        
        if (this.y > (canvas?.height || window.innerHeight) || this.y < 0) {
          this.speedY = -this.speedY;
        }
      }
      
      draw() {
        if (!ctx) return;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    
    // Create particles
    const particleCount = Math.min(Math.max(window.innerWidth / 10, 50), 150);
    const particles: Particle[] = [];
    
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }
    
    // Connect particles with lines
    function connectParticles() {
      if (!canvas || !ctx) return;
      
      const maxDistance = (canvas.width > 1000) ? 100 : 80;
      
      for (let a = 0; a < particles.length; a++) {
        for (let b = a; b < particles.length; b++) {
          const dx = particles[a].x - particles[b].x;
          const dy = particles[a].y - particles[b].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < maxDistance) {
            const opacity = 1 - distance / maxDistance;
            
            ctx.strokeStyle = theme === 'dark' 
              ? `rgba(148, 163, 184, ${opacity * 0.05})`  // Slate-400 for dark mode
              : `rgba(100, 116, 139, ${opacity * 0.03})`; // Slate-500 for light mode
            
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particles[a].x, particles[a].y);
            ctx.lineTo(particles[b].x, particles[b].y);
            ctx.stroke();
          }
        }
      }
    }
    
    // Animation loop
    function animate() {
      if (!ctx || !canvas) return;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      for (const particle of particles) {
        particle.update();
        particle.draw();
      }
      
      connectParticles();
      requestAnimationFrame(animate);
    }
    
    animate();
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', setCanvasSize);
    };
  }, [theme]);
  
  return (
    <canvas 
      ref={canvasRef} 
      className="fixed top-0 left-0 w-full h-full z-0 opacity-70"
    />
  );
};

export default AnimatedBackground; 