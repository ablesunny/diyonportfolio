import React from 'react';
import { motion } from 'framer-motion';
import { Clapperboard, ScrollText, Award, Film, ArrowDown, Sparkles } from 'lucide-react';
import soundEngine from '../audio/soundEngine';
import { directorBio } from '../data/directorBio';

export default function Act1Hero({ onOpenPitch, onOpenScript }) {
  const handleExploreRepertoire = () => {
    soundEngine.playSlateClapboard();
    const target = document.querySelector('#act-2');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleRequestScript = () => {
    soundEngine.playSlateClapboard();
    onOpenPitch('Screenplay Inquiry: Full Portfolio Request');
  };

  return (
    <section
      id="act-1"
      aria-label="Act I: The Hook"
      className="relative min-h-screen pt-28 pb-20 flex flex-col justify-center items-center overflow-hidden border-b border-gold/15"
    >
      {/* Ambient Warm Projector Spotlight Glow in Background */}
      <div 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full pointer-events-none opacity-20 filter blur-[120px]"
        style={{ background: 'radial-gradient(circle, #D4AF37 0%, #3D2C06 50%, transparent 75%)' }}
      />

      {/* Atmospheric Film Grid Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f2e15_1px,transparent_1px),linear-gradient(to_bottom,#1f1f2e15_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center z-10">

        {/* Director Clapperboard Meta Slate Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex flex-wrap items-center justify-center gap-2 sm:gap-4 px-4 py-1.5 rounded-full bg-noir-charcoal/90 border border-gold/30 text-[11px] font-screenplay text-gold/80 mb-8 backdrop-blur-md shadow-gold-glow"
        >
          <span className="flex items-center gap-1.5 text-gold font-bold">
            <Award className="w-3.5 h-3.5 text-gold animate-bounce" />
            KANNUR UNIVERSITY ARTS FESTIVAL WINNER (2025–26)
          </span>
          <span className="hidden sm:inline text-white/20">•</span>
          <span className="text-script-muted hidden sm:inline">6+ YEARS CRAFT</span>
          <span className="hidden sm:inline text-white/20">•</span>
          <span className="text-gold/90 font-semibold">24 FPS NARRATIVE ARCHITECT</span>
        </motion.div>

        {/* Anchor Martin Scorsese Quote */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="relative max-w-3xl mb-8 group"
        >
          <div className="text-gold/25 font-display text-5xl sm:text-7xl absolute -top-10 -left-6 select-none font-serif">
            “
          </div>
          
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium tracking-wide text-script-heading leading-tight italic">
            "{directorBio.motto.quote}"
          </h2>

          <div className="mt-4 flex flex-col items-center">
            <span className="font-screenplay text-xs sm:text-sm text-gold tracking-widest uppercase">
              — {directorBio.motto.author}
            </span>
            <p className="mt-2 text-sm sm:text-base md:text-lg font-screenplay text-gold-300 font-bold tracking-wide text-gold-glow-subtle">
              {directorBio.motto.subtext}
            </p>
          </div>
        </motion.div>

        {/* Separator Film Strip Perforation */}
        <div className="flex items-center justify-center gap-2 my-4 opacity-40">
          {[...Array(9)].map((_, i) => (
            <div key={i} className="w-2.5 h-4 border border-gold/60 rounded-[1px] bg-obsidian-800" />
          ))}
        </div>

        {/* Director Identity Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="space-y-4 my-4"
        >
          <p className="font-screenplay text-xs sm:text-sm tracking-[0.3em] uppercase text-gold/80">
            CINEMATIC DOSSIER & PORTFOLIO OF
          </p>
          
          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-white uppercase drop-shadow-2xl">
            DIYON <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-gold-200 to-gold-400">GEORGE</span>
          </h1>

          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 font-screenplay text-xs sm:text-sm md:text-base text-script-text/90 pt-1">
            <span className="text-gold font-bold">SCREENWRITER</span>
            <span className="text-gold/40">•</span>
            <span className="text-white font-bold">FILM DIRECTOR</span>
            <span className="text-gold/40">•</span>
            <span className="text-gold font-bold">NARRATIVE ARCHITECT</span>
          </div>
        </motion.div>

        {/* Manifesto Overview Introduction */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-2xl mx-auto text-sm sm:text-base text-script-muted font-sans leading-relaxed my-6"
        >
          Cinema is not a career—it is a complete way of life. Harnessing over 
          <span className="text-gold font-semibold"> 6 years of deep narrative craftsmanship</span> across screenwriting, 
          scene planning, shot blocking, and script breakdowns, backed by strategic operational discipline from 
          <span className="text-script-text font-medium"> Don Bosco Arts and Science College</span>.
        </motion.p>

        {/* Action Buttons with Slate & Reel Audio */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 w-full sm:w-auto"
        >
          <button
            onClick={handleExploreRepertoire}
            className="w-full sm:w-auto px-8 py-4 rounded bg-gradient-to-r from-gold-600 via-gold to-gold-400 text-obsidian font-display font-bold text-sm tracking-wider uppercase hover:shadow-gold-glow hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 group"
          >
            <Clapperboard className="w-4 h-4 transition-transform group-hover:rotate-12" />
            <span>EXPLORE REPERTOIRE</span>
          </button>

          <button
            onClick={handleRequestScript}
            className="w-full sm:w-auto px-8 py-4 rounded border border-gold/40 bg-noir-charcoal/70 text-script-heading font-screenplay text-xs tracking-widest uppercase hover:bg-gold/10 hover:border-gold transition-all duration-300 flex items-center justify-center gap-2"
          >
            <ScrollText className="w-4 h-4 text-gold" />
            <span>REQUEST FULL SCRIPT</span>
          </button>
        </motion.div>

        {/* Bottom Slate Data Strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 p-4 rounded border border-gold/20 bg-noir-card/60 backdrop-blur-sm max-w-3xl w-full text-left font-screenplay text-xs"
        >
          <div>
            <span className="text-gold/60 block text-[10px]">SCENE</span>
            <span className="text-script-heading font-bold">01 (THE HOOK)</span>
          </div>
          <div>
            <span className="text-gold/60 block text-[10px]">DIRECTOR</span>
            <span className="text-script-heading font-bold">DIYON GEORGE</span>
          </div>
          <div>
            <span className="text-gold/60 block text-[10px]">LOCATION</span>
            <span className="text-script-heading font-bold">IRITTY, KERALA</span>
          </div>
          <div>
            <span className="text-gold/60 block text-[10px]">ACCOLADE</span>
            <span className="text-gold font-bold">KANNUR UNIV WINNER</span>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <div className="mt-8 animate-bounce opacity-50">
          <button
            onClick={handleExploreRepertoire}
            aria-label="Scroll to Act II"
            className="text-gold hover:text-white transition-colors"
          >
            <ArrowDown className="w-5 h-5" />
          </button>
        </div>

      </div>
    </section>
  );
}
