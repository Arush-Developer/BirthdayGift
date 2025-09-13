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
    <HomePage key="home" />,
    <MemoryLane key="memory" />,
    <LoveLetterRoom key="letters" />,
    <BalloonGame key="balloons" />,
    <PersonalQuiz key="quiz" />,
    <VirtualGiftBox key="gift" />,
    <StarryNight key="stars" />,
    <FutureDreams key="dreams" />,
    <PolaroidWall key="polaroid" />,
    <ScratchCard key="scratch" />,
    <FortuneTeller key="fortune" />,
    <LoveCalculator key="calculator" />,
    <PlaylistPage key="playlist" />,
    <GrandFinale key="finale" />
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

  // Reset to first page when curtains open
  const handleCurtainsOpen = () => {
    setCurrentStep(0);
    setShowCurtains(false);
    window.scrollTo({ top: 0, behavior: 'auto' }); // jump to top instantly
  };

  // Auto-scroll to top whenever currentStep changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentStep]);

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

          {/* Navigation buttons */}
          <div className="flex justify-between w-full max-w-4xl mt-8 px-6">
            {currentStep > 0 && (
              <button
                onClick={() =>
                  setCurrentStep((prev) => Math.max(prev - 1, 0))
                }
                className="px-6 py-3 bg-gray-500 text-white text-lg font-semibold rounded-2xl shadow-lg hover:bg-gray-600 transition-all"
              >
                ⬅ Back
              </button>
            )}

            {currentStep < pages.length - 1 && (
              <button
                onClick={() =>
                  setCurrentStep((prev) => Math.min(prev + 1, pages.length - 1))
                }
                className="ml-auto px-6 py-3 bg-pink-500 text-white text-lg font-semibold rounded-2xl shadow-lg hover:bg-pink-600 transition-all"
              >
                Next ➡️
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
