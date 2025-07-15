import { useEffect } from "react";
import { Cake, Gift, Star, Heart } from "lucide-react";
import PhotoSlideshow from "./PhotoSlideshow";
import MusicControls from "./MusicControls";
import ConfettiAnimation from "./ConfettiAnimation";

interface BirthdayPageProps {
  shouldAutoPlay?: boolean;
}

export default function BirthdayPage({ shouldAutoPlay = false }: BirthdayPageProps) {
  useEffect(() => {
    // Set page title
    document.title = "🎉 Happy Birthday! 🎂";
    
    // Add meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'A beautiful birthday celebration webpage with photo slideshow, festive animations, and background music. Celebrating another amazing year of life!');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'A beautiful birthday celebration webpage with photo slideshow, festive animations, and background music. Celebrating another amazing year of life!';
      document.head.appendChild(meta);
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-yellow-50 relative overflow-hidden">
      <ConfettiAnimation />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating Hearts */}
        <div className="absolute top-20 left-10 w-6 h-6 text-pink-400 opacity-60 floating" style={{animationDelay: '0s'}}>💖</div>
        <div className="absolute top-40 right-20 w-8 h-8 text-red-400 opacity-50 floating" style={{animationDelay: '1s'}}>❤️</div>
        <div className="absolute bottom-40 left-20 w-5 h-5 text-pink-500 opacity-70 floating" style={{animationDelay: '2s'}}>💕</div>
        <div className="absolute bottom-20 right-40 w-7 h-7 text-red-500 opacity-60 floating" style={{animationDelay: '1.5s'}}>💗</div>
        
        {/* Floating Stars */}
        <div className="absolute top-32 left-1/4 w-4 h-4 text-yellow-400 opacity-80 sparkle" style={{animationDelay: '0.5s'}}>⭐</div>
        <div className="absolute top-1/3 right-1/3 w-6 h-6 text-yellow-500 opacity-70 sparkle" style={{animationDelay: '1.5s'}}>✨</div>
        <div className="absolute bottom-1/4 left-1/3 w-5 h-5 text-yellow-600 opacity-60 sparkle" style={{animationDelay: '2s'}}>🌟</div>
        <div className="absolute bottom-1/3 right-1/4 w-7 h-7 text-yellow-400 opacity-50 sparkle" style={{animationDelay: '0.8s'}}>💫</div>
        
        {/* Floating Balloons */}
        <div className="absolute top-16 right-16 w-8 h-8 text-pink-500 opacity-70 floating" style={{animationDelay: '0.3s'}}>🎈</div>
        <div className="absolute top-64 left-32 w-6 h-6 text-blue-500 opacity-60 floating" style={{animationDelay: '1.2s'}}>🎈</div>
        <div className="absolute bottom-32 right-32 w-7 h-7 text-purple-500 opacity-80 floating" style={{animationDelay: '0.9s'}}>🎈</div>
        
        {/* Floating Gifts */}
        <div className="absolute top-48 right-48 w-6 h-6 text-green-500 opacity-70 bounce" style={{animationDelay: '0.7s'}}>🎁</div>
        <div className="absolute bottom-48 left-48 w-5 h-5 text-blue-600 opacity-60 bounce" style={{animationDelay: '1.3s'}}>🎁</div>
        
        {/* Geometric Shapes */}
        <div className="absolute top-24 left-1/2 w-12 h-12 bg-pink-200 rounded-full opacity-30 pulse-glow" style={{animationDelay: '0.4s'}}></div>
        <div className="absolute top-1/2 right-12 w-16 h-16 bg-purple-200 rounded-full opacity-25 pulse-glow" style={{animationDelay: '1.6s'}}></div>
        <div className="absolute bottom-24 left-1/4 w-10 h-10 bg-yellow-200 rounded-full opacity-40 pulse-glow" style={{animationDelay: '2.2s'}}></div>
        
        {/* Animated Triangles */}
        <div className="absolute top-36 right-24 w-8 h-8 bg-gradient-to-r from-pink-300 to-purple-300 opacity-50 floating triangle" style={{animationDelay: '0.6s'}}></div>
        <div className="absolute bottom-36 left-24 w-6 h-6 bg-gradient-to-r from-yellow-300 to-orange-300 opacity-60 floating triangle" style={{animationDelay: '1.4s'}}></div>
      </div>
      
      {/* Hidden Music Controls - Auto-play only */}
      <div className="hidden">
        <MusicControls autoPlay={shouldAutoPlay} />
      </div>
      
      {/* Header */}
      <header className="relative z-40 p-6">
        <div className="max-w-6xl mx-auto flex justify-center items-center">
          <div className="flex items-center space-x-2">
            <Cake className="text-pink-500 w-8 h-8 bounce" />
            <span className="font-bold text-xl text-gray-800">Birthday Celebration</span>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-10 w-20 h-20 rounded-full bg-pink-500 opacity-20 floating"></div>
          <div className="absolute top-32 right-20 w-16 h-16 rounded-full bg-yellow-500 opacity-30 floating" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-20 left-20 w-12 h-12 rounded-full bg-purple-500 opacity-25 floating" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-32 right-10 w-24 h-24 rounded-full bg-orange-500 opacity-20 floating" style={{animationDelay: '0.5s'}}></div>
        </div>
        
        <div className="text-center z-10">
          <div className="fade-in">
            <h1 className="font-bold text-6xl md:text-8xl gradient-text mb-6">
              🎉 Happy Birthday! 🎂
            </h1>
            <p className="text-2xl md:text-3xl text-gray-700 mb-8 font-medium">
              Celebrating another amazing year of life!
            </p>
            <div className="flex justify-center space-x-4 text-4xl mb-12">
              <Gift className="text-pink-500 w-10 h-10 bounce" style={{animationDelay: '0.2s'}} />
              <Cake className="text-yellow-500 w-10 h-10 bounce" style={{animationDelay: '0.4s'}} />
              <Star className="text-purple-500 w-10 h-10 bounce" style={{animationDelay: '0.6s'}} />
              <Heart className="text-orange-500 w-10 h-10 bounce" style={{animationDelay: '0.8s'}} />
            </div>
          </div>
        </div>
      </section>

      {/* Photo Slideshow Section */}
      <section className="py-20 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-bold text-4xl md:text-5xl gradient-text mb-4">
              Beautiful Memories 📸
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A collection of wonderful moments captured throughout the year
            </p>
          </div>
          
          <PhotoSlideshow />
        </div>
      </section>

      {/* Birthday Wishes Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-pink-100/50 via-purple-100/50 to-yellow-100/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-bold text-4xl md:text-5xl gradient-text mb-12">
            Birthday Wishes 💝
          </h2>
          
          <div className="space-y-8">
            <div className="fade-in bg-white/60 backdrop-blur-sm rounded-3xl p-8 shadow-xl">
              <p className="text-xl md:text-2xl text-gray-800 font-medium leading-relaxed">
                "May your birthday be filled with sunshine, smiles, laughter, love, and all the wonderful things that make you happy! 🌟"
              </p>
            </div>
            
            <div className="fade-in bg-white/60 backdrop-blur-sm rounded-3xl p-8 shadow-xl" style={{animationDelay: '0.3s'}}>
              <p className="text-xl md:text-2xl text-gray-800 font-medium leading-relaxed">
                "Another year of incredible memories, beautiful moments, and amazing adventures. Here's to many more! 🎊"
              </p>
            </div>
            
            <div className="fade-in bg-white/60 backdrop-blur-sm rounded-3xl p-8 shadow-xl" style={{animationDelay: '0.6s'}}>
              <p className="text-xl md:text-2xl text-gray-800 font-medium leading-relaxed">
                "Wishing you a day filled with love, laughter, and all your favorite things. Happy Birthday! 🎂✨"
              </p>
            </div>
          </div>
        </div>
      </section>



      {/* Footer */}
      <footer className="py-12 px-6 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center space-x-6 text-3xl mb-6">
            <Cake className="text-pink-500 w-8 h-8 floating" />
            <Gift className="text-yellow-500 w-8 h-8 floating" style={{animationDelay: '0.5s'}} />
            <Star className="text-purple-500 w-8 h-8 floating" style={{animationDelay: '1s'}} />
          </div>
          <p className="text-xl font-medium mb-4">
            🎉 Hope your birthday is absolutely wonderful! 🎉
          </p>
          <p className="text-gray-400">
            Made with ❤️ for a very special person
          </p>
        </div>
      </footer>
    </div>
  );
}
