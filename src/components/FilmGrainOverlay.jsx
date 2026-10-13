import React, { useEffect, useRef } from 'react';

/**
 * Procedural 35mm Film Grain Canvas Overlay
 * Simulates analog celluloid film texture dynamically
 */
export default function FilmGrainOverlay({ opacity = 0.045 }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let width = 0;
    let height = 0;

    const resize = () => {
      width = canvas.width = window.innerWidth / 2; // Render at half res for buttery 60fps performance
      height = canvas.height = window.innerHeight / 2;
    };

    resize();
    window.addEventListener('resize', resize);

    let lastTime = 0;
    const fpsInterval = 1000 / 14; // 14 FPS grain jitter for authentic vintage celluloid motion

    const render = (time) => {
      animationFrameId = requestAnimationFrame(render);
      const elapsed = time - lastTime;
      if (elapsed < fpsInterval) return;
      lastTime = time - (elapsed % fpsInterval);

      if (!ctx || width === 0 || height === 0) return;

      const imgData = ctx.createImageData(width, height);
      const buffer = new Uint32Array(imgData.data.buffer);
      const len = buffer.length;

      for (let i = 0; i < len; i++) {
        // High-contrast monochromatic celluloid grain
        const noise = (Math.random() * 255) | 0;
        // 32-bit packed RGBA: (alpha << 24) | (blue << 16) | (green << 8) | red
        buffer[i] = (255 << 24) | (noise << 16) | (noise << 8) | noise;
      }

      ctx.putImageData(imgData, 0, 0);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden mix-blend-screen" aria-hidden="true">
      <canvas
        ref={canvasRef}
        style={{ opacity }}
        className="h-full w-full object-cover scale-105 filter contrast-150 brightness-110"
      />
      {/* 35mm Optical Vignette */}
      <div className="absolute inset-0 bg-radial-gradient pointer-events-none opacity-80" 
           style={{ background: 'radial-gradient(circle at 50% 50%, rgba(5,5,7,0) 45%, rgba(5,5,7,0.7) 100%)' }} />
    </div>
  );
}
