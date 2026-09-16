import React, { useState } from 'react';
import { useLenis } from './hooks/useLenis';
import { CursorProvider } from './hooks/useCursor';
import { CustomCursor } from './components/CustomCursor';
import { MinimalHeader } from './components/Navigation/MinimalHeader';
import { FullscreenMenu } from './components/Navigation/FullscreenMenu';
import { InteractiveParticleField, ParticleMorphState } from './components/BackgroundCanvas/InteractiveParticleField';
import { OpeningSequence } from './components/Hero/OpeningSequence';
import { WhoSection } from './components/Who/WhoSection';
import { WhatIBuildSection } from './components/WhatIBuild/WhatIBuildSection';
import { SelectedWorkSection } from './components/SelectedWork/SelectedWorkSection';
import { ConstellationSkills } from './components/Skills/ConstellationSkills';
import { GitHubActivitySection } from './components/GitHub/GitHubActivitySection';
import { ExperimentsArchive } from './components/Experiments/ExperimentsArchive';
import { BeyondCodeSection } from './components/BeyondCode/BeyondCodeSection';
import { JourneySequence } from './components/Journey/JourneySequence';
import { FinalSection } from './components/Contact/FinalSection';

export const AppContent: React.FC = () => {
  useLenis();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [particleState, setParticleState] = useState<ParticleMorphState>('chaos');

  return (
    <div className="relative min-h-screen text-ink bg-cream overflow-x-hidden selection:bg-butter selection:text-ink">
      {/* Paper texture overlay */}
      <div className="fixed inset-0 pointer-events-none z-10 paper-texture" />

      {/* Global Interactive Follower Cursor */}
      <CustomCursor />

      {/* Interactive Pastel Background Canvas Playground */}
      <InteractiveParticleField activeState={particleState} />

      {/* Minimal Digital Studio Header */}
      <MinimalHeader
        onOpenMenu={() => setIsMenuOpen(true)}
        isMenuOpen={isMenuOpen}
      />

      {/* Fullscreen Pastel Menu Overlay */}
      <FullscreenMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
      />

      {/* Narrative Sequence */}
      <main className="relative z-20">
        <OpeningSequence />
        <WhoSection onTriggerMorph={(st) => setParticleState(st)} />
        <WhatIBuildSection />
        <SelectedWorkSection />
        <ConstellationSkills />
        <GitHubActivitySection />
        <ExperimentsArchive />
        <BeyondCodeSection />
        <JourneySequence />
        <FinalSection />
      </main>
    </div>
  );
};

export default function App() {
  return (
    <CursorProvider>
      <AppContent />
    </CursorProvider>
  );
}
