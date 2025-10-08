import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../ui/button";
import { Input } from "../../ui/input";
import { Textarea } from "@components/components/ui/textarea";

const SituationCategories = [
  "Corporate Law",
  "Family Law",
  "IP Law",
  "Criminal Law",
  "Contract Law",
  "Real Estate Law",
  "Entertainment Law",
  "Others",
] as const;

const TIME_SLOTS = [
  "Immediately",
  "Within a week",
  "Within 2 weeks",
  "Within a month",
  "Custom date",
] as const;

const ClientsLegalSituation = () => {
  const navigate = useNavigate();

  const [period, setPeriod] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [hasProceedings, setHasProceedings] = useState("");

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/onboarding/onboardclients/clients-preference");
  };

  return (
    <div className="w-full max-w-lg px-4 py-4 sm:px-6 md:px-0">
      {/* Header */}
      <h3 className="text-[#292929] text-xl sm:text-2xl md:text-[1.9rem] font-semibold leading-tight">
        Tell us about your legal situation
      </h3>

      <p className="text-[#98A2B3] text-sm sm:text-base font-medium mt-1">
        The more details you provide, the better we can match you with the right lawyer.
      </p>

      <form onSubmit={handleNext} className="mt-6 space-y-5 sm:space-y-6">
        {/* Category */}
        <fieldset className="border border-[#E5E7EB] rounded-2xl p-3">
          <label className="block text-xs sm:text-sm font-medium text-[#667085] px-1 mb-1">
            What type of legal help do you need?
          </label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full h-11 sm:h-12 rounded-xl border-0 bg-transparent px-3 text-sm focus:outline-none focus:ring-0"
          >
            <option value="" disabled>
              Choose a category that matches your situation
            </option>
            {SituationCategories.map((a) => (
              <option key={a} value={a}>
                {a}
              </option>
            ))}
          </select>
        </fieldset>

        {/* Description */}
        <fieldset className="border border-[#E5E7EB] rounded-2xl p-3">
          <label className="block text-xs sm:text-sm font-medium text-[#667085] px-1 mb-1">
            Description of your situation
          </label>
          <Textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={3}
            className="w-full rounded-xl border-0 px-3 py-3 text-sm outline-none resize-y placeholder:text-[#98A2B3]"
          />
        </fieldset>

        {/* When do you need help? */}
        <fieldset className=" border-[#E5E7EB] rounded-2xl p-3">
          <label className="block text-xs sm:text-sm font-medium text-[#667085] px-1 pb-3 mb-2">
            When do you need help?
          </label>
          <div className="flex flex-wrap gap-3 sm:gap-4 mt-2">
            {TIME_SLOTS.map((time) => (
              <Button
                key={time}
                type="button"
                variant="outline"
                onClick={() => setPeriod(time)}
                className={`flex-1 sm:flex-none px-6 h-11 sm:h-12 rounded-xl border text-sm font-medium transition-all duration-200
                  ${
                    period === time
                      ? "bg-[#0A1D5B] text-white border-[#0A1D5B] shadow-md"
                      : "border-[#0A1D5B] text-[#0A1D5B] hover:bg-blue-50 hover:border-[#0A1D5B]"
                  }`}
              >
                {time}
              </Button>
            ))}
          </div>
        </fieldset>

        {/* Custom Date */}
        {period === "Custom date" && (
          <fieldset className="border border-[#E5E7EB] rounded-2xl p-3">
            <label className="block text-xs sm:text-sm font-medium text-[#667085] px-1 mb-1">
              Custom Date
            </label>
            <Input
              type="date"
              className="w-full h-11 sm:h-12 rounded-xl border-0 bg-transparent px-3 text-sm focus:outline-none focus:ring-0"
            />
          </fieldset>
        )}

        {/* Court proceedings */}
        <fieldset className="border border-[#E5E7EB] rounded-2xl p-3">
          <label className="block text-xs sm:text-sm font-medium text-[#667085] px-1 mb-1">
            Do you have existing court proceedings?
          </label>
          <select
            value={hasProceedings}
            onChange={(e) => setHasProceedings(e.target.value)}
            className="w-full h-11 sm:h-12 rounded-xl border-0 bg-transparent px-3 text-sm focus:outline-none focus:ring-0"
          >
            <option value="" disabled>
              Choose answer
            </option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </fieldset>

        {/* Proceed Button */}
        <Button
          type="submit"
          className="w-full h-11 sm:h-12 bg-[#0A1D5B] hover:bg-[#0A1D5B]/90 text-[15px] text-white"
        >
          Proceed
        </Button>
      </form>
    </div>
  );
};

export default ClientsLegalSituation;
