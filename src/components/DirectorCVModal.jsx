import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Printer, Copy, Check, FileText, Award, GraduationCap, Film, Compass } from 'lucide-react';
import soundEngine from '../audio/soundEngine';
import { directorBio } from '../data/directorBio';
import { projects } from '../data/projects';

export default function DirectorCVModal({ isOpen, onClose }) {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    soundEngine.playSlateClapboard();
    window.print();
  };

  const handleCopyCV = () => {
    soundEngine.playReelClick();
    const cvText = `
DIYON GEORGE
Screenwriter • Film Director • Narrative Architect
Location: Iritty, Kerala, India | Phone: +91 8075865642 | Email: diyongeorge136@gmail.com

DIRECTOR'S MANIFESTO:
"${directorBio.motto.quote}" — Martin Scorsese
"${directorBio.motto.subtext}"
${directorBio.manifesto}

ACADEMIC BACKGROUND:
Bachelor of Business Administration (BBA) - Don Bosco Arts and Science College
Core focus: Integrating operational, financial, and management discipline into artistic film production.

ACCOLADES & FILMOGRAPHY:
1. 'വിശപ്പ്, മനിതൻ, നീതി' (Hunger, Man, Justice) - 2025-26
   - Kannur University Arts Festival Award Winner
   - Role: Writer & Director
   - Format: Short Film (2.39:1 Anamorphic, 22 Min)
   - Genre: Social Justice / Drama

2. 'Leg Piece' - 2024
   - Role: Screenwriter
   - Format: Screenplay / Short Film (1.85:1 Flat, 18 Min)
   - Genre: Sarcastic Political Satire

3. '5 Symbols' - 2023-24
   - Role: Screenwriter & Story Concept
   - Format: Feature Treatment (2.39:1 Scope, 110 Min)
   - Genre: Psychological Mystery Thriller

CORE COMPETENCIES & METHODOLOGY:
- 6+ Years Screenwriting, Scene Separation, and Beat Architecture
- Camera Blocking, Visual Rhythm, and Mise-en-scène
- Multi-genre flexibility: Social Realism, Political Satire, Psychological Thriller
- Production Budget Optimization & Scheduling Rigor
    `.trim();

    navigator.clipboard.writeText(cvText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleClose = () => {
    soundEngine.playReelClick();
    onClose();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-3 sm:p-6 print:p-0">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleClose}
          className="fixed inset-0 bg-obsidian-950/90 backdrop-blur-md transition-opacity print:hidden"
        />

        {/* CV Document Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-4xl bg-[#0d0d12] border border-gold/40 rounded-xl shadow-2xl overflow-hidden z-10 my-8 print:border-none print:shadow-none print:m-0 print:bg-white print:text-black"
        >
          {/* Header Action Bar (Hidden when printing) */}
          <div className="p-4 sm:p-5 border-b border-gold/20 bg-noir-surface flex items-center justify-between print:hidden">
            <div className="flex items-center gap-2">
              <FileText className="w-4 h-4 text-gold" />
              <span className="font-screenplay text-xs text-gold uppercase tracking-wider font-bold">
                SCREENPLAY & DIRECTORIAL CURRICULUM VITAE
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleCopyCV}
                className="px-3 py-1.5 rounded border border-noir-border text-script-text text-xs font-screenplay hover:border-gold hover:text-gold transition-colors flex items-center gap-1.5"
                title="Copy Plain Text"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'COPIED' : 'COPY'}</span>
              </button>

              <button
                onClick={handlePrint}
                className="px-3.5 py-1.5 rounded bg-gold text-obsidian text-xs font-bold font-screenplay hover:bg-gold-300 transition-colors flex items-center gap-1.5 shadow-gold-glow"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>PRINT / SAVE PDF</span>
              </button>

              <button
                onClick={handleClose}
                className="p-1.5 rounded-full text-script-muted hover:text-white transition-colors ml-1"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Printable Document Body */}
          <div className="p-6 sm:p-10 font-sans space-y-8 select-text print:p-8 print:text-black">
            
            {/* CV Title Header */}
            <div className="border-b-2 border-gold pb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <h1 className="font-display font-black text-3xl sm:text-4xl text-white print:text-black tracking-tight">
                  DIYON GEORGE
                </h1>
                <p className="font-screenplay text-sm text-gold print:text-amber-800 tracking-widest uppercase mt-1">
                  Screenwriter • Film Director • Narrative Architect
                </p>
              </div>

              <div className="font-screenplay text-xs text-script-muted print:text-neutral-700 space-y-1 sm:text-right">
                <p>Location: Iritty, Kerala, India</p>
                <p>Phone: +91 8075865642</p>
                <p>Email: diyongeorge136@gmail.com</p>
              </div>
            </div>

            {/* Directorial Creed & Statement */}
            <div className="space-y-2">
              <h2 className="font-screenplay text-xs text-gold uppercase tracking-widest font-bold">
                DIRECTORIAL CREED & MANIFESTO
              </h2>
              <blockquote className="italic font-display text-base text-script-heading print:text-neutral-900 border-l-2 border-gold pl-4">
                "{directorBio.motto.quote}" — Martin Scorsese
              </blockquote>
              <p className="text-xs sm:text-sm text-script-muted print:text-neutral-800 leading-relaxed font-sans pt-1">
                {directorBio.manifesto}
              </p>
            </div>

            {/* Academic Rigor & Operational Foundation */}
            <div className="space-y-3">
              <h2 className="font-screenplay text-xs text-gold uppercase tracking-widest font-bold flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-gold print:text-amber-800" />
                ACADEMIC & PRODUCTION DISCIPLINE
              </h2>
              <div className="p-4 rounded border border-gold/20 bg-noir-surface/60 print:bg-neutral-50 print:border-neutral-300">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between font-screenplay text-xs font-bold text-white print:text-black">
                  <span>Bachelor of Business Administration (BBA)</span>
                  <span className="text-gold print:text-neutral-600">Don Bosco Arts and Science College</span>
                </div>
                <p className="text-xs text-script-muted print:text-neutral-700 mt-2 font-sans leading-relaxed">
                  {directorBio.structuralFoundation.philosophy}
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {directorBio.structuralFoundation.skills.map((s, idx) => (
                    <span key={idx} className="font-screenplay text-[10px] px-2 py-0.5 rounded bg-gold/10 text-gold print:bg-neutral-200 print:text-black">
                      • {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Filmography & Key Screenplays */}
            <div className="space-y-4">
              <h2 className="font-screenplay text-xs text-gold uppercase tracking-widest font-bold flex items-center gap-2">
                <Film className="w-4 h-4 text-gold print:text-amber-800" />
                FEATURED FILMOGRAPHY & SCREENPLAY WORKS
              </h2>

              <div className="space-y-3">
                {projects.map((proj) => (
                  <div key={proj.id} className="p-4 rounded border border-white/10 bg-noir-surface/40 print:bg-neutral-50 print:border-neutral-200 space-y-1.5">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 font-screenplay">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-sm text-white print:text-black">
                          {proj.titleMalayalam} / {proj.titleEnglish}
                        </span>
                        {proj.hasAwardLaurel && (
                          <span className="text-[10px] text-gold bg-gold/15 px-2 py-0.5 rounded print:text-amber-900 font-bold">
                            AWARD WINNER
                          </span>
                        )}
                      </div>
                      <span className="text-xs text-gold/80 print:text-neutral-600">
                        {proj.year} • {proj.format}
                      </span>
                    </div>

                    <p className="font-screenplay text-xs text-gold-300 print:text-amber-950 font-semibold">
                      Accolade / Status: {proj.award}
                    </p>

                    <p className="font-sans text-xs text-script-muted print:text-neutral-800 leading-relaxed">
                      <strong>Logline:</strong> "{proj.logline}"
                    </p>

                    <p className="font-screenplay text-[11px] text-script-text/70 print:text-neutral-600">
                      Technical Spec: {proj.aspectRatio} • {proj.duration} • Role: {proj.role}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Directorial Toolset & Competencies */}
            <div className="space-y-3">
              <h2 className="font-screenplay text-xs text-gold uppercase tracking-widest font-bold">
                DIRECTORIAL COMPETENCIES (6+ YEARS CRAFT)
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-sans text-xs">
                {directorBio.disciplines.map((d, idx) => (
                  <div key={idx} className="p-3 rounded border border-gold/15 bg-noir-surface/40 print:border-neutral-200 print:bg-transparent">
                    <span className="font-screenplay text-xs font-bold text-gold print:text-black block mb-1">
                      {d.title} ({d.metric})
                    </span>
                    <p className="text-script-muted print:text-neutral-700 leading-relaxed">
                      {d.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Footer Bar */}
          <div className="p-4 sm:p-6 border-t border-gold/20 bg-noir-surface flex items-center justify-between font-screenplay text-xs text-script-muted print:hidden">
            <span>DIRECTOR DOSSIER • DIYON GEORGE</span>
            <button
              onClick={handlePrint}
              className="text-gold hover:underline flex items-center gap-1 font-bold"
            >
              <span>Download Printable PDF</span>
              <span>→</span>
            </button>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
}
