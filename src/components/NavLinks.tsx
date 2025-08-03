import { NavLink } from "react-router-dom";
import clsx from "clsx";


export const NavLinks = () => {

  const activeClass= ({isActive}:{isActive: boolean}) =>
    clsx("hover:text-kotumagold transition-text duration-300", {
      "lg:text-kotumagold text-kotumapink": isActive,
      "text-kotumablack": !isActive,
    });

  return (
  <>
    <li><NavLink to="/" className={activeClass}>Home</NavLink></li>
    <li><NavLink to="/About" className={activeClass}>About</NavLink></li>
    <li><NavLink to="/Services" className={activeClass}>Services</NavLink></li>
    <li><NavLink to="/Experts" className={activeClass}>Experts</NavLink></li>
    {/* <li><NavLink to="/Booking" className={activeClass}>Booking</NavLink></li> */}
    <li> <NavLink to="/Contact" className={activeClass}>Contact</NavLink></li>
  </>
  );
};