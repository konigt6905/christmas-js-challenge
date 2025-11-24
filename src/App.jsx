import { useState, useEffect, useMemo } from 'react';
import Hero from './components/Hero';
import DifficultySelection from './components/DifficultySelection';
import ChallengeGrid from './components/ChallengeGrid';
import ChallengeDetail from './components/ChallengeDetail';
import ProgressBar from './components/ProgressBar';
import LevelIndicator from './components/LevelIndicator';
import Snowflakes from './components/Snowflakes';
import Footer from './components/Footer';
import { challenges } from './data/challenges';
import { resetProgress } from './utils/progress';

function App() {
  const [view, setView] = useState('hero');
  const [selectedLevel, setSelectedLevel] = useState(null);
  const [selectedChallenge, setSelectedChallenge] = useState(null);
  const [showSnow, setShowSnow] = useState(true);

  useEffect(() => {
    const checkSnowPreference = () => {
      const preferReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      setShowSnow(!preferReduced);
    };

    checkSnowPreference();
  }, []);

  const handleStartClick = () => {
    setView('difficulty-selection');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLevelSelect = (level) => {
    setSelectedLevel(level);
    setView('challenges');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLevelChange = (newLevel) => {
    setSelectedLevel(newLevel);
    setView('challenges');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleChallengeClick = (challenge) => {
    setSelectedChallenge(challenge);
    setView('detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToChallenges = () => {
    setSelectedChallenge(null);
    setView('challenges');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNextChallenge = () => {
    const currentIndex = filteredChallenges.findIndex((c) => c.id === selectedChallenge.id);
    if (currentIndex < filteredChallenges.length - 1) {
      setSelectedChallenge(filteredChallenges[currentIndex + 1]);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handlePreviousChallenge = () => {
    const currentIndex = filteredChallenges.findIndex((c) => c.id === selectedChallenge.id);
    if (currentIndex > 0) {
      setSelectedChallenge(filteredChallenges[currentIndex - 1]);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleResetProgress = () => {
    if (
      window.confirm(
        'Are you sure you want to reset all your progress? This cannot be undone!'
      )
    ) {
      resetProgress();
      window.location.reload();
    }
  };

  // Filter challenges based on selected level
  const filteredChallenges = useMemo(() => {
    if (!selectedLevel) {
      return challenges;
    }
    return challenges.filter((c) => c.difficulty === selectedLevel);
  }, [selectedLevel]);

  const currentIndex = selectedChallenge
    ? filteredChallenges.findIndex((c) => c.id === selectedChallenge.id)
    : -1;
  const hasNext = currentIndex < filteredChallenges.length - 1;
  const hasPrevious = currentIndex > 0;

  return (
    <div className="min-h-screen relative">
      {showSnow && <Snowflakes />}

      {view === 'hero' && (
        <>
          <Hero onStartClick={handleStartClick} />
          <div id="challenges"></div>
        </>
      )}

      {view === 'difficulty-selection' && (
        <DifficultySelection onSelect={handleLevelSelect} />
      )}

      {view === 'challenges' && (
        <>
          <div className="max-w-7xl mx-auto px-4 pt-8 space-y-4">
            <LevelIndicator
              currentLevel={selectedLevel}
              onLevelChange={handleLevelChange}
            />
            <ProgressBar
              totalChallenges={filteredChallenges.length}
              onReset={handleResetProgress}
            />
          </div>
          <ChallengeGrid
            challenges={filteredChallenges}
            onChallengeClick={handleChallengeClick}
          />
        </>
      )}

      {view === 'detail' && selectedChallenge && (
        <ChallengeDetail
          challenge={selectedChallenge}
          onBack={handleBackToChallenges}
          onNext={handleNextChallenge}
          onPrevious={handlePreviousChallenge}
          hasNext={hasNext}
          hasPrevious={hasPrevious}
        />
      )}

      <Footer />
    </div>
  );
}

export default App;
