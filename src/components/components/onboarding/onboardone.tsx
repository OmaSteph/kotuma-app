import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const OnboardOne = () => {
  const navigate = useNavigate();
  const [state, setState] = useState({ onboard: "" });

  const handleChange = (e:any) => {
    const value = e.target.value;
    setState((prev) => ({ ...prev, onboard:value}));
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();
    if (!state.onboard) {
      alert("Please select an option before proceeding.");
      return;
    }
    navigate("/onboarding/onboardclients");
  };

  const options = [
    {
      value: "legal-help",
      title: "I am new and need legal help",
      description: "Connect with qualified lawyers who can help you with your legal matter",
    },
    {
      value: "returning",
      title: "I'm a returning client",
      description: "Sign in to access your account with new legal matters",
    },
    {
      value: "lawyer",
      title: "I'm a lawyer",
      description: "Join our network and connect with clients who need your expertise",
    },
  ];

  return (
    <section className="flex justify-center items-center min-h-[60vh]">
      <form onSubmit={handleSubmit}>className="w-full max-w-lg"
        <h3 className="font-semibold text-[2rem] tracking-tighter text-gray-800">
          How can we help you?
        </h3>
        <p className="font-medium text-[#9da4ae] tracking-tighter">
          Choose the option that best describes what you're looking for
        </p>

        {/* Options */}
        <div className="mt-4 space-y-5">
          {options.map((opt) => (
            <label
              key={opt.value}
              className={`flex gap-4 items-start py-5 px-4 border border-[#E5e7eb] shadow-md rounded-[10px] cursor-pointer transition-colors duration-200
                ${
                  state.onboard === opt.value
                    ? "bg-blue-400 text-white border-blue-500"
                    : "bg-white hover:bg-blue-100"
                }
              `}
            >
              <input
                type="radio"
                className="w-6 h-6 mt-1"
                name="onboard"
                value={opt.value}
                checked={state.onboard === opt.value}
                onChange={handleChange}
              />
              <div>
                <p className="font-semibold tracking-tight">{opt.title}</p>
                <p className="text-sm">{opt.description}</p>
              </div>
            </label>
          ))}
        </div>

        <Button className="w-full mt-5" type="submit">
          Proceed
        </Button>
      </form>
    </section>
  );
};

export default OnboardOne;
