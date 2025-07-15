import { useEffect } from "react";
import { Cake, Gift, Star, Heart } from "lucide-react";
import PhotoSlideshow from "./PhotoSlideshow";
import MusicControls from "./MusicControls";
import ConfettiAnimation from "./ConfettiAnimation";

export default function BirthdayPage() {
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
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-yellow-50">
      <ConfettiAnimation />
      
      {/* Header */}
      <header className="relative z-40 p-6">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Cake className="text-pink-500 w-8 h-8 bounce" />
            <span className="font-bold text-xl text-gray-800">Birthday Celebration</span>
          </div>
          <MusicControls />
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
