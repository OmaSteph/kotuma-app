
import Logo from "@assets/logo.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
   <section className="container bg-darkbluebg text-white px-8 py-16 lg:p-16">
   <div className="flex items-center gap-2">
      <img src={Logo} alt="Kotuma Logo" className="w-8 h-8" />
      <span className="text-3xl font-bold">Kotuma</span> 
      <div>
        <div className="flex-col items-center gap-2">
        <p>Useful Links</p>
        <p>Godwin</p>
        <p>Tamaraetariemi</p>
        <p>Gidah</p>
        <Link to ="/">Home Page</Link>
        <Link to ="/Contact">Contact Us</Link>
        <Link to ="/Services">Services</Link>
        <Link to ="/Experts">Experts</Link>
        </div>

        <p>Support</p>
        <Link to ="/Support">Support Center</Link>
        <Link to ="/Feedback">Feedback</Link>
        <Link to ="/Testimonials">Testimonials</Link>
        <Link to ="/FAQ">FAQ</Link>
        <Link to ="/Careers">Careers</Link>

        <p>Contact Information</p>
        <p>123 Kotuma St, Tech City, TC 12345</p>
        <p>+1 (234) 567-8901</p>
        <p>info@kotuma.com</p>
        </div>
    </div>

      <p>2025 Kotuma. All rights reserved.</p>

      <Link to="/PrivacyPolicy">Privacy Policy</Link>
      <Link to="/TermsOfService">Terms of Service</Link>
      <Link to="/CookieSettings">Cookie Settings</Link>
   </section>
  )
}

export default Footer