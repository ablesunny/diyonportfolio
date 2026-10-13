import React from 'react';

/**
 * Animated Audio Waveform visualizer for Soundscape status
 */
export default function AudioWaveform({ isPlaying, className = '' }) {
  return (
    <div className={`flex items-end gap-[2px] h-3.5 px-1 ${className}`} aria-label="Audio Waveform">
      {[40, 75, 100, 60, 85, 30].map((height, i) => (
        <span
          key={i}
          className={`w-[2px] rounded-full transition-all duration-300 ${
            isPlaying ? 'bg-gold animate-pulse' : 'bg-noir-muted/40 h-[2px]'
          }`}
          style={{
            height: isPlaying ? `${height}%` : '2px',
            animationDuration: isPlaying ? `${0.4 + (i % 3) * 0.25}s` : '0s',
            animationDelay: `${i * 0.1}s`,
          }}
        />
      ))}
    </div>
  );
}
