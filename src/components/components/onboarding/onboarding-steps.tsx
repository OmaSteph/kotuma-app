// src/components/components/onboarding/onboarding-steps.ts

type Step = {
    name: string;
    path: string; 
};

export const LawyerSidebarSteps: Step[] = [
    { name: "User Role", path: "onboardlawyers" },      
    { name: "Basic Information", path: "basic-info" },
    { name: "Legal Expertise", path: "legal-expertise" },
    { name: "Account Setup", path: "account-setup" },
];

export const ClientSidebarSteps: Step[] = [
    { name: "User Role", path: "onboardclients" },
    { name: "Basic Information", path: "basic-info" },
    { name: "Case Brief", path: "case-brief" },
    { name: "Preferences", path: "preferences" },
    { name: "Account Setup", path: "account-setup" },
];