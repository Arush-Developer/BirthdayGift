import React, { useState, useEffect } from 'react';
import CountdownPage from './components/CountdownPage';
import HomePage from './components/HomePage';
import MemoryLane from './components/MemoryLane';
import LoveLetterRoom from './components/LoveLetterRoom';
import BalloonGame from './components/BalloonGame';
import PersonalQuiz from './components/PersonalQuiz';
import VirtualGiftBox from './components/VirtualGiftBox';
import StarryNight from './components/StarryNight';
import FutureDreams from './components/FutureDreams';
import PolaroidWall from './components/PolaroidWall';
import ScratchCard from './components/ScratchCard';
import FortuneTeller from './components/FortuneTeller';
import LoveCalculator from './components/LoveCalculator';
import PlaylistPage from './components/PlaylistPage';
import GrandFinale from './components/GrandFinale';

import { isUnlocked, shouldBypass } from './utils/dateUtils';

function App() {
  const [isUnlockedState, setIsUnlockedState] = useState(false);
  const [showCurtains, setShowCurtains] = useState(true);
  const [currentStep, setCurrentStep] = useState(0);

  // All pages in sequence
  const pages = [
    <HomePage />,
    <MemoryLane />,
    <LoveLetterRoom />,
    <BalloonGame />,
    <PersonalQuiz />,
    <VirtualGiftBox />,
    <StarryNight />,
    <FutureDreams />,
    <PolaroidWall />,
    <ScratchCard />,
    <FortuneTeller />,
    <LoveCalculator />,
    <PlaylistPage />,
    <GrandFinale />
  ];

  useEffect(() => {
    // Unlock logic
    if (isUnlocked() || shouldBypass()) {
      setIsUnlockedState(true);
    }

    // Secret bypass key (Ctrl+A)
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.key === 'a') {
        e.preventDefault();
        setIsUnlockedState(true);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleCurtainsOpen = () => {
    setShowCurtains(false);
  };

  if (!isUnlockedState) {
    return <CountdownPage />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-purple-200">
      {showCurtains ? (
        // Curtains animation
        <div className="fixed inset-0 z-50">
          <div className="curtains-container">
            <div
              className="curtain left-curtain"
              onClick={handleCurtainsOpen}
            ></div>
            <div
              className="curtain right-curtain"
              onClick={handleCurtainsOpen}
            ></div>
            <div className="rope-container" onClick={handleCurtainsOpen}>
              <div className="rope"></div>
              <div className="rope-handle">🎭</div>
            </div>
          </div>
        </div>
      ) : (
        <div className="relative flex flex-col items-center justify-center min-h-screen">
          {/* Render current page */}
          <div className="w-full">{pages[currentStep]}</div>

          {/* Next button */}
          {currentStep < pages.length - 1 && (
            <button
              onClick={() => setCurrentStep(currentStep + 1)}
              className="mt-8 px-6 py-3 bg-pink-500 text-white text-lg font-semibold rounded-2xl shadow-lg hover:bg-pink-600 transition-all"
            >
              Next ➡️
            </button>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
