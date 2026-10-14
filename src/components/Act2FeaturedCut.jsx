import React from 'react';
import { motion } from 'framer-motion';
import { Award, Play, BookOpen, Film, Clock, Eye, Sparkles, ShieldCheck } from 'lucide-react';
import soundEngine from '../audio/soundEngine';
import { projects } from '../data/projects';

export default function Act2FeaturedCut({ onOpenScreener, onOpenScriptDrawer, onOpenDetail }) {
  const featured = projects.find(p => p.id === 'hunger-man-justice') || projects[0];

  const handleReadScript = () => {
    soundEngine.playSlateClapboard();
    onOpenScriptDrawer(featured.id);
  };

  const handleRequestScreener = () => {
    soundEngine.playSlateClapboard();
    onOpenScreener(featured);
  };

  const handleViewDossier = () => {
    soundEngine.playReelClick();
    onOpenDetail(featured);
  };

  return (
    <section
      id="act-2"
      aria-label="Act II: The Featured Cut"
      className="relative py-28 px-4 sm:px-6 lg:px-8 border-b border-gold/15 bg-obsidian-950 overflow-hidden"
    >
      {/* Cinematic Spotlight Backlight */}
      <div 
        className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[550px] h-[550px] rounded-full pointer-events-none opacity-15 filter blur-[140px]"
        style={{ background: 'radial-gradient(circle, #D4AF37 0%, #161622 70%, transparent 100%)' }}
      />

      <div className="max-w-7xl mx-auto">
        
        {/* Section Act Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 pb-6 border-b border-gold/20">
          <div>
            <div className="flex items-center gap-2 font-screenplay text-xs text-gold tracking-widest uppercase mb-2">
              <span className="w-8 h-[1px] bg-gold" />
              <span>ACT II: THE FEATURED CUT</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              AWARD-WINNING SHORT SHOWCASE
            </h2>
          </div>

          <div className="mt-4 sm:mt-0 font-screenplay text-xs text-script-muted flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            <span>FESTIVAL RUN / SCREENER READY</span>
          </div>
        </div>

        {/* Featured Project Layout: 2 Columns (Poster + Deep Dossier) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Film Poster Showcase Slot */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5"
          >
            <div className="relative group rounded-lg overflow-hidden border-2 border-gold/40 bg-noir-card shadow-2xl transition-all duration-500 hover:border-gold hover:shadow-gold-glow">
              
              {/* Poster Visual Frame / Graphic Representation */}
              <div className="relative aspect-[2/3] w-full bg-gradient-to-b from-obsidian-900 via-obsidian-850 to-obsidian flex flex-col justify-between p-6 sm:p-8">
                
                {/* Background Texture & Film Motif */}
                <div className="absolute inset-0 bg-[radial-gradient(#d4af3715_1px,transparent_1px)] [background-size:16px_16px] opacity-40 pointer-events-none" />

                {/* Top Poster Meta: Festival Accolade Laurels */}
                <div className="relative z-10 flex flex-col items-center text-center">
                  <div className="flex items-center gap-2 text-gold py-1 px-3 rounded-full border border-gold/40 bg-obsidian-950/80 backdrop-blur-md mb-2 shadow-sm">
                    <Award className="w-4 h-4 text-gold shrink-0" />
                    <span className="font-screenplay text-[11px] font-bold tracking-widest text-gold uppercase">
                      OFFICIAL AWARD WINNER
                    </span>
                  </div>
                  <p className="font-screenplay text-[10px] text-gold-200 tracking-wider">
                    Kannur University Arts Festival 2025–26
                  </p>
                </div>

                {/* Center Dramatic Title Artwork */}
                <div className="relative z-10 text-center my-auto py-8">
                  <span className="font-screenplay text-[11px] tracking-[0.3em] text-gold/70 uppercase block mb-3">
                    A FILM BY DIYON GEORGE
                  </span>
                  <h3 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-wide leading-tight drop-shadow-lg mb-2">
                    {featured.titleMalayalam}
                  </h3>
                  <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto my-3" />
                  <p className="font-screenplay text-xs sm:text-sm tracking-widest text-gold-300 font-semibold uppercase">
                    {featured.titleEnglish}
                  </p>
                  <p className="font-screenplay text-[11px] text-script-muted mt-2 italic">
                    (Hunger, Man, Justice)
                  </p>
                </div>

                {/* Bottom Poster Credits Block & Format Tags */}
                <div className="relative z-10 pt-4 border-t border-gold/20 flex items-end justify-between font-screenplay text-[10px] text-script-muted">
                  <div>
                    <span className="block text-gold/80 font-bold">2.39:1 SCOPE</span>
                    <span>22 MIN • MALAYALAM</span>
                  </div>
                  <div className="text-right">
                    <span className="block text-gold font-bold">DIR. DIYON GEORGE</span>
                    <span>SOCIAL JUSTICE DRAMA</span>
                  </div>
                </div>

                {/* Hover Overlay with Instant Screener & Script Quick Launch */}
                <div className="absolute inset-0 bg-obsidian-950/85 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-3 p-6 z-20">
                  <button
                    onClick={handleReadScript}
                    className="w-full py-3 px-4 rounded bg-gold text-obsidian font-display font-bold text-xs tracking-wider uppercase hover:bg-gold-300 transition-all flex items-center justify-center gap-2 shadow-gold-glow"
                  >
                    <BookOpen className="w-4 h-4" />
                    <span>READ SCRIPT EXCERPT</span>
                  </button>

                  <button
                    onClick={handleRequestScreener}
                    className="w-full py-3 px-4 rounded border border-gold/60 bg-noir-charcoal text-gold font-screenplay text-xs tracking-wider uppercase hover:bg-gold/15 transition-all flex items-center justify-center gap-2"
                  >
                    <Play className="w-4 h-4" />
                    <span>REQUEST PRIVATE SCREENER</span>
                  </button>
                </div>

              </div>

              {/* Poster Film Frame Badge */}
              <div className="py-2.5 px-4 bg-noir-surface border-t border-gold/20 flex items-center justify-between font-screenplay text-xs text-gold/80">
                <span className="flex items-center gap-1.5">
                  <Film className="w-3.5 h-3.5 text-gold" />
                  35MM CELLULOID AESTHETIC
                </span>
                <span className="text-white/60">ROLL A • TAKE 1</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Detailed Narrative Synopsis & Directorial Breakdown */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 flex flex-col justify-center space-y-6"
          >
            {/* Prestigious Accolade Banner */}
            <div className="p-4 rounded-lg border border-gold/40 bg-gradient-to-r from-gold/15 via-gold/5 to-transparent flex items-center gap-4">
              <div className="w-12 h-12 rounded-full border-2 border-gold flex items-center justify-center bg-obsidian shrink-0 shadow-gold-glow">
                <Award className="w-6 h-6 text-gold" />
              </div>
              <div>
                <span className="font-screenplay text-[10px] text-gold uppercase tracking-widest font-bold block">
                  FESTIVAL ACCOLADE
                </span>
                <h4 className="font-display font-bold text-base sm:text-lg text-white">
                  Kannur University Arts Festival Winner (2025–26)
                </h4>
                <p className="font-sans text-xs text-script-muted mt-0.5">
                  Honored for its unflinching portrayal of caste-based discrimination, institutional blindness, and the courage to challenge systemic silence.
                </p>
              </div>
            </div>

            {/* Title & Metadata */}
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-2 font-screenplay text-xs">
                <span className="px-2.5 py-0.5 rounded bg-gold/15 text-gold border border-gold/30 font-bold">
                  {featured.genre}
                </span>
                <span className="px-2.5 py-0.5 rounded bg-noir-surface text-script-text/80 border border-noir-border">
                  {featured.duration}
                </span>
                <span className="px-2.5 py-0.5 rounded bg-noir-surface text-script-text/80 border border-noir-border">
                  {featured.aspectRatio}
                </span>
              </div>

              <h3 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold text-white">
                {featured.titleMalayalam} <span className="text-gold font-normal">/ {featured.titleEnglish}</span>
              </h3>
            </div>

            {/* Logline Box */}
            <div className="p-4 rounded border-l-4 border-gold bg-noir-card/80 font-screenplay text-xs sm:text-sm text-script-heading leading-relaxed">
              <span className="text-gold font-bold block text-[10px] tracking-widest uppercase mb-1">
                OFFICIAL LOGLINE
              </span>
              "{featured.logline}"
            </div>

            {/* Synopsis Narrative */}
            <p className="text-sm sm:text-base text-script-muted font-sans leading-relaxed">
              {featured.synopsis}
            </p>

            {/* Directorial Craft Matrix (Lighting, Blocking, Sound) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="p-3 rounded bg-noir-surface border border-noir-border/80">
                <span className="font-screenplay text-[10px] text-gold uppercase block font-bold mb-1">
                  LIGHTING
                </span>
                <p className="text-xs text-script-text/80 leading-snug">
                  Low-key chiaroscuro, naturalistic tungsten flares, deep shadows.
                </p>
              </div>

              <div className="p-3 rounded bg-noir-surface border border-noir-border/80">
                <span className="font-screenplay text-[10px] text-gold uppercase block font-bold mb-1">
                  BLOCKING
                </span>
                <p className="text-xs text-script-text/80 leading-snug">
                  Claustrophobic proximity on the student; isolating wide shots of alienation among classmates.
                </p>
              </div>

              <div className="p-3 rounded bg-noir-surface border border-noir-border/80">
                <span className="font-screenplay text-[10px] text-gold uppercase block font-bold mb-1">
                  SOUND CADENCE
                </span>
                <p className="text-xs text-script-text/80 leading-snug">
                  Oppressive silence, amplified whispers, the weight of unspoken prejudice.
                </p>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
              <button
                onClick={handleReadScript}
                className="w-full sm:w-auto px-6 py-3.5 rounded bg-gold text-obsidian font-display font-bold text-xs tracking-wider uppercase hover:bg-gold-300 transition-all flex items-center justify-center gap-2 shadow-gold-glow"
              >
                <BookOpen className="w-4 h-4" />
                <span>READ SCRIPT EXCERPT</span>
              </button>

              <button
                onClick={handleRequestScreener}
                className="w-full sm:w-auto px-6 py-3.5 rounded border border-gold/40 bg-noir-charcoal text-white font-screenplay text-xs tracking-wider uppercase hover:border-gold hover:text-gold transition-all flex items-center justify-center gap-2"
              >
                <ShieldCheck className="w-4 h-4 text-gold" />
                <span>SCREENER UPON REQUEST</span>
              </button>

              <button
                onClick={handleViewDossier}
                className="w-full sm:w-auto px-4 py-3.5 text-script-muted hover:text-gold text-xs font-screenplay transition-colors flex items-center justify-center gap-1.5"
              >
                <span>TREATMENT DETAILS</span>
                <span>→</span>
              </button>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
