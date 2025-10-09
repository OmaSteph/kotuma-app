// Mock data for the Kotuma app demo

// Import expert images
import ImgKabiruBello from '@assets/expert-images/kabiru-bello.png'
import ImgKwameMensah from '@assets/expert-images/kwame-mensah.png'
import ImgChineduOkafor from '@assets/expert-images/chinedu-okafor.png'
import ImgNandiKhumalo from '@assets/expert-images/nandi-khumalo.png'
import ImgKiptooCheruiyot from '@assets/expert-images/kiptoo-cheruiyot.png'
import ImgAmaBoateng from '@assets/expert-images/ama-boateng.png'
import ImgChiamakaNwosu from '@assets/expert-images/chiamaka-nwosu.png'
import ImgAishaBello from '@assets/expert-images/aisha-bello.png'
import ImgZainabOladuni from '@assets/expert-images/zainab-oladuni.png'

export interface Lawyer {
  id: string;
  name: string;
  title: string;
  specialization: string[];
  rating: number;
  reviewCount: number;
  hourlyRate: number;
  location: string;
  avatar: string;
  bio: string;
  experience: number;
  languages: string[];
  availability: 'available' | 'busy' | 'offline';
}

export interface Case {
  id: string;
  title: string;
  description: string;
  status: 'pending' | 'in_progress' | 'completed' | 'cancelled';
  type: string;
  clientId: string;
  lawyerId: string;
  lawyerName: string;
  clientName: string;
  createdAt: string;
  updatedAt: string;
  nextAppointment?: string;
  documents: string[];
}

export interface Appointment {
  id: string;
  clientId: string;
  lawyerId: string;
  clientName: string;
  lawyerName: string;
  date: string;
  time: string;
  type: 'consultation' | 'follow-up' | 'case-review';
  status: 'scheduled' | 'completed' | 'cancelled';
  notes?: string;
}

// Mock Lawyers Data - Updated with expert images and expanded list
export const MOCK_LAWYERS: Lawyer[] = [
  {
    id: '1',
    name: 'Barrister Michael Atansuyi',
    title: 'Senior Partner',
    specialization: ['Corporate Law', 'Employment Law', 'Contract Law'],
    rating: 4.8,
    reviewCount: 127,
    hourlyRate: 15000,
    location: 'Lagos, Nigeria',
    avatar: ImgKabiruBello,
    bio: 'Experienced corporate lawyer with over 15 years in employment and contract law.',
    experience: 15,
    languages: ['English', 'Yoruba', 'French'],
    availability: 'available'
  },
  {
    id: '2',
    name: 'Barrister Sarah Adeyemi',
    title: 'Managing Partner',
    specialization: ['Criminal Law', 'Family Law', 'Immigration Law'],
    rating: 4.9,
    reviewCount: 203,
    hourlyRate: 18000,
    location: 'Abuja, Nigeria',
    avatar: ImgKwameMensah,
    bio: 'Specialized in criminal defense and family law with a track record of successful cases.',
    experience: 12,
    languages: ['English', 'Hausa'],
    availability: 'available'
  },
  {
    id: '3',
    name: 'Barrister James Coleman',
    title: 'Associate Partner',
    specialization: ['Real Estate Law', 'Property Law', 'Commercial Law'],
    rating: 4.7,
    reviewCount: 89,
    hourlyRate: 12000,
    location: 'Port Harcourt, Nigeria',
    avatar: ImgChineduOkafor,
    bio: 'Expert in real estate transactions and commercial law matters.',
    experience: 8,
    languages: ['English', 'Igbo'],
    availability: 'busy'
  },
  {
    id: '4',
    name: 'Nandi Khumalo',
    title: 'Senior Advocate',
    specialization: ['Civil Litigation', 'Constitutional Law', 'Corporate Law'],
    rating: 4.6,
    reviewCount: 156,
    hourlyRate: 14000,
    location: 'Zulu, South Africa',
    avatar: ImgNandiKhumalo,
    bio: 'Specializes in civil litigation and constitutional law with extensive courtroom experience.',
    experience: 10,
    languages: ['English', 'Zulu', 'Afrikaans'],
    availability: 'available'
  },
  {
    id: '5',
    name: 'Barrister Amina Hassan',
    title: 'Partner',
    specialization: ['Intellectual Property', 'Technology Law', 'Media Law'],
    rating: 4.8,
    reviewCount: 94,
    hourlyRate: 16000,
    location: 'Kano, Nigeria',
    avatar: ImgKiptooCheruiyot,
    bio: 'Leading expert in intellectual property and technology law.',
    experience: 11,
    languages: ['English', 'Hausa', 'French'],
    availability: 'available'
  },
  {
    id: '6',
    name: 'Barrister Hayden Babatunde',
    title: 'Senior Associate',
    specialization: ['Tax Law', 'Banking Law', 'Securities Law'],
    rating: 4.6,
    reviewCount: 156,
    hourlyRate: 14000,
    location: 'Lagos, Nigeria',
    avatar: ImgAmaBoateng,
    bio: 'Specializes in tax and banking law with extensive experience in financial regulations.',
    experience: 10,
    languages: ['English', 'Yoruba'],
    availability: 'available'
  },
  {
    id: '7',
    name: 'Chiamaka Nwosu',
    title: 'Entertainment Law Specialist',
    specialization: ['Entertainment Law', 'Intellectual Property', 'Media Law'],
    rating: 4.7,
    reviewCount: 112,
    hourlyRate: 13500,
    location: 'Lagos, Nigeria',
    avatar: ImgChiamakaNwosu,
    bio: 'Specialized in entertainment and media law with focus on IP protection.',
    experience: 9,
    languages: ['English', 'Igbo'],
    availability: 'busy'
  },
  {
    id: '8',
    name: 'Aisha Bello',
    title: 'Tax Law Partner',
    specialization: ['Tax Law', 'Corporate Tax', 'International Tax'],
    rating: 4.8,
    reviewCount: 134,
    hourlyRate: 15500,
    location: 'Abuja, Nigeria',
    avatar: ImgAishaBello,
    bio: 'Expert in tax law with extensive experience in corporate and international taxation.',
    experience: 13,
    languages: ['English', 'Hausa', 'Arabic'],
    availability: 'available'
  },
  {
    id: '9',
    name: 'Zainab Oladuni',
    title: 'Human Rights Advocate',
    specialization: ['Human Rights Law', 'Public Interest Law', 'Constitutional Law'],
    rating: 4.9,
    reviewCount: 167,
    hourlyRate: 14500,
    location: 'Lagos, Nigeria',
    avatar: ImgZainabOladuni,
    bio: 'Passionate human rights advocate with focus on public interest litigation.',
    experience: 12,
    languages: ['English', 'Yoruba', 'French'],
    availability: 'available'
  }
];

