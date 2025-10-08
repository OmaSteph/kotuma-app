import { Outlet, useLocation } from "react-router-dom";
import { useEffect, useMemo } from "react";
import OnboardingHeader from "../components/components/onboarding/onboardingheader";
import SidebarSwitcher from "@components/components/onboarding/sidebar-switcher";
import {
  OnboardingProvider,
  useOnboarding,
} from "@components/components/onboarding/onboarding-context";

const SIDEBAR_WIDTH_LG = "260px";

const InitPathwayFromRoute = () => {
  const { pathname } = useLocation();
  const { setPathway } = useOnboarding();

  useEffect(() => {
    if (pathname.startsWith("/onboarding/onboardlawyers")) setPathway("lawyer");
    else setPathway("client");
  }, [pathname, setPathway]);

  return null;
};

const OnboardingLayoutContent = () => {
  const location = useLocation();
  const { isReturning } = useOnboarding();
  const pathSegments = location.pathname.split("/").filter(Boolean);

  // 1. FIX: Determine if it's the User Role Page (base onboarding path)
  const isUserRolePage = pathSegments.length <= 2;

  const isLoginPageUrl =
    location.pathname.endsWith("/clientslogin") ||
    location.pathname.endsWith("/lawyers-login");

  // Determines if the sidebar margin should be applied
  const shouldOffset = !(isReturning || isLoginPageUrl);

  // Dynamic margin calculation
  const marginOffsetClass = useMemo(() => {
    return shouldOffset ? `ml-0 lg:ml-[${SIDEBAR_WIDTH_LG}]` : "ml-0";
  }, [shouldOffset]);

  return (
    <div className="flex min-h-screen font-neue">
      {/* 1. Sidebar is conditionally rendered here. */}
      {shouldOffset && <SidebarSwitcher />}

      {/* 2. Main Content Column: This column needs the sidebar offset */}
      <div
        className={`
          flex flex-col flex-1 
          ${marginOffsetClass}
        `}
      >
        {/* FIX: Pass the required isUserRolePage prop */}
        <OnboardingHeader isUserRolePage={isUserRolePage} />

        <main
          className="
            flex flex-col flex-1 
            justify-center items-start
            px-5 pt-20
          "
        >
          {/* Nested div for centering the Outlet content horizontally */}
          <div className="w-full flex justify-center items-start">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

const OnboardingLayout = () => {
  return (
    <OnboardingProvider>
      <InitPathwayFromRoute />
      <OnboardingLayoutContent />
    </OnboardingProvider>
  );
};

export default OnboardingLayout;
