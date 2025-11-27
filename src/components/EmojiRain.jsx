import { useEffect, useState } from 'react';

const EMOJI_SETS = [
  ['🎉', '🎊', '✨', '💫', '⭐'],
  ['🎄', '🎅', '🤶', '🦌', '⛄'],
  ['🎁', '🎀', '🧧', '💝', '🎈'],
  ['❄️', '☃️', '🌟', '💎', '🔔'],
  ['🍪', '🥛', '🍫', '🎂', '🧁'],
  ['🚀', '💥', '🌈', '🦄', '👑'],
  ['🎸', '🎺', '🥁', '🎷', '🎻'],
  ['🌺', '🌸', '🌼', '🌻', '🌹'],
  ['🦋', '🐦', '🦜', '🐬', '🦈'],
  ['🍕', '🍔', '🌮', '🍩', '🍦'],
];

const EmojiRain = ({ active, onComplete, emojiSet = null, duration = 3000, count = 50 }) => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    if (active) {
      const emojis = emojiSet || EMOJI_SETS[Math.floor(Math.random() * EMOJI_SETS.length)];

      const newParticles = [...Array(count)].map((_, i) => ({
        id: i,
        emoji: emojis[Math.floor(Math.random() * emojis.length)],
        left: Math.random() * 100,
        delay: Math.random() * 1,
        duration: 2 + Math.random() * 2,
        size: 1 + Math.random() * 1.5,
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 720,
      }));

      setParticles(newParticles);

      const timer = setTimeout(() => {
        setParticles([]);
        if (onComplete) onComplete();
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [active, emojiSet, duration, count, onComplete]);

  if (!active || particles.length === 0) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute animate-emoji-fall"
          style={{
            left: `${particle.left}%`,
            top: '-50px',
            fontSize: `${particle.size}rem`,
            animationDuration: `${particle.duration}s`,
            animationDelay: `${particle.delay}s`,
            '--rotation-start': `${particle.rotation}deg`,
            '--rotation-end': `${particle.rotation + particle.rotationSpeed}deg`,
          }}
        >
          {particle.emoji}
        </div>
      ))}
    </div>
  );
};

export default EmojiRain;
export { EMOJI_SETS };
