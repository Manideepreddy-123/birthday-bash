import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
// Photos will be imported here after editing and re-uploading
const photos: { src: string; alt: string }[] = [];

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
      const interval = setInterval(nextSlide, 4000);
      return () => clearInterval(interval);
    }
  }, [photos.length]);

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
