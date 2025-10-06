import { useNavigate } from "react-router-dom";
import { Button } from "../../ui/button";


const ClientsPreference = () => {
  const navigate = useNavigate();

 
  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/onboarding/onboardclients/create-account");
  };

  return (
    <div className="w-full max-w-[640px] md:max-w-[600px]">
      <h3 className="text-[#292929] text-[28px] md:text-[32px] leading-tight font-semibold">
        Your Preferences
      </h3>
      <p className="text-[#98A2B3] text-sm md:text-[15px] font-medium">
        Help us find lawyers that match your communication style and budget
      </p>

      <form onSubmit={handleNext} className="space-y-4 md:space-y-5 mt-5 md:mt-6">
        <fieldset className="border border-[#E5E7EB] rounded-2xl p-2">
            <label className="px-2 block text-xs md:text-sm font-medium  mb-2 text-[#667085]">
              How do you prefer to communicate?
            </label>
            <select
              className="w-full px-3 py-3 h-12 outline-none rounded-xl bg-transparent"
            >
              <option value="" disabled>
                Choose communication style
              </option>
              <option value="Email">Email</option>
              <option value="Phone">Phone</option>
              <option value="In-person">In-person</option>
            </select>
          </fieldset>
        <fieldset className="border border-[#E5E7EB] rounded-2xl p-2">
            <label className="px-2 block text-xs md:text-sm font-medium  mb-2 text-[#667085]">
              Budget Range
            </label>
            <select
              className="w-full px-3 py-3 h-12 outline-none rounded-xl bg-transparent"
            >
              <option value="" disabled>
                Choose budget range
              </option>
              <option value="Below N100000">Below N100000</option>
              <option value="N100000 - N200000">N100000 - N200000</option>
              <option value="N200000 - N500000">N200000 - N500000</option>
              <option value="Above N1000000">Above N1000000</option>
            </select>
          </fieldset>
        <fieldset className="border border-[#E5E7EB] rounded-2xl p-2">
            <label className="px-2 block text-xs md:text-sm font-medium  mb-2 text-[#667085]">
              Language Preference
            </label>
            <select
              className="w-full px-3 py-3 h-12 outline-none rounded-xl bg-transparent"
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

        <Button type="submit" className="w-full h-12 text-[15px]">
          Proceed
        </Button>
      </form>
    </div>
  );
};

export default ClientsPreference;
