import { useState } from "react";
import { Button } from "../../ui/button";
import { Input } from "../../ui/input";
import { useNavigate } from "react-router-dom";
import { useOnboarding } from "../onboarding-context";

const ClientBasicInfo = () => {
    const navigate = useNavigate();
    const { updateFormData } = useOnboarding();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    location: "",
  });

  const [errors, setErrors] = useState({
    fullName: "",
    email: "",
    phone: "",
    location: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: ""
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {
      fullName: "",
      email: "",
      phone: "",
      location: "",
    };

    // Full Name validation
    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = "Full name must be at least 2 characters";
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    // Phone validation
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[+]?[\d\s\-\(\)]{10,}$/.test(formData.phone.replace(/\s/g, ''))) {
      newErrors.phone = "Please enter a valid phone number";
    }

    // Location validation
    if (!formData.location.trim()) {
      newErrors.location = "Location is required";
    }

    setErrors(newErrors);
    return !Object.values(newErrors).some(error => error !== "");
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      // Save form data to context
      updateFormData({
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        location: formData.location
      });
      navigate("/auth/client/legal-situation");
    }
  };

  const isFormValid = Object.values(formData).every(value => value.trim() !== "");

  return (
    <div className="w-full max-w-lg px-4 py-4 sm:px-6 md:px-0">
      <h1 className="text-[#101828] text-xl sm:text-2xl md:text-3xl font-semibold">
        Let's start with some basic information
      </h1>
      <p className="text-[#98A2B3] text-sm sm:text-base font-medium mt-1">
        This helps us to connect you with the right lawyers in your area
      </p>

      <form onSubmit={handleSubmit} className="mt-6 space-y-6">
        <fieldset className={`rounded-2xl border p-3 ${errors.fullName ? 'border-red-300 bg-red-50' : 'border-gray-200'}`}>
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
            className={`h-11 sm:h-12 border-0 focus-visible:ring-0 px-3 ${errors.fullName ? 'bg-red-50' : ''}`}
          />
          {errors.fullName && <p className="text-red-600 text-xs mt-1 px-1">{errors.fullName}</p>}
        </fieldset>

        <fieldset className={`border rounded-2xl p-2 ${errors.email ? 'border-red-300 bg-red-50' : 'border-gray-200'}`}>
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
            className={`h-11 sm:h-12 border-0 focus-visible:ring-0 px-3 ${errors.email ? 'bg-red-50' : ''}`}
          />
          {errors.email && <p className="text-red-600 text-xs mt-1 px-2">{errors.email}</p>}
        </fieldset>

        <fieldset className={`rounded-2xl border p-3 ${errors.phone ? 'border-red-300 bg-red-50' : 'border-gray-200'}`}>
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
            className={`h-11 sm:h-12 border-0 focus-visible:ring-0 px-3 ${errors.phone ? 'bg-red-50' : ''}`}
          />
          {errors.phone && <p className="text-red-600 text-xs mt-1 px-1">{errors.phone}</p>}
        </fieldset>

        <fieldset className={`rounded-2xl border p-3 ${errors.location ? 'border-red-300 bg-red-50' : 'border-gray-200'}`}>
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
            className={`h-11 sm:h-12 border-0 focus-visible:ring-0 px-3 ${errors.location ? 'bg-red-50' : ''}`}
          />
          {errors.location && <p className="text-red-600 text-xs mt-1 px-1">{errors.location}</p>}
        </fieldset>

        <Button 
          type="submit"           
          disabled={!isFormValid}
          className="
            w-full h-11 sm:h-12
            bg-[#0A1D5B] hover:bg-[#0A1D5B]/90
            text-white font-medium
            text-[15px]
            disabled:opacity-50 disabled:cursor-not-allowed
          "
        >
          Proceed
        </Button>
      </form>
    </div>
  );
};

export default ClientBasicInfo;
