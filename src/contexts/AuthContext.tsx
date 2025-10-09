import React, { createContext, useContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';

export interface User {
  id: string;
  email: string;
  name: string;
  role: 'client' | 'lawyer';
  avatar?: string;
  phone?: string;
  location?: string;
  
  // Client-specific data
  legalNeeds?: {
    category: string;
    description: string;
    timeline: string;
    hasProceedings: string;
  };
  preferences?: {
    communication: string;
    budget: string;
    language: string;
  };
  
  // Lawyer-specific data
  employmentStatus?: string;
  legalExpertise?: {
    language: string;
    serviceMethod: string;
    practiceAreas: { area: string; years: string }[];
    bio: string;
  };
}

export interface AuthContextType {
  user: User | null;
  login: (email: string, password: string, role?: 'client' | 'lawyer') => Promise<{ success: boolean; message?: string }>;
  logout: () => void;
  register: (userData: Partial<User> & { password: string }) => Promise<{ success: boolean; message?: string }>;
  isAuthenticated: boolean;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Mock user data for demo
const MOCK_USERS: (User & { password: string })[] = [
  {
    id: '1',
    email: 'client@example.com',
    password: 'password123',
    name: 'Josephine Obong',
    role: 'client',
    phone: '+234 901 234 5678',
    location: 'Lagos, Nigeria'
  },
  {
    id: '2',
    email: 'lawyer@example.com',
    password: 'password123',
    name: 'Barrister Sarah Adeyemi',
    role: 'lawyer',
    phone: '+234 802 345 6789',
    location: 'Abuja, Nigeria'
  }
];

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check for existing session on mount
    const checkExistingSession = () => {
      try {
        const userData = localStorage.getItem('kotuma_user');
        if (userData) {
          const parsedUser = JSON.parse(userData);
          setUser(parsedUser);
        }
      } catch (error) {
        console.error('Error parsing stored user data:', error);
        localStorage.removeItem('kotuma_user');
      } finally {
        setIsLoading(false);
      }
    };

    checkExistingSession();
  }, []);

  const login = async (email: string, password: string, role?: 'client' | 'lawyer'): Promise<{ success: boolean; message?: string }> => {
    setIsLoading(true);
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    try {
      const foundUser = MOCK_USERS.find(u => 
        u.email.toLowerCase() === email.toLowerCase() && 
        u.password === password &&
        (role ? u.role === role : true)
      );

      if (foundUser) {
        const { password: _, ...userWithoutPassword } = foundUser;
        setUser(userWithoutPassword);
        localStorage.setItem('kotuma_user', JSON.stringify(userWithoutPassword));
        localStorage.setItem('kotuma_token', `mock_token_${Date.now()}`);
        
        setIsLoading(false);
        return { success: true };
      } else {
        setIsLoading(false);
        return { success: false, message: 'Invalid credentials or role mismatch' };
      }
    } catch (error) {
      setIsLoading(false);
      return { success: false, message: 'Login failed. Please try again.' };
    }
  };

  const register = async (userData: Partial<User> & { password: string }): Promise<{ success: boolean; message?: string }> => {
    setIsLoading(true);
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1200));

    try {
      // Check if user already exists
      const existingUser = MOCK_USERS.find(u => u.email.toLowerCase() === userData.email?.toLowerCase());
      if (existingUser) {
        setIsLoading(false);
        return { success: false, message: 'User with this email already exists' };
      }

      // Create new user with all collected data
      const newUser: User = {
        id: Date.now().toString(),
        email: userData.email || '',
        name: userData.name || '',
        role: userData.role || 'client',
        phone: userData.phone,
        location: userData.location,
        // Client-specific data
        legalNeeds: userData.legalNeeds,
        preferences: userData.preferences,
        // Lawyer-specific data
        employmentStatus: userData.employmentStatus,
        legalExpertise: userData.legalExpertise
      };

      // Add to mock users (for this session)
      MOCK_USERS.push({ ...newUser, password: userData.password });

      setUser(newUser);
      localStorage.setItem('kotuma_user', JSON.stringify(newUser));
      localStorage.setItem('kotuma_token', `mock_token_${Date.now()}`);
      
      setIsLoading(false);
      return { success: true };
    } catch (error) {
      setIsLoading(false);
      return { success: false, message: 'Registration failed. Please try again.' };
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('kotuma_user');
    localStorage.removeItem('kotuma_token');
  };

  const value: AuthContextType = {
    user,
    login,
    logout,
    register,
    isAuthenticated: !!user,
    isLoading
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};