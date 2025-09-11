import { Outlet, useLocation } from "react-router-dom";
import OnboardingHeader from "../components/components/onboarding/onboardingheader";
import SidebarSwitcher from "@components/components/onboarding/sidebar-switcher";
import { OnboardingProvider, useOnboarding } from "@components/components/onboarding/onboarding-context";
import { useEffect } from "react";

const InitPathwayFromRoute = () => {
  const { pathname } = useLocation();
  const { setPathway } = useOnboarding();
  useEffect(() => {
    if (pathname.startsWith("/onboarding/onboardlawyers")) setPathway("lawyer");
    else setPathway("client");
  }, [pathname, setPathway]);
  return null;
};

const OnboardingLayout = () => {
  return (
    <OnboardingProvider>
      <InitPathwayFromRoute />
      <div className="flex">
        <SidebarSwitcher />
        <>
          <OnboardingHeader />
          <main className="mt-[80px] ml-[450px] flex flex-col justify-center items-center min-h-screen font-neue">
            <Outlet />
          </main>
        </>
      </div>
    </OnboardingProvider>
  );
};

export default OnboardingLayout;
