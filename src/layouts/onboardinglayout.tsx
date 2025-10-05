import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import OnboardingHeader from "../components/components/onboarding/onboardingheader";
import SidebarSwitcher from "@components/components/onboarding/sidebar-switcher";
import { OnboardingProvider, useOnboarding } from "@components/components/onboarding/onboarding-context";

const InitPathwayFromRoute = () => {
  const { pathname } = useLocation();
  const { setPathway } = useOnboarding();

  useEffect(() => {
    if (pathname.startsWith("/onboarding/onboardlawyers")) setPathway("lawyer");
    else setPathway("client");
  }, [pathname, setPathway]);

  return null;
};
const SIDEBAR_WIDTH_LG = '260px'; 

const OnboardingLayout = () => {
  return (
    <OnboardingProvider>
      <InitPathwayFromRoute />

      <div className="flex min-h-screen font-neue">
        <SidebarSwitcher />

        <div className="flex flex-col flex-1">
          <OnboardingHeader />

          <main 
            className={`
              flex flex-col flex-1 
              justify-center items-start 
              bg-[#F9FAFB] px-5 pt-20 ml-0 lg:ml-[${SIDEBAR_WIDTH_LG}]
            `}
          >
            <Outlet />
          </main>
        </div>
      </div>
    </OnboardingProvider>
  );
};

export default OnboardingLayout;
