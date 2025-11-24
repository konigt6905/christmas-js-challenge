const PROGRESS_KEY = 'christmas-js-challenge-progress';

// Migration from cookies to localStorage (one-time)
const migrateCookieToLocalStorage = () => {
  // Check if we already have localStorage data
  if (localStorage.getItem(PROGRESS_KEY)) {
    return;
  }

  // Try to get old cookie data
  const cookieMatch = document.cookie.match(/christmas-js-challenge-progress=([^;]+)/);
  if (cookieMatch && cookieMatch[1]) {
    try {
      const decodedValue = decodeURIComponent(cookieMatch[1]);
      const parsedData = JSON.parse(decodedValue);
      // Migrate to localStorage
      localStorage.setItem(PROGRESS_KEY, JSON.stringify(parsedData));
      // Remove old cookie
      document.cookie = 'christmas-js-challenge-progress=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
      console.log('Successfully migrated progress from cookies to localStorage');
    } catch (error) {
      console.error('Error migrating cookie data:', error);
    }
  }
};

// Run migration on module load
migrateCookieToLocalStorage();

export const getProgress = () => {
  const progressData = localStorage.getItem(PROGRESS_KEY);
  if (!progressData) {
    return {};
  }
  try {
    return JSON.parse(progressData);
  } catch (error) {
    console.error('Error parsing progress data:', error);
    return {};
  }
};

export const saveProgress = (progress) => {
  try {
    localStorage.setItem(PROGRESS_KEY, JSON.stringify(progress));
  } catch (error) {
    console.error('Error saving progress:', error);
  }
};

export const getChallengeProgress = (challengeId) => {
  const progress = getProgress();
  return progress[challengeId] || {
    answered: false,
    revealed: false,
    userCode: '',
  };
};

export const updateChallengeProgress = (challengeId, updates) => {
  const progress = getProgress();
  progress[challengeId] = {
    ...progress[challengeId],
    ...updates,
  };
  saveProgress(progress);
  return progress[challengeId];
};

export const markAsAnswered = (challengeId, userCode) => {
  return updateChallengeProgress(challengeId, {
    answered: true,
    userCode,
  });
};

export const markAsRevealed = (challengeId) => {
  return updateChallengeProgress(challengeId, {
    revealed: true,
  });
};

export const saveUserCode = (challengeId, userCode) => {
  return updateChallengeProgress(challengeId, {
    userCode,
  });
};

export const getOverallProgress = (totalChallenges, challengeIds = null) => {
  const progress = getProgress();

  // If specific challenge IDs are provided, filter by those IDs
  let answered, revealed;
  if (challengeIds && challengeIds.length > 0) {
    answered = challengeIds.filter(id => progress[id]?.answered).length;
    revealed = challengeIds.filter(id => progress[id]?.revealed && !progress[id]?.answered).length;
  } else {
    // Original behavior: count all challenges
    answered = Object.values(progress).filter((p) => p.answered).length;
    revealed = Object.values(progress).filter((p) => p.revealed && !p.answered).length;
  }

  const percentage = totalChallenges > 0 ? Math.round((answered / totalChallenges) * 100) : 0;

  return {
    answered,
    revealed,
    total: totalChallenges,
    percentage,
  };
};

export const resetProgress = () => {
  localStorage.removeItem(PROGRESS_KEY);
};
