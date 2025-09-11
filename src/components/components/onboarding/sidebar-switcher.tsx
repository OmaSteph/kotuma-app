import { useOnboarding } from "./onboarding-context";
import LawyerSidebar from "./onboardlawyers/sidebar";
import ClientSidebar from "./onboardclients/sidebar"

const SidebarSwitcher = () => {
  const { pathway } = useOnboarding();
  return pathway === "lawyer" ? <LawyerSidebar /> : <ClientSidebar />;
};

export default SidebarSwitcher;
