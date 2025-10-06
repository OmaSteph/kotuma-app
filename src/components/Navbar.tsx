import { Link } from "react-router-dom";
import { AlignJustify } from "lucide-react";
import { Button } from "./components/ui/button";
import Logo from "@assets/logo.svg";
import { useState } from "react";
import { X } from "lucide-react";
import { NavLinks } from "./NavLinks";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="shadow-md fixed top-0 left-0 w-full z-50 ">
      <div className="container bg-white lg:px-16 p-4 gap-4">
        <nav
        arial-label="Global-Navigation"
        className="flex items-center justify-between w-full"
      >
        <h1 className="sr-only">Kotuma</h1>
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-1">
            <img src={Logo} alt="Kotuma Logo" className="w-8 h-8" />
            <span className="text-3xl font-bold">Kotuma</span>
          </Link>
        </div>

        {/* Mobile Icon */}
        <Button
          variant="ghost"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          className="lg:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <X className="text-kotumablue" />
          ) : (
            <AlignJustify className="text-kotumablue" />
          )}
        </Button>

        {/* Desktop */}
        <ul className="list-none gap-6 items-center uppercase text-kotumablack hidden lg:flex">
          <NavLinks/>
        </ul>

        <div className="hidden lg:flex items-center gap-4">
          <Link to="/onboarding/signin">
            <Button variant="outline" className="border-kotumablue">
              Sign in
            </Button>
          </Link>
          <Link to="/onboarding/signUp">
            <Button className="bg-kotumablue">Sign up</Button>
          </Link>
        </div>
      </nav>

        {/* Mobile menu */}
      {menuOpen && (
            <div className="lg:hidden absolute top-16 left-0 w-full bg-kotumagold shadow-lg z-10 animate-fadeIn">
              <ul className="list-none flex flex-col items-center gap-4 p-4 uppercase text-kotumablack">
                <NavLinks/>
              </ul>

              <div className="flex flex-col items-center gap-4 p-4 border-t border-kotumablue">
                <Link to="/onboarding/signin">
                  <Button variant="outline" className="border-kotumablue">
                    Sign in
                  </Button>
                </Link>
                <Link to="/onboarding/signup">
                  <Button className="bg-kotumablue">Sign up</Button>
                </Link>
              </div>
            </div>
          )}
      </div>
    </header>
  );
};

export default Navbar;


