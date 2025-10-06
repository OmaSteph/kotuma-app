import { useState } from "react";
import BookingPanel from "@components/booking/BookingPanel"
import Consultation from "@components/booking/ConsultationPanel"

export interface ServiceType {
  title: string;
  service: string;
  price: number;
  id: number;
}

export interface BookingFormData {
  fullName: string;
  phoneNumber: string;
  purpose: string;
  caseDetails: string;
  documents: File | null;
}

export interface AppointmentData {
  selectedDate: Date | null;
  selectedTime: string;
}

const Booking = () => {
  const [selectedService, setSelectedService] = useState<ServiceType | null>(null);
  const [currentStep, setCurrentStep] = useState(1);
  
  // Form data state
  const [formData, setFormData] = useState<BookingFormData>({
    fullName: '',
    phoneNumber: '',
    purpose: '',
    caseDetails: '',
    documents: null
  });
  
  // Appointment data state
  const [appointmentData, setAppointmentData] = useState<AppointmentData>({
    selectedDate: null,
    selectedTime: ''
  });

  const handleServiceSelect = (service: ServiceType) => {
    setSelectedService(service);
    setCurrentStep(2); // Move to next step after service selection
  };

  // Simple form data handler
  const handleFormDataChange = (newFormData: Partial<BookingFormData>) => {
    setFormData(prev => ({ ...prev, ...newFormData }));
  };

  // Simple appointment data handler
  const handleAppointmentChange = (newAppointmentData: Partial<AppointmentData>) => {
    setAppointmentData(prev => ({ ...prev, ...newAppointmentData }));
  };

  return (
    <section className="container px-8 flex">
      <Consultation 
        selectedService={selectedService}
        onServiceSelect={handleServiceSelect}
      />
      <BookingPanel 
        selectedService={selectedService}
        currentStep={currentStep}
        setCurrentStep={setCurrentStep}
        formData={formData}
        onFormDataChange={handleFormDataChange}
        appointmentData={appointmentData}
        onAppointmentChange={handleAppointmentChange}
      />
    </section>
  )
}

export default Booking
