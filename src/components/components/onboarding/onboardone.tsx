import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
const OnboardOne = () => {
  const navigate = useNavigate();
  const [state, setState] = useState({ onboard: "" });

  const handleChange = (e) => {
    setState({ onboard: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/onboarding/onboardclients");
  };
  return (
    <section className="flex justify-center items-center min-h-[60vh]">
      <form>
        <h3 className="font-semibold text-[2rem] tracking-tighter text-gray-800">
          How can we help you?
        </h3>
        <p className="font-medium text-[#9da4ae] tracking-tighter">
          {" "}
          Choose the options that best describes what you're looking for
        </p>
        {/* radio button begins */}
        <div className="mt-2.5 space-y-5">
          {/*radio 1  */}
          <div className="flex gap-4 items-start py-5 px-4 border border-[#E5e7eb] shadow-md rounded-[10px] hover:bg-blue-400 ">
            <input
              type="radio"
              className="w-6 h-6 mt-1"
              name="onboard"
              value="legal-help"
              onChange={handleChange}
            />
            <div>
              <p className="font-semibold tracking-tight text-gray-800">
                {" "}
                I am new and need legal help
              </p>
              <p>
                {" "}
                Connect with qualified lawyers who can help you with your legal
                matter
              </p>
            </div>
          </div>
          {/* radio 2 */}
          <div className="flex gap-4 items-start py-5 px-4 border border-[#E5e7eb] shadow-md rounded-[10px] hover:bg-blue-400">
            <input
              type="radio"
              className="w-6 h-6 mt-1"
              name="onboard"
              value={"returning"}
              onChange={handleChange}
            />
            <div>
              <p className="font-semibold tracking-tight text-gray-800">
                {" "}
                I'm a returning clients
              </p>
              <p> Sign in to access your account with new legal matters</p>
            </div>
          </div>
          {/*radio 3  */}
          <div className="flex gap-4 items-start py-5 px-4 border border-[#E5e7eb] shadow-md rounded-[10px] hover:bg-blue-400">
            <input
              type="radio"
              className="w-6 h-6 mt-1"
              name="onboard"
              value="lawyer"
              onChange={handleChange}
            />
            <div>
              <p className="font-semibold tracking-tight text-gray-800">
                {" "}
                I'm a lawyer
              </p>
              <p>
                {" "}
                Join our network and connect with clients who need your
                expertise
              </p>
            </div>
          </div>
        </div>
        <Button className="w-full mt-5" onClick={handleSubmit}>
          {" "}
          Proceed
        </Button>
      </form>
    </section>
  );
};

export default OnboardOne;
