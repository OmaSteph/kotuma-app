import { Outlet, Navigate } from "react-router-dom";

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
import ProtectedRoute from "./components/ProtectedRoute";
import Lawyers from "@pages/Lawyers";
import Dashboard from "@pages/Dashboard";
import Cases from "@pages/Cases";
import LawyerProfile from "@pages/LawyerProfile";
import ClientDashboard from "@pages/ClientDashboard";
import LawyerDashboard from "@pages/LawyerDashboard";
import MyClients from "@pages/MyClients";
import LawyerMatching from "@pages/LawyerMatching";

import OnboardingLayout from "./layouts/onboardinglayout";
import ClientBasicInfo from "@components/components/onboarding/onboardclients/basic-info";
import LawyerBasicInfo from "@components/components/onboarding/onboardlawyers/basic-info";
import LawyerLegalExpertise from "@components/components/onboarding/onboardlawyers/legal-expertise";
import LawyersCreateAccount from "@components/components/onboarding/onboardlawyers/create-account";
import ClientsLogin from "@components/components/onboarding/onboardclients/clients-login";
import LawyersLogin from "@components/components/onboarding/onboardlawyers/lawyers-login";
import ClientsLegalSituation from "@components/components/onboarding/onboardclients/legal-situation";
import ClientsPreference from "@components/components/onboarding/onboardclients/clients-preference";
import ClientsCreateAccount from "@components/components/onboarding/onboardclients/create-accounts";

// Unauthorized page component
const UnauthorizedPage = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-50">
    <div className="max-w-md text-center">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">403</h1>
      <h2 className="text-xl font-semibold text-gray-700 mb-2">Access Denied</h2>
      <p className="text-gray-600 mb-6">You don't have permission to access this page.</p>
      <button 
        onClick={() => window.history.back()} 
        className="px-4 py-2 bg-[#03156B] text-white rounded hover:bg-[#03156B]/90"
      >
        Go Back
      </button>
    </div>
  </div>
);

export const routes = [
  // Public Routes
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
      { path: "services", element: <Services /> },
      { path: "experts", element: <Experts /> },
    ],
  },

  // Authentication Routes
  {
    path: "/auth",
    element: <OnboardingLayout />,
    children: [
      { index: true, element: <Navigate to="/auth/signin" replace /> },
      { path: "signin", element: <SignIn /> },
      { path: "signup", element: <SignUp /> },
      
      // Client Onboarding Flow
      {
        path: "client",
        element: <Outlet />,
        children: [
          { index: true, element: <ClientBasicInfo /> },
          { path: "basic-info", element: <ClientBasicInfo /> },
          { path: "login", element: <ClientsLogin /> },
          { path: "legal-situation", element: <ClientsLegalSituation /> },
          { path: "preferences", element: <ClientsPreference /> },
          { path: "create-account", element: <ClientsCreateAccount /> },
        ],
      },

      // Lawyer Onboarding Flow
      {
        path: "lawyer",
        element: <Outlet />,
        children: [
          { index: true, element: <LawyerBasicInfo /> },
          { path: "basic-info", element: <LawyerBasicInfo /> },
          { path: "legal-expertise", element: <LawyerLegalExpertise /> },
          { path: "create-account", element: <LawyersCreateAccount /> },
          { path: "login", element: <LawyersLogin /> },
        ],
      },
    ],
  },

  // Protected Routes
  {
    path: "/app",
    element: (
      <ProtectedRoute>
        <AuthenticatedLayout />
      </ProtectedRoute>
    ),
    children: [
      { index: true, element: <Navigate to="/app/dashboard" replace /> },
      { path: "dashboard", element: <Dashboard /> },
      { path: "lawyers", element: <Lawyers /> },
      { path: "lawyers/:id", element: <LawyerProfile /> },
      { path: "cases", element: <Cases /> },
      { path: "clients", element: <MyClients /> },
      { path: "lawyer-matching", element: <LawyerMatching /> },
      { path: "booking", element: <Booking /> },
    ],
  },

  // Role-specific dashboards
  {
    path: "/client",
    element: (
      <ProtectedRoute roles={['client']}>
        <ClientDashboard />
      </ProtectedRoute>
    ),
  },
  {
    path: "/lawyer",
    element: (
      <ProtectedRoute roles={['lawyer']}>
        <LawyerDashboard />
      </ProtectedRoute>
    ),
  },

  // Utility Routes
  {
    path: "/unauthorized",
    element: <UnauthorizedPage />,
  },
  
  // Catch all route - redirect to home
  {
    path: "*",
    element: <Navigate to="/" replace />,
  },
];
