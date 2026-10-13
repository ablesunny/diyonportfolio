/**
 * Cinematic Web Audio API Sound Engine
 * Synthesizes acoustic and mechanical cinema SFX with zero external asset dependencies:
 * - 35mm Projector Hum (Low-frequency drone with motor oscillation & subtle mechanical flutter)
 * - Slate Clapboard Snap (Crisp wooden impact with high-frequency acoustic tail)
 * - Film Reel Click (Delicate tactile acoustic sprocket tooth click)
 * - Typewriter Key / Screenplay Slugline Strike
 */

class SoundEngine {
  constructor() {
    this.ctx = null;
    this.isMuted = true;
    this.projectorGain = null;
    this.projectorOsc1 = null;
    this.projectorOsc2 = null;
    this.projectorNoise = null;
    this.isProjectorRunning = false;
    this.masterGain = null;
    this.listeners = new Set();
  }

  init() {
    if (!this.ctx && typeof window !== 'undefined') {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
        this.masterGain = this.ctx.createGain();
        this.masterGain.gain.setValueAtTime(0.7, this.ctx.currentTime);
        this.masterGain.connect(this.ctx.destination);
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  subscribe(listener) {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }

  notify() {
    this.listeners.forEach((fn) => fn({ isMuted: this.isMuted, isProjectorRunning: this.isProjectorRunning }));
  }

  toggleSoundscape() {
    this.init();
    this.isMuted = !this.isMuted;
    
    if (this.isMuted) {
      this.stopProjectorHum();
    } else {
      this.playSlateClapboard();
      this.startProjectorHum();
    }
    this.notify();
    return !this.isMuted;
  }

  setMuted(muted) {
    if (this.isMuted === muted) return;
    this.init();
    this.isMuted = muted;
    if (this.isMuted) {
      this.stopProjectorHum();
    } else {
      this.startProjectorHum();
    }
    this.notify();
  }

  /**
   * Continuous 35mm Projector Motor & Optical Track Hum
   */
  startProjectorHum() {
    if (this.isMuted || !this.ctx || this.isProjectorRunning) return;

    try {
      const t = this.ctx.currentTime;
      this.projectorGain = this.ctx.createGain();
      this.projectorGain.gain.setValueAtTime(0.001, t);
      // Gentle ramp in
      this.projectorGain.gain.exponentialRampToValueAtTime(0.08, t + 1.2);
      this.projectorGain.connect(this.masterGain);

      // Low frequency motor hum (58 Hz & 116 Hz)
      this.projectorOsc1 = this.ctx.createOscillator();
      this.projectorOsc1.type = 'sawtooth';
      this.projectorOsc1.frequency.setValueAtTime(58, t);

      // Filter for warm analog resonance
      const lowpass = this.ctx.createBiquadFilter();
      lowpass.type = 'lowpass';
      lowpass.frequency.setValueAtTime(140, t);
      lowpass.Q.setValueAtTime(3, t);

      this.projectorOsc1.connect(lowpass);
      lowpass.connect(this.projectorGain);

      // White/Brownian noise burst for projector gate & optical audio track hiss
      const bufferSize = this.ctx.sampleRate * 2;
      const noiseBuffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const output = noiseBuffer.getChannelData(0);
      let lastOut = 0.0;
      for (let i = 0; i < bufferSize; i++) {
        const white = Math.random() * 2 - 1;
        output[i] = (lastOut + 0.02 * white) / 1.02; // Pink-brown noise
        lastOut = output[i];
      }

      this.projectorNoise = this.ctx.createBufferSource();
      this.projectorNoise.buffer = noiseBuffer;
      this.projectorNoise.loop = true;

      const noiseFilter = this.ctx.createBiquadFilter();
      noiseFilter.type = 'bandpass';
      noiseFilter.frequency.setValueAtTime(450, t);
      noiseFilter.Q.setValueAtTime(1.5, t);

      const noiseGain = this.ctx.createGain();
      noiseGain.gain.setValueAtTime(0.035, t);

      this.projectorNoise.connect(noiseFilter);
      noiseFilter.connect(noiseGain);
      noiseGain.connect(this.projectorGain);

      this.projectorOsc1.start();
      this.projectorNoise.start();
      this.isProjectorRunning = true;
    } catch (e) {
      console.warn("Projector audio initialization error:", e);
    }
  }

  stopProjectorHum() {
    if (!this.isProjectorRunning || !this.projectorGain || !this.ctx) return;
    try {
      const t = this.ctx.currentTime;
      this.projectorGain.gain.setValueAtTime(this.projectorGain.gain.value, t);
      this.projectorGain.gain.exponentialRampToValueAtTime(0.0001, t + 0.5);
      setTimeout(() => {
        try {
          if (this.projectorOsc1) this.projectorOsc1.stop();
          if (this.projectorNoise) this.projectorNoise.stop();
        } catch (_) {}
        this.isProjectorRunning = false;
      }, 550);
    } catch (e) {
      this.isProjectorRunning = false;
    }
  }

  /**
   * Crisp Wooden Film Slate Clapboard Snap
   */
  playSlateClapboard() {
    if (this.isMuted) return;
    this.init();
    if (!this.ctx) return;

    try {
      const t = this.ctx.currentTime;

      // 1. Transient Impact (High-pitch wooden smack)
      const osc = this.ctx.createOscillator();
      const oscGain = this.ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(800, t);
      osc.frequency.exponentialRampToValueAtTime(140, t + 0.04);

      oscGain.gain.setValueAtTime(0.6, t);
      oscGain.gain.exponentialRampToValueAtTime(0.001, t + 0.05);

      osc.connect(oscGain);
      oscGain.connect(this.masterGain);
      osc.start(t);
      osc.stop(t + 0.06);

      // 2. Wooden resonance noise burst
      const bufferSize = Math.floor(this.ctx.sampleRate * 0.12);
      const noiseBuffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const data = noiseBuffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (this.ctx.sampleRate * 0.015));
      }

      const noise = this.ctx.createBufferSource();
      noise.buffer = noiseBuffer;

      const bandpass = this.ctx.createBiquadFilter();
      bandpass.type = 'bandpass';
      bandpass.frequency.setValueAtTime(1600, t);
      bandpass.Q.setValueAtTime(2.0, t);

      const noiseGain = this.ctx.createGain();
      noiseGain.gain.setValueAtTime(0.7, t);
      noiseGain.gain.exponentialRampToValueAtTime(0.001, t + 0.1);

      noise.connect(bandpass);
      bandpass.connect(noiseGain);
      noiseGain.connect(this.masterGain);

      noise.start(t);
      noise.stop(t + 0.12);
    } catch (e) {
      console.warn("Slate clapboard audio error:", e);
    }
  }

