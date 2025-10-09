import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { MOCK_LAWYERS } from "../data/mockData";

interface MatchedLawyer {
  id: string;
  name: string;
  specialization: string[];
  rating: number;
  reviewCount: number;
  hourlyRate: number;
  location: string;
  avatar: string;
  bio: string;
  experience: number;
  languages: string[];
  availability: string;
  matchPercentage: number;
  similarCases: number;
}

const LawyerMatching = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [matchedLawyers, setMatchedLawyers] = useState<MatchedLawyer[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user || !user.legalNeeds) {
      navigate("/app/dashboard");
      return;
    }

    const findMatchingLawyers = () => {
      const userCategory = user.legalNeeds!.category;
      const userLocation = user.location;
      const userBudget = user.preferences?.budget;

      const lawyers = MOCK_LAWYERS.map((lawyer) => {
        let matchScore = 0;
        const similarCases = Math.floor(Math.random() * 50) + 10;

        if (
          lawyer.specialization.some(
            (spec) =>
              spec.toLowerCase().includes(userCategory.toLowerCase()) ||
              userCategory.toLowerCase().includes(spec.toLowerCase())
          )
        ) {
          matchScore += 40;
        }

        if (
          lawyer.location.includes(userLocation?.split(",")[1]?.trim() || "")
        ) {
          matchScore += 20;
        }

        if (userBudget && lawyer.hourlyRate <= 20000) {
          matchScore += 15;
        }

        matchScore += (lawyer.rating / 5) * 15;

        matchScore += Math.min(lawyer.experience / 15, 1) * 10;

        matchScore += Math.random() * 10;

        return {
          ...lawyer,
          matchPercentage: Math.min(Math.round(matchScore), 99),
          similarCases,
        };
      });

      const topMatches = lawyers
        .filter((lawyer) => lawyer.matchPercentage >= 60)
        .sort((a, b) => b.matchPercentage - a.matchPercentage);

      setMatchedLawyers(topMatches);
      setLoading(false);
    };

    setTimeout(findMatchingLawyers, 1500);
  }, [user, navigate]);

  const handleScheduleConsultation = (lawyerId: string) => {
    navigate(`/app/booking?lawyer=${lawyerId}`);
  };

  const handleViewProfile = (lawyerId: string) => {
    navigate(`/app/lawyers/${lawyerId}`);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#03156B] mx-auto mb-4"></div>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            Finding the best lawyers for you...
          </h2>
          <p className="text-gray-600">
            Analyzing your case details and matching with qualified
            professionals
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            We found {matchedLawyers.length} lawyers matching your case.
          </h1>
          <p className="text-gray-600">
            Sorted by best match for your{" "}
            {user?.legalNeeds?.category.toLowerCase()} case
          </p>
        </div>

        {/* Lawyers Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {matchedLawyers.map((lawyer) => (
            <div
              key={lawyer.id}
              className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-start space-x-4">
                  <img
                    src={lawyer.avatar}
                    alt={lawyer.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {lawyer.name}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Specializes in {lawyer.specialization[0].toLowerCase()}{" "}
                      cases. Experienced in high-conflict situations and
                      mediation.
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="inline-block px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full">
                    {lawyer.matchPercentage}% Match
                  </span>
                </div>
              </div>

              {/* Stats */}
              <div className="flex items-center space-x-6 mb-4 text-sm text-gray-600">
                <div className="bg-gray-50 px-3 py-1 rounded">
                  {lawyer.experience} Years Experience
                </div>
                <div className="bg-gray-50 px-3 py-1 rounded">
                  {lawyer.similarCases}+ Similar case
                </div>
                <div className="flex items-center">
                  <span className="text-yellow-400 mr-1">★</span>
                  <span>{lawyer.rating} Rating</span>
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center space-x-3">
                <button
                  onClick={() => handleScheduleConsultation(lawyer.id)}
                  className="flex-1 px-4 py-2 bg-[#03156B] text-white rounded-full font-medium hover:bg-[#03156B]/90 transition-colors"
                >
                  Schedule Consultation
                </button>
                <button
                  onClick={() => handleViewProfile(lawyer.id)}
                  className="px-4 py-2 text-gray-600 border border-gray-300 rounded-full hover:bg-gray-50 transition-colors"
                >
                  View Profile
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LawyerMatching;
