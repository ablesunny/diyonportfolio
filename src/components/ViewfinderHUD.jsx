import React from 'react';
import { Camera, Eye, EyeOff } from 'lucide-react';
import soundEngine from '../audio/soundEngine';

/**
 * Director's Viewfinder HUD & Aspect Ratio Frame-Guides
 */
export default function ViewfinderHUD({ activeRatio, setActiveRatio, showHUD, setShowHUD }) {
  const ratios = [
    { id: 'full', label: 'FULL' },
    { id: 'scope', label: '2.39:1 SCOPE' },
    { id: 'flat', label: '1.85:1 FLAT' },
    { id: 'academy', label: '4:3 ACADEMY' },
  ];

  const handleRatioClick = (id) => {
    soundEngine.playReelClick();
    setActiveRatio(id);
  };

  const handleToggleHUD = () => {
    soundEngine.playReelClick();
    setShowHUD(!showHUD);
  };

  return (
    <>
      {/* Aspect Ratio Letterbox Bars (Simulating Anamorphic Frame Shifts) */}
      {activeRatio === 'scope' && (
        <div className="pointer-events-none fixed inset-0 z-40 flex flex-col justify-between transition-all duration-700">
          <div className="h-[9.5vh] w-full bg-obsidian border-b border-gold/20 shadow-2xl" />
          <div className="h-[9.5vh] w-full bg-obsidian border-t border-gold/20 shadow-2xl" />
        </div>
      )}

      {activeRatio === 'flat' && (
        <div className="pointer-events-none fixed inset-0 z-40 flex flex-col justify-between transition-all duration-700">
          <div className="h-[4.5vh] w-full bg-obsidian border-b border-gold/15" />
          <div className="h-[4.5vh] w-full bg-obsidian border-t border-gold/15" />
        </div>
      )}

      {activeRatio === 'academy' && (
        <div className="pointer-events-none fixed inset-0 z-40 flex justify-between transition-all duration-700">
          <div className="w-[18vw] h-full bg-obsidian border-r border-gold/20" />
          <div className="w-[18vw] h-full bg-obsidian border-l border-gold/20" />
        </div>
      )}

      {/* Optical Frame Corners & Technical HUD Overlay */}
      {showHUD && (
        <div className="pointer-events-none fixed inset-4 md:inset-8 z-30 flex flex-col justify-between select-none">
          {/* Top Edge */}
          <div className="flex items-start justify-between font-screenplay text-[10px] md:text-xs text-gold/60 tracking-widest uppercase">
            <div className="flex items-center gap-3">
              <span className="inline-block w-2.5 h-2.5 rounded-full bg-red-600 animate-pulse shadow-sm shadow-red-500" />
              <span className="font-bold text-red-500">REC</span>
              <span className="hidden sm:inline border-l border-gold/30 pl-3">24.00 FPS</span>
              <span className="hidden md:inline border-l border-gold/30 pl-3">SHUTTER 180°</span>
            </div>
            
            <div className="flex items-center gap-4">
              <span className="text-script-text/60">LENS: 35MM T1.5</span>
              <span className="hidden sm:inline border-l border-gold/30 pl-4 text-gold">SCENE: 01</span>
              <span className="hidden sm:inline border-l border-gold/30 pl-4 text-gold">TAKE: 01</span>
            </div>
          </div>

          {/* Viewfinder Center Crosshair */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
            <div className="relative w-8 h-8">
              <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gold -translate-y-1/2" />
              <div className="absolute top-0 left-1/2 w-[1px] h-full bg-gold -translate-x-1/2" />
              <div className="absolute inset-2 border border-gold/50 rounded-full" />
            </div>
          </div>

          {/* Corner Optical L-Brackets */}
          <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-gold/40" />
          <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-gold/40" />
          <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-gold/40" />
          <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-gold/40" />

          {/* Bottom Edge */}
          <div className="flex items-end justify-between font-screenplay text-[10px] md:text-xs text-gold/60 tracking-wider">
            <div>
              <span className="text-gold font-bold">TC</span> 01:24:19:08
            </div>
            <div className="hidden sm:block text-right text-script-text/50">
              DIR: DIYON GEORGE • ARRI ALEXA MINI LF
            </div>
          </div>
        </div>
      )}

      {/* Floating Viewfinder Controls in Bottom Left */}
      <aside aria-label="Director Viewfinder Controls" className="fixed bottom-4 left-4 z-40 flex items-center gap-1.5 p-1.5 rounded-full bg-obsidian-800/90 border border-gold/25 backdrop-blur-md shadow-cinematic text-xs font-screenplay">
        <button
          onClick={handleToggleHUD}
          title={showHUD ? "Hide Viewfinder HUD" : "Show Viewfinder HUD"}
          className={`flex items-center gap-1 px-2.5 py-1 rounded-full transition-colors ${
            showHUD ? 'bg-gold/20 text-gold' : 'text-script-muted hover:text-script-text'
          }`}
        >
          {showHUD ? <Eye className="w-3.5 h-3.5" /> : <EyeOff className="w-3.5 h-3.5" />}
          <span className="hidden md:inline">{showHUD ? 'HUD ON' : 'HUD OFF'}</span>
        </button>

        <div className="h-3 w-[1px] bg-white/10" />

        <div className="flex items-center gap-1">
          {ratios.map((r) => (
            <button
              key={r.id}
              onClick={() => handleRatioClick(r.id)}
              className={`px-2 py-0.5 rounded text-[10px] transition-all ${
                activeRatio === r.id
                  ? 'bg-gold text-obsidian font-bold shadow-sm'
                  : 'text-script-muted hover:text-gold hover:bg-white/5'
              }`}
            >
              {r.label}
            </button>
          ))}
        </div>
      </aside>
    </>
  );
}
