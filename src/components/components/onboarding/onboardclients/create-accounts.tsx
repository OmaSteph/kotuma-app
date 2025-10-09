import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../../contexts/AuthContext";
import { useOnboarding } from "../onboarding-context";
import { Button } from "../../ui/button";
import { Input } from "../../ui/input";
import { Eye, EyeOff } from "lucide-react";

const ClientsCreateAccount = () => {
  const navigate = useNavigate();
  const { register, isLoading } = useAuth();
  const { formData, clearFormData } = useOnboarding();

  const [passwordData, setPasswordData] = useState({
    password: "",
    confirmPassword: ""
  });
  const [showPw, setShowPw] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [error, setError] = useState("");

  const handleInputChange = (field: keyof typeof passwordData, value: string) => {
    setPasswordData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    if (passwordData.password.length < 8) {
      setError("Password must be at least 8 characters.");
      return;
    }
    if (passwordData.password !== passwordData.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      const result = await register({
        email: formData.email,
        password: passwordData.password,
        name: formData.fullName,
        role: "client",
        phone: formData.phone,
        location: formData.location,
        legalNeeds: formData.legalCategory ? {
          category: formData.legalCategory,
          description: formData.legalDescription || '',
          timeline: formData.timeline || '',
          hasProceedings: formData.hasProceedings || ''
        } : undefined,
        preferences: formData.preferences
      });
      
      if (result.success) {
        // Clear form data after successful registration
        clearFormData();
        // Redirect new clients to lawyer matching page instead of dashboard
        navigate('/app/lawyer-matching', { replace: true });
      } else {
        setError(result.message || 'Registration failed. Please try again.');
      }
    } catch (error) {
      setError('An unexpected error occurred. Please try again.');
    }
  };

  return (
    <div className="w-full max-w-lg px-4 py-4 sm:px-6 md:px-0">
      <h3 className="text-[#292929] text-xl sm:text-2xl md:text-3xl font-semibold">
        Create your secure account
      </h3>
      <p className="text-[#98A2B3] text-sm md:text-base font-medium">
        Your account keeps your information safe and lets you communicate with lawyers securely.
      </p>

      <form onSubmit={handleSubmit} className="space-y-5 mt-6">
        <fieldset className="border border-gray-200 rounded-2xl p-3">
          <label className="block text-xs sm:text-sm font-medium text-[#667085] mb-1">
            Password
          </label>
          <div className="relative">
            <Input
              type={showPw ? "text" : "password"}
              placeholder="Password"
              value={passwordData.password}
              onChange={(e) => handleInputChange('password', e.target.value)}
              className="w-full h-11 sm:h-12 border-0 px-3 pr-12 focus-visible:ring-0"
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

        <fieldset className="border border-gray-200 rounded-2xl p-3">
          <label className="block text-xs sm:text-sm font-medium text-[#667085] mb-1">
            Confirm Password
          </label>
          <div className="relative">
            <Input
              type={showConfirm ? "text" : "password"}
              placeholder="Confirm Password"
              value={passwordData.confirmPassword}
              onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
              className="w-full h-11 sm:h-12 border-0 px-3 pr-12 focus-visible:ring-0"
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

        <Button 
          type="submit" 
          disabled={isLoading}
          className="w-full h-11 sm:h-12 text-sm sm:text-base bg-[#0A1D5B] hover:bg-[#0A1D5B]/90 text-white font-medium disabled:opacity-50"
        >
          {isLoading ? (
            <>
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
              Creating Account...
            </>
          ) : (
            'Create Account'
          )}
        </Button>
      </form>
    </div>
  );
};

export default ClientsCreateAccount;
