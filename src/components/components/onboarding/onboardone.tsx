import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useOnboarding } from "@components/components/onboarding/onboarding-context";

type Choice = "legal-help" | "returning" | "lawyer" | "";

const OnboardOne = () => {
  const navigate = useNavigate();
  const { setPathway } = useOnboarding();
  const [onboard, setOnboard] = useState<Choice>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value as Choice;
    setOnboard(val);
    setPathway(val === "lawyer" ? "lawyer" : "client");
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (onboard === "lawyer") navigate("/onboarding/onboardlawyers");
    else if (onboard === "legal-help") navigate("/onboarding/onboardclients/basic-info");
    else if (onboard === "returning") navigate("/onboarding/onboardclients/login");
  };

  const box = (active: boolean) =>
    `flex gap-4 items-start py-5 px-4 border border-[#E5e7eb] shadow-md rounded-[10px] ${
      active ? "bg-blue-400/20" : "hover:bg-blue-400/10"
    }`;

  return (
    <section className="flex justify-center align-items items-center min-h-[60vh] px-4 m-4">
      <form>
        <h3 className="font-semibold text-[2rem] tracking-tighter text-gray-800">
          How can we help you?
        </h3>
        <p className="font-medium text-[#9da4ae] tracking-tighter">
          Choose the options that best describes what you're looking for
        </p>

        <div className="mt-2.5 space-y-5">
          <label className={box(onboard === "legal-help")}>
            <input
              type="radio"
              className="w-6 h-6 mt-1"
              name="onboard"
              value="legal-help"
              checked={onboard === "legal-help"}
              onChange={handleChange}
            />
            <div>
              <p className="font-semibold tracking-tight text-gray-800">
                I am new and need legal help
              </p>
              <p>Connect with qualified lawyers who can help you with your legal matter</p>
            </div>
          </label>

          <label className={box(onboard === "returning")}>
            <input
              type="radio"
              className="w-6 h-6 mt-1"
              name="onboard"
              value="returning"
              checked={onboard === "returning"}
              onChange={handleChange}
            />
            <div>
              <p className="font-semibold tracking-tight text-gray-800">
                I'm a returning client
              </p>
              <p>Sign in to access your account with new legal matters</p>
            </div>
          </label>

          <label className={box(onboard === "lawyer")}>
            <input
              type="radio"
              className="w-6 h-6 mt-1"
              name="onboard"
              value="lawyer"
              checked={onboard === "lawyer"}
              onChange={handleChange}
            />
            <div>
              <p className="font-semibold tracking-tight text-gray-800">I'm a lawyer</p>
              <p>Join our network and connect with clients who need your expertise</p>
            </div>
          </label>
        </div>

        <Button className="w-full mt-5" onClick={handleSubmit} disabled={!onboard}>
          Proceed
        </Button>
      </form>
    </section>
  );
};

export default OnboardOne;
