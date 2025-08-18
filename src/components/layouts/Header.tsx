import { Link } from "react-router-dom";
import Logo from "@assets/logo.svg";
import Bell from "../../assets/bell.svg";
import { ChevronDown } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 ">
      <nav
        arial-label="Global-Navigation"
        className="container bg-white flex items-center justify-between lg:px-16 p-4 gap-4"
      >
        <h1 className="sr-only">Kotuma</h1>
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-1">
            <img src={Logo} alt="Kotuma Logo" className="w-8 h-8" />
            <span className="text-[28px] font-medium">Kotuma</span>
          </Link>
        </div>

        <div className="flex gap-2.5 items-center">
          <button className="w-10 h-10 rounded-full p-2 bg-[#F9FAFB]">
            <img src={Bell} alt="" />
          </button>

          <div className="flex gap-1 items-center rounded-full p-1 bg-[#F9FAFB]">
            <div className="w-10 h-10 rounded-full text-white bg-[#FF692E] flex items-center justify-center">
              <span className="font-medium">A</span>
            </div>
            <ChevronDown className="w-5 h-5 text-[#6C737F]" />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
