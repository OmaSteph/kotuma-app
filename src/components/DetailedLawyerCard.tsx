import React from 'react';
import { useNavigate } from 'react-router-dom';
import type { Lawyer } from '../data/mockData';

interface DetailedLawyerCardProps {
  lawyer: Lawyer;
}

const DetailedLawyerCard: React.FC<DetailedLawyerCardProps> = ({ lawyer }) => {
  const navigate = useNavigate();
  
  const handleViewProfile = () => {
    navigate(`/app/lawyers/${lawyer.id}`);
  };

  const handleBookConsultation = () => {
    // Navigate to booking with pre-selected lawyer
    navigate('/app/booking', { state: { selectedLawyer: lawyer } });
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow">
      <div className="flex items-start gap-4 mb-4">
        <div className="w-16 h-16 bg-[#FF692E] rounded-full flex items-center justify-center text-white font-medium text-lg">
          {lawyer.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-lg text-gray-900 mb-1">{lawyer.name}</h3>
          <p className="text-sm text-gray-600 mb-2">{lawyer.title}</p>
          <div className="flex items-center gap-2 mb-2">
            <div className="flex items-center">
              {'★'.repeat(Math.floor(lawyer.rating))}
              <span className="text-sm text-gray-600 ml-1">
                {lawyer.rating} ({lawyer.reviewCount} reviews)
              </span>
            </div>
          </div>
          <div className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
            lawyer.availability === 'available'
              ? 'bg-green-100 text-green-800'
              : lawyer.availability === 'busy'
              ? 'bg-yellow-100 text-yellow-800'
              : 'bg-red-100 text-red-800'
          }`}>
            {lawyer.availability}
          </div>
        </div>
      </div>
      
      <div className="mb-4">
        <div className="flex flex-wrap gap-1 mb-2">
          {lawyer.specialization.slice(0, 3).map((spec, index) => (
            <span key={index} className="bg-blue-50 text-blue-700 text-xs px-2 py-1 rounded-full">
              {spec}
            </span>
          ))}
        </div>
        <p className="text-sm text-gray-600 line-clamp-2">{lawyer.bio}</p>
      </div>
      
      <div className="flex items-center justify-between">
        <div>
          <span className="text-lg font-semibold text-gray-900">
            ₦{lawyer.hourlyRate.toLocaleString()}
          </span>
          <span className="text-sm text-gray-500">/hour</span>
        </div>
        <div className="flex gap-2">
          <button
            onClick={handleViewProfile}
            className="px-3 py-1.5 text-sm border border-[#03156B] text-[#03156B] rounded hover:bg-[#03156B]/5 transition-colors"
          >
            View Profile
          </button>
          <button
            onClick={handleBookConsultation}
            disabled={lawyer.availability === 'offline'}
            className="px-3 py-1.5 text-sm bg-[#03156B] text-white rounded hover:bg-[#03156B]/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailedLawyerCard;