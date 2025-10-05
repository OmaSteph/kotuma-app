import { useOnboarding } from "./onboarding-context";
import LawyerSidebar from "./onboardlawyers/sidebar";
import ClientSidebar from "./onboardclients/sidebar"

const SidebarSwitcher = ({ currentStepIndex }: { currentStepIndex: number }) => {
  const { pathway } = useOnboarding();
  return pathway === "lawyer" 
        ? <LawyerSidebar currentStepIndex={currentStepIndex} /> 
        : <ClientSidebar currentStepIndex={currentStepIndex} />;
};

export default SidebarSwitcher;