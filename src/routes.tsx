import { Outlet } from "react-router-dom";

import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Experts from "./pages/Experts";
import Booking from "./pages/Booking";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

import AuthenticatedLayout from "@components/layouts/AuthenticatedLayouts";
import Lawyers from "@pages/Lawyers";
import Dashboard from "@pages/Dashboard";
import Cases from "@pages/Cases";
import LawyerProfile from "@pages/LawyerProfile";

import OnboardingLayout from "./layouts/onboardinglayout";
import ClientBasicInfo from "@components/components/onboarding/onboardclients/basic-info";

import LawyerBasicInfo from "@components/components/onboarding/onboardlawyers/basic-info";
import LawyerLegalExpertise from "@components/components/onboarding/onboardlawyers/legal-expertise";
import LawyerCreateProfile from "@components/components/onboarding/onboardlawyers/create-profile";
import LawyerAccountSetup from "@components/components/onboarding/onboardlawyers/account-setup";
import ClientsLogin from "@components/components/onboarding/onboardclients/clients-login";
import ClientsLegalSituation from "@components/components/onboarding/onboardclients/legal-situation";
import ClientsPreference from "@components/components/onboarding/onboardclients/clients-preference";
import ClientsCreateAccount from "@components/components/onboarding/onboardclients/create-accounts";

export const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
      { path: "services", element: <Services /> },
      { path: "experts", element: <Experts /> },
      // { path: "booking", element: <Booking /> },
    ],
  },

  {
    path: "/onboarding",
    element: <OnboardingLayout />,
    children: [
      { path: "signin", element: <SignIn /> },
      { path: "signup", element: <SignUp /> },
      
      {
        path: "onboardclients",
        element: <Outlet />,
        children: [
          { index: true, element: <ClientBasicInfo /> },
          { path: "basic-info", element: <ClientBasicInfo /> },
          { path: "login", element: <ClientsLogin/>},
          { path: "legal-situation", element: <ClientsLegalSituation /> },
          { path: "preferences", element: <ClientsPreference /> },
          { path: "create-account", element: <ClientsCreateAccount /> },
        ],
      },

      {
        path: "onboardlawyers",
        element: <Outlet />,              
        children: [
          { index: true, element: <LawyerBasicInfo /> },
          { path: "basic-info", element: <LawyerBasicInfo />},
          { path: "legal-expertise", element: <LawyerLegalExpertise /> },
          { path: "create-profile", element: <LawyerCreateProfile /> }, 
          { path: "account-setup", element: <LawyerAccountSetup /> },
        ],
      },
    ],
  },

  {
    path: "/",
    element: <AuthenticatedLayout />,
    children: [
      { path: "dashboard", element: <Dashboard /> },
      { path: "lawyers", element: <Lawyers /> },
      { path: "lawyers/:id", element: <LawyerProfile /> },
      { path: "cases", element: <Cases /> },
      { path: "booking", element: <Booking /> },
    ],
  },
];
