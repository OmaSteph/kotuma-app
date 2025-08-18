import emailIcon from "/src/assets/email-icon.png";
import phoneIcon from "/src/assets/phone-icon.png";
import addressIcon from "/src/assets/address-icon.png";

export default function ContactUs() {
  return (
    <section className="font-neue text-kotumablack">
      {/* Hero Section */}
      <div
        className="relative w-full max-w-[1440px] h-[598px] mx-auto bg-cover bg-center"
        style={{ backgroundImage: "url('/src/assets/contact-bg.jpg')" }}
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
            src="/src/assets/kotuma-watermark.png"
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
              src="/src/assets/person-support.png"
              alt="person support"
              style={{
                width: "54.08px", // or whatever size you want inside
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
      
    </section>
  );
}
