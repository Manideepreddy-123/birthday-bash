import { useState } from "react";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import LandingPage from "@/components/LandingPage";
import BirthdayPage from "@/components/BirthdayPage";

function App() {
  const [showCelebration, setShowCelebration] = useState(false);
  const [shouldAutoPlay, setShouldAutoPlay] = useState(false);

  const handleCelebrate = () => {
    setShouldAutoPlay(true);
    setShowCelebration(true);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        {!showCelebration ? (
          <LandingPage onCelebrate={handleCelebrate} />
        ) : (
          <BirthdayPage shouldAutoPlay={shouldAutoPlay} />
        )}
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
