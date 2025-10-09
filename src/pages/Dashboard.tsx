import { useAuth } from '../contexts/AuthContext';
import ClientDashboard from './ClientDashboard';
import LawyerDashboard from './LawyerDashboard';

export default function Dashboard() {
  const { user } = useAuth();

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#03156B]"></div>
      </div>
    );
  }

  // Route to appropriate dashboard based on user role
  return user.role === 'lawyer' ? <LawyerDashboard /> : <ClientDashboard />;
}
