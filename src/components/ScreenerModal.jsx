import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Play, ShieldAlert, CheckCircle, Send, Lock, Film, Sparkles } from 'lucide-react';
import soundEngine from '../audio/soundEngine';
import { directorBio } from '../data/directorBio';

export default function ScreenerModal({ isOpen, onClose, project }) {
  const [viewerName, setViewerName] = useState('');
  const [organization, setOrganization] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('Festival Programmer / Jury');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen || !project) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    soundEngine.playSlateClapboard();
    setSubmitted(true);

    const subject = encodeURIComponent(`Private Screener Access Request: ${project.titleEnglish} - ${viewerName || 'Viewer'}`);
    const body = encodeURIComponent(
      `Hello Diyon,\n\nI am requesting private screener access for '${project.titleEnglish}' (${project.titleMalayalam}).\n\nName: ${viewerName}\nRole: ${role}\nOrganization/Festival: ${organization}\nEmail: ${email}\n\nLooking forward to reviewing your film.\n\nBest regards,\n${viewerName}`
    );

    // Give a brief moment for celebration then open mailto
    setTimeout(() => {
      window.location.href = `mailto:${directorBio.email}?subject=${subject}&body=${body}`;
    }, 1200);
  };

  const handleClose = () => {
    soundEngine.playReelClick();
    setSubmitted(false);
    onClose();
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
          className="relative w-full max-w-2xl bg-noir-card border border-gold/40 rounded-xl shadow-2xl overflow-hidden z-10"
        >
          {/* Header */}
          <div className="p-6 border-b border-gold/20 bg-noir-surface flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg border border-gold/40 bg-gold/10 flex items-center justify-center text-gold">
                <Play className="w-5 h-5 fill-gold" />
              </div>
              <div>
                <span className="font-screenplay text-[10px] text-gold uppercase tracking-widest block font-bold">
                  PROTECTED FESTIVAL SCREENER
                </span>
                <h3 className="font-display font-bold text-xl text-white">
                  {project.titleEnglish} <span className="text-gold">/ {project.titleMalayalam}</span>
                </h3>
              </div>
            </div>

            <button
              onClick={handleClose}
              className="p-2 rounded-full border border-noir-border text-script-muted hover:text-white hover:border-gold transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Screener Preview Monitor with Security Watermark */}
          <div className="relative aspect-video bg-obsidian-950 border-b border-gold/20 flex flex-col items-center justify-center p-6 text-center select-none overflow-hidden">
            {/* Ambient Screen Glow */}
            <div className="absolute inset-0 bg-radial-gradient opacity-30 pointer-events-none" />

            {/* Dynamic Security Watermark */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none -rotate-12 opacity-25">
              <span className="font-screenplay text-sm sm:text-lg font-bold text-red-500 uppercase tracking-widest border-2 border-dashed border-red-500/50 p-4">
                FOR REVIEW ONLY • {viewerName ? viewerName.toUpperCase() : 'REGISTERED VIEWER'} • {organization || 'FESTIVAL SELECTION'}
              </span>
            </div>

            {/* Center Lock / Screener Badge */}
            <div className="relative z-10 space-y-3">
              <div className="w-14 h-14 mx-auto rounded-full border border-gold/40 bg-noir-charcoal/80 flex items-center justify-center text-gold shadow-gold-glow">
                <Lock className="w-6 h-6" />
              </div>
              <h4 className="font-display font-bold text-lg text-white">
                Festival-Restricted Screener Access
              </h4>
              <p className="font-sans text-xs text-script-muted max-w-md mx-auto">
                Due to ongoing international film festival submissions and Kannur University Arts Festival rights, screener access is provided via personalized, watermarked links.
              </p>
            </div>
          </div>

          {/* Form Content */}
          <div className="p-6 sm:p-8">
            {submitted ? (
              <div className="py-8 text-center space-y-4">
                <div className="w-16 h-16 mx-auto rounded-full border-2 border-emerald-500 bg-emerald-950/30 flex items-center justify-center text-emerald-400">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h4 className="font-display font-bold text-xl text-white">
                  Screener Request Dispatched!
                </h4>
                <p className="font-sans text-xs sm:text-sm text-script-muted max-w-md mx-auto">
                  Opening your email client to send credentials to Diyon George. You will receive private Vimeo/secure link access within 12 hours.
                </p>
                <button
                  onClick={handleClose}
                  className="mt-4 px-6 py-2.5 rounded bg-gold text-obsidian text-xs font-bold uppercase tracking-wider font-display"
                >
                  Close Window
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 font-sans">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-screenplay text-gold/80 mb-1">
                      YOUR NAME *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Anand Menon"
                      value={viewerName}
                      onChange={(e) => setViewerName(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded bg-obsidian-900 border border-noir-border text-script-text text-sm focus:outline-none focus:border-gold"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-screenplay text-gold/80 mb-1">
                      ORGANIZATION / FESTIVAL *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. IFFK / Production Studio"
                      value={organization}
                      onChange={(e) => setOrganization(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded bg-obsidian-900 border border-noir-border text-script-text text-sm focus:outline-none focus:border-gold"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-screenplay text-gold/80 mb-1">
                      DIRECT EMAIL *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. programmer@filmfestival.org"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded bg-obsidian-900 border border-noir-border text-script-text text-sm focus:outline-none focus:border-gold"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-screenplay text-gold/80 mb-1">
                      YOUR ROLE / CAPACITY
                    </label>
                    <select
                      value={role}
                      onChange={(e) => setRole(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded bg-obsidian-900 border border-noir-border text-script-text text-sm focus:outline-none focus:border-gold font-sans"
                    >
                      <option>Festival Programmer / Jury</option>
                      <option>Film Producer / Financier</option>
                      <option>Distributor / OTT Buyer</option>
                      <option>Director / Co-Creator</option>
                      <option>Film Critic / Journalist</option>
                    </select>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 px-4 rounded bg-gold text-obsidian font-display font-bold text-xs tracking-wider uppercase hover:bg-gold-300 transition-all flex items-center justify-center gap-2 shadow-gold-glow"
                  >
                    <Send className="w-4 h-4" />
                    <span>REQUEST WATERMARKED SCREENER PASS</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
