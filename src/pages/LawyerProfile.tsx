import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Practice from "../assets/practice.svg";
import { MOCK_LAWYERS } from "../data/mockData";
import type { Lawyer } from "../data/mockData";

export default function LawyerProfile() {
  const { id } = useParams<{ id: string }>();
  const [lawyer, setLawyer] = useState<Lawyer | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call with delay
    const fetchLawyer = async () => {
      setLoading(true);
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 500));
      
      const foundLawyer = MOCK_LAWYERS.find(l => l.id === id);
      setLawyer(foundLawyer || null);
      setLoading(false);
    };

    if (id) {
      fetchLawyer();
    }
  }, [id]);

  if (loading) {
    return (
      <section className="max-w-[1317px] mx-auto px-6 py-10">
        <div className="flex items-center justify-center h-64">
          <div className="text-xl text-gray-600">Loading lawyer profile...</div>
        </div>
      </section>
    );
  }

  if (!lawyer) {
    return (
      <section className="max-w-[1317px] mx-auto px-6 py-10">
        <div className="flex items-center justify-center h-64">
          <div className="text-xl text-gray-600">Lawyer not found</div>
        </div>
      </section>
    );
  }

  return (
    <section className="max-w-[1317px] mx-auto px-6 py-10">
      {/* avatar/name */}
      <div className="flex items-center gap-[98px] w-full rounded-[10px] bg-[#080B1E] shadow-[0px_4px_4px_0px_#00000040] px-[127px] py-[66px] mb-9">
        <div className="w-[232px] h-[232px] rounded-full overflow-hidden">
          <img src={lawyer.avatar} className="w-full h-full object-cover" alt={lawyer.name} />
        </div>

        <div className="text-white text-2xl">
          <h4 className="font-bold text-[#FFF8FD] text-5xl">{lawyer.name}</h4>
          <p className="">{lawyer.specialization.join(', ')} | {lawyer.experience}+ years experience</p>
          <p className="">{lawyer.location} | {lawyer.languages.join(', ')}</p>
          <p className="">{lawyer.rating} / 5.0 ({lawyer.reviewCount} reviews) | SCN Verified</p>
        </div>
      </div>

      {/* Summary */}
      <div className="w-full rounded-[10px] bg-[#f5f5f5] py-8 px-[114px] text-black mb-9">
        <p className="font-bold text-2xl">Professional Summary</p>
        <p className="">
          {lawyer.bio}
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
                {lawyer.specialization.map((area, index) => (
                  <p key={index}>{area}</p>
                ))}
              </div>
            </div>

            <div>
              <p>₦{lawyer.hourlyRate.toLocaleString()}/hour</p>
              <p className={`capitalize ${lawyer.availability === 'available' ? 'text-green-600' : lawyer.availability === 'busy' ? 'text-yellow-600' : 'text-gray-600'}`}>
                {lawyer.availability}
              </p>
            </div>
          </div>
        </div>

        <div className="w-2/5 rounded-[10px] bg-[#03156B] py-8 px-[50px] text-white">
          <p className="font-bold text-2xl mb-3">Availability</p>

          <ul>
            <li>Mon–Fri: 9:00 AM – 6:00 PM (WAT)</li>
            <li>Weekend consults on request</li>
            <li className={`mt-2 capitalize ${lawyer.availability === 'available' ? 'text-green-300' : lawyer.availability === 'busy' ? 'text-yellow-300' : 'text-gray-300'}`}>
              Status: {lawyer.availability}
            </li>
          </ul>
        </div>
      </div>

      {/* testimonials */}
      <div className="w-full rounded-[10px] bg-[#f5f5f5] py-8 px-[114px] text-black">
        <p className="font-bold text-2xl mb-2">
          Client Testimonials – {lawyer.reviewCount} Reviews
        </p>
        <p className="mb-2">
          "{lawyer.name.split(' ')[0]} provided exceptional legal guidance with professionalism and expertise. 
          Their {lawyer.specialization[0].toLowerCase()} knowledge is outstanding."
        </p>
        <p className="">
          "Highly recommend {lawyer.name.split(' ')[0]} for anyone needing {lawyer.specialization[0].toLowerCase()} services!" – Verified Client
        </p>
        <div className="mt-4 flex items-center gap-2">
          <div className="flex text-yellow-500">
            {[...Array(5)].map((_, i) => (
              <span key={i} className={i < Math.floor(lawyer.rating) ? 'text-yellow-500' : 'text-gray-300'}>★</span>
            ))}
          </div>
          <span className="text-gray-600">{lawyer.rating}/5.0 ({lawyer.reviewCount} reviews)</span>
        </div>
      </div>

      <div className="flex gap-16 mt-20">
        <Link to={`/app/booking?lawyer=${lawyer.id}`} className="py-4 px-8 rounded-lg bg-[#03156B] border border-[#03156B] font-bold text-[#FFF8FD]">
          Schedule consultation
        </Link>
        <button className="py-4 px-8 rounded-lg bg-white border-2 border-[#03156B] font-bold text-[#03156B] ">
          Ask a question
        </button>
        <button className="py-4 px-8 rounded-lg bg-white border-2 border-[#03156B] font-bold text-[#03156B] ">
          Call Now
        </button>
      </div>
    </section>
  );
}
