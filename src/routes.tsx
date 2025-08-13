// import { Routes, Route } from 'react-router-dom';
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
      { path: "signin", element: <SignIn /> },
      { path: "signup", element: <SignUp /> },
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
