import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../ui/button";
import { Input } from "../../ui/input";
import { Textarea } from "@components/components/ui/textarea";

const SituationCategories = [
  "Corporate Law",
  "Family law",
  "IP Law",
  "Criminal Law",
  "Contract Law",
  "Real Estate Law",
  "Entertainment Law",
  "Others",
] as const;



 const timeSlots = [
        "Immediately", "Within a week", "Within 2 weeks", 
        "Within a month", "Custom date",
    ];

const ClientsLegalSituation = () => {
  const navigate = useNavigate();
  const [period, setPeriod] = useState("");
 
  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/onboarding/onboardclients/preferences");
  };

  return (
    <div className="w-full max-w-[640px] md:max-w-[600px]">
      <h3 className="text-[#292929] text-[28px] md:text-[32px] leading-tight font-semibold">
        Tell us about your legal situation
      </h3>
      <p className="text-[#98A2B3] text-sm md:text-[15px] font-medium">
        The more details you provide, the better we can match you with the right lawyer
      </p>

      <form onSubmit={handleNext} className="space-y-4 md:space-y-5 mt-5 md:mt-6">
          <fieldset className="border border-[#E5E7EB] rounded-2xl p-2">
            <label className="px-2 block text-xs md:text-sm font-medium text-[#667085]">
              What type of legal help do you need?
            </label>
            <select
              className="w-full px-3 py-3 h-12 outline-none rounded-xl bg-transparent"
            >
              <option value="" disabled>
                Choose category that matches your situation
              </option>
              {SituationCategories.map((a) => (
                <option key={a} value={a}>
                  {a}
                </option>
              ))}
            </select>
          </fieldset>
          <fieldset className="border border-[#E5E7EB] rounded-2xl p-2">
              <label className="px-2 block text-xs md:text-sm font-medium text-[#667085]">
                Description of your situation
              </label>
              <Textarea
                placeholder="Enter a brief description of your situation"
                className="border-0 w-full px-3 py-3 h-12"
              />
          </fieldset>
          <fieldset className="border border-[#E5E7EB] rounded-2xl p-2">
              <label className="px-2 block text-xs md:text-sm font-medium text-[#667085]">
                When do you need help?
              </label>
              <div className="flex items-center gap-8 flex-wrap gap-y-4 my-2">
              {timeSlots.map((time) => (
                  <Button key={time} type="button"
                    variant="outline"
                    onClick={() => setPeriod(time)}
                    className={`max-w-[115px] p-3 rounded-lg border text-sm font-medium transition-all duration-200 hover:scale-105 ${
                      period === time
                        ? "bg-kotumablue text-white border-kotumablue shadow-md"  
                        : "border-kotumablue hover:border-kotumablue hover:bg-blue-50 text-kotumablue"
                    }`}
                  > 
                    {time}
                  </Button>
              ))}
              </div>
          </fieldset>
          {period === "Custom date" && (
            <fieldset className="border border-[#E5E7EB] rounded-2xl p-2">
            <label className="px-2 block text-xs md:text-sm font-medium text-[#667085]">
              Custom Date
            </label>
            <Input
              type="date"
              className="w-full px-3 py-3 h-12 outline-none rounded-xl bg-transparent"
            />
          </fieldset>
          )}

          <fieldset className="border border-[#E5E7EB] rounded-2xl p-2">
            <label className="px-2 block text-xs md:text-sm font-medium  mb-2 text-[#667085]">
              Do you have existing court proceedings?
            </label>
            <select
              className="w-full px-3 py-3 h-12 outline-none rounded-xl bg-transparent"
            >
              <option value="" disabled>
                Choose Answer
              </option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </fieldset>

        <Button type="submit" className="w-full h-12 text-[15px]">
          Proceed
        </Button>
      </form>
    </div>
  );
};

export default ClientsLegalSituation;
