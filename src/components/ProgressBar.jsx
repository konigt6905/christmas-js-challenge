import { Trophy, Star, Eye } from 'lucide-react';
import { getOverallProgress } from '../utils/progress';

const ProgressBar = ({ totalChallenges, challengeIds, onReset }) => {
  const progress = getOverallProgress(totalChallenges, challengeIds);

  return (
    <div className="glass-card p-6 border-2 border-christmas-gold/30 animate-fade-in-up">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Trophy className="w-6 h-6 text-christmas-gold animate-pulse" />
          <h3 className="text-xl font-bold text-christmas-pine">Your Progress</h3>
        </div>
        {progress.answered > 0 && (
          <button
            onClick={onReset}
            className="text-sm text-christmas-red hover:text-christmas-holly transition-colors"
          >
            Reset Progress
          </button>
        )}
      </div>

      {/* Progress Bar */}
      <div className="relative w-full h-6 bg-gray-200 rounded-full overflow-hidden mb-4">
        <div
          className="absolute top-0 left-0 h-full bg-gradient-to-r from-christmas-red via-christmas-green to-christmas-gold transition-all duration-500 ease-out"
          style={{ width: `${progress.percentage}%` }}
        >
          <div className="absolute inset-0 bg-white/20 animate-shimmer"></div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-sm font-bold text-christmas-pine drop-shadow-md">
            {progress.percentage}%
          </span>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 text-center">
        <div className="p-3 bg-christmas-green/10 rounded-lg border border-christmas-green/30">
          <div className="flex items-center justify-center gap-1 mb-1">
            <Star className="w-4 h-4 text-christmas-green fill-christmas-green" />
            <span className="text-2xl font-bold text-christmas-pine">
              {progress.answered}
            </span>
          </div>
          <p className="text-xs text-christmas-pine/70">Solved</p>
        </div>

        <div className="p-3 bg-christmas-gold/10 rounded-lg border border-christmas-gold/30">
          <div className="flex items-center justify-center gap-1 mb-1">
            <Eye className="w-4 h-4 text-christmas-gold" />
            <span className="text-2xl font-bold text-christmas-pine">
              {progress.revealed}
            </span>
          </div>
          <p className="text-xs text-christmas-pine/70">Revealed</p>
        </div>

        <div className="p-3 bg-christmas-red/10 rounded-lg border border-christmas-red/30">
          <div className="flex items-center justify-center gap-1 mb-1">
            <Trophy className="w-4 h-4 text-christmas-red" />
            <span className="text-2xl font-bold text-christmas-pine">
              {progress.total - progress.answered - progress.revealed}
            </span>
          </div>
          <p className="text-xs text-christmas-pine/70">Remaining</p>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
