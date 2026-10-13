import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, BookOpen, ShieldCheck, Film, Award, Palette, Volume2, Video, Sparkles } from 'lucide-react';
import soundEngine from '../audio/soundEngine';

export default function ProjectDetailModal({ isOpen, onClose, project, onOpenScriptDrawer, onOpenScreener }) {
  if (!isOpen || !project) return null;

  const handleClose = () => {
    soundEngine.playReelClick();
    onClose();
  };

  const handleReadScript = () => {
    soundEngine.playSlateClapboard();
    onClose();
    onOpenScriptDrawer(project.id);
  };

  const handleRequestScreener = () => {
    soundEngine.playSlateClapboard();
    onClose();
    onOpenScreener(project);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleClose}
          className="fixed inset-0 bg-obsidian-950/85 backdrop-blur-md transition-opacity"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-3xl bg-noir-card border border-gold/40 rounded-xl shadow-2xl overflow-hidden z-10 my-8"
        >
          {/* Header */}
          <div className="p-6 border-b border-gold/20 bg-noir-surface flex items-center justify-between">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="font-screenplay text-[10px] text-gold uppercase tracking-widest font-bold">
                  DIRECTOR'S TREATMENT & DOSSIER
                </span>
                <span className="font-screenplay text-[10px] text-script-muted">
                  • {project.format}
                </span>
              </div>
              <h3 className="font-display font-black text-2xl sm:text-3xl text-white">
                {project.titleMalayalam} <span className="text-gold font-normal">/ {project.titleEnglish}</span>
              </h3>
            </div>

            <button
              onClick={handleClose}
              className="p-2 rounded-full border border-noir-border text-script-muted hover:text-white hover:border-gold transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body Content */}
          <div className="p-6 sm:p-8 space-y-6 max-h-[75vh] overflow-y-auto font-sans">
            
            {/* Accolade / Genre Tag Strip */}
            <div className="flex flex-wrap items-center gap-2 font-screenplay text-xs">
              <span className="px-3 py-1 rounded bg-gold/15 text-gold border border-gold/30 font-bold flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5" />
                {project.award}
              </span>
              <span className="px-3 py-1 rounded bg-noir-surface text-script-text border border-noir-border">
                {project.genre}
              </span>
              <span className="px-3 py-1 rounded bg-noir-surface text-script-text border border-noir-border">
                {project.aspectRatio}
              </span>
            </div>

            {/* Logline Callout */}
            <div className="p-4 rounded border-l-4 border-gold bg-noir-surface font-screenplay text-sm text-script-heading leading-relaxed">
              <span className="text-gold font-bold block text-[10px] uppercase tracking-widest mb-1">
                LOGLINE
              </span>
              "{project.logline}"
            </div>

            {/* Detailed Synopsis */}
            <div>
              <h4 className="font-screenplay text-xs text-gold uppercase tracking-widest font-bold mb-2">
                NARRATIVE SYNOPSIS
              </h4>
              <p className="text-sm text-script-muted leading-relaxed">
                {project.synopsis}
              </p>
            </div>

            {/* Directorial Execution Blueprint */}
            <div className="space-y-3">
              <h4 className="font-screenplay text-xs text-gold uppercase tracking-widest font-bold">
                DIRECTORIAL EXECUTION BLUEPRINT
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3.5 rounded bg-noir-surface border border-white/5 space-y-1">
                  <span className="font-screenplay text-[10px] text-gold uppercase font-bold flex items-center gap-1.5">
                    <Video className="w-3.5 h-3.5" />
                    CAMERA BLOCKING & LENSES
                  </span>
                  <p className="text-script-muted leading-relaxed">
                    {project.directorNotes.blocking}
                  </p>
                </div>

                <div className="p-3.5 rounded bg-noir-surface border border-white/5 space-y-1">
                  <span className="font-screenplay text-[10px] text-gold uppercase font-bold flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    LIGHTING & TEXTURE
                  </span>
                  <p className="text-script-muted leading-relaxed">
                    {project.directorNotes.lighting}
                  </p>
                </div>

                <div className="p-3.5 rounded bg-noir-surface border border-white/5 space-y-1 sm:col-span-2">
                  <span className="font-screenplay text-[10px] text-gold uppercase font-bold flex items-center gap-1.5">
                    <Volume2 className="w-3.5 h-3.5" />
                    ACOUSTIC ARCHITECTURE & SOUND DESIGN
                  </span>
                  <p className="text-script-muted leading-relaxed">
                    {project.directorNotes.soundDesign}
                  </p>
                </div>
              </div>
            </div>

            {/* Color Palette Moodboard */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="font-screenplay text-xs text-gold uppercase tracking-widest font-bold flex items-center gap-1.5">
                  <Palette className="w-3.5 h-3.5" />
                  MOODBOARD COLOR SWATCHES
                </span>
                <span className="font-screenplay text-[10px] text-script-muted">
                  35MM COLOR GRADE
                </span>
              </div>
              <div className="flex items-center gap-2">
                {project.directorNotes.colorPalette.map((col, idx) => (
                  <div key={idx} className="flex-1 space-y-1 text-center">
                    <div
                      className="h-8 rounded border border-white/10 shadow-sm"
                      style={{ backgroundColor: col }}
                    />
                    <span className="font-screenplay text-[9px] text-script-muted block uppercase">
                      {col}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Cast & Crew Staging */}
            <div className="pt-2 border-t border-white/10 flex flex-wrap gap-4 font-screenplay text-xs">
              {project.castAndCrew.map((c, idx) => (
                <div key={idx}>
                  <span className="text-gold/70 text-[10px] block uppercase">{c.role}</span>
                  <span className="text-white font-bold">{c.name}</span>
                </div>
              ))}
            </div>

          </div>

          {/* Footer Actions */}
          <div className="p-4 sm:p-6 border-t border-gold/20 bg-noir-surface flex flex-col sm:flex-row items-center justify-between gap-3">
            <span className="font-screenplay text-xs text-script-muted">
              Project dossier curated by Diyon George
            </span>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                onClick={handleReadScript}
                className="flex-1 sm:flex-none px-5 py-2.5 rounded bg-gold text-obsidian font-display font-bold text-xs tracking-wider uppercase hover:bg-gold-300 transition-all flex items-center justify-center gap-1.5 shadow-gold-glow"
              >
                <BookOpen className="w-4 h-4" />
                <span>READ SCRIPT EXCERPT</span>
              </button>

              <button
                onClick={handleRequestScreener}
                className="flex-1 sm:flex-none px-5 py-2.5 rounded border border-gold/40 text-gold font-screenplay text-xs tracking-wider uppercase hover:bg-gold/15 transition-all flex items-center justify-center gap-1.5"
              >
                <ShieldCheck className="w-4 h-4" />
                <span>REQUEST SCREENER</span>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
