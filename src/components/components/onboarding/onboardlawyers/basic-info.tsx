import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../ui/button";
import { Input } from "../../ui/input";
import { useOnboarding } from "../onboarding-context";

const LawyerBasicInfo = () => {
  const navigate = useNavigate();
  const { updateFormData } = useOnboarding();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    employmentStatus: "",
    location: "",
  });

  const [errors, setErrors] = useState({
    fullName: "",
    email: "",
    phone: "",
    employmentStatus: "",
    location: "",
  });

  const [avatar, setAvatar] = useState<File | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: ""
      }));
    }
  };

  const onFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] ?? null;
    setAvatar(file);
  };

  const validateForm = () => {
    const newErrors = {
      fullName: "",
      email: "",
      phone: "",
      employmentStatus: "",
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

    // Employment Status validation
    if (!formData.employmentStatus) {
      newErrors.employmentStatus = "Employment status is required";
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
        location: formData.location,
        employmentStatus: formData.employmentStatus,
        avatar: avatar
      });
      navigate("/auth/lawyer/legal-expertise");
    }
  };

  const isFormValid = Object.values(formData).every(value => value.trim() !== "");

  return (
    <div
      className="w-full max-w-lg px-4 py-4 sm:px-6 md:px-0
      "
    >
      <h1 className="text-[#101828] text-xl sm:text-2xl md:text-3xl font-semibold">
        Let’s start with some basic information
      </h1>
      <p className="text-[#98A2B3] text-sm sm:text-base font-medium mt-1">
        Complete your professional details to start receiving client referrals.
      </p>

      <form onSubmit={handleSubmit} className="mt-6 space-y-6">
        <fieldset className={`rounded-2xl border p-3 ${errors.fullName ? 'border-red-300 bg-red-50' : 'border-gray-200'}`}>
          <label
            htmlFor="fullName"
            className="block text-xs sm:text-sm font-medium text-[#667085] px-1 mb-1">
            Full Name
          </label>
          <Input
            id="fullName"
            name="fullName"
            type="text"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Enter Full Name"
            className={`h-11 sm:h-12 border-0 focus-visible:ring-0 px-3 ${errors.fullName ? 'bg-red-50' : ''}`}
          />
          {errors.fullName && <p className="text-red-600 text-xs mt-1 px-1">{errors.fullName}</p>}
        </fieldset>

        {/* Email Address Fieldset */}
        <fieldset className="rounded-2xl border border-gray-200 p-3">
          <label
            htmlFor="email"
            className="block text-xs sm:text-sm font-medium text-[#667085] px-1 mb-1"
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
            className="h-11 sm:h-12 border-0 focus-visible:ring-0 px-3"
          />
        </fieldset>

        <fieldset className="rounded-2xl border border-gray-200 p-3">
          <label
            htmlFor="phone"
            className="block text-xs sm:text-sm font-medium text-[#667085] px-1 mb-1"
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
            className="h-11 sm:h-12 border-0 focus-visible:ring-0 px-3"
          />
        </fieldset>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Employment Status Fieldset */}
          <fieldset className="rounded-2xl border border-gray-200 p-3">
            <label
              htmlFor="employmentStatus"
              className="block text-xs sm:text-sm font-medium text-[#667085] px-1 mb-1"
            >
              Current Employment Status
            </label>
            <select
              id="employmentStatus"
              name="employmentStatus"
              value={formData.employmentStatus}
              onChange={handleChange}
              className="
                h-11 sm:h-12 w-full rounded-xl border-0 px-3
                text-sm focus:outline-none focus:ring-0
                placeholder:text-gray-400 bg-white
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

          {/* Upload Photo */}
          <fieldset className="rounded-2xl border border-gray-200 p-3">
            <label
              htmlFor="avatar"
              className="block text-xs sm:text-sm font-medium text-[#667085] px-1 mb-2"
            >
              Upload Photo
            </label>
            <div className="flex items-center gap-4">
              {/* Preview Circle */}
              <div className="w-14 h-14 rounded-full bg-white border border-gray-200 flex items-center justify-center overflow-hidden">
                {avatar ? (
                  <img
                    src={URL.createObjectURL(avatar)}
                    alt="Preview"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M12 12a5 5 0 1 0-5-5 5 5 0 0 0 5 5Z"
                      stroke="#667085"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M21 22c0-3.9-4.03-7-9-7s-9 3.1-9 7"
                      stroke="#667085"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                )}
              </div>

              {/* Upload Button */}
              <div>
                <input
                  id="avatar"
                  type="file"
                  accept="image/*"
                  onChange={onFile}
                  className="hidden"
                />
                <label
                  htmlFor="avatar"
                  className="inline-flex items-center rounded-xl border border-gray-200 bg-white px-4 py-2 text-sm cursor-pointer hover:bg-gray-50"
                >
                  Choose File
                </label>
                {avatar && (
                  <div className="mt-1 text-xs text-[#667085] truncate max-w-[180px]">
                    {avatar.name}
                  </div>
                )}
              </div>
            </div>
          </fieldset>
        </div>

        {/* Location Fieldset */}
        <fieldset className="rounded-2xl border border-gray-200 p-3">
          <label
            htmlFor="location"
            className="block text-xs sm:text-sm font-medium text-[#667085] px-1 mb-1"
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
            className="h-11 sm:h-12 border-0 focus-visible:ring-0 px-3"
          />
        </fieldset>

        {/* Submit Button */}
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

export default LawyerBasicInfo;
