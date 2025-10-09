import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../ui/button";
import { useOnboarding } from "../onboarding-context";

const ClientsPreference = () => {
  const navigate = useNavigate();
  const { updateFormData } = useOnboarding();

  const [preferences, setPreferences] = useState({
    communication: "",
    budget: "",
    language: ""
  });

  const handleSelectChange = (field: keyof typeof preferences, value: string) => {
    setPreferences(prev => ({ ...prev, [field]: value }));
  };

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Save preferences data to context
    updateFormData({
      preferences: preferences
    });
    
    navigate("/auth/client/create-account");
  };

  const isFormValid = preferences.communication && preferences.budget && preferences.language;

  return (
    <div className="w-full max-w-lg px-4 py-4 sm:px-6 md:px-0">
      {/* Header */}
      <h3 className="text-[#292929] text-xl sm:text-2xl md:text-[1.9rem] font-semibold leading-tight">
        Your Preferences
      </h3>

      <p className="text-[#98A2B3] text-sm sm:text-base font-medium mt-1">
        Help us find lawyers that match your communication style and budget.
      </p>

      <form onSubmit={handleNext} className="mt-6 space-y-5 sm:space-y-6">
        {/* Communication Preference */}
        <fieldset className="border border-[#E5E7EB] rounded-2xl p-3">
          <label className="block text-xs sm:text-sm font-medium text-[#667085] px-1 mb-1">
            How do you prefer to communicate?
          </label>
          <select
            value={preferences.communication}
            onChange={(e) => handleSelectChange('communication', e.target.value)}
            className="w-full h-11 sm:h-12 rounded-xl border-0 bg-transparent px-3 text-sm focus:outline-none focus:ring-0"
          >
            <option value="" disabled>
              Choose communication style
            </option>
            <option value="Email">Email</option>
            <option value="Phone">Phone</option>
            <option value="In-person">In-person</option>
          </select>
        </fieldset>

        {/* Budget Range */}
        <fieldset className="border border-[#E5E7EB] rounded-2xl p-3">
          <label className="block text-xs sm:text-sm font-medium text-[#667085] px-1 mb-1">
            Budget Range
          </label>
          <select
            value={preferences.budget}
            onChange={(e) => handleSelectChange('budget', e.target.value)}
            className="w-full h-11 sm:h-12 rounded-xl border-0 bg-transparent px-3 text-sm focus:outline-none focus:ring-0"
          >
            <option value="" disabled>
              Choose budget range
            </option>
            <option value="Below N100000">Below ₦100,000</option>
            <option value="N100000 - N200000">₦100,000 - ₦200,000</option>
            <option value="N200000 - N500000">₦200,000 - ₦500,000</option>
            <option value="Above N1000000">Above ₦1,000,000</option>
          </select>
        </fieldset>

        {/* Language Preference */}
        <fieldset className="border border-[#E5E7EB] rounded-2xl p-3">
          <label className="block text-xs sm:text-sm font-medium text-[#667085] px-1 mb-1">
            Language Preference
          </label>
          <select
            value={preferences.language}
            onChange={(e) => handleSelectChange('language', e.target.value)}
            className="w-full h-11 sm:h-12 rounded-xl border-0 bg-transparent px-3 text-sm focus:outline-none focus:ring-0"
          >
            <option value="" disabled>
              Choose language preference
            </option>
            <option value="English">English</option>
            <option value="Yoruba">Yoruba</option>
            <option value="Hausa">Hausa</option>
            <option value="Igbo">Igbo</option>
            <option value="Other">Other</option>
          </select>
        </fieldset>

        {/* Proceed Button */}
        <Button
          type="submit"
          disabled={!isFormValid}
          className="w-full h-11 sm:h-12 bg-[#0A1D5B] hover:bg-[#0A1D5B]/90 text-[15px] text-white disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Proceed
        </Button>
      </form>
    </div>
  );
};

export default ClientsPreference;
