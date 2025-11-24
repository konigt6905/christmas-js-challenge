import { Star, Zap, Flame } from 'lucide-react';

const DifficultyFilter = ({ selectedDifficulty, onDifficultyChange, counts }) => {
  const difficulties = [
    {
      value: 'all',
      label: 'All Challenges',
      icon: Star,
      color: 'christmas-gold',
      bgColor: 'bg-christmas-gold/20',
      borderColor: 'border-christmas-gold',
      textColor: 'text-christmas-gold',
    },
    {
      value: 'easy',
      label: 'Easy',
      icon: Star,
      color: 'christmas-green',
      bgColor: 'bg-christmas-green/20',
      borderColor: 'border-christmas-green',
      textColor: 'text-christmas-green',
    },
    {
      value: 'medium',
      label: 'Medium',
      icon: Zap,
      color: 'christmas-gold',
      bgColor: 'bg-christmas-gold/20',
      borderColor: 'border-christmas-gold',
      textColor: 'text-christmas-gold',
    },
    {
      value: 'hard',
      label: 'Hard',
      icon: Flame,
      color: 'christmas-red',
      bgColor: 'bg-christmas-red/20',
      borderColor: 'border-christmas-red',
      textColor: 'text-christmas-red',
    },
  ];

  return (
    <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-8 animate-fade-in-up">
      <span className="text-sm font-semibold text-christmas-pine/70">Filter by difficulty:</span>
      <div className="flex flex-wrap gap-2 justify-center">
        {difficulties.map((difficulty) => {
          const Icon = difficulty.icon;
          const isSelected = selectedDifficulty === difficulty.value;
          const count = counts[difficulty.value] || 0;

          return (
            <button
              key={difficulty.value}
              onClick={() => onDifficultyChange(difficulty.value)}
              className={`
                group relative px-4 py-2 rounded-lg font-semibold text-sm
                transition-all duration-300 transform
                ${isSelected
                  ? `${difficulty.bgColor} border-2 ${difficulty.borderColor} ${difficulty.textColor} scale-105 shadow-lg`
                  : 'glass-card border-2 border-christmas-pine/20 text-christmas-pine hover:scale-105'
                }
              `}
            >
              <div className="flex items-center gap-2">
                <Icon className={`w-4 h-4 ${isSelected ? difficulty.textColor : 'text-christmas-pine/50'}`} />
                <span>{difficulty.label}</span>
                <span className={`
                  inline-flex items-center justify-center min-w-[20px] h-5 px-1.5 rounded-full text-xs font-bold
                  ${isSelected
                    ? 'bg-white/30'
                    : 'bg-christmas-pine/10'
                  }
                `}>
                  {count}
                </span>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default DifficultyFilter;
