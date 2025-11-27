import { useState, useEffect } from 'react';
import EmojiRain, { EMOJI_SETS } from './EmojiRain';

const GiftEasterEgg = () => {
  const [isExploding, setIsExploding] = useState(false);
  const [isJumping, setIsJumping] = useState(false);
  const [clickCount, setClickCount] = useState(0);

  // Jump animation every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isExploding) {
        setIsJumping(true);
        setTimeout(() => setIsJumping(false), 600);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [isExploding]);

  const handleClick = () => {
    if (isExploding) return;
    setClickCount((prev) => prev + 1);
    setIsExploding(true);
  };

  const handleRainComplete = () => {
    setIsExploding(false);
  };

  const currentEmojiSet = EMOJI_SETS[clickCount % EMOJI_SETS.length];

  return (
    <>
      <button
        onClick={handleClick}
        className={`inline-block cursor-pointer transition-all duration-300 hover:scale-125 select-none ${
          isJumping ? 'animate-gift-jump' : ''
        }`}
        aria-label="Click for a surprise!"
        title="Click me!"
      >
        <span className="text-4xl">🎁</span>
      </button>

      <EmojiRain
        active={isExploding}
        onComplete={handleRainComplete}
        emojiSet={currentEmojiSet}
        duration={3000}
        count={40}
      />
    </>
  );
};

export default GiftEasterEgg;
