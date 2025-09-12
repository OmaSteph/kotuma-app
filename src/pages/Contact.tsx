import emailIcon from "/src/assets/email-icon.png";
import phoneIcon from "/src/assets/phone-icon.png";
import addressIcon from "/src/assets/address-icon.png";
import contactBg from "../assets/contact-bg.jpg";
import personSupport from "../assets/person-support.png";
import kotumaWatermark from "../assets/kotuma-watermark.png";





export default function ContactUs() {
  return (
    <section className="font-neue text-kotumablack">
      {/* Hero Section */}
      <div
      className="relative w-full max-w-[1440px] h-[598px] mx-auto bg-cover bg-center"
      style={{ backgroundImage: `url(${contactBg})` }}
    >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center text-white px-4">
          {/* Heading */}
          <h1 className="text-[48px] font-bold text-kotumagold">Contact Us</h1>

          <p
            className="
    mt-2
    font-neue
    font-normal
    text-[16px]
    leading-[24px]
    tracking-[0]
    sm:text-lg
    max-w-xl
    md:max-w-2xl
  "
          >
            Have a question, need assistance, or want to give feedback?
          </p>

          {/* Contact Info Block */}

          <div
            className="
    mt-6 sm:mt-8
    flex flex-wrap sm:flex-nowrap
    items-center justify-center
    gap-6 sm:gap-[140px]
    w-full
    max-w-[662px]
  "
          >
            {[
              { label: "EMAIL", value: "support@kotuma.org", icon: emailIcon },
              {
                label: "Phone Number",
                value: "+2347055555788",
                icon: phoneIcon,
              },
              { label: "Address", value: "Lagos, Nigeria", icon: addressIcon },
            ].map((item, index) => (
              <div
                key={index}
                className="
        bg-white/10 backdrop-blur-md 
        p-3 sm:p-5 rounded-lg 
        min-w-[140px]
        text-center
      "
              >
                <img
                  src={item.icon}
                  alt={`${item.label} icon`}
                  className="mx-auto mb-1 w-5 h-5 object-contain"
                />
                <span className="block text-[10px] sm:text-xs uppercase tracking-wide whitespace-nowrap">
                  {item.label}
                </span>
                <span className="block font-semibold text-[9px] sm:text-[10px] md:text-xs text-center break-words">
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 min-h-[1000px] lg:min-h-[880px]">
        {/* Left - Chat Box */}
        <div className="relative bg-white p-8 rounded-lg flex flex-col items-center text-center">
          {/* Watermark Logo */}
          <img
      src={kotumaWatermark}
      alt="Kotuma Watermark"
      className="
        absolute
        w-[258.86px] h-[185.86px]    
        opacity-[0.05]              
        mix-blend-exclusion            
        pointer-events-none             
        left-1/2 -translate-x-1/2       
        top-[75%] -translate-y-1/2      
      "
    />

          {/* Logo Circle */}
          <div
            className="relative z-10 bg-kotumagold flex items-center justify-center mb-4"
            style={{
              width: "89px",
              height: "83.37px",
              borderRadius: "413.34px",
              opacity: 1,
              transform: "rotate(0deg)",
            }}
          >
            
           <img
      src={personSupport}
      alt="person support"
      style={{
        width: "54.08px",
        height: "54.08px",
        opacity: 1,
        transform: "rotate(0deg)",
      }}
    />
          </div>

          <h2 className="relative z-10 text-xl font-bold mb-2">
            Chat live with us
          </h2>
          <p className="relative z-10 text-kotumadarkgrey mb-6 max-w-sm">
            You can also fill out the form below and we’ll respond promptly. You
            can also fill out the form below and we’ll respond promptly. You can
            also fill out the form below and we’ll respond promptly. You can
            also fill out
          </p>
          <button className="relative z-10 bg-kotumablue text-white px-6 py-3 rounded-md hover:bg-kotumablue/90 transition">
            Let’s chat
          </button>
        </div>

        {/* Right - Form */}
        <form className="bg-white shadow-lg p-8 rounded-lg space-y-6">
          <h2 className="text-xl text-[24px]  font-bold font-neue">
            Let’s Talk
          </h2>

          <input
            type="text"
            placeholder="Full Name"
            className="w-full h-20 border border-kotumaborders rounded-md px-4 
               font-neue font-medium text-[20px] leading-[100%] tracking-[0.02em]
                text-white placeholder:text-black
               focus:outline-none focus:ring-2 focus:ring-kotumablue"
          />

          <input
            type="email"
            placeholder="Email Address"
            className="w-full h-20 border border-kotumaborders rounded-md px-4 
               font-neue font-medium text-[20px] leading-[100%] tracking-[0.02em]
                text-white placeholder:text-black
               focus:outline-none focus:ring-2 focus:ring-kotumablue"
          />

          <input
            type="text"
            placeholder="Title"
            className="w-full h-20 border border-kotumaborders rounded-md px-4 
               font-neue font-medium text-[20px] leading-[100%] tracking-[0.02em]
                text-white placeholder:text-black
               focus:outline-none focus:ring-2 focus:ring-kotumablue"
          />

          <textarea
            placeholder="Type your message"
            rows={6}
            className="w-full min-h-[150px] border border-kotumaborders rounded-md px-4 py-4
               font-neue font-medium text-[20px] leading-[100%] tracking-[0.02em]
                text-white placeholder:text-black
               focus:outline-none focus:ring-2 focus:ring-kotumablue"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-kotumablue text-white py-4 rounded-md 
               font-neue font-medium text-[20px] tracking-[0.02em]
               hover:bg-kotumablue/90 transition"
          >
            Submit
          </button>
        </form>
      </div>

      {/* Footer */}
      <footer className="bg-darkbluebg text-white py-20">
        <div className="max-w-[1440px] mx-auto px-8 grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* Logo + Copyright */}
          <div>
            <div className="flex items-center gap-[10px] mb-6 w-[213px] h-[49px]">
              <img
                src="/src/assets/footerlogo.svg"
                alt="Kotuma"
                className="w-[49px] h-[49px] object-contain"
              />
              <span className="text-[40px] font-bold leading-[49px]">
                kotuma
              </span>
            </div>
          </div>

          {/* Useful Links + Support + Contact */}
          <div className="flex flex-col md:flex-row md:col-span-2 justify-between gap-8">
            {/* Useful Links */}
            <div>
              <h4 className="font-bold mb-3">Useful Links</h4>
              <ul className="space-y-4 text-[16px]">
                <li>Home Page</li>
                <li>Contact Us</li>
                <li>Services</li>
                <li>Community</li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="font-bold mb-3">Support</h4>
              <ul className="space-y-4 text-[16px">
                <li>Support Center</li>
                <li>Feedback</li>
                <li>Testimonials</li>
                <li>FAQ</li>
                <li>Careers</li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-bold mb-3">Contact Information</h4>
              <ul className="space-y-4 text-[16px">
                <li>Physical Address</li>
                <li>Telephone</li>
                <li>Email: legal@kotuma.ng</li>
              </ul>
              <div className="flex gap-4 mt-4">
                <img
                  src="/src/assets/facebook.svg"
                  alt="Facebook"
                  className="w-5 h-5"
                />
                <img
                  src="/src/assets/linkedin.svg"
                  alt="LinkedIn"
                  className="w-5 h-5"
                />
                <img
                  src="/src/assets/instagram.svg"
                  alt="Instagram"
                  className="w-5 h-5"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 border-t border-gray-700 pt-4 max-w-[1280px] mx-auto px-8 flex flex-col md:flex-row justify-between items-center text-xs text-white">
          <p>© 2025 Kotuma. All rights reserved.</p>
          <div className="flex gap-6 mt-2 md:mt-0">
            <a href="#" className="underline hover:underline-offset-8">
              Privacy Policy
            </a>
            <a href="#" className="underline hover:underline-offset-4">
              Terms of Service
            </a>
            <a href="#" className="underline hover:underline-offset-4">
              Cookie Settings
            </a>
          </div>
        </div>
      </footer>
    </section>
  );
}
