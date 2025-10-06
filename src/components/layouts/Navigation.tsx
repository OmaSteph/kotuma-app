import { Link, useLocation } from "react-router-dom";
import Menu from "../../assets/menu.svg";
import MenuActive from "../../assets/menu.-active.svg";
import Eyes from "../../assets/eyes.svg";
import EyesActive from "../../assets/eyes-active.svg";
import Cases from "../../assets/cases.svg";

const Navigation = () => {
  const { pathname } = useLocation();

  const Links = [
    { name: "Home", active: MenuActive, img: Menu, route: "/dashboard" },
    { name: "Find Lawyers", active: EyesActive, img: Eyes, route: "/lawyers" },
    { name: "My Cases", active: Cases, img: Cases, route: "/cases" },
  ];
  return (
    <div className="border-b border-b-[#E5E7EB] mt-[84px]">
      <div className="flex items-center justify-between container lg:px-16">
        <nav>
          <ul className="flex">
            {Links.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.route}
                  className={`flex items-center gap-2 p-4 ${
                    pathname === link.route
                      ? "text-[#202B38] border-b border-b-[#202B38]"
                      : "text-[#E5E7EB]"
                  }`}
                >
                  <img
                    src={pathname === link.route ? link.active : link.img}
                    alt={link.name}
                  />
                  <span className="font-medium">{link.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <Link
          className="py-3 px-6 border border-[#E5E7EB] rounded-[200px] font-medium text-[#4D5761]"
          to={""}
        >
          New case
        </Link>
      </div>
    </div>
  );
};

export default Navigation;
