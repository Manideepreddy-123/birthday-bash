import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Cake, Gift, Heart, Star, Sparkles } from "lucide-react";

interface LandingPageProps {
  onCelebrate: () => void;
}

export default function LandingPage({ onCelebrate }: LandingPageProps) {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleCelebrate = () => {
    setIsAnimating(true);
    setTimeout(() => {
      onCelebrate();
    }, 800);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-yellow-50 flex items-center justify-center overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-16 h-16 rounded-full bg-pink-500 opacity-20 floating"></div>
        <div className="absolute top-40 right-32 w-12 h-12 rounded-full bg-yellow-500 opacity-30 floating" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-40 left-32 w-20 h-20 rounded-full bg-purple-500 opacity-25 floating" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 right-20 w-14 h-14 rounded-full bg-orange-500 opacity-20 floating" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute top-1/2 left-10 w-10 h-10 rounded-full bg-pink-400 opacity-30 floating" style={{animationDelay: '1.5s'}}></div>
        <div className="absolute top-1/3 right-10 w-18 h-18 rounded-full bg-yellow-400 opacity-25 floating" style={{animationDelay: '2.5s'}}></div>
      </div>

      {/* Sparkle effects */}
      <div className="absolute inset-0">
        <Sparkles className="absolute top-1/4 left-1/4 text-pink-400 w-6 h-6 floating opacity-60" style={{animationDelay: '0.5s'}} />
        <Sparkles className="absolute top-1/3 right-1/3 text-yellow-400 w-8 h-8 floating opacity-50" style={{animationDelay: '1.5s'}} />
        <Sparkles className="absolute bottom-1/4 left-1/3 text-purple-400 w-5 h-5 floating opacity-70" style={{animationDelay: '2s'}} />
        <Sparkles className="absolute bottom-1/3 right-1/4 text-orange-400 w-7 h-7 floating opacity-40" style={{animationDelay: '0.8s'}} />
      </div>

      <div className={`text-center z-10 transition-all duration-800 ${isAnimating ? 'scale-110 opacity-0' : 'scale-100 opacity-100'}`}>
        <div className="fade-in">
          <h1 className="font-bold text-7xl md:text-9xl gradient-text mb-8">
            🎉 Happy Birthday! 🎂
          </h1>
          <p className="text-2xl md:text-3xl text-gray-700 mb-12 font-medium">
            Someone special is celebrating today!
          </p>
          
          <div className="flex justify-center space-x-6 text-5xl mb-16">
            <Gift className="text-pink-500 w-12 h-12 bounce" style={{animationDelay: '0.2s'}} />
            <Cake className="text-yellow-500 w-12 h-12 bounce" style={{animationDelay: '0.4s'}} />
            <Star className="text-purple-500 w-12 h-12 bounce" style={{animationDelay: '0.6s'}} />
            <Heart className="text-orange-500 w-12 h-12 bounce" style={{animationDelay: '0.8s'}} />
          </div>

          <Button
            onClick={handleCelebrate}
            size="lg"
            className="text-2xl px-12 py-6 bg-gradient-to-r from-pink-500 via-purple-500 to-yellow-500 hover:from-pink-600 hover:via-purple-600 hover:to-yellow-600 text-white rounded-full shadow-2xl pulse-glow transform hover:scale-105 transition-all duration-300"
            disabled={isAnimating}
          >
            <Sparkles className="w-8 h-8 mr-3" />
            Let's Celebrate! 🥳
            <Sparkles className="w-8 h-8 ml-3" />
          </Button>
        </div>
      </div>
    </div>
  );
}