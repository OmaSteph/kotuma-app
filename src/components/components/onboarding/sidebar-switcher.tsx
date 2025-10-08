import { useLocation } from "react-router-dom";
import ClientSidebar from "./onboardclients/sidebar";
import { ClientSidebarSteps, LawyerSidebarSteps } from "./onboarding-steps";
import LawyerSidebar from "./onboardlawyers/sidebar";
import { useOnboarding } from "./onboarding-context";

const SidebarSwitcher = () => {
  const { pathway, isReturning } = useOnboarding();
  const location = useLocation();
  const { pathname } = location;

  if (
    isReturning ||
    pathname.endsWith("/clients-login") ||
    pathname.endsWith("/lawyers-login")
  ) {
    return null;
  }

  const steps = pathway === "lawyer" ? LawyerSidebarSteps : ClientSidebarSteps;
  const currentStepIndex = steps.findIndex((step) => pathname.includes(step.path));

  return pathway === "lawyer" ? (
    <LawyerSidebar currentStepIndex={currentStepIndex} />
  ) : (
    <ClientSidebar currentStepIndex={currentStepIndex} />
  );
};
export default SidebarSwitcher;