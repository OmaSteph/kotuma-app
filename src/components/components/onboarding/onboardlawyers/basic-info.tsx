import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../ui/button";
import { Input } from "../../ui/input";

const LawyerBasicInfo = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    employmentStatus: "",
    location: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate("/onboarding/onboardlawyers/legal-expertise");
  };

  return (
    <div
      className="
        w-full 
        max-w-[720px] 
        md:max-w-[640px] 
        lg:max-w-[620px] 
        px-4 md:px-0
      "
    >
      <h1 className="text-[#101828] text-[22px] md:text-[28px] lg:text-[32px] leading-tight font-semibold">
        Let’s start with some basic information
      </h1>
      <p className="text-[#98A2B3] font-medium mt-1">
        Complete your professional details to start receiving client referrals.
      </p>

      <form onSubmit={handleSubmit} className="mt-6 space-y-4 md:space-y-5">
        <fieldset className="rounded-2xl border border-[#E5E7EB] p-2">
          <label
            htmlFor="fullName"
            className="px-2 block text-xs md:text-sm font-medium text-[#667085]"
          >
            Full Name
          </label>
          <Input
            id="fullName"
            name="fullName"
            type="text"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Enter Full Name"
            className="h-11 md:h-12 border-0 focus-visible:ring-0 px-3"
          />
        </fieldset>

        <fieldset className="rounded-2xl border border-[#E5E7EB] p-2">
          <label
            htmlFor="email"
            className="px-2 block text-xs md:text-sm font-medium text-[#667085]"
          >
            Email Address
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter Email Address"
            className="h-11 md:h-12 border-0 focus-visible:ring-0 px-3"
          />
        </fieldset>

        <fieldset className="rounded-2xl border border-[#E5E7EB] p-2">
          <label
            htmlFor="phone"
            className="px-2 block text-xs md:text-sm font-medium text-[#667085]"
          >
            Phone Number
          </label>
          <Input
            id="phone"
            name="phone"
            type="text"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter Phone Number"
            className="h-11 md:h-12 border-0 focus-visible:ring-0 px-3"
          />
        </fieldset>

        <fieldset className="rounded-2xl border border-[#E5E7EB] p-2">
          <label
            htmlFor="employmentStatus"
            className="px-2 block text-xs md:text-sm font-medium text-[#667085]"
          >
            Current Employment Status
          </label>
          <select
            id="employmentStatus"
            name="employmentStatus"
            value={formData.employmentStatus}
            onChange={handleChange}
            className="
              h-11 md:h-12 w-full rounded-xl border-0 px-3
              text-sm focus:outline-none focus:ring-0
              placeholder:text-[#98A2B3] bg-white
            "
          >
            <option value="" disabled>
              Select status
            </option>
            <option value="employed">Employed</option>
            <option value="self-employed">Self-Employed</option>
            <option value="not-employed">Not Employed</option>
          </select>
        </fieldset>

        <fieldset className="rounded-2xl border border-[#E5E7EB] p-2">
          <label
            htmlFor="location"
            className="px-2 block text-xs md:text-sm font-medium text-[#667085]"
          >
            Location
          </label>
          <Input
            id="location"
            name="location"
            type="text"
            value={formData.location}
            onChange={handleChange}
            placeholder="City, State."
            className="h-11 md:h-12 border-0 focus-visible:ring-0 px-3"
          />
        </fieldset>

        <Button
          type="submit"
          className="
            w-full h-11 md:h-12
            bg-[#0A1D5B] hover:bg-[#0A1D5B]/90
          "
        >
          Proceed
        </Button>
      </form>
    </div>
  );
};

export default LawyerBasicInfo;
