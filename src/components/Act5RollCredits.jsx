import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send, FileText, Clapperboard, Copy, Check, MessageSquare, Play, Pause, FastForward } from 'lucide-react';
import soundEngine from '../audio/soundEngine';
import { directorBio } from '../data/directorBio';

export default function Act5RollCredits({ onOpenPitch, onOpenCV, onOpenScriptDrawer }) {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [creditsState, setCreditsState] = useState('normal'); // 'paused', 'normal', 'fast'
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // IST time (UTC+5:30)
      const options = { timeZone: 'Asia/Kolkata', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false };
      setCurrentTime(new Intl.DateTimeFormat('en-GB', options).format(now) + ' IST');
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleCopy = (text, type) => {
    soundEngine.playReelClick();
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const handleSpeedToggle = (speed) => {
    soundEngine.playReelClick();
    setCreditsState(speed);
  };

  const creditsRollList = [
    { title: 'DIRECTED BY', name: 'DIYON GEORGE' },
    { title: 'WRITTEN & CONCEIVED BY', name: 'DIYON GEORGE' },
    { title: 'NARRATIVE ARCHITECTURE', name: 'DIYON GEORGE' },
    { title: 'ACADEMIC DISCIPLINE', name: 'DON BOSCO ARTS & SCIENCE COLLEGE' },
    { title: 'DEGREE IN MANAGEMENT', name: 'BACHELOR OF BUSINESS ADMINISTRATION' },
    { title: 'FESTIVAL RECOGNITION', name: 'KANNUR UNIVERSITY ARTS FESTIVAL' },
    { title: 'FEATURED AWARD CUT', name: 'വിശപ്പ്, മനിതൻ, നീതി (2025–26)' },
    { title: 'POLITICAL SATIRE', name: 'LEG PIECE' },
    { title: 'PSYCHOLOGICAL THRILLER', name: '5 SYMBOLS' },
    { title: 'PRODUCTION BASE', name: 'IRITTY, KERALA, INDIA' },
    { title: 'SOUND DESIGN SYSTEM', name: 'CELLULOID WEB AUDIO ENGINE' },
    { title: 'ASPECT RATIOS', name: '2.39:1 ANAMORPHIC • 1.85:1 FLAT' },
    { title: 'DIRECTORIAL CREED', name: '“THE MOST PERSONAL IS THE MOST CREATIVE”' },
    { title: 'SPECIAL THANKS', name: 'THE VISIONARY NEWCOMERS & SEASONED CRAFTSMEN' }
  ];

  return (
    <footer
      id="act-5"
      aria-label="Act V: Roll Credits"
      className="relative pt-28 pb-20 px-4 sm:px-6 lg:px-8 bg-obsidian-950 border-t border-gold/20 overflow-hidden"
    >
      {/* Background Ambient Glow */}
      <div 
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] rounded-full pointer-events-none opacity-10 filter blur-[150px]"
        style={{ background: 'radial-gradient(circle, #D4AF37 0%, transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 font-screenplay text-xs text-gold tracking-widest uppercase mb-3">
            <span className="w-8 h-[1px] bg-gold" />
            <span>ACT V: ROLL CREDITS</span>
            <span className="w-8 h-[1px] bg-gold" />
          </div>
          
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            INITIATE COLLABORATION
          </h2>
          
          <p className="mt-4 text-sm sm:text-base text-script-muted font-sans leading-relaxed">
            Ready to bring uncompromising narrative structure and directorial precision to your next feature film, short, or streaming pilot.
          </p>
        </div>

        {/* Rolling End Credits Screen Box */}
        <div className="max-w-3xl mx-auto mb-16 p-6 sm:p-8 rounded-xl border border-gold/30 bg-noir-card/90 shadow-cinematic relative overflow-hidden">
          
          {/* Top Bar with Speed Controller */}
          <div className="flex items-center justify-between pb-4 border-b border-gold/20 font-screenplay text-xs">
            <div className="flex items-center gap-2 text-gold">
              <Clapperboard className="w-4 h-4" />
              <span className="font-bold tracking-widest">END CREDITS ROLL</span>
            </div>

            <div className="flex items-center gap-1 bg-obsidian p-1 rounded border border-gold/20">
              <button
                onClick={() => handleSpeedToggle('paused')}
                className={`p-1.5 rounded transition-colors ${
                  creditsState === 'paused' ? 'bg-gold text-obsidian' : 'text-script-muted hover:text-white'
                }`}
                title="Pause Credits"
              >
                <Pause className="w-3 h-3" />
              </button>
              <button
                onClick={() => handleSpeedToggle('normal')}
                className={`p-1.5 rounded transition-colors ${
                  creditsState === 'normal' ? 'bg-gold text-obsidian' : 'text-script-muted hover:text-white'
                }`}
                title="Normal Speed"
              >
                <Play className="w-3 h-3" />
              </button>
              <button
                onClick={() => handleSpeedToggle('fast')}
                className={`p-1.5 rounded transition-colors ${
                  creditsState === 'fast' ? 'bg-gold text-obsidian' : 'text-script-muted hover:text-white'
                }`}
                title="Fast Forward"
              >
                <FastForward className="w-3 h-3" />
              </button>
            </div>
          </div>

          {/* Credits Container Viewport with Animated Upward Scroll */}
          <div className="h-64 sm:h-72 overflow-hidden relative my-4 flex justify-center text-center">
            
            {/* Gradient Mask Top and Bottom */}
            <div className="absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-noir-card to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-noir-card to-transparent z-10 pointer-events-none" />

            <div
              className={`w-full space-y-6 select-none font-screenplay transition-all ${
                creditsState === 'paused' ? '' : creditsState === 'fast' ? 'animate-[roll_14s_linear_infinite]' : 'animate-[roll_26s_linear_infinite]'
              }`}
            >
              <div className="pt-8">
                <span className="font-display font-black text-2xl text-gold tracking-widest block">
                  DIYON GEORGE
                </span>
                <span className="text-xs text-script-muted tracking-widest uppercase">
                  DIRECTOR'S PRODUCTION DOSSIER
                </span>
              </div>

              {creditsRollList.map((item, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="text-[11px] text-gold/60 font-semibold tracking-widest uppercase">
                    {item.title}
                  </div>
                  <div className="text-sm font-bold text-white tracking-wide">
                    {item.name}
                  </div>
                </div>
              ))}

              <div className="pt-8 pb-8 text-xs text-gold/40">
                ••• THE END OF ACT V •••
              </div>
            </div>
          </div>

          {/* Credits Footer */}
          <div className="pt-3 border-t border-gold/15 flex items-center justify-between font-screenplay text-[10px] text-script-muted">
            <span>LOCATION: {directorBio.location.toUpperCase()}</span>
            <span>LOCAL TIME: {currentTime}</span>
          </div>

        </div>

        {/* Contact Cards Grid: Phone, Email, Location */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
          
          {/* Direct Phone */}
          <div className="p-6 rounded-xl border border-gold/30 bg-noir-card hover:border-gold transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-lg border border-gold/30 bg-gold/10 flex items-center justify-center text-gold">
                  <Phone className="w-5 h-5" />
                </div>
                <button
                  onClick={() => handleCopy(directorBio.phone, 'phone')}
                  className="p-1.5 rounded text-script-muted hover:text-gold hover:bg-white/5 transition-colors"
                  title="Copy Phone Number"
                >
                  {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              <span className="font-screenplay text-[10px] text-gold uppercase tracking-widest block font-bold">
                DIRECT PHONE & WHATSAPP
              </span>
              <a
                href={`tel:${directorBio.phone.replace(/\s+/g, '')}`}
                className="font-display font-bold text-xl text-white group-hover:text-gold transition-colors mt-1 block"
              >
                {directorBio.phone}
              </a>
              <p className="font-sans text-xs text-script-muted mt-2">
                Available for urgent calls, festival screener inquiries, and production meetings.
              </p>
            </div>

            <div className="pt-4 mt-4 border-t border-gold/15 flex items-center gap-2">
              <a
                href={directorBio.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundEngine.playReelClick()}
                className="text-xs font-screenplay text-gold hover:underline flex items-center gap-1"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Open in WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Direct Email */}
          <div className="p-6 rounded-xl border border-gold/30 bg-noir-card hover:border-gold transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-lg border border-gold/30 bg-gold/10 flex items-center justify-center text-gold">
                  <Mail className="w-5 h-5" />
                </div>
                <button
                  onClick={() => handleCopy(directorBio.email, 'email')}
                  className="p-1.5 rounded text-script-muted hover:text-gold hover:bg-white/5 transition-colors"
                  title="Copy Email Address"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              <span className="font-screenplay text-[10px] text-gold uppercase tracking-widest block font-bold">
                DIRECT EMAIL ADDRESS
              </span>
              <a
                href={`mailto:${directorBio.email}`}
                className="font-screenplay font-bold text-sm sm:text-base text-white group-hover:text-gold transition-colors mt-1 block truncate"
              >
                {directorBio.email}
              </a>
              <p className="font-sans text-xs text-script-muted mt-2">
                Send treatments, pitch requests, collaboration notes, or festival invitations.
              </p>
            </div>

            <div className="pt-4 mt-4 border-t border-gold/15 flex items-center gap-2">
              <a
                href={`mailto:${directorBio.email}?subject=Film%20Collaboration%20Inquiry%20-%20Diyon%20George`}
                onClick={() => soundEngine.playReelClick()}
                className="text-xs font-screenplay text-gold hover:underline flex items-center gap-1"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Compose Mail</span>
              </a>
            </div>
          </div>

          {/* Studio Location */}
          <div className="p-6 rounded-xl border border-gold/30 bg-noir-card hover:border-gold transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-lg border border-gold/30 bg-gold/10 flex items-center justify-center text-gold">
                  <MapPin className="w-5 h-5" />
                </div>
                <span className="text-xs font-screenplay text-emerald-400 bg-emerald-950/40 border border-emerald-500/30 px-2 py-0.5 rounded">
                  ACTIVE
                </span>
              </div>

              <span className="font-screenplay text-[10px] text-gold uppercase tracking-widest block font-bold">
                DIRECTORIAL BASE
              </span>
              <h3 className="font-display font-bold text-xl text-white group-hover:text-gold transition-colors mt-1">
                {directorBio.location}
              </h3>
              <p className="font-screenplay text-xs text-script-muted mt-2">
                COORDINATES: {directorBio.coordinates}
              </p>
            </div>

            <div className="pt-4 mt-4 border-t border-gold/15 flex items-center justify-between font-screenplay text-xs text-gold/80">
              <span>SOUTH INDIA</span>
              <span>GLOBAL COMMISSIONS</span>
            </div>
          </div>

        </div>

        {/* Primary Action Buttons Bar */}
        <div className="flex flex-wrap items-center justify-center gap-4 max-w-2xl mx-auto mb-16">
          <button
            onClick={() => {
              soundEngine.playSlateClapboard();
              onOpenPitch('Pitch a Project');
            }}
            className="flex-1 min-w-[200px] py-4 px-6 rounded bg-gold text-obsidian font-display font-bold text-xs tracking-wider uppercase hover:bg-gold-300 transition-all shadow-gold-glow flex items-center justify-center gap-2"
          >
            <Clapperboard className="w-4 h-4" />
            <span>PITCH A PROJECT</span>
          </button>

          <button
            onClick={() => {
              soundEngine.playSlateClapboard();
              onOpenPitch('Request Script Sample');
            }}
            className="flex-1 min-w-[200px] py-4 px-6 rounded border border-gold/50 bg-noir-charcoal text-gold font-screenplay text-xs tracking-wider uppercase hover:bg-gold/15 transition-all flex items-center justify-center gap-2"
          >
            <Send className="w-4 h-4" />
            <span>REQUEST SCRIPT SAMPLE</span>
          </button>

          <button
            onClick={() => {
              soundEngine.playSlateClapboard();
              onOpenCV();
            }}
            className="flex-1 min-w-[200px] py-4 px-6 rounded border border-noir-border bg-noir-surface text-script-text font-screenplay text-xs tracking-wider uppercase hover:border-gold hover:text-white transition-all flex items-center justify-center gap-2"
          >
            <FileText className="w-4 h-4 text-gold" />
            <span>DOWNLOAD CV</span>
          </button>
        </div>

        {/* Minimalist Cinematic Copyright & Legal Bar */}
        <div className="pt-8 border-t border-gold/15 text-center font-screenplay text-xs text-script-muted flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            © {new Date().getFullYear()} DIYON GEORGE. ALL RIGHTS RESERVED.
          </div>
          <div className="flex items-center gap-4 text-gold/70">
            <span>24 FRAMES PER SECOND</span>
            <span>•</span>
            <span>MIDNIGHT NOIR</span>
            <span>•</span>
            <span>COURIER PRIME SCRIPT FORMAT</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
