import { Link, useLocation } from "react-router-dom";
import Menu from "../../assets/menu.svg";
import MenuActive from "../../assets/menu.-active.svg";
import Eyes from "../../assets/eyes.svg";
import EyesActive from "../../assets/eyes-active.svg";
import Cases from "../../assets/cases.svg";
import { useAuth } from "../../contexts/AuthContext";

const Navigation = () => {
  const { pathname } = useLocation();
  const { user } = useAuth();

  // Define navigation items based on user role
  const getNavigationLinks = () => {
    if (user?.role === 'lawyer') {
      return [
        { name: "Home", active: MenuActive, img: Menu, route: "/app/dashboard", paths: ["/app/dashboard", "/app"] },
        { name: "My Clients", active: EyesActive, img: Eyes, route: "/app/clients", paths: ["/app/clients"] },
      ];
    } else {
      // Default client navigation
      return [
        { name: "Home", active: MenuActive, img: Menu, route: "/app/dashboard", paths: ["/app/dashboard", "/app"] },
        { name: "Find Lawyers", active: EyesActive, img: Eyes, route: "/app/lawyers", paths: ["/app/lawyers"] },
        { name: "My Cases", active: Cases, img: Cases, route: "/app/cases", paths: ["/app/cases"] },
      ];
    }
  };

  const Links = getNavigationLinks();

  // Helper function to check if a link is active
  const isLinkActive = (link: typeof Links[0]) => {
    // Check if current pathname matches any of the link's paths
    return link.paths.some(path => {
      // Exact match
      if (pathname === path) return true;
      
      // For nested routes, check if pathname starts with path + '/'
      // But make sure it's not a partial match of another route
      if (pathname.startsWith(path + '/')) {
        // Special handling to prevent /app/dashboard from matching /app/lawyers
        // Only allow nested routes for specific paths
        if (path === '/app/lawyers' && pathname.startsWith('/app/lawyers/')) {
          return true;
        }
        if (path === '/app/cases' && pathname.startsWith('/app/cases/')) {
          return true;
        }
        if (path === '/app/clients' && pathname.startsWith('/app/clients/')) {
          return true;
        }
        // For dashboard, only exact matches or /app (redirect to dashboard)
        if (path === '/app/dashboard' || path === '/app') {
          return false; // Only exact matches for dashboard
        }
      }
      
      return false;
    });
  };

  return (
    <div className="border-b border-b-[#E5E7EB] mt-[84px]">
      <div className="flex items-center justify-between container lg:px-16">
        <nav>
          <ul className="flex">
            {Links.map((link) => {
              const isActive = isLinkActive(link);
              return (
                <li key={link.name}>
                  <Link
                    to={link.route}
                    className={`flex items-center gap-2 p-4 ${
                      isActive
                        ? "text-[#202B38] border-b border-b-[#202B38]"
                        : "text-[#E5E7EB]"
                    }`}
                  >
                    <img
                      src={isActive ? link.active : link.img}
                      alt={link.name}
                    />
                    <span className="font-medium">{link.name}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        { user?.role === 'client' ? (
          <Link
            className="py-3 px-6 border border-[#E5E7EB] rounded-[200px] font-medium text-[#4D5761]"
            to={""}
          >
            New case
          </Link>

        ) : ""}

      </div>
    </div>
  );
};

export default Navigation;
