import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../ui/button";
import { Input } from "../../ui/input";

const PRACTICE_AREAS = [
  "Corporate Law",
  "Family Law",
  "IP Law",
  "Criminal Law",
  "Contract Law",
  "Real Estate Law",
  "Entertainment Law",
  "Others",
] as const;

const SERVICE_METHODS = [
  "In-Person Meetings",
  "Phone / Video Calls",
  "Email Communication",
] as const;

const YEARS = ["< 1 Year", "1 Year", "2 Years", "3 Years", "4 Years", "5+ Years"];

type Practice = { area: string; years: string };

const LawyerLegalExpertise = () => {
  const navigate = useNavigate();

  const [language, setLanguage] = useState("");
  const [serviceMethod, setServiceMethod] =
    useState<(typeof SERVICE_METHODS)[number] | "">("");
  const [currentArea, setCurrentArea] =
    useState<(typeof PRACTICE_AREAS)[number] | "">("");
  const [currentYears, setCurrentYears] = useState(YEARS[1]);
  const [practices, setPractices] = useState<Practice[]>([]);

  const [bio, setBio] = useState("");

  const addPractice = () => {
    if (!currentArea || practices.some((p) => p.area === currentArea)) return;
    setPractices((prev) => [...prev, { area: currentArea, years: currentYears }]);
    setCurrentArea("");
    setCurrentYears(YEARS[1]);
  };

  const removePractice = (area: string) =>
    setPractices((prev) => prev.filter((p) => p.area !== area));

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/onboarding/onboardlawyers/account-setup");
  };

  return (
    <div className="w-full max-w-[38rem] px-4 py-4 sm:px-6 md:px-0">
      {/* Header */}
      <h3 className="text-[#292929] text-xl sm:text-2xl md:text-[1.9rem] font-semibold leading-tight">
        Tell us about your legal expertise
      </h3>

      <p className="text-[#98A2B3] text-sm sm:text-base font-medium mt-1">
        The more specific you are, the better we can match you with clients
        seeking your expertise.
      </p>

      <form onSubmit={handleNext} className="mt-6 space-y-5 sm:space-y-6">
        <fieldset className="border border-[#E5E7EB] rounded-2xl p-3">
          <label className="block text-xs sm:text-sm font-medium text-[#667085] px-1 mb-1">
            Language Spoken
          </label>
          <Input
            placeholder="Enter preferred language"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="w-full h-11 sm:h-12 border-0 px-3 focus-visible:ring-0"
          />
        </fieldset>

        <fieldset className="border border-[#E5E7EB] rounded-2xl p-3">
          <label className="block text-xs sm:text-sm font-medium text-[#667085] px-1 mb-1">
            Service Delivery Method
          </label>
          <select
            value={serviceMethod}
            onChange={(e) => setServiceMethod(e.target.value as any)}
            className="w-full h-11 sm:h-12 rounded-xl border-0 bg-transparent px-3 text-sm focus:outline-none focus:ring-0"
          >
            <option value="" disabled>
              Choose an option
            </option>
            {SERVICE_METHODS.map((method) => (
              <option key={method} value={method}>
                {method}
              </option>
            ))}
          </select>
        </fieldset>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          <fieldset className="border border-[#E5E7EB] rounded-2xl p-3">
            <label className="block text-xs sm:text-sm font-medium text-[#667085] px-1 mb-1">
              Practice Area
            </label>
            <select
              value={currentArea}
              onChange={(e) => setCurrentArea(e.target.value as any)}
              className="w-full h-11 sm:h-12 rounded-xl border-0 bg-transparent px-3 text-sm focus:outline-none focus:ring-0"
            >
              <option value="" disabled>
                Select area
              </option>
              {PRACTICE_AREAS.map((area) => (
                <option key={area} value={area}>
                  {area}
                </option>
              ))}
            </select>
          </fieldset>

          <fieldset className="border border-[#E5E7EB] rounded-2xl p-3">
            <label className="block text-xs sm:text-sm font-medium text-[#667085] px-1 mb-1">
              Years of Experience
            </label>
            <select
              value={currentYears}
              onChange={(e) => setCurrentYears(e.target.value)}
              className="w-full h-11 sm:h-12 rounded-xl border-0 bg-transparent px-3 text-sm focus:outline-none focus:ring-0"
            >
              {YEARS.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </fieldset>
        </div>

        <button
          type="button"
          onClick={addPractice}
          className="w-full h-11 sm:h-12 rounded-2xl border border-[#E5E7EB] flex items-center justify-center gap-2 text-[#111827] hover:bg-gray-50"
        >
          <span className="text-lg leading-none">＋</span>
          <span className="text-sm font-medium">Add new practice area</span>
        </button>

        {practices.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-2">
            {practices.map((p) => (
              <span
                key={p.area}
                className="inline-flex items-center gap-2 bg-[#F2F4F7] text-[#111827] rounded-full px-3 py-1.5 text-sm"
              >
                {p.area} · {p.years}
                <button
                  type="button"
                  onClick={() => removePractice(p.area)}
                  className="text-[#667085] hover:text-[#111827]"
                  aria-label={`Remove ${p.area}`}
                >
                  ✕
                </button>
              </span>
            ))}
          </div>
        )}

        <fieldset className="border border-gray-200 rounded-2xl p-3">
          <label className="block text-xs sm:text-sm font-medium text-[#667085] px-1 mb-1">
            Professional Bio
          </label>
          <textarea
            rows={3}
            placeholder="Professional bio and summary"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            className="w-full px-3 py-3 rounded-xl border-0 outline-none resize-y placeholder:text-[#98A2B3]"
          />
        </fieldset>

        {/* Submit Button */}
        <Button
          type="submit"
          className="w-full h-11 sm:h-12 bg-[#0A1D5B] hover:bg-[#0A1D5B]/90 text-[15px]"
        >
          Proceed
        </Button>
      </form>
    </div>
  );
};

export default LawyerLegalExpertise;
