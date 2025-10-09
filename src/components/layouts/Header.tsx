import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import Logo from "@assets/logo.svg";
import Bell from "../../assets/bell.svg";
import { ChevronDown, LogOut, User, Settings } from "lucide-react";

const Header = () => {
  const { user, logout, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/');
    setShowDropdown(false);
  };

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  if (!isAuthenticated) {
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
          
          <div className="flex gap-2 items-center">
            <Link 
              to="/auth/signin" 
              className="px-4 py-2 text-[#03156B] hover:bg-[#03156B]/5 rounded-lg transition-colors"
            >
              Sign In
            </Link>
            <Link 
              to="/auth/signup" 
              className="px-4 py-2 bg-[#03156B] text-white rounded-lg hover:bg-[#03156B]/90 transition-colors"
            >
              Sign Up
            </Link>
          </div>
        </nav>
      </header>
    );
  }

  return (
    <header className="fixed top-0 left-0 w-full z-50 ">
      <nav
        arial-label="Global-Navigation"
        className="container bg-white flex items-center justify-between lg:px-16 p-4 gap-4"
      >
        <h1 className="sr-only">Kotuma</h1>
        <div className="flex items-center gap-2">
          <Link to="/app/dashboard" className="flex items-center gap-1">
            <img src={Logo} alt="Kotuma Logo" className="w-8 h-8" />
            <span className="text-[28px] font-medium">Kotuma</span>
          </Link>
        </div>

        <div className="flex gap-2.5 items-center">
          <button className="w-10 h-10 rounded-full p-2 bg-[#F9FAFB] hover:bg-gray-200 transition-colors">
            <img src={Bell} alt="Notifications" />
          </button>

          <div className="relative">
            <button
              onClick={() => setShowDropdown(!showDropdown)}
              className="flex gap-1 items-center rounded-full p-1 bg-[#F9FAFB] hover:bg-gray-200 transition-colors"
            >
              <div className="w-10 h-10 rounded-full text-white bg-[#FF692E] flex items-center justify-center">
                <span className="font-medium text-sm">
                  {user ? getInitials(user.name) : 'U'}
                </span>
              </div>
              <span className="text-sm font-medium text-gray-700 px-2 max-w-32 truncate">
                {user?.name || 'User'}
              </span>
              <ChevronDown className={`w-5 h-5 text-[#6C737F] transition-transform ${
                showDropdown ? 'rotate-180' : ''
              }`} />
            </button>

            {/* Dropdown Menu */}
            {showDropdown && (
              <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                <div className="px-4 py-3 border-b border-gray-100">
                  <p className="font-medium text-gray-900">{user?.name}</p>
                  <p className="text-sm text-gray-600">{user?.email}</p>
                  <p className="text-xs text-[#03156B] bg-[#03156B]/10 px-2 py-1 rounded-full inline-block mt-1 capitalize">
                    {user?.role}
                  </p>
                </div>
                
                <div className="py-1">
                  <button
                    onClick={() => {
                      setShowDropdown(false);
                      // Navigate to profile page if it exists
                    }}
                    className="w-full flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                  >
                    <User className="w-4 h-4" />
                    View Profile
                  </button>
                  
                  <button
                    onClick={() => {
                      setShowDropdown(false);
                      // Navigate to settings if it exists
                    }}
                    className="w-full flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                  >
                    <Settings className="w-4 h-4" />
                    Settings
                  </button>
                  
                  <hr className="my-1" />
                  
                  <button
                    onClick={handleLogout}
                    className="w-full flex items-center gap-3 px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors"
                  >
                    <LogOut className="w-4 h-4" />
                    Sign Out
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>
      
      {/* Backdrop to close dropdown */}
      {showDropdown && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={() => setShowDropdown(false)}
        />
      )}
    </header>
  );
};

export default Header;
