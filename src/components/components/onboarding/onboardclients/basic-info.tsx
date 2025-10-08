import { useState } from "react";
import { Button } from "../../ui/button";
import { Input } from "../../ui/input";
import { useNavigate } from "react-router-dom";

const ClientBasicInfo = () => {
    const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    location: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate("/onboarding/onboardclients/legal-situation");
  };

  return (
    <div className="w-full max-w-lg px-4 py-4 sm:px-6 md:px-0">
      <h1 className="text-[#101828] text-xl sm:text-2xl md:text-3xl font-semibold">
        Let's start with some basic information
      </h1>
      <p className="text-[#98A2B3] text-sm sm:text-base font-medium mt-1">
        This helps us to connect you with the right lawyers in your area
      </p>

      <form onSubmit={handleSubmit} className="mt-6 space-y-6">
        <fieldset className="rounded-2xl border border-gray-200 p-3">
          <label htmlFor="fullName" className="block text-xs sm:text-sm font-medium text-[#667085] px-1 mb-1">
            Full Name
          </label>
          <Input
            id="fullName"
            name="fullName"
            type="text"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Enter full name"
            className="h-11 sm:h-12 border-0 focus-visible:ring-0 px-3"
          />
        </fieldset>

        <fieldset className="border rounded-2xl p-2">
          <label htmlFor="email" className="px-2 block text-sm font-medium">
            Email Address
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter Email Address"
            className="h-11 sm:h-12 border-0 focus-visible:ring-0 px-3"
          />
        </fieldset>

        <fieldset className="rounded-2xl border border-gray-200 p-3">
          <label htmlFor="phone" className="block text-xs sm:text-sm font-medium text-[#667085] px-1 mb-1">
            Phone Number
          </label>
          <Input
            id="phone"
            name="phone"
            type="text"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter Phone Number"
            className="h-11 sm:h-12 border-0 focus-visible:ring-0 px-3"
          />
        </fieldset>

        <fieldset className="rounded-2xl border border-gray-200 p-3">
          <label htmlFor="location" className="block text-xs sm:text-sm font-medium text-[#667085] px-1 mb-1">
            Location
          </label>
          <Input
            id="location"
            name="location"
            type="text"
            value={formData.location}
            onChange={handleChange}
            placeholder="City, State."
            className="h-11 sm:h-12 border-0 focus-visible:ring-0 px-3"
          />
        </fieldset>

        <Button 
          type="submit"           
          className="
            w-full h-11 sm:h-12
            bg-[#0A1D5B] hover:bg-[#0A1D5B]/90
            text-white font-medium
            text-[15px]
          "
        >
          Proceed
        </Button>
      </form>
    </div>
  );
};

export default ClientBasicInfo;
