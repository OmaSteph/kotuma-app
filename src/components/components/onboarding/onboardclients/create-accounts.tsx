import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../ui/button";
import { Input } from "../../ui/input";
import { Eye, EyeOff } from "lucide-react"; // 👈 icons

const ClientsCreateAccount = () => {
  const navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [showPw, setShowPw] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    if (password.length < 8) {
      setError("Password must be at least 8 characters.");
      return;
    }
    if (password !== confirm) {
      setError("Passwords do not match.");
      return;
    }

    navigate("/dashboard");
  };

  return (
    <div className="w-full max-w-[640px] md:max-w-[600px]">
      <h3 className="text-[#292929] text-[28px] md:text-[32px] font-semibold">
        Create your secure account
      </h3>
      <p className="text-[#98A2B3] text-sm md:text-base font-medium">
        Your account keeps your information safe and lets you communicate with clients securely.
      </p>

      <form onSubmit={handleSubmit} className="space-y-5 mt-6">
        <fieldset className="border border-[#E5E7EB] rounded-2xl p-2 relative">
          <label className="px-2 block text-xs md:text-sm font-medium text-[#667085]">
            Password
          </label>
          <div className="relative">
            <Input
              type={showPw ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border-0 w-full px-3 py-3 h-12 pr-12"
            />
            <button
              type="button"
              onClick={() => setShowPw((s) => !s)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
              aria-label={showPw ? "Hide password" : "Show password"}
            >
              {showPw ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
        </fieldset>

        <fieldset className="border border-[#E5E7EB] rounded-2xl p-2 relative">
          <label className="px-2 block text-xs md:text-sm font-medium text-[#667085]">
            Confirm Password
          </label>
          <div className="relative">
            <Input
              type={showConfirm ? "text" : "password"}
              placeholder="Confirm Password"
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
              className="border-0 w-full px-3 py-3 h-12 pr-12"
            />
            <button
              type="button"
              onClick={() => setShowConfirm((s) => !s)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
              aria-label={showConfirm ? "Hide password" : "Show password"}
            >
              {showConfirm ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
        </fieldset>

        {error && <p className="text-red-600 text-sm px-1">{error}</p>}

        <Button type="submit" className="w-full h-12 text-[15px]">
          Proceed
        </Button>
      </form>
    </div>
  );
};

export default ClientsCreateAccount;
