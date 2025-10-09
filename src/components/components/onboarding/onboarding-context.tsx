import React, { createContext, useContext, useMemo, useState } from "react";

type Pathway = "client" | "lawyer";

type UserFormData = {
  fullName: string;
  email: string;
  phone: string;
  location: string;
  // Lawyer specific
  employmentStatus?: string;
  avatar?: File | null;
  legalExpertise?: {
    language: string;
    serviceMethod: string;
    practiceAreas: { area: string; years: string }[];
    bio: string;
  };
  // Client specific  
  legalCategory?: string;
  legalDescription?: string;
  timeline?: string;
  hasProceedings?: string;
  preferences?: {
    communication: string;
    budget: string;
    language: string;
  };
};

type OnboardingContextType = {
  pathway: Pathway;
  setPathway: (p: Pathway) => void;
  isReturning: boolean;
  setIsReturning: (r:boolean) => void;
  formData: UserFormData;
  updateFormData: (data: Partial<UserFormData>) => void;
  clearFormData: () => void;
};

const OnboardingContext = createContext<OnboardingContextType | undefined>(undefined);

export const OnboardingProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [pathway, setPathway] = useState<Pathway>("client");
  const [isReturning, setIsReturning] = useState(false);
  const [formData, setFormData] = useState<UserFormData>({
    fullName: "",
    email: "",
    phone: "",
    location: ""
  });
  
  const updateFormData = (data: Partial<UserFormData>) => {
    setFormData(prev => ({ ...prev, ...data }));
  };
  
  const clearFormData = () => {
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      location: ""
    });
  };
  
  const value = useMemo(() => ({ 
    pathway, 
    setPathway, 
    isReturning, 
    setIsReturning,
    formData,
    updateFormData,
    clearFormData
  }), [pathway, isReturning, formData]);
    
  return <OnboardingContext.Provider value={value}>{children}</OnboardingContext.Provider>;
};

export const useOnboarding = () => {
  const ctx = useContext(OnboardingContext);
  if (!ctx) throw new Error("useOnboarding must be used within OnboardingProvider");
  return ctx;
};
