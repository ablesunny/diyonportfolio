import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Clapperboard, FileText, Menu, X, Sparkles } from 'lucide-react';
import soundEngine from '../audio/soundEngine';
import AudioWaveform from './AudioWaveform';

export default function Navbar({ onOpenPitch, onOpenCV, onOpenScript }) {
  const [isMuted, setIsMuted] = useState(soundEngine.isMuted);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const unsubscribe = soundEngine.subscribe(({ isMuted }) => {
      setIsMuted(isMuted);
    });

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      unsubscribe();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleSound = () => {
    const unmuted = soundEngine.toggleSoundscape();
    setIsMuted(!unmuted);
  };

  const navItems = [
    { label: 'ACT I', title: 'The Hook', href: '#act-1' },
    { label: 'ACT II', title: 'The Cut', href: '#act-2' },
    { label: 'ACT III', title: 'Repertoire', href: '#act-3' },
    { label: 'ACT IV', title: 'Chronicle', href: '#act-4' },
    { label: 'ACT V', title: 'Credits', href: '#act-5' },
  ];

  const handleNavClick = (href) => {
    soundEngine.playReelClick();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="contents">
      <nav
        aria-label="Main Navigation"
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? 'bg-obsidian-950/90 backdrop-blur-md border-b border-gold/20 py-3 shadow-cinematic'
            : 'bg-gradient-to-b from-obsidian-950/90 via-obsidian-950/40 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo / Monogram */}
          <a
            href="#act-1"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#act-1');
            }}
            className="group flex items-center gap-3 select-none"
          >
            <div className="w-10 h-10 rounded-sm border border-gold/40 bg-noir-charcoal/80 flex items-center justify-center font-display font-black text-gold text-lg tracking-widest shadow-gold-glow transition-all duration-300 group-hover:border-gold group-hover:scale-105">
              DG
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold tracking-widest text-sm text-script-heading group-hover:text-gold transition-colors">
                DIYON GEORGE
              </span>
              <span className="font-screenplay text-[10px] tracking-widest text-gold/70 uppercase">
                Director • Screenwriter
              </span>
            </div>
          </a>

          {/* Desktop Acts Navigation */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className="group px-3 py-1.5 rounded text-xs font-screenplay tracking-wider transition-all duration-200 hover:bg-gold/10"
              >
                <span className="text-gold/60 font-semibold group-hover:text-gold mr-1.5">
                  {item.label}:
                </span>
                <span className="text-script-text/80 group-hover:text-script-heading">
                  {item.title}
                </span>
              </a>
            ))}
          </div>

          {/* Right Controls: Soundscape + Quick Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            
            {/* Soundscape Controller */}
            <button
              onClick={toggleSound}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-screenplay tracking-wider transition-all duration-300 ${
                !isMuted
                  ? 'border-gold/60 bg-gold/15 text-gold shadow-gold-glow'
                  : 'border-noir-border bg-noir-surface/60 text-script-muted hover:border-gold/40 hover:text-script-text'
              }`}
              title="Toggle Projector & Acoustic Soundscape"
            >
              {!isMuted ? (
                <>
                  <Volume2 className="w-3.5 h-3.5 text-gold animate-pulse" />
                  <span className="text-[11px] font-bold">SOUNDSCAPE: ON</span>
                  <AudioWaveform isPlaying={true} />
                </>
              ) : (
                <>
                  <VolumeX className="w-3.5 h-3.5 text-script-muted" />
                  <span className="text-[11px]">SOUNDSCAPE: OFF</span>
                  <AudioWaveform isPlaying={false} />
                </>
              )}
            </button>

            {/* Quick Pitch / Screenplay CV CTA */}
            <button
              onClick={() => {
                soundEngine.playSlateClapboard();
                onOpenCV();
              }}
              className="px-3 py-1.5 rounded text-xs font-screenplay tracking-wide border border-gold/30 text-gold hover:bg-gold/10 transition-colors flex items-center gap-1.5"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>DIRECTOR CV</span>
            </button>

            <button
              onClick={() => {
                soundEngine.playSlateClapboard();
                onOpenPitch('General Inquiry');
              }}
              className="px-3.5 py-1.5 rounded bg-gold text-obsidian text-xs font-bold tracking-wider hover:bg-gold-300 transition-all shadow-gold-glow flex items-center gap-1.5"
            >
              <Clapperboard className="w-3.5 h-3.5" />
              <span>COLLABORATE</span>
            </button>
          </div>

          {/* Mobile Menu & Sound Toggle */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={toggleSound}
              className={`p-2 rounded border ${
                !isMuted ? 'border-gold text-gold bg-gold/10' : 'border-noir-border text-script-muted'
              }`}
              aria-label="Toggle Sound"
            >
              {!isMuted ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded border border-noir-border text-script-text"
              aria-label="Open Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="sm:hidden bg-obsidian-950 border-b border-gold/30 px-6 py-6 space-y-4 animate-in slide-in-from-top-2">
            <div className="grid grid-cols-1 gap-2 pb-4 border-b border-white/10 font-screenplay text-sm">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className="flex items-center justify-between py-2 text-script-text hover:text-gold"
                >
                  <span className="text-gold font-bold">{item.label}</span>
                  <span>{item.title}</span>
                </a>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-3 pt-2">
              <button
                onClick={() => {
                  soundEngine.playSlateClapboard();
                  setMobileMenuOpen(false);
                  onOpenCV();
                }}
                className="py-2.5 px-3 rounded border border-gold/40 text-gold text-xs font-screenplay text-center"
              >
                DIRECTOR CV
              </button>
              <button
                onClick={() => {
                  soundEngine.playSlateClapboard();
                  setMobileMenuOpen(false);
                  onOpenPitch('Mobile Pitch');
                }}
                className="py-2.5 px-3 rounded bg-gold text-obsidian text-xs font-bold text-center"
              >
                COLLABORATE
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
