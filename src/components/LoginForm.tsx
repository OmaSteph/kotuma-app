import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { Button } from './components/ui/button';
import { Input } from './components/ui/input';
import { Label } from './components/ui/label';

interface LoginFormProps {
  userType: 'client' | 'lawyer';
}

const LoginForm: React.FC<LoginFormProps> = ({ userType }) => {
  const { login, isLoading } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submitError, setSubmitError] = useState('');

  const handleInputChange = (field: keyof typeof formData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear field error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    if (!formData.password.trim()) {
      newErrors.password = 'Password is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError('');
    
    if (!validateForm()) return;
    
    try {
      const result = await login(formData.email, formData.password, userType);
      
      if (result.success) {
        // Redirect to intended page or dashboard
        const from = location.state?.from?.pathname || '/app/dashboard';
        navigate(from, { replace: true });
      } else {
        setSubmitError(result.message || 'Login failed. Please check your credentials.');
      }
    } catch (error) {
      setSubmitError('An unexpected error occurred. Please try again.');
    }
  };

  return (
    <div className="w-full max-w-lg px-4 py-6 sm:px-6 md:px-0">
      <div className="text-center mb-8">
        <h1 className="text-[#101828] text-2xl sm:text-3xl font-semibold mb-2">
          Welcome Back
        </h1>
        <p className="text-[#98A2B3] text-sm sm:text-base font-medium">
          Sign in to your {userType === 'lawyer' ? 'professional' : ''} account
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Email Field */}
        <fieldset className="rounded-2xl border border-gray-200 p-3">
          <Label htmlFor="email" className="block text-xs sm:text-sm font-medium text-[#667085] px-1 mb-1">
            Email Address
          </Label>
          <Input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) => handleInputChange('email', e.target.value)}
            placeholder="Enter your email"
            className={`h-11 sm:h-12 border-0 focus-visible:ring-0 px-3 ${
              errors.email ? 'bg-red-50' : ''
            }`}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1 px-1">{errors.email}</p>
          )}
        </fieldset>

        {/* Password Field */}
        <fieldset className="rounded-2xl border border-gray-200 p-3">
          <Label htmlFor="password" className="block text-xs sm:text-sm font-medium text-[#667085] px-1 mb-1">
            Password
          </Label>
          <Input
            id="password"
            type="password"
            value={formData.password}
            onChange={(e) => handleInputChange('password', e.target.value)}
            placeholder="Enter your password"
            className={`h-11 sm:h-12 border-0 focus-visible:ring-0 px-3 ${
              errors.password ? 'bg-red-50' : ''
            }`}
          />
          {errors.password && (
            <p className="text-red-500 text-sm mt-1 px-1">{errors.password}</p>
          )}
        </fieldset>

        {/* Submit Error */}
        {submitError && (
          <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-red-600 text-sm">{submitError}</p>
          </div>
        )}

        <Button
          type="submit"
          disabled={isLoading}
          className="w-full h-11 sm:h-12 bg-[#0A1D5B] hover:bg-[#0A1D5B]/90 disabled:opacity-50 disabled:cursor-not-allowed text-white font-medium text-[15px]"
        >
          {isLoading ? (
            <>
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
              Signing In...
            </>
          ) : (
            'Sign In'
          )}
        </Button>
      </form>

      <div className="mt-6 text-center">
        <p className="text-sm text-gray-600">
          Don't have an account?{' '}
          <button 
            onClick={() => navigate('/auth/signup')}
            className="text-[#0A1D5B] font-medium hover:underline"
          >
            Sign up here
          </button>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;