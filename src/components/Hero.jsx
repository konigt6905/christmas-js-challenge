import { Sparkles, Gift, Code, Star } from 'lucide-react';

const Hero = ({ onStartClick }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
      {/* Animated Background Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-christmas-red/20 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-christmas-green/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: '1s' }}
        />
        <div
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-christmas-gold/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: '2s' }}
        />
      </div>

      {/* Floating Christmas Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Gift
          className="absolute top-20 left-10 text-christmas-red animate-float"
          size={40}
          style={{ animationDelay: '0.5s' }}
        />
        <Star
          className="absolute top-40 right-20 text-christmas-gold animate-twinkle"
          size={30}
          style={{ animationDelay: '1s' }}
        />
        <Gift
          className="absolute bottom-40 left-20 text-christmas-green animate-float"
          size={35}
          style={{ animationDelay: '1.5s' }}
        />
        <Star
          className="absolute bottom-20 right-40 text-christmas-gold animate-twinkle"
          size={25}
          style={{ animationDelay: '2s' }}
        />
      </div>

      {/* Content */}
      <div className="relative max-w-5xl mx-auto text-center z-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6 animate-fade-in-up border-2 border-christmas-gold/30">
          <Sparkles className="w-5 h-5 text-christmas-gold animate-pulse" />
          <span className="text-christmas-pine font-semibold">
            30 Days of JavaScript Magic
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold mb-6 animate-fade-in-up">
          <span className="text-gradient-christmas">
            Christmas JavaScript
          </span>
          <br />
          <span className="text-christmas-pine">
            Challenge
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl md:text-2xl text-christmas-pine/80 mb-8 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          Unwrap 30 beginner-friendly JavaScript challenges this holiday season.
          Learn, code, and spread the festive cheer with every solution!
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <button
            onClick={onStartClick}
            className="group px-8 py-4 rounded-lg bg-gradient-to-r from-christmas-red to-christmas-holly text-white font-bold text-lg shadow-2xl hover:shadow-christmas-red/60 transition-all hover:scale-105 flex items-center gap-2 festive-shadow"
          >
            <Code className="w-6 h-6" />
            Start Coding
            <Sparkles className="w-5 h-5 group-hover:animate-spin" />
          </button>

          <div className="flex items-center gap-2 px-6 py-3 rounded-lg glass-card border-2 border-christmas-green/30">
            <Gift className="w-5 h-5 text-christmas-green" />
            <span className="text-christmas-pine font-semibold">
              100% Free & Fun
            </span>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 flex flex-wrap justify-center gap-6 text-sm text-christmas-pine/60 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <div className="flex items-center gap-2">
            <Star className="w-4 h-4 text-christmas-gold fill-christmas-gold" />
            <span>Beginner Friendly</span>
          </div>
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-christmas-gold" />
            <span>Interactive Learning</span>
          </div>
          <div className="flex items-center gap-2">
            <Gift className="w-4 h-4 text-christmas-red" />
            <span>Track Your Progress</span>
          </div>
        </div>

        {/* Decorative Christmas Tree */}
        <div className="mt-16 text-6xl animate-bounce-slow">
          🎄
        </div>
      </div>
    </section>
  );
};

export default Hero;
