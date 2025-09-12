import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../ui/button";
import { Input } from "../../ui/input";

const PRACTICE_AREAS = [
  "Corporate Law",
  "Family law",
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
  const [currentYears, setCurrentYears] = useState(YEARS[1]); // "1 Year"
  const [practices, setPractices] = useState<Practice[]>([]);

  const addPractice = () => {
    if (!currentArea) return;
    if (practices.some((p) => p.area === currentArea)) return;
    setPractices((p) => [...p, { area: currentArea, years: currentYears }]);
    setCurrentArea("");
    setCurrentYears(YEARS[1]);
  };

  const removePractice = (area: string) =>
    setPractices((p) => p.filter((x) => x.area !== area));

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/onboarding/onboardlawyers/create-profile");
  };

  return (
    <div className="w-full max-w-[640px] md:max-w-[600px]">
      <h3 className="text-[#292929] text-[28px] md:text-[32px] leading-tight font-semibold">
        Tell us about your legal expertise
      </h3>
      <p className="text-[#98A2B3] text-sm md:text-[15px] font-medium">
        The more specific you are, the better we can match you with clients
        seeking your expertise.
      </p>

      <form onSubmit={handleNext} className="space-y-4 md:space-y-5 mt-5 md:mt-6">
        <fieldset className="border border-[#E5E7EB] rounded-2xl p-2">
          <label className="px-2 block text-xs md:text-sm font-medium text-[#667085]">
            Language Spoken
          </label>
          <Input
            placeholder="Enter preferred Language"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="border-0 w-full px-3 py-3 h-12"
          />
        </fieldset>

        <fieldset className="border border-[#E5E7EB] rounded-2xl p-2">
          <label className="px-2 block text-xs md:text-sm font-medium text-[#667085]">
            Service Delivery Method
          </label>
          <select
            value={serviceMethod}
            onChange={(e) => setServiceMethod(e.target.value as any)}
            className="w-full px-3 py-3 h-12 outline-none rounded-xl bg-transparent"
          >
            <option value="" disabled>
              Choose Answer
            </option>
            {SERVICE_METHODS.map((m) => (
              <option key={m} value={m}>
                {m}
              </option>
            ))}
          </select>
        </fieldset>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <fieldset className="border border-[#E5E7EB] rounded-2xl p-2">
            <label className="px-2 block text-xs md:text-sm font-medium text-[#667085]">
              Practice Area
            </label>
            <select
              value={currentArea}
              onChange={(e) => setCurrentArea(e.target.value as any)}
              className="w-full px-3 py-3 h-12 outline-none rounded-xl bg-transparent"
            >
              <option value="" disabled>
                Area of Expertise
              </option>
              {PRACTICE_AREAS.map((a) => (
                <option key={a} value={a}>
                  {a}
                </option>
              ))}
            </select>
          </fieldset>

          <fieldset className="border border-[#E5E7EB] rounded-2xl p-2">
            <label className="px-2 block text-xs md:text-sm font-medium text-[#667085]">
              Years of Experience
            </label>
            <select
              value={currentYears}
              onChange={(e) => setCurrentYears(e.target.value)}
              className="w-full px-3 py-3 h-12 outline-none rounded-xl bg-transparent"
            >
              {YEARS.map((y) => (
                <option key={y} value={y}>
                  {y}
                </option>
              ))}
            </select>
          </fieldset>
        </div>

        <button
          type="button"
          onClick={addPractice}
          className="w-full h-12 rounded-2xl border border-[#E5E7EB] text-[#111827] flex items-center justify-center gap-2"
        >
          <span className="text-lg leading-none">＋</span>
          <span className="text-sm font-medium">Add new practice area</span>
        </button>

        {practices.length > 0 && (
          <div className="flex flex-wrap gap-2">
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

        <Button type="submit" className="w-full h-12 text-[15px]">
          Proceed
        </Button>
      </form>
    </div>
  );
};

export default LawyerLegalExpertise;
