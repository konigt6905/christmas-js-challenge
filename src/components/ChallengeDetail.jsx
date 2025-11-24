import { useState, useEffect } from 'react';
import {
  ArrowLeft,
  Play,
  Eye,
  CheckCircle,
  XCircle,
  Lightbulb,
  Code,
  Sparkles,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { executeCode } from '../utils/codeExecutor';
import {
  getChallengeProgress,
  markAsAnswered,
  markAsRevealed,
  saveUserCode,
} from '../utils/progress';
import CodeEditor from './CodeEditor';

const ChallengeDetail = ({ challenge, onBack, onNext, onPrevious, hasNext, hasPrevious }) => {
  const [code, setCode] = useState('');
  const [result, setResult] = useState(null);
  const [showSolution, setShowSolution] = useState(false);
  const [confetti, setConfetti] = useState(false);

  useEffect(() => {
    const progress = getChallengeProgress(challenge.id);
    setCode(progress.userCode || challenge.starterCode || '');
    setShowSolution(progress.revealed || false);
    setResult(null);
  }, [challenge.id]);

  const handleCodeChange = (newCode) => {
    setCode(newCode);
    saveUserCode(challenge.id, newCode);
    setResult(null);
  };

  const handleSubmit = () => {
    const executionResult = executeCode(code, challenge.testCode);

    if (executionResult.success) {
      markAsAnswered(challenge.id, code);
      setResult({
        success: true,
        message: 'Correct! Well done!',
      });
      setConfetti(true);
      setTimeout(() => setConfetti(false), 3000);
    } else {
      setResult({
        success: false,
        message: executionResult.error || 'Your solution is not quite right. Try again!',
      });
    }
  };

  const handleRevealSolution = () => {
    markAsRevealed(challenge.id);
    setShowSolution(true);
  };

  const progress = getChallengeProgress(challenge.id);

  return (
    <div className="min-h-screen py-16 px-4">
      {/* Confetti Effect */}
      {confetti && (
        <div className="fixed inset-0 pointer-events-none z-50">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-snow-fall text-2xl"
              style={{
                left: `${Math.random() * 100}%`,
                animationDuration: `${2 + Math.random() * 2}s`,
                animationDelay: `${Math.random() * 0.5}s`,
              }}
            >
              {['🎉', '⭐', '🎄', '🎁', '❄️'][Math.floor(Math.random() * 5)]}
            </div>
          ))}
        </div>
      )}

      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={onBack}
            className="flex items-center gap-2 px-4 py-2 rounded-lg glass-card hover:bg-white transition-all text-christmas-pine font-semibold border-2 border-christmas-red/20 hover:border-christmas-red/40"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Challenges
          </button>

          <div className="flex items-center gap-2">
            {hasPrevious && (
              <button
                onClick={onPrevious}
                className="p-2 rounded-lg glass-card hover:bg-white transition-all text-christmas-pine border-2 border-christmas-green/20 hover:border-christmas-green/40"
                title="Previous Challenge"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
            )}
            {hasNext && (
              <button
                onClick={onNext}
                className="p-2 rounded-lg glass-card hover:bg-white transition-all text-christmas-pine border-2 border-christmas-green/20 hover:border-christmas-green/40"
                title="Next Challenge"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            )}
          </div>
        </div>

        {/* Challenge Info */}
        <div className="glass-card p-8 mb-6 border-2 border-christmas-gold/30 animate-fade-in-up">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-christmas-red to-christmas-holly text-white font-bold text-lg shadow-lg">
                {challenge.id}
              </div>
              <div>
                <h1 className="text-3xl font-bold text-christmas-pine">
                  {challenge.title}
                </h1>
              </div>
            </div>
            {progress.answered && (
              <CheckCircle className="w-8 h-8 text-christmas-green animate-scale-in" />
            )}
          </div>

          <p className="text-lg text-christmas-pine/80 flex items-start gap-2">
            <Lightbulb className="w-5 h-5 text-christmas-gold mt-1 flex-shrink-0" />
            {challenge.description}
          </p>
        </div>

        {/* Code Editor */}
        <div className="glass-card p-6 mb-6 border-2 border-christmas-red/30 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          <div className="flex items-center gap-2 mb-4">
            <Code className="w-5 h-5 text-christmas-pine" />
            <h2 className="text-xl font-bold text-christmas-pine">Your Code</h2>
          </div>
          <CodeEditor value={code} onChange={handleCodeChange} />
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <button
            onClick={handleSubmit}
            className="group flex-1 px-6 py-4 rounded-lg bg-gradient-to-r from-christmas-green to-christmas-pine text-white font-bold text-lg shadow-lg hover:shadow-christmas-green/60 transition-all hover:scale-105 flex items-center justify-center gap-2"
          >
            <Play className="w-5 h-5" />
            Run & Submit
            <Sparkles className="w-5 h-5 group-hover:animate-spin" />
          </button>

          {!showSolution && (
            <button
              onClick={handleRevealSolution}
              className="px-6 py-4 rounded-lg glass-card border-2 border-christmas-gold/30 hover:bg-white text-christmas-pine font-bold text-lg transition-all hover:scale-105 flex items-center justify-center gap-2"
            >
              <Eye className="w-5 h-5" />
              Reveal Solution
            </button>
          )}
        </div>

        {/* Result Message */}
        {result && (
          <div
            className={`p-6 rounded-lg mb-6 flex items-start gap-3 animate-scale-in ${
              result.success
                ? 'bg-christmas-green/20 border-2 border-christmas-green'
                : 'bg-red-50 border-2 border-red-400'
            }`}
          >
            {result.success ? (
              <CheckCircle className="w-6 h-6 text-christmas-green flex-shrink-0 mt-1" />
            ) : (
              <XCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
            )}
            <div>
              <p
                className={`font-semibold ${
                  result.success ? 'text-christmas-green' : 'text-red-600'
                }`}
              >
                {result.message}
              </p>
            </div>
          </div>
        )}

        {/* Solution */}
        {showSolution && (
          <div className="glass-card p-6 border-2 border-christmas-gold/30 animate-fade-in-up">
            <div className="flex items-center gap-2 mb-4">
              <Eye className="w-5 h-5 text-christmas-gold" />
              <h2 className="text-xl font-bold text-christmas-pine">Solution</h2>
            </div>
            <CodeEditor value={challenge.solution} readOnly />
          </div>
        )}
      </div>
    </div>
  );
};

export default ChallengeDetail;
