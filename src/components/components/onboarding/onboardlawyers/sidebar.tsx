import { Link } from "react-router-dom";
import Logo from "@assets/logo.svg";

const LawyerSidebar = () => {
  const sidebar: string[] = [
    "User Role",
    "Basic Information",
    "Legal Expertise",
    "Create your Profile",
    "Account Setup",
  ];

  return (
    <aside className="fixed top-0 left-0 z-50 min-h-screen w-[300px] px-6 bg-[#fff6f4]">
      <Link to="/">
        <div className="flex items-center gap-2">
          <img src={Logo} alt="Kotuma logo" />
          <span className="font-medium text-[2rem] font-neu">Kotuma</span>
        </div>
      </Link>

      <div className="space-y-7 flex flex-col justify-center min-h-[80vh]">
        <h6 className="text-[#9DA4AE] font-normal text-base tracking-tighter">
          Getting Started
        </h6>
        <ul className="flex flex-col gap-3">
          {sidebar.map((link, index) => (
            <li key={index} className="flex gap-4 items-center">
              <span className="w-6 h-6 bg-white border rounded-full flex justify-center text-sm">
                {index + 1}
              </span>
              <span>{link}</span>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default LawyerSidebar;
