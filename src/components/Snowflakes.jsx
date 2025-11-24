import { useEffect, useState } from 'react';

const Snowflakes = () => {
  const [snowflakes, setSnowflakes] = useState([]);

  useEffect(() => {
    const createSnowflakes = () => {
      const flakes = [];
      // Reduce snowflakes on mobile devices
      const isMobile = window.innerWidth < 768;
      const snowflakeCount = isMobile ? 20 : 50;

      for (let i = 0; i < snowflakeCount; i++) {
        flakes.push({
          id: i,
          left: Math.random() * 100,
          animationDuration: 5 + Math.random() * 10,
          opacity: 0.3 + Math.random() * 0.7,
          fontSize: 10 + Math.random() * 20,
          delay: Math.random() * 5,
        });
      }
      setSnowflakes(flakes);
    };

    createSnowflakes();

    // Recreate snowflakes on resize to adjust count
    const handleResize = () => {
      createSnowflakes();
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {snowflakes.map((flake) => (
        <div
          key={flake.id}
          className="snowflake absolute"
          style={{
            left: `${flake.left}%`,
            animationDuration: `${flake.animationDuration}s`,
            opacity: flake.opacity,
            fontSize: `${flake.fontSize}px`,
            animationDelay: `${flake.delay}s`,
          }}
        >
          <span style={{ color: 'white', WebkitTextFillColor: 'white' }}>✻</span>
        </div>
      ))}
    </div>
  );
};

export default Snowflakes;
