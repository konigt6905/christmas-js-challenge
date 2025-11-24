import { Star, Zap, Flame } from 'lucide-react';
import { getProgress } from '../utils/progress';

const LevelIndicator = ({ currentLevel, onLevelChange }) => {
  const progress = getProgress();

  const levels = [
    { value: 'easy', label: 'Easy', icon: Star, range: [1, 30], color: 'bg-christmas-green', textColor: 'text-christmas-green' },
    { value: 'medium', label: 'Medium', icon: Zap, range: [31, 60], color: 'bg-christmas-gold', textColor: 'text-christmas-gold' },
    { value: 'hard', label: 'Hard', icon: Flame, range: [61, 90], color: 'bg-christmas-red', textColor: 'text-christmas-red' },
  ];

  const getLevelProgress = (range) => {
    const [start, end] = range;
    let completed = 0;
    for (let i = start; i <= end; i++) {
      if (progress[i]?.answered) completed++;
    }
    return { completed, total: end - start + 1 };
  };

  return (
    <div className="flex items-center justify-center md:justify-between gap-2 sm:gap-4 glass-card px-2 sm:px-4 py-2 sm:py-3 rounded-xl border-2 border-christmas-gold/30 animate-fade-in-up">
      {/* Level Tabs */}
      <div className="flex items-center gap-1 sm:gap-2 md:flex-1 min-w-0">
        {levels.map((level) => {
          const Icon = level.icon;
          const levelProg = getLevelProgress(level.range);
          const percentage = Math.round((levelProg.completed / levelProg.total) * 100);
          const isActive = currentLevel === level.value;

          return (
            <button
              key={level.value}
              onClick={() => onLevelChange(level.value)}
              className={`flex items-center gap-1 sm:gap-2 px-2 sm:px-4 py-1.5 sm:py-2 rounded-lg transition-all duration-200 ${
                isActive
                  ? `${level.color} text-white shadow-md`
                  : 'bg-white/50 hover:bg-white text-christmas-pine/70 hover:text-christmas-pine'
              }`}
            >
              <Icon className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${isActive ? 'text-white' : level.textColor}`} />
              <span className="font-semibold text-xs sm:text-sm">{level.label}</span>
              {!isActive && percentage > 0 && (
                <span className="hidden sm:inline text-xs opacity-60">({levelProg.completed}/{levelProg.total})</span>
              )}
            </button>
          );
        })}
      </div>

      {/* Current Level Progress - Hidden on mobile */}
      {currentLevel && (
        <div className="hidden md:flex items-center gap-2 text-sm flex-shrink-0">
          <div className="text-christmas-pine/70">
            {getLevelProgress(levels.find(l => l.value === currentLevel).range).completed}/30
          </div>
          <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
            <div
              className={`h-full transition-all duration-500 ${levels.find(l => l.value === currentLevel).color}`}
              style={{ width: `${Math.round((getLevelProgress(levels.find(l => l.value === currentLevel).range).completed / 30) * 100)}%` }}
            ></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LevelIndicator;
