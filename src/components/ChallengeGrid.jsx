import { CheckCircle, Eye, Gift } from 'lucide-react';
import { getChallengeProgress } from '../utils/progress';
import GiftEasterEgg from './GiftEasterEgg';

const ChallengeCard = ({ challenge, onClick, displayNumber }) => {
  const progress = getChallengeProgress(challenge.id);
  const isAnswered = progress.answered;
  const isRevealed = progress.revealed && !progress.answered;

  return (
    <button
      onClick={onClick}
      className={`group relative p-6 rounded-xl transition-all duration-300 hover:scale-105 hover:-translate-y-1 text-left h-full w-full flex flex-col ${
        isAnswered
          ? 'bg-gradient-to-br from-christmas-green/20 to-christmas-green/10 border-2 border-christmas-green shadow-lg shadow-christmas-green/20'
          : isRevealed
          ? 'bg-gradient-to-br from-christmas-gold/20 to-christmas-gold/10 border-2 border-christmas-gold shadow-lg shadow-christmas-gold/20'
          : 'glass-card border-2 border-christmas-red/20 hover:border-christmas-red/40 festive-shadow'
      }`}
    >
      {/* Status Icon */}
      <div className="absolute top-4 right-4">
        {isAnswered ? (
          <CheckCircle className="w-6 h-6 text-christmas-green animate-scale-in" />
        ) : isRevealed ? (
          <Eye className="w-6 h-6 text-christmas-gold animate-scale-in" />
        ) : (
          <Gift className="w-6 h-6 text-christmas-red/40 group-hover:text-christmas-red transition-colors group-hover:animate-jingle" />
        )}
      </div>

      {/* Challenge Number */}
      <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-christmas-red to-christmas-holly text-white font-bold mb-3 shadow-lg">
        {displayNumber}
      </div>

      {/* Title */}
      <h3 className="text-lg font-bold text-christmas-pine mb-2 pr-8 min-h-[3.5rem]">
        {challenge.title}
      </h3>

      {/* Description */}
      <p className="text-sm text-christmas-pine/70 line-clamp-3 flex-grow">
        {challenge.description}
      </p>

      {/* Decorative Element */}
      {displayNumber === 25 && (
        <div className="absolute bottom-2 right-2 text-2xl animate-bounce-slow">
          🎅
        </div>
      )}
      {displayNumber === 30 && (
        <div className="absolute bottom-2 right-2 text-2xl animate-twinkle">
          ⭐
        </div>
      )}
    </button>
  );
};

const ChallengeGrid = ({ challenges, onChallengeClick }) => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-christmas-pine mb-4">
            Choose Your{' '}
            <span className="text-gradient-christmas">Challenge</span>
            {' '}<GiftEasterEgg />
          </h2>
          <p className="text-lg text-christmas-pine/70">
            Select any challenge to start coding. Solve them in any order!
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 auto-rows-fr">
          {challenges.map((challenge, index) => (
            <div
              key={challenge.id}
              className="animate-fade-in-up h-full"
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              <ChallengeCard
                challenge={challenge}
                displayNumber={index + 1}
                onClick={() => onChallengeClick(challenge)}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChallengeGrid;
