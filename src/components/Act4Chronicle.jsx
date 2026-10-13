import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Users, FileText, CheckCircle2, Compass, Film, Award } from 'lucide-react';
import soundEngine from '../audio/soundEngine';
import { directorBio } from '../data/directorBio';

export default function Act4Chronicle({ onOpenCV, onOpenPitch }) {
  const handleDownloadCV = () => {
    soundEngine.playSlateClapboard();
    onOpenCV();
  };

  return (
    <section
      id="act-4"
      aria-label="Act IV: The Chronicle"
      className="relative py-28 px-4 sm:px-6 lg:px-8 border-b border-gold/15 bg-obsidian-950 overflow-hidden"
    >
      {/* Background Projector Beam Accent */}
      <div 
        className="absolute top-1/3 left-1/4 -translate-y-1/2 w-[600px] h-[400px] rounded-full pointer-events-none opacity-10 filter blur-[130px]"
        style={{ background: 'radial-gradient(circle, #D4AF37 0%, #1A1A24 70%, transparent 100%)' }}
      />

      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-gold/20">
          <div>
            <div className="flex items-center gap-2 font-screenplay text-xs text-gold tracking-widest uppercase mb-2">
              <span className="w-8 h-[1px] bg-gold" />
              <span>ACT IV: THE CHRONICLE</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              DISCIPLINE & DIRECTORIAL CRAFT
            </h2>
          </div>

          <div className="mt-4 md:mt-0">
            <button
              onClick={handleDownloadCV}
              className="px-6 py-3 rounded border border-gold/50 bg-gold/10 text-gold font-screenplay text-xs tracking-wider uppercase hover:bg-gold hover:text-obsidian transition-all duration-300 flex items-center gap-2 shadow-gold-glow"
            >
              <FileText className="w-4 h-4" />
              <span>DOWNLOAD SCREENPLAY CV</span>
            </button>
          </div>
        </div>

        {/* 2-Column Grid: Collaborative Creed & BBA Foundation */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          
          {/* Collaborative Creed Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 p-8 rounded-xl border border-gold/30 bg-gradient-to-br from-noir-card via-obsidian-900 to-noir-surface relative shadow-cinematic flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg border border-gold/40 bg-gold/10 flex items-center justify-center text-gold">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-screenplay text-[10px] text-gold uppercase tracking-widest block font-bold">
                    DIRECTORIAL PHILOSOPHY
                  </span>
                  <h3 className="font-display font-bold text-xl text-white">
                    The Collaborative Creed
                  </h3>
                </div>
              </div>

              <blockquote className="font-display italic text-lg sm:text-xl text-script-heading leading-relaxed mb-6 border-l-2 border-gold pl-4">
                "{directorBio.collaborativeCreed}"
              </blockquote>

              <p className="font-sans text-xs sm:text-sm text-script-muted leading-relaxed">
                Whether steering a boutique indie crew or leading multi-department production units, Diyon values high-energy discourse with emerging creatives as much as the timeless rigor of master technicians.
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-gold/15 flex items-center justify-between font-screenplay text-xs text-gold/80">
              <span>COLLABORATION ETHOS</span>
              <span>OPEN TO DIRECTORIAL COMMISSIONS</span>
            </div>
          </motion.div>

          {/* Structural BBA Foundation Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-6 p-8 rounded-xl border border-gold/30 bg-gradient-to-br from-noir-card via-obsidian-900 to-noir-surface relative shadow-cinematic flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg border border-gold/40 bg-gold/10 flex items-center justify-center text-gold">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-screenplay text-[10px] text-gold uppercase tracking-widest block font-bold">
                    ACADEMIC & OPERATIONAL RIGOR
                  </span>
                  <h3 className="font-display font-bold text-xl text-white">
                    Structural Foundation
                  </h3>
                </div>
              </div>

              <div className="mb-4">
                <h4 className="font-display font-bold text-base text-gold">
                  {directorBio.structuralFoundation.degree}
                </h4>
                <p className="font-screenplay text-xs text-script-text/80">
                  {directorBio.structuralFoundation.institution}
                </p>
              </div>

              <p className="font-sans text-xs sm:text-sm text-script-muted leading-relaxed mb-6">
                {directorBio.structuralFoundation.philosophy}
              </p>

              {/* Specific Management Disciplines */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 font-screenplay text-xs">
                {directorBio.structuralFoundation.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="flex items-center gap-2 p-2 rounded bg-obsidian-950/70 border border-white/5 text-script-text">
                    <CheckCircle2 className="w-3.5 h-3.5 text-gold shrink-0" />
                    <span className="text-[11px]">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-gold/15 flex items-center justify-between font-screenplay text-xs text-gold/80">
              <span>MANAGEMENT MEETS METAPHOR</span>
              <span>PRECISION BUDGETING & TIMING</span>
            </div>
          </motion.div>

        </div>

        {/* 4 Pillars of Directorial Discipline */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <span className="font-screenplay text-xs text-gold tracking-widest uppercase">
              THE DIRECTOR'S TOOLKIT
            </span>
            <h3 className="font-display text-2xl font-bold text-white mt-1">
              Methodology & Execution Architecture
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {directorBio.disciplines.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-6 rounded-lg border border-gold/20 bg-noir-card hover:border-gold/60 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="w-8 h-8 rounded border border-gold/30 bg-gold/10 font-screenplay text-xs font-bold text-gold flex items-center justify-center">
                    0{idx + 1}
                  </span>
                  <span className="font-screenplay text-[11px] text-gold font-semibold px-2 py-0.5 rounded bg-gold/10">
                    {item.metric}
                  </span>
                </div>
                
                <h4 className="font-display font-bold text-base text-white mb-2">
                  {item.title}
                </h4>
                
                <p className="font-sans text-xs text-script-muted leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 6-Year Timeline Progression */}
        <div>
          <div className="text-center mb-10">
            <span className="font-screenplay text-xs text-gold tracking-widest uppercase">
              THE 6-YEAR TRAJECTORY
            </span>
            <h3 className="font-display text-2xl font-bold text-white mt-1">
              Evolution of the Filmmaker
            </h3>
          </div>

          <div className="relative border-l-2 border-gold/30 ml-4 md:ml-32 space-y-10 pl-6 md:pl-8">
            {directorBio.milestones.map((m, mIdx) => (
              <motion.div
                key={mIdx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: mIdx * 0.1 }}
                className="relative group"
              >
                {/* Year Marker on the Left */}
                <div className="absolute -left-[35px] md:-left-[165px] top-0 flex items-center gap-2">
                  <span className="hidden md:inline font-screenplay font-bold text-sm text-gold tracking-widest text-right w-24">
                    {m.year}
                  </span>
                  <div className="w-4 h-4 rounded-full border-2 border-gold bg-obsidian group-hover:scale-125 transition-transform shadow-gold-glow" />
                </div>

                {/* Milestone Content Box */}
                <div className="p-6 rounded-lg border border-gold/20 bg-noir-surface/90 hover:border-gold/50 transition-all">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="md:hidden font-screenplay font-bold text-xs text-gold">
                      {m.year}
                    </span>
                    <span className="font-screenplay text-[10px] text-gold font-bold px-2 py-0.5 rounded bg-gold/10 border border-gold/30 uppercase">
                      {m.badge}
                    </span>
                  </div>

                  <h4 className="font-display font-bold text-lg text-white mb-2">
                    {m.title}
                  </h4>

                  <p className="font-sans text-xs sm:text-sm text-script-muted leading-relaxed">
                    {m.detail}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