// Mock Cases Data
export const MOCK_CASES: Case[] = [
  {
    id: '1',
    title: 'Employment Law - Wrongful Termination',
    description: 'Client was terminated from marketing manager position after reporting discriminatory hiring practices to HR.',
    status: 'in_progress',
    type: 'Employment Law',
    clientId: '1',
    lawyerId: '1',
    lawyerName: 'Barrister Michael Atansuyi',
    clientName: 'Josephine Obong',
    createdAt: '2025-01-05T10:00:00Z',
    updatedAt: '2025-01-08T14:30:00Z',
    nextAppointment: '2025-01-15T14:00:00Z',
    documents: ['termination_letter.pdf', 'email_evidence.pdf', 'hr_complaint.pdf']
  },
  {
    id: '2',
    title: 'Contract Dispute - Vendor Agreement',
    description: 'Dispute over breach of contract terms with software vendor.',
    status: 'pending',
    type: 'Contract Law',
    clientId: '1',
    lawyerId: '1',
    lawyerName: 'Barrister Michael Atansuyi',
    clientName: 'Josephine Obong',
    createdAt: '2025-01-03T09:00:00Z',
    updatedAt: '2025-01-08T11:00:00Z',
    documents: ['contract_agreement.pdf', 'breach_notice.pdf']
  }
];

export const MOCK_APPOINTMENTS: Appointment[] = [
  {
    id: '1',
    clientId: '1',
    lawyerId: '1',
    clientName: 'Josephine Obong',
    lawyerName: 'Barrister Michael Atansuyi',
    date: '2025-01-15',
    time: '14:00',
    type: 'consultation',
    status: 'scheduled',
    notes: 'Initial consultation for employment law case'
  },
  {
    id: '2',
    clientId: '1',
    lawyerId: '2',
    clientName: 'Josephine Obong',
    lawyerName: 'Barrister James Coleman',
    date: '2025-01-18',
    time: '16:00',
    type: 'consultation',
    status: 'scheduled',
    notes: 'Property law consultation'
  },
  {
    id: '3',
    clientId: '1',
    lawyerId: '4',
    clientName: 'Josephine Obong',
    lawyerName: 'Barrister Hayden Babatunde',
    date: '2025-01-20',
    time: '10:00',
    type: 'consultation',
    status: 'scheduled',
    notes: 'Tax law consultation'
  }
];

export class MockApiService {
  private delay(ms: number = 800): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async getLawyers(): Promise<Lawyer[]> {
    await this.delay(1000);
    return [...MOCK_LAWYERS];
  }

  async getLawyer(id: string): Promise<Lawyer | null> {
    await this.delay(600);
    return MOCK_LAWYERS.find(lawyer => lawyer.id === id) || null;
  }

  async getCases(userId: string): Promise<Case[]> {
    await this.delay(800);
    return MOCK_CASES.filter(case_ => 
      case_.clientId === userId || case_.lawyerId === userId
    );
  }

  async getAppointments(userId: string): Promise<Appointment[]> {
    await this.delay(700);
    return MOCK_APPOINTMENTS.filter(appointment => 
      appointment.clientId === userId || appointment.lawyerId === userId
    );
  }

  async bookAppointment(appointmentData: Partial<Appointment>): Promise<{ success: boolean; appointment?: Appointment; message?: string }> {
    await this.delay(1200);
    
    const newAppointment: Appointment = {
      id: Date.now().toString(),
      clientId: appointmentData.clientId || '',
      lawyerId: appointmentData.lawyerId || '',
      clientName: appointmentData.clientName || '',
      lawyerName: appointmentData.lawyerName || '',
      date: appointmentData.date || '',
      time: appointmentData.time || '',
      type: appointmentData.type || 'consultation',
      status: 'scheduled',
      notes: appointmentData.notes
    };

    MOCK_APPOINTMENTS.push(newAppointment);
    
    return { 
      success: true, 
      appointment: newAppointment,
      message: 'Appointment booked successfully!' 
    };
  }

  async createCase(caseData: Partial<Case>): Promise<{ success: boolean; case?: Case; message?: string }> {
    await this.delay(1000);
    
    const newCase: Case = {
      id: Date.now().toString(),
      title: caseData.title || '',
      description: caseData.description || '',
      status: 'pending',
      type: caseData.type || '',
      clientId: caseData.clientId || '',
      lawyerId: caseData.lawyerId || '',
      lawyerName: caseData.lawyerName || '',
      clientName: caseData.clientName || '',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      documents: []
    };

    MOCK_CASES.push(newCase);
    
    return { 
      success: true, 
      case: newCase,
      message: 'Case created successfully!' 
    };
  }
}

export const mockApi = new MockApiService();