import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Film } from 'lucide-react';
import soundEngine from '../audio/soundEngine';

/**
 * Previous Works Section
 * Connects to the external Google Drive archive of previous work samples.
 */
export default function PreviousWorks() {
  const driveUrl = "https://drive.google.com/drive/folders/1JtXIe0QjFCQBi5Cbc5oxEMXzUDwsnZsd";

  const handleClick = () => {
    soundEngine.playSlateClapboard();
  };

  return (
    <section
      id="previous-works"
      aria-label="Previous Works"
      className="relative py-20 px-4 sm:px-6 lg:px-8 border-b border-gold/15 bg-obsidian-950 overflow-hidden"
    >
      {/* Background Projector Ambient Glow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full pointer-events-none opacity-10 filter blur-[120px]"
        style={{ background: 'radial-gradient(circle, #D4AF37 0%, transparent 70%)' }}
      />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="p-8 sm:p-12 rounded-xl border border-gold/30 bg-gradient-to-br from-noir-card via-obsidian-900 to-noir-surface relative shadow-cinematic text-center flex flex-col items-center"
        >
          {/* Section Indicator */}
          <div className="inline-flex items-center gap-2 font-screenplay text-xs text-gold tracking-widest uppercase mb-4">
            <span className="w-8 h-[1px] bg-gold" />
            <span>ARCHIVAL COLLECTION</span>
            <span className="w-8 h-[1px] bg-gold" />
          </div>

          {/* Section Title */}
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
            Previous Works
          </h2>

          <p className="max-w-2xl text-sm sm:text-base text-script-muted font-sans leading-relaxed mb-8">
            Access the external collection of earlier directorial exercises, screenwriting drafts, scene breakdowns, and archival film project materials.
          </p>

          {/* Action Button */}
          <a
            href={driveUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleClick}
            className="inline-flex items-center gap-3 px-8 py-4 rounded bg-gradient-to-r from-gold-600 via-gold to-gold-400 text-obsidian font-display font-bold text-xs sm:text-sm tracking-wider uppercase hover:shadow-gold-glow hover:scale-105 transition-all duration-300 group"
          >
            <Film className="w-4 h-4 transition-transform group-hover:rotate-12" />
            <span>View Previous Works</span>
            <ExternalLink className="w-4 h-4" />
          </a>

          {/* Film Perforation Footer Tag */}
          <div className="mt-8 pt-6 border-t border-gold/15 w-full flex flex-col sm:flex-row items-center justify-between text-[11px] font-screenplay text-gold/60 gap-2">
            <span>REPOSITORY: GOOGLE DRIVE</span>
            <span>EXTERNAL WORK SAMPLES</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
