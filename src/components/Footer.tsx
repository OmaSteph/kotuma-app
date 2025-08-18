
import Logo from "@assets/logo.svg";
import { Link } from "react-router-dom";
import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <section className="container bg-darkbluebg text-white px-8 py-16 lg:p-16">
      <div className="flex gap-2 justify-between mb-8">
        <div className="flex items-start gap-2">
          <img src={Logo} alt="Kotuma Logo" className="w-8 h-8" />
          <span className="text-3xl font-bold">Kotuma</span>
        </div>
        <div className="flex gap-2.5">
          <div className="flex justify-between gap-8">
            <div className="flex flex-col gap-3.5">
              <p className="font-inter text-sm font-bold">Useful Links</p>
              <div className="flex flex-col gap-3 text-sm leading-5">
                <Link to="/">Home Page</Link>
                <Link to="/Contact">Contact Us</Link>
                <Link to="/Services">Services</Link>
                <Link to="/Experts">Experts</Link>
              </div>
            </div>

            <div className="flex flex-col gap-3.5">
              <p className="font-inter text-sm font-bold">Support</p>
              <div className="flex flex-col gap-3 text-sm leading-5">
                <Link to="/Support">Support Center</Link>
                <Link to="/Feedback">Feedback</Link>
                <Link to="/Testimonials">Testimonials</Link>
                <Link to="/FAQ">FAQ</Link>
                <Link to="/Careers">Careers</Link>
              </div>
            </div>

            <div className="flex flex-col gap-3.5">
              <p className="font-inter text-sm font-bold">
                Contact Information
              </p>
              <div className="flex flex-col gap-3 text-sm leading-5">
                <p>123 Kotuma St, Tech City, TC 12345</p>
                <p>+1 (234) 567-8901</p>
                <p>info@kotuma.com</p>
                <div className="flex gap-2">
                  <Link to="/Facebook">
                    <FaFacebook />
                  </Link>
                  <Link to="/LinkedIn">
                    <FaLinkedin />
                  </Link>
                  <Link to="/Instagram">
                    <FaInstagram />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr className="border-blue-950" />
      
      <div className="flex justify-between items-center mt-4">
        <div className="text-base font-neue">
          <p>&copy; 2025 Kotuma. All rights reserved.</p>
        </div>

        <div className="flex gap-6 font-roboto text-sm text-decoration-line: underline">
          <Link to="/PrivacyPolicy">Privacy Policy</Link>
          <Link to="/TermsOfService">Terms of Service</Link>
          <Link to="/CookieSettings">Cookie Settings</Link>
        </div>
      </div>
    </section>
  );
};

export default Footer;
