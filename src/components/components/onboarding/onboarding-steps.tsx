// src/components/components/onboarding/onboarding-steps.ts

type Step = {
    name: string;
    path: string; 
};

export const LawyerSidebarSteps: Step[] = [
    { name: "User Role", path: "onboardlawyers" },      
    { name: "Basic Information", path: "basic-info" },
    { name: "Legal Expertise", path: "legal-expertise" },
    { name: "Create Account", path: "create-account" },
];

export const ClientSidebarSteps: Step[] = [
    { name: "User Role", path: "onboardclients" },
    { name: "Basic Information", path: "basic-info" },
    { name: "Legal Situation", path: "legal-situation" },
    { name: "Client Preference", path: "clients-preference" },
    { name: "Create Account", path: "create-accounts" },
];