  /**
   * Subtle Mechanical Film Reel Sprocket Click
   */
  playReelClick() {
    if (this.isMuted) return;
    this.init();
    if (!this.ctx) return;

    try {
      const t = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      // High delicate pitch tick
      const freq = 1400 + Math.random() * 300;
      osc.frequency.setValueAtTime(freq, t);
      osc.frequency.exponentialRampToValueAtTime(220, t + 0.02);

      gain.gain.setValueAtTime(0.12, t);
      gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.025);

      osc.connect(gain);
      gain.connect(this.masterGain);

      osc.start(t);
      osc.stop(t + 0.03);
    } catch (e) {
      // Ignored for subtle interaction
    }
  }

  /**
   * Screenplay Typewriter Key Stroke
   */
  playTypewriter() {
    if (this.isMuted) return;
    this.init();
    if (!this.ctx) return;

    try {
      const t = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'square';
      osc.frequency.setValueAtTime(950 + Math.random() * 200, t);
      osc.frequency.exponentialRampToValueAtTime(180, t + 0.035);

      gain.gain.setValueAtTime(0.2, t);
      gain.gain.exponentialRampToValueAtTime(0.001, t + 0.04);

      osc.connect(gain);
      gain.connect(this.masterGain);

      osc.start(t);
      osc.stop(t + 0.045);
    } catch (e) {}
  }
}

export const soundEngine = new SoundEngine();
export default soundEngine;
