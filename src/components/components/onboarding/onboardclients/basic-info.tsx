import { useState } from "react";
import { Button } from "../../ui/button";
import { Input } from "../../ui/input";

const ClientBasicInfo = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    location: "",
  });

  // Update state on input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submit
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  return (
    <div className="w-full max-w-[600px] mt-0">
      <h3 className="text-[#292929] text-[32px] font-semibold">
        Let's start with some basic information
      </h3>
      <p className="text-[#9DA4AE] font-medium">
        This helps us to connect you with the right lawyers in your area
      </p>

      <form onSubmit={handleSubmit} className="space-y-5 mt-6">
        <fieldset className="border rounded-2xl p-2">
          <label htmlFor="fullName" className="px-2 block text-sm font-medium">
            Full Name
          </label>
          <Input
            id="fullName"
            name="fullName"
            type="text"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Enter full name"
            className="border-0 w-full px-3 py-2"
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
            className="border-0 w-full px-3 py-2"
          />
        </fieldset>

        <fieldset className="border rounded-2xl p-2">
          <label htmlFor="phone" className="px-2 block text-sm font-medium">
            Phone Number
          </label>
          <Input
            id="phone"
            name="phone"
            type="text"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter Phone Number"
            className="border-0 w-full px-3 py-2"
          />
        </fieldset>

        <fieldset className="border rounded-2xl p-2">
          <label htmlFor="location" className="px-2 block text-sm font-medium">
            Location
          </label>
          <Input
            id="location"
            name="location"
            type="text"
            value={formData.location}
            onChange={handleChange}
            placeholder="City, State."
            className="border-0 w-full px-3 py-2"
          />
        </fieldset>

        <Button type="submit" className="w-full">
          Proceed
        </Button>
      </form>
    </div>
  );
};

export default ClientBasicInfo;
