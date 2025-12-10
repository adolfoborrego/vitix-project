'use client';
import { useEffect, useRef } from 'react';

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const hearts: Array<{
      x: number;
      y: number;
      size: number;
      speedY: number;
      speedX: number;
      opacity: number;
    }> = [];

    // Crear corazones
    for (let i = 0; i < 30; i++) {
      hearts.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 20 + 10,
        speedY: Math.random() * 1 + 0.5,
        speedX: Math.random() * 0.5 - 0.25,
        opacity: Math.random() * 0.5 + 0.3,
      });
    }

    function drawHeart(x: number, y: number, size: number, opacity: number) {
      if (!ctx) return;
      
      ctx.save();
      ctx.globalAlpha = opacity;
      ctx.fillStyle = '#ff6b9d';
      ctx.beginPath();
      
      const topCurveHeight = size * 0.3;
      ctx.moveTo(x, y + topCurveHeight);
      
      // Curva izquierda superior
      ctx.bezierCurveTo(
        x, y, 
        x - size / 2, y, 
        x - size / 2, y + topCurveHeight
      );
      
      // Curva izquierda inferior
      ctx.bezierCurveTo(
        x - size / 2, y + (size + topCurveHeight) / 2, 
        x, y + (size + topCurveHeight) / 2, 
        x, y + size
      );
      
      // Curva derecha inferior
      ctx.bezierCurveTo(
        x, y + (size + topCurveHeight) / 2, 
        x + size / 2, y + (size + topCurveHeight) / 2, 
        x + size / 2, y + topCurveHeight
      );
      
      // Curva derecha superior
      ctx.bezierCurveTo(
        x + size / 2, y, 
        x, y, 
        x, y + topCurveHeight
      );
      
      ctx.closePath();
      ctx.fill();
      ctx.restore();
    }

    function animate() {
      if (!ctx || !canvas) return;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      hearts.forEach((heart) => {
        drawHeart(heart.x, heart.y, heart.size, heart.opacity);
        
        heart.y -= heart.speedY;
        heart.x += heart.speedX;

        // Resetear corazón cuando sale de la pantalla
        if (heart.y + heart.size < 0) {
          heart.y = canvas.height + heart.size;
          heart.x = Math.random() * canvas.width;
        }

        if (heart.x < -heart.size) {
          heart.x = canvas.width + heart.size;
        } else if (heart.x > canvas.width + heart.size) {
          heart.x = -heart.size;
        }
      });

      requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.6 }}
    />
  );
}
