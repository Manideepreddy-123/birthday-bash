import { useEffect, useState } from "react";

interface ConfettiPiece {
  id: number;
  x: number;
  y: number;
  color: string;
  size: number;
  rotation: number;
  animationDuration: number;
  animationDelay: number;
}

export default function ConfettiAnimation() {
  const [confettiPieces, setConfettiPieces] = useState<ConfettiPiece[]>([]);

  const colors = [
    'hsl(334, 100%, 70%)', // party-pink
    'hsl(51, 100%, 50%)',  // party-gold
    'hsl(270, 50%, 55%)',  // party-purple
    'hsl(39, 100%, 50%)'   // party-orange
  ];

  const createConfetti = () => {
    const newConfetti: ConfettiPiece[] = [];
    
    for (let i = 0; i < 50; i++) {
      newConfetti.push({
        id: Date.now() + i,
        x: Math.random() * 100,
        y: -10,
        color: colors[Math.floor(Math.random() * colors.length)],
        size: Math.random() * 8 + 6,
        rotation: Math.random() * 360,
        animationDuration: Math.random() * 3 + 2,
        animationDelay: Math.random() * 3
      });
    }
    
    setConfettiPieces(prev => [...prev, ...newConfetti]);
    
    // Remove confetti after animation completes
    setTimeout(() => {
      setConfettiPieces(prev => prev.filter(piece => !newConfetti.includes(piece)));
    }, 5000);
  };

  useEffect(() => {
    // Create initial confetti
    createConfetti();
    
    // Create confetti periodically
    const interval = setInterval(createConfetti, 10000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {confettiPieces.map((piece) => (
        <div
          key={piece.id}
          className="absolute animate-bounce"
          style={{
            left: `${piece.x}%`,
            top: `${piece.y}%`,
            width: `${piece.size}px`,
            height: `${piece.size}px`,
            backgroundColor: piece.color,
            borderRadius: '2px',
            transform: `rotate(${piece.rotation}deg)`,
            animation: `confetti ${piece.animationDuration}s linear ${piece.animationDelay}s forwards`,
          }}
        />
      ))}
      

    </div>
  );
}
