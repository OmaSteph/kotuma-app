import type { ServiceType, BookingFormData, AppointmentData } from "../../pages/Booking";
import clsx from "clsx";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Button } from "@components/components/ui/button";
import BookingForm from "./BookingForm";
import PaymentConfirm from "./PaymentConfirm";
import { useNavigate } from "react-router-dom";

interface BookingPanelProps {
    selectedService: ServiceType | null;
    currentStep: number;
    setCurrentStep: (step: number) => void;
    formData: BookingFormData;
    onFormDataChange: (data: Partial<BookingFormData>) => void;
    appointmentData: AppointmentData;
    onAppointmentChange: (data: Partial<AppointmentData>) => void;
}

const steps = [
    {label: "Service", key: "service"},
    {label: "Date & Time", key: "date-time"},
    {label: "Details", key: "details"},
    {label: "Confirm", key: "confirm"},
]


const BookingPanel = ({selectedService, currentStep, setCurrentStep, formData, onFormDataChange, appointmentData, onAppointmentChange} : BookingPanelProps) => {
    const navigate = useNavigate();

    // Use appointment data from parent instead of local state
    const selectedDate = appointmentData.selectedDate;
    const selectedTime = appointmentData.selectedTime;
    
    const timeSlots = [
        "09:00AM", "10:00AM", "11:00AM", 
        "02:00PM", "03:00PM", "04:00PM", 
    ];
    
    const isDateDisabled = (date: Date) => {
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        return date < today;
    };
    
     return (
        <section className="bg-[#F5F5F5] p-16 flex-1 flex flex-col font-inter ">
            <header className="flex items-center justify-center mb-10">
                {steps.map((step, index) => (
                    <div key={step.key} className="flex items-center flex-1">
                        <div className={clsx("w-8 h-8 flex items-center justify-center rounded-full",
                            {
                                "text-white bg-kotumablue": (index + 1) <= currentStep,
                                "bg-kotumagrey/40 text-whitebg": (index + 1) > currentStep
                            }
                          )}
                        >
                            {index + 1}
                        </div>
                        {index < 3 && (
                            <hr className={clsx("w-48 h-[2px] flex-1",
                                {
                                    "bg-kotumablue": (index + 1) < currentStep,
                                    "bg-gray-400": (index + 1) >= currentStep
                                }
                            )}
                          />
                        )}
                    </div>
                        
                ))}
            </header>

            {/* Main Content */}
            <div role="main" className="flex-1">
                {currentStep === 1 && (
                    <div className="mb-8">
                            <h3 className="text-2xl font-semibold text-gray-900 mb-2">Select Service</h3>
                            <p className="text-gray-600">Choose your preferred appointment service</p>
                    </div>
                )}
                {currentStep === 2 && (
                    <div className="">
                        <div>
                            <div>
                                <div className="border border-kotumaborders rounded-lg p-6 bg-gray-50 text-center">
                                    <DatePicker
                                        selected={selectedDate}
                                        onChange={(date) => {
                                            onAppointmentChange({ selectedDate: date, selectedTime: '' }); 
                                        }}
                                        filterDate={(date) => !isDateDisabled(date)}
                                        inline
                                        className="w-full"
                                        calendarClassName="!border-none !shadow-none !bg-transparent"
                                        dayClassName={(date) => 
                                            !isDateDisabled(date) 
                                                ? "hover:!bg-kotumablue hover:!text-white cursor-pointer" 
                                                : "text-gray-400 cursor-not-allowed"
                                        }
                                    />
                                </div>
                            </div>
                            
                            {/* Time Slots Section */}
                            <div>
                                <h4 className="text-xl font-bold my-4 text-black">Available Time Slots</h4>
                                {selectedDate ? (
                                    <div>
                                        <p className="text-sm text-gray-600 mb-4">
                                            Showing available times for {selectedDate.toLocaleDateString()}
                                        </p>
                                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
                                            {timeSlots.map((time) => (
                                                <Button
                                                    key={time}
                                                    variant="outline"
                                                    onClick={() => onAppointmentChange({ selectedTime: time })}
                                                    className={clsx(
                                                        "max-w-[115px] p-3 rounded-lg border text-sm font-medium transition-all duration-200 hover:scale-105",
                                                        {
                                                            "bg-kotumablue text-white border-kotumablue shadow-md": selectedTime === time,
                                                            "border-kotumablue hover:border-kotumablue hover:bg-blue-50 text-kotumablue": selectedTime !== time
                                                        }
                                                    )}
                                                >
                                                    {time}
                                                </Button>
                                            ))}
                                        </div>
                                    </div>
                                ) : (
                                    <div className="p-8 text-center border border-dashed border-gray-300 rounded-lg">
                                        <p className="text-gray-500">Please select a date first to see available time slots.</p>
                                    </div>
                                )}
                                
                                {/* Selected Appointment Summary */}
                                {selectedDate && selectedTime && (
                                    <div className="mt-8 p-6  border border-kotumaborders rounded-lg">
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <h5 className="font-semibold text-black">Selected Appointment</h5>
                                                <p className="text-black mt-1">
                                                    📅 {selectedDate.toLocaleDateString('en-US', { 
                                                        weekday: 'long', 
                                                        year: 'numeric', 
                                                        month: 'long', 
                                                        day: 'numeric' 
                                                    })}
                                                </p>
                                                <p className="text-black">
                                                    🕐 {selectedTime}
                                                </p>
                                            </div>
                                            <Button 
                                                onClick={() => setCurrentStep(3)}
                                                className="px-6 py-3 bg-kotumablue hover:bg-kotumablack text-white rounded-lg transition-colors font-medium"
                                            >
                                                Continue 
                                            </Button>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                )}
                
                {currentStep === 3 && (
                    <BookingForm 
                        onContinue={() => setCurrentStep(4)} 
                        stepBack={()=>setCurrentStep(currentStep-1)}
                        formData={formData}
                        onFormDataChange={onFormDataChange}
                    />
                )}
                
                {currentStep === 4 && (
                    <PaymentConfirm 
                        price={selectedService?.price?.toLocaleString() || "0"}
                        onClick={()=> navigate("/dashboard")}
                    />
                )}
            </div>

        </section>
  )
}

export default BookingPanel;
