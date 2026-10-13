import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Clapperboard, Send, MessageSquare, CheckCircle, Mail, Sparkles } from 'lucide-react';
import soundEngine from '../audio/soundEngine';
import { directorBio } from '../data/directorBio';

export default function ProjectPitchModal({ isOpen, onClose, initialSubject = 'Directorial Collaboration' }) {
  const [subject, setSubject] = useState(initialSubject);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [collaborationType, setCollaborationType] = useState('Feature Film Direction');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  useEffect(() => {
    if (initialSubject) {
      setSubject(initialSubject);
    }
  }, [initialSubject]);

  if (!isOpen) return null;

  const handleClose = () => {
    soundEngine.playReelClick();
    setSent(false);
    onClose();
  };

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    soundEngine.playSlateClapboard();
    setSent(true);

    const emailSubject = encodeURIComponent(`[Cinema Proposal] ${subject} - ${name}`);
    const emailBody = encodeURIComponent(
      `Hello Diyon,\n\nI am writing to propose a cinematic collaboration.\n\nSender: ${name}\nEmail: ${email}\nPhone: ${phone || 'N/A'}\nProject/Collaboration Type: ${collaborationType}\nSubject: ${subject}\n\nProject Synopsis / Message:\n${message}\n\nLooking forward to your response.\n\nBest regards,\n${name}`
    );

    setTimeout(() => {
      window.location.href = `mailto:${directorBio.email}?subject=${emailSubject}&body=${emailBody}`;
    }, 1000);
  };

  const handleWhatsAppSubmit = () => {
    soundEngine.playSlateClapboard();
    const text = encodeURIComponent(
      `Hello Diyon George,\nI am reaching out regarding a film project:\n\n*Name:* ${name || 'Collaborator'}\n*Type:* ${collaborationType}\n*Subject:* ${subject}\n*Message:* ${message || 'I would like to discuss a film project.'}`
    );
    window.open(`https://wa.me/918075865642?text=${text}`, '_blank');
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

        {/* Modal Dialog */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-xl bg-noir-card border border-gold/40 rounded-xl shadow-2xl overflow-hidden z-10"
        >
          {/* Header */}
          <div className="p-6 border-b border-gold/20 bg-noir-surface flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg border border-gold/40 bg-gold/10 flex items-center justify-center text-gold">
                <Clapperboard className="w-5 h-5" />
              </div>
              <div>
                <span className="font-screenplay text-[10px] text-gold uppercase tracking-widest block font-bold">
                  DIRECTORIAL INQUIRY & PITCH DESK
                </span>
                <h3 className="font-display font-bold text-xl text-white">
                  Pitch to Diyon George
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

          <div className="p-6 sm:p-8">
            {sent ? (
              <div className="py-8 text-center space-y-4">
                <div className="w-16 h-16 mx-auto rounded-full border-2 border-gold bg-gold/10 flex items-center justify-center text-gold shadow-gold-glow">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h4 className="font-display font-bold text-xl text-white">
                  Proposal Transmitted!
                </h4>
                <p className="font-sans text-xs sm:text-sm text-script-muted max-w-md mx-auto">
                  Your project details have been formulated. Opening your default mail client to dispatch directly to <span className="text-gold font-mono">{directorBio.email}</span>.
                </p>
                <div className="pt-2">
                  <button
                    onClick={handleClose}
                    className="px-6 py-2.5 rounded bg-gold text-obsidian text-xs font-bold uppercase tracking-wider font-display"
                  >
                    Close Window
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleEmailSubmit} className="space-y-4 font-sans">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-screenplay text-gold/80 mb-1">
                      YOUR NAME *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Producer / Director Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded bg-obsidian-900 border border-noir-border text-script-text text-sm focus:outline-none focus:border-gold"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-screenplay text-gold/80 mb-1">
                      EMAIL ADDRESS *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="your.email@domain.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded bg-obsidian-900 border border-noir-border text-script-text text-sm focus:outline-none focus:border-gold"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-screenplay text-gold/80 mb-1">
                      PHONE / WHATSAPP
                    </label>
                    <input
                      type="tel"
                      placeholder="+91..."
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded bg-obsidian-900 border border-noir-border text-script-text text-sm focus:outline-none focus:border-gold"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-screenplay text-gold/80 mb-1">
                      COLLABORATION TYPE
                    </label>
                    <select
                      value={collaborationType}
                      onChange={(e) => setCollaborationType(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded bg-obsidian-900 border border-noir-border text-script-text text-sm focus:outline-none focus:border-gold"
                    >
                      <option>Feature Film Direction</option>
                      <option>Screenplay Commission / Writing</option>
                      <option>Short Film Directorial Collaboration</option>
                      <option>Script Breakdown & Doctoring</option>
                      <option>Festival Screener / Jury Inquiry</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-screenplay text-gold/80 mb-1">
                    PROJECT LOGLINE / BRIEF *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Describe your story concept, schedule timeline, or specific script request..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded bg-obsidian-900 border border-noir-border text-script-text text-sm focus:outline-none focus:border-gold"
                  />
                </div>

                {/* Submit Actions: Direct Email or WhatsApp */}
                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <button
                    type="submit"
                    className="flex-1 py-3 px-4 rounded bg-gold text-obsidian font-display font-bold text-xs tracking-wider uppercase hover:bg-gold-300 transition-all flex items-center justify-center gap-2 shadow-gold-glow"
                  >
                    <Mail className="w-4 h-4" />
                    <span>DISPATCH VIA EMAIL</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleWhatsAppSubmit}
                    className="py-3 px-4 rounded border border-emerald-500/50 bg-emerald-950/20 text-emerald-400 font-screenplay text-xs tracking-wider uppercase hover:bg-emerald-950/40 transition-all flex items-center justify-center gap-2"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>WHATSAPP PITCH</span>
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
