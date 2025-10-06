
import { Link } from "react-router-dom";
import Avatar from "../assets/lawyer.png";
import Practice from "../assets/practice.svg";

export default function LawyerProfile() {
  return (
    <section className="max-w-[1317px] mx-auto px-6 py-10">
      {/* avatar/name */}
      <div className="flex items-center gap-[98px] w-full rounded-[10px] bg-[#080B1E] shadow-[0px_4px_4px_0px_#00000040] px-[127px] py-[66px] mb-9">
        <div className="w-[232px] h-[232px] rounded-full overflow-hidden">
          <img src={Avatar} className="w-full h-full object-cover" alt="" />
        </div>

        <div className="text-white text-2xl">
          <h4 className="font-bold text-[#FFF8FD] text-5xl">Anna Boateng</h4>
          <p className="">Family & Divorce Lawyer | 8+ years experience</p>
          <p className="">Lagos, Nigeria | Yoruba, English</p>
          <p className="">4.9 / 5.0 (187 reviews) | SCN Verified</p>
        </div>
      </div>

      {/* Summary */}
      <div className="w-full rounded-[10px] bg-[#f5f5f5] py-8 px-[114px] text-black mb-9">
        <p className="font-bold text-2xl">Professional Summary</p>
        <p className="">
          Anna Boateng is a compassionate and experienced family lawyer
          dedicated to helping individuals navigate sensitive legal matters with
          clarity and confidence. With over 8 years of experience in family,
          custody, and matrimonial disputes, she blends legal rigor with
          emotional intelligence to achieve the best outcomes for her clients.
        </p>
      </div>

      {/* practice/availability */}
      <div className="flex gap-16 mb-9">
        <div className="w-3/5 rounded-[10px] bg-[#f5f5f5] py-8 pl-[114px] pr-[50px] text-black">
          <p className="font-bold text-2xl mb-3">Practice areas</p>
          <div className="flex justify-between">
            <div className="flex items-start gap-4">
              <img src={Practice} className="w-10 h-10" alt="" />
              <div>
                <p>Divorce & Separation</p>
                <p>Child Custody & Support</p>
                <p>Spousal Maintenance</p>
              </div>
            </div>

            <div>
              <p>Prenuptial Agreements</p>
              <p>Family Mediation</p>
            </div>
          </div>
        </div>

        <div className="w-2/5 rounded-[10px] bg-[#03156B] py-8 px-[50px] text-white">
          <p className="font-bold text-2xl mb-3">Availability</p>

          <ul>
            <li>Mon–Fri: 9:00 AM – 6:00 PM (WAT)</li>
            <li>Weekend consults on request</li>
          </ul>
        </div>
      </div>

      {/* testimonials */}
      <div className="w-full rounded-[10px] bg-[#f5f5f5] py-8 px-[114px] text-black">
        <p className="font-bold text-2xl mb-2">
          Client Testimonials – Tolu A., Abuja
        </p>
        <p className="mb-2">
          “Anna helped us restructure our business legally within weeks. She’s
          sharp, professional, and very warm.”
        </p>
        <p className="">
          “Highly recommend her for startups!” – Emeka N., Lagos.”
        </p>
      </div>

      <div className="flex gap-16 mt-20">
        <Link to="/booking" className="py-4 px-8 rounded-lg bg-[#03156B] border border-[#03156B] font-bold text-[#FFF8FD]">
          Schedule consultation
        </Link>
        <button className="py-4 px-8 rounded-lg bg-white border-2 border-[#03156B] font-bold text-[#03156B] ">
          As a question
        </button>
        <button className="py-4 px-8 rounded-lg bg-white border-2 border-[#03156B] font-bold text-[#03156B] ">
          Call Now
        </button>
      </div>
    </section>
  );
}
