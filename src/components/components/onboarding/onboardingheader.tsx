import Profile from "@assets/User.svg";
import Logo from "@assets/logo.svg";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

const SIDEBAR_WIDTH_LG = '230px'; 

const OnboardingHeader = ({ isUserRolePage }: { isUserRolePage: boolean }) => {
  const SignInGroup = (
    <div className="flex items-center gap-4 text-sm font-medium">
      <span className="text-gray-500 hidden sm:inline">
        Already have an account?
      </span>
      <Link to="/auth/signin">
        <Button
          variant="outline"
          className="h-9 sm:h-10 px-4 sm:px-6 rounded-xl border-[#E5E7EB] text-[#0A1D5B] font-semibold hover:bg-gray-50"
        >
          Sign In
        </Button>
      </Link>
    </div>
  );

  const UserProfileIcon = (
    <div className="flex justify-center w-12 h-12 border border-[#E5E7EB] rounded-full shadow">
      <img src={Profile} alt="" className="w-6 h-6" />
    </div>
  );

  return (
    <header className="fixed top-0 left-0 right-0 z-30 h-20 flex border-b border-gray-100 bg-white">
      
      <div 
        className={`
          hidden lg:flex items-center justify-center           
          lg:w-[${SIDEBAR_WIDTH_LG}]
        `}
      >
        <Link to="/" className="flex items-center gap-2">
          <img src={Logo} alt="Kotuma logo" className="w-8 h-8" />
          <span className="font-semibold text-2xl text-[#0A1D5B] font-neu">
            Kotuma
          </span>
        </Link>
      </div>

      <div 
        className={`
          w-full flex justify-end items-center 
          px-4 sm:px-6 lg:px-12
          lg:ml-0 lg:w-auto lg:flex-1
        `}
      >
        <div className="flex items-center gap-2 lg:hidden">
            <Link to="/" className="flex items-center gap-2">
                <img src={Logo} alt="Kotuma logo" className="w-8 h-8"/> 
                <span className="font-semibold text-2xl text-[#0A1D5B] font-neu">Kotuma</span>
            </Link>
        </div>
        
        <div className="ml-auto flex items-center">
            {isUserRolePage ? UserProfileIcon : SignInGroup}
        </div>
      </div>
    </header>
  );
};
export default OnboardingHeader;