import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import FilmGrainOverlay from './components/FilmGrainOverlay';
import ViewfinderHUD from './components/ViewfinderHUD';
import Act1Hero from './components/Act1Hero';
import Act2FeaturedCut from './components/Act2FeaturedCut';
import Act3GenreRepertoire from './components/Act3GenreRepertoire';
import Act4Chronicle from './components/Act4Chronicle';
import Act5RollCredits from './components/Act5RollCredits';
import PreviousWorks from './components/PreviousWorks';
import ScreenplayDrawer from './components/ScreenplayDrawer';
import ScreenerModal from './components/ScreenerModal';
import ProjectPitchModal from './components/ProjectPitchModal';
import DirectorCVModal from './components/DirectorCVModal';
import ProjectDetailModal from './components/ProjectDetailModal';
import soundEngine from './audio/soundEngine';
import { projects } from './data/projects';

export default function App() {
  // HUD & Aspect Ratio State
  const [activeRatio, setActiveRatio] = useState('full');
  const [showHUD, setShowHUD] = useState(true);

  // Modals & Drawers State
  const [isScriptDrawerOpen, setIsScriptDrawerOpen] = useState(false);
  const [selectedScriptId, setSelectedScriptId] = useState('hunger-man-justice');

  const [isScreenerModalOpen, setIsScreenerModalOpen] = useState(false);
  const [screenerProject, setScreenerProject] = useState(null);

  const [isPitchModalOpen, setIsPitchModalOpen] = useState(false);
  const [pitchSubject, setPitchSubject] = useState('Directorial Collaboration');

  const [isCVModalOpen, setIsCVModalOpen] = useState(false);

  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const [detailProject, setDetailProject] = useState(null);

  // Unlock AudioContext safely on first user gesture
  useEffect(() => {
    const handleFirstInteraction = () => {
      soundEngine.init();
      window.removeEventListener('click', handleFirstInteraction);
      window.removeEventListener('keydown', handleFirstInteraction);
      window.removeEventListener('touchstart', handleFirstInteraction);
    };

    window.addEventListener('click', handleFirstInteraction);
    window.addEventListener('keydown', handleFirstInteraction);
    window.addEventListener('touchstart', handleFirstInteraction);

    return () => {
      window.removeEventListener('click', handleFirstInteraction);
      window.removeEventListener('keydown', handleFirstInteraction);
      window.removeEventListener('touchstart', handleFirstInteraction);
    };
  }, []);

  // Handlers
  const handleOpenScriptDrawer = (projectId = 'hunger-man-justice') => {
    setSelectedScriptId(projectId);
    setIsScriptDrawerOpen(true);
  };

  const handleOpenScreener = (project) => {
    setScreenerProject(project || projects[0]);
    setIsScreenerModalOpen(true);
  };

  const handleOpenPitch = (subject = 'Directorial Collaboration') => {
    setPitchSubject(subject);
    setIsPitchModalOpen(true);
  };

  const handleOpenCV = () => {
    setIsCVModalOpen(true);
  };

  const handleOpenDetail = (project) => {
    setDetailProject(project);
    setIsDetailModalOpen(true);
  };

  return (
    <div className="relative min-h-screen bg-obsidian text-script-text font-sans selection:bg-gold selection:text-obsidian overflow-x-hidden">
      
      {/* 1. Procedural 35mm Celluloid Grain Overlay */}
      <FilmGrainOverlay opacity={0.045} />

      {/* 2. Director Viewfinder HUD & Aspect Ratio Frame Shifts */}
      <ViewfinderHUD
        activeRatio={activeRatio}
        setActiveRatio={setActiveRatio}
        showHUD={showHUD}
        setShowHUD={setShowHUD}
      />

      {/* 3. Global Cinema HUD Navbar */}
      <Navbar
        onOpenPitch={handleOpenPitch}
        onOpenCV={handleOpenCV}
        onOpenScript={handleOpenScriptDrawer}
      />

      {/* 4. Portfolio Architecture: The 5 Acts */}
      <main className="relative z-10">
        {/* ACT I: THE HOOK */}
        <Act1Hero
          onOpenPitch={handleOpenPitch}
          onOpenScript={handleOpenScriptDrawer}
        />

        {/* ACT II: THE FEATURED CUT */}
        <Act2FeaturedCut
          onOpenScreener={handleOpenScreener}
          onOpenScriptDrawer={handleOpenScriptDrawer}
          onOpenDetail={handleOpenDetail}
        />

        {/* ACT III: THE GENRE REPERTOIRE */}
        <Act3GenreRepertoire
          onOpenScriptDrawer={handleOpenScriptDrawer}
          onOpenDetail={handleOpenDetail}
        />

        {/* PREVIOUS WORKS REPOSITORY */}
        <PreviousWorks />

        {/* ACT IV: THE CHRONICLE */}
        <Act4Chronicle
          onOpenCV={handleOpenCV}
          onOpenPitch={handleOpenPitch}
        />

        {/* ACT V: ROLL CREDITS */}
        <Act5RollCredits
          onOpenPitch={handleOpenPitch}
          onOpenCV={handleOpenCV}
          onOpenScriptDrawer={handleOpenScriptDrawer}
        />
      </main>

      {/* 5. Interactive Screenplay Reader Drawer */}
      <ScreenplayDrawer
        isOpen={isScriptDrawerOpen}
        onClose={() => setIsScriptDrawerOpen(false)}
        initialProjectId={selectedScriptId}
        onOpenPitch={handleOpenPitch}
      />

      {/* 6. Private Screener Request Modal */}
      <ScreenerModal
        isOpen={isScreenerModalOpen}
        onClose={() => setIsScreenerModalOpen(false)}
        project={screenerProject}
      />

      {/* 7. Pitch a Project / Script Request Modal */}
      <ProjectPitchModal
        isOpen={isPitchModalOpen}
        onClose={() => setIsPitchModalOpen(false)}
        initialSubject={pitchSubject}
      />

      {/* 8. Downloadable / Printable Director's CV Modal */}
      <DirectorCVModal
        isOpen={isCVModalOpen}
        onClose={() => setIsCVModalOpen(false)}
      />

      {/* 9. Complete Project Treatment Dossier Modal */}
      <ProjectDetailModal
        isOpen={isDetailModalOpen}
        onClose={() => setIsDetailModalOpen(false)}
        project={detailProject}
        onOpenScriptDrawer={handleOpenScriptDrawer}
        onOpenScreener={handleOpenScreener}
      />

    </div>
  );
}
