'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Particle system
    const particles: {
      x: number;
      y: number;
      z: number;
      vx: number;
      vy: number;
      vz: number;
      size: number;
    }[] = [];

    const particleCount = 200;
    const spread = 100;

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: (Math.random() - 0.5) * spread,
        y: (Math.random() - 0.5) * spread,
        z: (Math.random() - 0.5) * spread,
        vx: (Math.random() - 0.5) * 0.02,
        vy: (Math.random() - 0.5) * 0.02,
        vz: (Math.random() - 0.5) * 0.02,
        size: Math.random() * 1.5 + 0.5,
      });
    }

    // Mouse interaction
    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Animation loop
    let animationId: number;
    const animate = () => {
      if (!ctx || !canvas) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.forEach((particle) => {
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.z += particle.vz;

        // Mouse influence
        particle.x += mouseX * 0.01;
        particle.y += mouseY * 0.01;

        // Wrap around
        if (particle.x > spread) particle.x -= spread * 2;
        if (particle.x < -spread) particle.x += spread * 2;
        if (particle.y > spread) particle.y -= spread * 2;
        if (particle.y < -spread) particle.y += spread * 2;
        if (particle.z > spread) particle.z -= spread * 2;
        if (particle.z < -spread) particle.z += spread * 2;

        // Project 3D to 2D
        const fov = 300;
        const scale = fov / (fov + particle.z + spread);
        const x2d = (particle.x * scale + canvas.width / 2);
        const y2d = (particle.y * scale + canvas.height / 2);

        // Draw particle
        const alpha = Math.min(1, scale * 0.6);
        ctx.fillStyle = `rgba(252, 79, 47, ${alpha})`;
        ctx.beginPath();
        ctx.arc(x2d, y2d, particle.size * scale, 0, Math.PI * 2);
        ctx.fill();
      });

      // Draw connections
      ctx.strokeStyle = 'rgba(252, 79, 47, 0.03)';
      ctx.lineWidth = 0.5;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dz = particles[i].z - particles[j].z;
          const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

          if (dist < 15) {
            const fov = 300;
            const scale1 = fov / (fov + particles[i].z + spread);
            const x1 = particles[i].x * scale1 + canvas.width / 2;
            const y1 = particles[i].y * scale1 + canvas.height / 2;

            const scale2 = fov / (fov + particles[j].z + spread);
            const x2 = particles[j].x * scale2 + canvas.width / 2;
            const y2 = particles[j].y * scale2 + canvas.height / 2;

            ctx.globalAlpha = (1 - dist / 15) * 0.15;
            ctx.beginPath();
            ctx.moveTo(x1, y1);
            ctx.lineTo(x2, y2);
            ctx.stroke();
          }
        }
      }
      ctx.globalAlpha = 1;

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id="hero-canvas"
      className="absolute inset-0 z-0"
      style={{ background: 'transparent' }}
    />
  );
}
