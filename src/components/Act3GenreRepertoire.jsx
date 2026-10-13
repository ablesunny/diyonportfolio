import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Clapperboard, BookOpen, Film, Eye, Sparkles, Layers, SlidersHorizontal } from 'lucide-react';
import soundEngine from '../audio/soundEngine';
import { projects } from '../data/projects';

export default function Act3GenreRepertoire({ onOpenScriptDrawer, onOpenDetail }) {
  const [hoveredCard, setHoveredCard] = useState(null);

  const handleCardHover = (id) => {
    if (hoveredCard !== id) {
      soundEngine.playReelClick();
      setHoveredCard(id);
    }
  };

  const handleScriptClick = (e, id) => {
    e.stopPropagation();
    soundEngine.playSlateClapboard();
    onOpenScriptDrawer(id);
  };

  const handleDetailClick = (project) => {
    soundEngine.playSlateClapboard();
    onOpenDetail(project);
  };

  return (
    <section
      id="act-3"
      aria-label="Act III: The Genre Repertoire"
      className="relative py-28 px-4 sm:px-6 lg:px-8 border-b border-gold/15 bg-obsidian-900 overflow-hidden"
    >
      {/* Background Cinematic Texture */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(212,175,55,0.08),rgba(255,255,255,0))] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 font-screenplay text-xs text-gold tracking-widest uppercase mb-3">
            <span className="w-8 h-[1px] bg-gold" />
            <span>ACT III: THE GENRE REPERTOIRE</span>
            <span className="w-8 h-[1px] bg-gold" />
          </div>
          
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            SIGNATURE DIRECTORIAL VOICES
          </h2>
          
          <p className="mt-4 text-sm sm:text-base text-script-muted font-sans leading-relaxed">
            Diyon George approaches storytelling across three specialized cinematic territories:
            high-stakes social realism, biting political satire, and cerebral psychological mystery.
          </p>
        </div>

        {/* 3-Card Repertoire Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((proj, idx) => {
            const isHovered = hoveredCard === proj.id;

            return (
              <motion.article
                key={proj.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                onMouseEnter={() => handleCardHover(proj.id)}
                onMouseLeave={() => setHoveredCard(null)}
                onClick={() => handleDetailClick(proj)}
                className={`relative group rounded-xl overflow-hidden cursor-pointer transition-all duration-500 border ${
                  isHovered
                    ? 'border-gold shadow-gold-glow-lg -translate-y-2'
                    : 'border-gold/25 bg-noir-card shadow-cinematic hover:border-gold/60'
                }`}
              >
                {/* Dynamic Warm Spotlight Glow on Hover */}
                <div
                  className={`absolute -inset-px rounded-xl transition-opacity duration-500 pointer-events-none ${
                    isHovered ? 'opacity-100' : 'opacity-0'
                  }`}
                  style={{
                    background: 'radial-gradient(600px circle at top center, rgba(212, 175, 55, 0.18), transparent 70%)',
                  }}
                />

                {/* Card Top: Film Frame Header */}
                <div className="p-6 pb-4 border-b border-gold/15 bg-noir-surface/90 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-gold/70" />
                    <span className="font-screenplay text-[11px] font-bold text-gold tracking-widest uppercase">
                      {proj.genre.split('/')[0]}
                    </span>
                  </div>
                  <span className="font-screenplay text-[10px] text-script-muted">
                    {proj.format}
                  </span>
                </div>

                {/* Card Body */}
                <div className="p-6 space-y-4">
                  
                  {/* Titles */}
                  <div>
                    <h3 className="font-display text-2xl font-black text-white group-hover:text-gold transition-colors">
                      {proj.titleMalayalam}
                    </h3>
                    <p className="font-screenplay text-sm text-gold-300 font-semibold tracking-wide">
                      {proj.titleEnglish}
                    </p>
                  </div>

                  {/* Accolade / Selection Badge */}
                  <div className={`p-2 rounded text-[11px] font-screenplay border ${proj.badgeColor} flex items-center gap-2`}>
                    <Sparkles className="w-3.5 h-3.5 shrink-0" />
                    <span className="truncate">{proj.award}</span>
                  </div>

                  {/* Logline Box */}
                  <div className="text-xs font-screenplay text-script-text/90 bg-obsidian-950/70 p-3.5 rounded border border-white/5 leading-relaxed">
                    <span className="text-gold text-[10px] font-bold block uppercase mb-1">
                      LOGLINE
                    </span>
                    "{proj.logline}"
                  </div>

                  {/* Shot-Planning & Director Note Preview */}
                  <div className="space-y-1.5 pt-1">
                    <span className="font-screenplay text-[10px] text-gold/80 uppercase tracking-widest block font-bold">
                      SHOT-PLANNING NOTES:
                    </span>
                    <p className="text-xs text-script-muted line-clamp-2 leading-relaxed">
                      {proj.directorNotes.blocking}
                    </p>
                  </div>

                  {/* Color Theory Swatches (Moodboard palette) */}
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="font-screenplay text-[10px] text-script-muted uppercase">
                        COLOR PALETTE:
                      </span>
                      <span className="font-screenplay text-[10px] text-gold/60">
                        {proj.aspectRatio}
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      {proj.directorNotes.colorPalette.map((color, cIdx) => (
                        <div
                          key={cIdx}
                          className="h-3.5 flex-1 rounded-sm border border-white/10"
                          style={{ backgroundColor: color }}
                          title={`Moodboard Tone: ${color}`}
                        />
                      ))}
                    </div>
                  </div>

                </div>

                {/* Card Footer: Interactive Actions */}
                <div className="p-4 bg-noir-charcoal/90 border-t border-gold/15 flex items-center justify-between gap-2">
                  <button
                    onClick={(e) => handleScriptClick(e, proj.id)}
                    className="flex-1 py-2 px-3 rounded bg-gold/15 hover:bg-gold hover:text-obsidian text-gold text-xs font-screenplay font-bold tracking-wider uppercase transition-all flex items-center justify-center gap-1.5 border border-gold/30"
                  >
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>READ SCRIPT</span>
                  </button>

                  <button
                    onClick={() => handleDetailClick(proj)}
                    className="py-2 px-3 rounded hover:bg-white/5 text-script-muted hover:text-white text-xs font-screenplay transition-colors flex items-center justify-center gap-1"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>DOSSIER</span>
                  </button>
                </div>

              </motion.article>
            );
          })}
        </div>

        {/* Director Collaboration Callout Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 p-8 rounded-xl border border-gold/30 bg-gradient-to-r from-noir-surface via-noir-card to-noir-surface flex flex-col md:flex-row items-center justify-between gap-6 shadow-cinematic"
        >
          <div className="max-w-2xl">
            <h4 className="font-display font-bold text-lg sm:text-xl text-white flex items-center gap-2">
              <Layers className="w-5 h-5 text-gold" />
              Custom Screenplay Treatments & Directorial Pitch Decks
            </h4>
            <p className="font-sans text-xs sm:text-sm text-script-muted mt-2 leading-relaxed">
              Looking for a tailored narrative architecture, script doctoring, or scene breakdown for feature films or streaming pilots? Complete pitch decks and treatments are available on request.
            </p>
          </div>

          <button
            onClick={() => {
              soundEngine.playSlateClapboard();
              onOpenDetail(projects[0]);
            }}
            className="px-6 py-3 rounded bg-gold text-obsidian font-display font-bold text-xs tracking-wider uppercase hover:bg-gold-300 transition-all shrink-0 shadow-gold-glow"
          >
            EXPLORE COMPLETE TREATMENTS
          </button>
        </motion.div>

      </div>
    </section>
  );
}
