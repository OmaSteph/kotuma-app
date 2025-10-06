import { Search } from 'lucide-react';

import immigrationIcon from '@assets/AirplaneTakeoff.svg';
import realEstateIcon from '@assets/City.svg';
import entertainmentIcon from '@assets/FilmSlate.svg';
import familyIcon from '@assets/familyIcon.svg';
import criminalIcon from '@assets/criminalIcon.svg';
import corporateIcon from '@assets/Toolbox.svg';

import immigrationBcg from '@assets/airplane_img.jpg';
import realEstateBcg from '@assets/real_estate_img.jpg';
import entertainmentBcg from '@assets/entertainment_img.png';
import familyBcg from '@assets/family_img.jpg';
import criminalBcg from '@assets/criminal_img.jpg';
import corporateBcg from '@assets/corporate_img.jpg';

const servicesData = [
  { icon: immigrationIcon, title: 'Immigration Law', cardImage: immigrationBcg },
  { icon: realEstateIcon, title: 'Real Estate Law', highlighted: true, cardImage: realEstateBcg },
  { icon: entertainmentIcon, title: 'Entertainment Law', cardImage: entertainmentBcg },
  { icon: familyIcon, title: 'Family Law', cardImage: familyBcg },
  { icon: criminalIcon, title: 'Criminal Law', cardImage: criminalBcg },
  { icon: corporateIcon, title: 'Corporate law', cardImage: corporateBcg },
];

const Services = () => {
  return (
    <section className="bg-[linear-gradient(90deg,_#090C21_0%,_#1E2D75_100%)] py-24">
      <div className="container px-4 mx-auto text-center font-neue">
        
        <h1 className="text-4xl font-bold text-white md:text-5xl">Our Services</h1>
        <p className="max-w-2xl mx-auto mt-4 text-[#8d8d8d]">
            We offer a wide range of legal services to meet your need. Our experienced attorneys are here to assist you with professional and personalized legal solutions.
        </p>
        <div className="relative max-w-lg mx-auto mt-8">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3">
            <Search className="w-5 h-5 text-gray-500" />
          </span>
          <input
            type="text"
            placeholder="Search by name, specialty, or location"
            className="w-full py-3 pl-10 pr-4 text-gray-900 rounded-md bg-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-kotumagold"/>
        </div>

        <div className="grid grid-cols-1 gap-8 mt-24 md:grid-cols-2 lg:grid-cols-3">
          {servicesData.map((service) => (
            <div
              key={service.title}
              className="relative h-64 p-8 overflow-hidden text-center text-white transition-transform duration-300 transform bg-center bg-cover rounded-lg shadow-lg hover:scale-105"
              style={{ backgroundImage: `url(${service.cardImage})` }}
            >
              <div className={`absolute inset-0 rounded-lg transition-colors duration-300 ${
                service.highlighted ? 'bg-slate-700/80' : 'bg-slate-900/80'
              }`}></div>
              
              <div className="relative z-10 flex flex-col items-center justify-center h-full">
                <img src={service.icon} alt={`${service.title} icon`} className="w-16 h-16" />
                <h3 className="mt-6 text-xl font-semibold">{service.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;