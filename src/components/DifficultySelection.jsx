import { Star, Zap, Flame, Sparkles } from 'lucide-react';

const DifficultySelection = ({ onSelect }) => {
  const difficulties = [
    {
      value: 'easy',
      label: 'Easy',
      icon: Star,
      count: 30,
      color: 'christmas-green',
      gradient: 'from-christmas-green to-green-600',
      description: 'Perfect for absolute beginners',
      features: ['Basic returns & operators', 'Simple loops & if statements', 'Arrays & string basics'],
    },
    {
      value: 'medium',
      label: 'Medium',
      icon: Zap,
      count: 30,
      color: 'christmas-gold',
      gradient: 'from-christmas-gold to-yellow-600',
      description: 'Build on the basics',
      features: ['String manipulation', 'Array filtering & operations', 'Logic & algorithms'],
    },
    {
      value: 'hard',
      label: 'Hard',
      icon: Flame,
      count: 30,
      color: 'christmas-red',
      gradient: 'from-christmas-red to-christmas-holly',
      description: 'Challenge yourself',
      features: ['Nested loops & sorting', 'Matrix operations', 'Advanced algorithms'],
    },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-6xl mx-auto w-full">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border-2 border-christmas-gold/30 mb-6">
            <Sparkles className="w-5 h-5 text-christmas-gold animate-pulse" />
            <span className="text-christmas-pine font-semibold">Choose Your Path</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-christmas-pine mb-4">
            Select Your <span className="text-gradient-christmas">Difficulty</span>
          </h2>
          <p className="text-lg text-christmas-pine/70 mb-2">
            Pick a difficulty level or try them all!
          </p>
          <p className="text-sm text-christmas-pine/60">
            Don't worry - even "Hard" is beginner-friendly!
          </p>
        </div>

        {/* Difficulty Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {difficulties.map((diff, index) => {
            const Icon = diff.icon;
            return (
              <button
                key={diff.value}
                onClick={() => onSelect(diff.value)}
                className="group relative p-8 rounded-2xl glass-card border-2 hover:border-${diff.color} transition-all duration-300 hover:scale-105 hover:-translate-y-2 text-left animate-fade-in-up festive-shadow"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br ${diff.gradient} mb-4 shadow-lg`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>

                {/* Title & Count */}
                <h3 className="text-2xl font-bold text-christmas-pine mb-2">
                  {diff.label}
                </h3>
                <p className={`text-${diff.color} font-semibold mb-3`}>
                  {diff.count} Challenges
                </p>

                {/* Description */}
                <p className="text-christmas-pine/70 text-sm mb-4">
                  {diff.description}
                </p>

                {/* Features */}
                <ul className="space-y-2">
                  {diff.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-christmas-pine/60">
                      <span className={`text-${diff.color} mt-0.5`}>✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-br ${diff.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity"></div>
              </button>
            );
          })}
        </div>

        {/* Decorative Elements */}
        <div className="text-center mt-12 text-4xl">
          🎄 🎁 ⭐
        </div>
      </div>
    </section>
  );
};

export default DifficultySelection;
