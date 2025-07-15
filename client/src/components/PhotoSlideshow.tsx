import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import photo1 from "@assets/WhatsApp Image 2025-07-08 at 21.16.00_d694d345_1752542335376.jpg";
import photo2 from "@assets/WhatsApp Image 2025-07-08 at 21.16.00_fe81369e_1752542335377.jpg";
import photo3 from "@assets/WhatsApp Image 2025-07-08 at 21.16.02_a0b2bab6_1752542335377.jpg";
import photo4 from "@assets/WhatsApp Image 2025-07-08 at 21.16.02_daa1b02d_1752542335377.jpg";
import photo5 from "@assets/WhatsApp Image 2025-07-08 at 21.16.03_c7b26b19_1752542335378.jpg";
import photo6 from "@assets/WhatsApp Image 2025-07-08 at 21.16.04_28d555c8_1752542335378.jpg";
import photo7 from "@assets/WhatsApp Image 2025-07-08 at 21.16.05_865bd9b5_1752542335378.jpg";
import photo8 from "@assets/WhatsApp Image 2025-07-08 at 21.16.06_0b442dfc_1752542335378.jpg";
import photo9 from "@assets/WhatsApp Image 2025-07-08 at 21.16.07_ebf660eb_1752542335379.jpg";
import photo10 from "@assets/WhatsApp Image 2025-07-08 at 21.16.08_310b26ee_1752542335379.jpg";
import photo11 from "@assets/WhatsApp Image 2025-07-08 at 21.16.09_f1bb95e0_1752542335379.jpg";
import photo12 from "@assets/WhatsApp Image 2025-07-08 at 21.16.10_169b8a78_1752542335379.jpg";

const photos = [
  { src: photo1, alt: "Beautiful moment 1" },
  { src: photo2, alt: "Beautiful moment 2" },
  { src: photo3, alt: "Beautiful moment 3" },
  { src: photo4, alt: "Beautiful moment 4" },
  { src: photo5, alt: "Beautiful moment 5" },
  { src: photo6, alt: "Beautiful moment 6" },
  { src: photo7, alt: "Beautiful moment 7" },
  { src: photo8, alt: "Beautiful moment 8" },
  { src: photo9, alt: "Beautiful moment 9" },
  { src: photo10, alt: "Beautiful moment 10" },
  { src: photo11, alt: "Beautiful moment 11" },
  { src: photo12, alt: "Beautiful moment 12" }
];

export default function PhotoSlideshow() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = photos.length;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    if (photos.length > 0) {
      const interval = setInterval(nextSlide, 2500);
      return () => clearInterval(interval);
    }
  }, [photos.length, nextSlide]);

  if (photos.length === 0) {
    return (
      <div className="relative max-w-2xl mx-auto mb-12">
        <div className="photo-container aspect-[9/16] bg-gray-100 rounded-3xl overflow-hidden flex items-center justify-center">
          <div className="text-center p-8">
            <div className="text-6xl mb-4">📸</div>
            <p className="text-xl text-gray-600 font-medium">Photos will appear here</p>
            <p className="text-gray-500 mt-2">Upload your edited photos to see them in the slideshow</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative max-w-2xl mx-auto mb-12">
      {/* Beautiful Girl Background Emojis */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Angels and Beauty */}
        <div className="absolute -top-8 -left-8 w-8 h-8 text-white opacity-80 sparkle" style={{animationDelay: '0s'}}>😇</div>
        <div className="absolute -top-6 -right-6 w-6 h-6 text-pink-400 opacity-70 floating" style={{animationDelay: '1s'}}>👸</div>
        <div className="absolute top-1/4 -left-12 w-7 h-7 text-yellow-400 opacity-60 sparkle" style={{animationDelay: '2s'}}>✨</div>
        <div className="absolute top-1/3 -right-10 w-8 h-8 text-pink-500 opacity-70 floating" style={{animationDelay: '1.5s'}}>🌸</div>
        
        {/* Loving and Admiring */}
        <div className="absolute top-1/2 -left-10 w-7 h-7 text-red-400 opacity-80 bounce" style={{animationDelay: '0.5s'}}>😍</div>
        <div className="absolute top-1/2 -right-8 w-6 h-6 text-pink-400 opacity-70 floating" style={{animationDelay: '1.8s'}}>🥰</div>
        <div className="absolute bottom-1/3 -left-8 w-8 h-8 text-purple-400 opacity-60 sparkle" style={{animationDelay: '2.2s'}}>🌺</div>
        <div className="absolute bottom-1/4 -right-12 w-7 h-7 text-yellow-500 opacity-80 bounce" style={{animationDelay: '0.8s'}}>🌟</div>
        
        {/* Cute and Lovely */}
        <div className="absolute -bottom-6 -left-6 w-8 h-8 text-brown-400 opacity-70 bounce" style={{animationDelay: '1.2s'}}>🧸</div>
        <div className="absolute -bottom-8 -right-8 w-6 h-6 text-pink-600 opacity-80 floating" style={{animationDelay: '0.3s'}}>🎀</div>
        <div className="absolute bottom-1/2 -left-14 w-7 h-7 text-red-500 opacity-70 sparkle" style={{animationDelay: '1.6s'}}>💖</div>
        <div className="absolute bottom-1/2 -right-14 w-8 h-8 text-purple-500 opacity-60 floating" style={{animationDelay: '2.4s'}}>💝</div>
        
        {/* Smile and Joy */}
        <div className="absolute top-16 -left-16 w-6 h-6 text-yellow-400 opacity-80 bounce" style={{animationDelay: '0.7s'}}>😊</div>
        <div className="absolute top-20 -right-16 w-7 h-7 text-pink-400 opacity-70 sparkle" style={{animationDelay: '1.9s'}}>💕</div>
        <div className="absolute bottom-16 -left-16 w-8 h-8 text-yellow-500 opacity-60 floating" style={{animationDelay: '2.6s'}}>🌞</div>
        <div className="absolute bottom-20 -right-16 w-6 h-6 text-purple-400 opacity-80 bounce" style={{animationDelay: '1.4s'}}>🦋</div>
      </div>
      
      <div className="photo-container aspect-[9/16] bg-white rounded-3xl overflow-hidden pulse-glow">
        <div className="slideshow-wrapper relative w-full h-full">
          {photos.map((photo, index) => (
            <div
              key={index}
              className={`slide absolute inset-0 transition-opacity duration-500 ease-in-out ${
                index === currentSlide ? 'active opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
        
        {/* Navigation arrows */}
        <Button
          variant="secondary"
          size="icon"
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-3 shadow-lg transition-all"
        >
          <ChevronLeft className="w-6 h-6 text-gray-700" />
        </Button>
        <Button
          variant="secondary"
          size="icon"
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-3 shadow-lg transition-all"
        >
          <ChevronRight className="w-6 h-6 text-gray-700" />
        </Button>
      </div>
      
      {/* Slide indicators */}
      <div className="flex justify-center mt-6 space-x-2">
        {photos.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`indicator w-3 h-3 rounded-full cursor-pointer transition-all ${
              index === currentSlide ? 'active bg-pink-500' : 'bg-gray-300'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
