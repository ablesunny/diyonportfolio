import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Film, BookOpen, Sliders, ChevronRight, Award, Eye, Download } from 'lucide-react';
import soundEngine from '../audio/soundEngine';
import { screenplaySamples } from '../data/screenplaySamples';

export default function ScreenplayDrawer({ isOpen, onClose, initialProjectId = 'hunger-man-justice', onOpenPitch }) {
  const [selectedProjectId, setSelectedProjectId] = useState(initialProjectId);
  const [showDirectorNotes, setShowDirectorNotes] = useState(true);

  if (!isOpen) return null;

  const currentSample = screenplaySamples[selectedProjectId] || screenplaySamples['hunger-man-justice'];

  const handleProjectSelect = (id) => {
    soundEngine.playReelClick();
    setSelectedProjectId(id);
  };

  const handleToggleNotes = () => {
    soundEngine.playReelClick();
    setShowDirectorNotes(!showDirectorNotes);
  };

  const handleClose = () => {
    soundEngine.playReelClick();
    onClose();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-hidden flex justify-end">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleClose}
          className="fixed inset-0 bg-obsidian-950/80 backdrop-blur-md transition-opacity"
        />

        {/* Sliding Drawer Panel */}
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'spring', damping: 28, stiffness: 220 }}
          className="relative w-full max-w-3xl bg-noir-card border-l border-gold/30 shadow-2xl flex flex-col h-full z-10 overflow-hidden"
        >
          {/* Drawer Header (Film Clapperboard Banner) */}
          <div className="p-4 sm:p-6 border-b border-gold/20 bg-noir-surface flex items-center justify-between shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded border border-gold/40 bg-gold/10 flex items-center justify-center text-gold">
                <BookOpen className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-screenplay text-[10px] text-gold uppercase tracking-widest font-bold">
                    OFFICIAL SCREENPLAY EXCERPT
                  </span>
                  {currentSample.awardNote && (
                    <span className="hidden sm:inline-flex items-center gap-1 font-screenplay text-[9px] text-gold bg-gold/15 px-2 py-0.5 rounded border border-gold/30">
                      <Award className="w-2.5 h-2.5" />
                      {currentSample.awardNote}
                    </span>
                  )}
                </div>
                <h3 className="font-display font-bold text-lg sm:text-xl text-white">
                  {currentSample.englishTitle} <span className="text-gold">/ {currentSample.title}</span>
                </h3>
              </div>
            </div>

            <button
              onClick={handleClose}
              className="p-2 rounded-full border border-noir-border text-script-muted hover:text-white hover:border-gold transition-colors"
              aria-label="Close Screenplay Reader"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Subheader Toolbar: Project Tabs + Director Commentary Switch */}
          <div className="px-4 sm:px-6 py-3 border-b border-white/5 bg-obsidian-950 flex flex-wrap items-center justify-between gap-3 shrink-0">
            {/* Project Switcher */}
            <div className="flex items-center gap-1.5 font-screenplay text-xs">
              {Object.keys(screenplaySamples).map((id) => (
                <button
                  key={id}
                  onClick={() => handleProjectSelect(id)}
                  className={`px-2.5 py-1 rounded transition-all ${
                    selectedProjectId === id
                      ? 'bg-gold text-obsidian font-bold shadow-sm'
                      : 'text-script-muted hover:text-white hover:bg-white/5'
                  }`}
                >
                  {screenplaySamples[id].englishTitle}
                </button>
              ))}
            </div>

            {/* Director Notes Toggle */}
            <button
              onClick={handleToggleNotes}
              className={`flex items-center gap-1.5 px-2.5 py-1 rounded border text-xs font-screenplay transition-colors ${
                showDirectorNotes
                  ? 'border-gold text-gold bg-gold/10'
                  : 'border-noir-border text-script-muted hover:text-white'
              }`}
            >
              <Sliders className="w-3.5 h-3.5" />
              <span>{showDirectorNotes ? 'DIRECTOR NOTES: ON' : 'DIRECTOR NOTES: OFF'}</span>
            </button>
          </div>

          {/* Director Statement Banner */}
          {showDirectorNotes && currentSample.directorStatement && (
            <div className="mx-4 sm:mx-6 mt-4 p-3.5 rounded bg-gold/10 border-l-4 border-gold text-xs font-screenplay text-gold-200">
              <span className="text-gold font-bold uppercase block text-[10px] tracking-wider mb-1">
                DIRECTOR'S EXECUTION STATEMENT • DIYON GEORGE
              </span>
              "{currentSample.directorStatement}"
            </div>
          )}

          {/* Screenplay Content Body (Authentic Courier Prime Screenplay Formatting) */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-8 space-y-8 screenplay-font bg-obsidian-950 text-script-text select-text">
            
            {/* Script Cover Meta */}
            <div className="text-center pb-6 border-b border-white/10 space-y-1">
              <h2 className="text-xl font-bold text-white tracking-widest uppercase">
                {currentSample.englishTitle}
              </h2>
              <p className="text-xs text-gold">by {currentSample.author}</p>
              <p className="text-[11px] text-script-muted">Format: Industry Standard Courier Prime • {currentSample.pages}</p>
            </div>

            {/* Scenes */}
            {currentSample.scenes.map((scene, sIdx) => (
              <div key={sIdx} className="space-y-4">
                
                {/* Director's Camera & Lighting annotation */}
                {showDirectorNotes && scene.directorNote && (
                  <div className="p-2.5 rounded bg-noir-surface border border-gold/30 text-[11px] text-gold/90 font-sans flex items-start gap-2">
                    <Film className="w-3.5 h-3.5 text-gold shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-gold font-screenplay uppercase">Directorial Blocking: </strong>
                      {scene.directorNote}
                    </div>
                  </div>
                )}

                {/* Script Elements formatted to strict Hollywood Screenplay Rules */}
                <div className="space-y-3 text-sm leading-relaxed max-w-2xl mx-auto">
                  {scene.elements.map((el, elIdx) => {
                    switch (el.type) {
                      case 'transition':
                        return (
                          <div key={elIdx} className="font-bold text-xs uppercase text-gold/80 tracking-wider pt-2">
                            {el.text}
                          </div>
                        );
                      case 'slugline':
                        return (
                          <div key={elIdx} className="font-bold uppercase text-white tracking-wider pt-3 pb-1 border-b border-white/10">
                            {el.text}
                          </div>
                        );
                      case 'action':
                        return (
                          <p key={elIdx} className="text-script-text/90 leading-relaxed text-sm">
                            {el.text}
                          </p>
                        );
                      case 'character':
                        return (
                          <div key={elIdx} className="font-bold text-gold text-center uppercase tracking-widest pt-4">
                            {el.text}
                          </div>
                        );
                      case 'parenthetical':
                        return (
                          <div key={elIdx} className="text-xs text-center text-script-muted italic">
                            {el.text}
                          </div>
                        );
                      case 'dialogue':
                        return (
                          <div key={elIdx} className="max-w-md mx-auto text-center sm:text-left text-script-heading font-medium leading-relaxed px-4 sm:px-8">
                            "{el.text}"
                          </div>
                        );
                      default:
                        return null;
                    }
                  })}
                </div>

              </div>
            ))}

            <div className="text-center pt-8 pb-4 text-xs text-gold/50 tracking-widest uppercase">
              --- END OF EXCERPT ---
            </div>
          </div>

          {/* Drawer Footer Actions */}
          <div className="p-4 sm:p-6 border-t border-gold/20 bg-noir-surface flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
            <span className="font-screenplay text-xs text-script-muted">
              Complete full-length screenplay available under NDA / Request
            </span>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                onClick={() => {
                  soundEngine.playSlateClapboard();
                  onClose();
                  onOpenPitch(`Full Screenplay Request: ${currentSample.englishTitle}`);
                }}
                className="w-full sm:w-auto px-5 py-2.5 rounded bg-gold text-obsidian font-display font-bold text-xs tracking-wider uppercase hover:bg-gold-300 transition-all flex items-center justify-center gap-2 shadow-gold-glow"
              >
                <span>REQUEST COMPLETE SCRIPT</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
}
