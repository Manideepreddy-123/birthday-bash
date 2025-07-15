import { useState, useRef, useEffect } from "react";
import { Play, Pause, Volume2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import birthdayMusic from "@assets/Inthandham song-[AudioTrimmer.com]_1752540681863.mp3";

export default function MusicControls() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState([50]);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    // Create audio element for background music
    const audio = new Audio();
    audio.loop = true;
    audio.volume = volume[0] / 100;
    audio.src = birthdayMusic;
    
    audioRef.current = audio;

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume[0] / 100;
    }
  }, [volume]);

  const togglePlayPause = async () => {
    if (!audioRef.current) return;

    try {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        await audioRef.current.play();
        setIsPlaying(true);
      }
    } catch (error) {
      console.log('Audio play failed:', error);
      // Handle audio play failure gracefully
      setIsPlaying(false);
    }
  };

  const handleVolumeChange = (newVolume: number[]) => {
    setVolume(newVolume);
  };

  return (
    <div className="music-controls rounded-full px-4 py-2 flex items-center space-x-3">
      <Button
        variant="ghost"
        size="icon"
        onClick={togglePlayPause}
        className="text-pink-500 hover:text-purple-500 transition-colors p-2"
        aria-label={isPlaying ? "Pause music" : "Play music"}
      >
        {isPlaying ? (
          <Pause className="w-6 h-6" />
        ) : (
          <Play className="w-6 h-6" />
        )}
      </Button>
      
      <div className="flex items-center space-x-2">
        <Volume2 className="w-4 h-4 text-gray-600" />
        <Slider
          value={volume}
          onValueChange={handleVolumeChange}
          max={100}
          step={1}
          className="w-16"
          aria-label="Volume control"
        />
      </div>
    </div>
  );
}
