import { Heart, Code, Coffee, Star } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-12 px-4 mt-20 border-t-2 border-christmas-gold/30 bg-white/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="text-center mb-8">
          <div className="text-4xl mb-4 animate-bounce-slow">🎄</div>
          <h3 className="text-2xl font-bold text-christmas-pine mb-2">
            Merry Coding & Happy Holidays!
          </h3>
          <p className="text-christmas-pine/70">
            Keep practicing, keep learning, and spread the joy of coding!
          </p>
        </div>

        {/* Decorative Elements */}
        <div className="flex justify-center gap-4 mb-6 text-2xl">
          <span className="animate-twinkle">⭐</span>
          <span className="animate-bounce-slow">🎁</span>
          <span className="animate-twinkle" style={{ animationDelay: '0.5s' }}>
            ⭐
          </span>
          <span className="animate-float">❄️</span>
          <span className="animate-twinkle" style={{ animationDelay: '1s' }}>
            ⭐
          </span>
        </div>

        {/* Made with Love */}
        <div className="flex items-center justify-center gap-2 text-christmas-pine/60 text-sm mb-4">
          <span>Made with</span>
          <Heart className="w-4 h-4 text-christmas-red fill-christmas-red animate-pulse" />
          <Code className="w-4 h-4 text-christmas-green" />
          <span>and</span>
          <Coffee className="w-4 h-4 text-christmas-holly" />
        </div>

        {/* Copyright */}
        <div className="text-center text-xs text-christmas-pine/50">
          <p>Christmas JavaScript Challenge {new Date().getFullYear()}</p>
          <p className="mt-1">A festive way to learn JavaScript basics</p>
        </div>

        {/* Fun Stats */}
        <div className="mt-6 flex justify-center gap-6 text-xs text-christmas-pine/60">
          <div className="flex items-center gap-1">
            <Star className="w-3 h-3 text-christmas-gold fill-christmas-gold" />
            <span>30 Challenges</span>
          </div>
          <div className="flex items-center gap-1">
            <Code className="w-3 h-3 text-christmas-green" />
            <span>100% Free</span>
          </div>
          <div className="flex items-center gap-1">
            <Heart className="w-3 h-3 text-christmas-red fill-christmas-red" />
            <span>Beginner Friendly</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
