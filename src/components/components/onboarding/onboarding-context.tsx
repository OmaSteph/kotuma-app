import React, { createContext, useContext, useMemo, useState } from "react";

type Pathway = "client" | "lawyer";

type OnboardingContextType = {
  pathway: Pathway;
  setPathway: (p: Pathway) => void;
  isReturning: boolean;
  setIsReturning: (r:boolean) => void;
};

const OnboardingContext = createContext<OnboardingContextType | undefined>(undefined);

export const OnboardingProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [pathway, setPathway] = useState<Pathway>("client");
  // NEW STATE
  const [isReturning, setIsReturning] = useState(false);
  
  const value = useMemo(() => ({ pathway, setPathway, isReturning, setIsReturning }), 
    [pathway, isReturning]);
    
  return <OnboardingContext.Provider value={value}>{children}</OnboardingContext.Provider>;
};

export const useOnboarding = () => {
  const ctx = useContext(OnboardingContext);
  if (!ctx) throw new Error("useOnboarding must be used within OnboardingProvider");
  return ctx;
};
