import { useState } from "react";
import { Label } from "@components/components/ui/label";
import { Input } from "@components/components/ui/input";
import { Button } from "@components/components/ui/button";
import type { BookingFormData } from "@pages/Booking";

interface BookingFormProps {
    stepBack: () => void;
    onContinue: () => void;
    formData: BookingFormData;
    onFormDataChange: (data: Partial<BookingFormData>) => void;
}

const BookingForm = ({stepBack, onContinue, formData, onFormDataChange} : BookingFormProps) =>{
    const [errors, setErrors] = useState<{[key: string]: string}>({});

    // Simple validation function
    const validateForm = () => {
        const newErrors: {[key: string]: string} = {};
        
        if (!formData.fullName.trim()) {
            newErrors.fullName = "Full name is required";
        }
        if (!formData.phoneNumber.trim()) {
            newErrors.phoneNumber = "Phone number is required";
        }
        if (!formData.purpose.trim()) {
            newErrors.purpose = "Purpose of consultation is required";
        }
        
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (validateForm()) {
            onContinue();
        }
    };

    const handleInputChange = (field: keyof BookingFormData, value: string | File | null) => {
        onFormDataChange({ [field]: value });
        // Clear error when user starts typing
        if (errors[field]) {
            setErrors(prev => ({ ...prev, [field]: '' }));
        }
    };
    return (
        <section className="text-black font-inter">
            <h2 className="font-bold text-[20px] mb-6">Your Information</h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-6 [&_input]:border-kotumablue [&_input]:shadow-none">
                <div className="flex justify-between gap-4 items-start">
                    <div className="flex-1 flex flex-col gap-2">
                        <Label htmlFor="fullname">Full Name*</Label>
                        <Input 
                            type="text" 
                            id="fullname" 
                            value={formData.fullName}
                            onChange={(e) => handleInputChange('fullName', e.target.value)}
                            className={errors.fullName ? 'border-red-500' : ''}
                        />
                        {errors.fullName && (
                            <span className="text-red-500 text-sm">{errors.fullName}</span>
                        )}
                    </div>
                    <div className="flex-1 flex flex-col gap-2">
                        <Label htmlFor="phoneNumber">Phone number*</Label>
                        <Input 
                            type="text" 
                            id="phoneNumber" 
                            value={formData.phoneNumber}
                            onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
                            className={errors.phoneNumber ? 'border-red-500' : ''}
                        />
                        {errors.phoneNumber && (
                            <span className="text-red-500 text-sm">{errors.phoneNumber}</span>
                        )}
                    </div>
                </div>
                <div className="flex-1 flex flex-col gap-2">
                    <Label htmlFor="purpose">Purpose of Consultation*</Label>
                    <Input 
                        type="text" 
                        id="purpose" 
                        value={formData.purpose}
                        onChange={(e) => handleInputChange('purpose', e.target.value)}
                        className={errors.purpose ? 'border-red-500' : ''}
                    />
                    {errors.purpose && (
                        <span className="text-red-500 text-sm">{errors.purpose}</span>
                    )}
                </div>
                <div className="flex-1 flex flex-col gap-2">
                    <Label htmlFor="caseDetails">Case details (Optional)</Label>
                    <Input 
                        type="text" 
                        id="caseDetails" 
                        value={formData.caseDetails}
                        onChange={(e) => handleInputChange('caseDetails', e.target.value)}
                    />
                </div>
                <div className="flex-1 flex flex-col gap-2">
                    <Label htmlFor="upload">Upload documents (Optional)</Label>
                    <Input 
                        type="file" 
                        id="upload" 
                        onChange={(e) => handleInputChange('documents', e.target.files?.[0] || null)}
                        className="border-dashed" 
                    />
                </div>
            </form>

            <h2 className="font-bold text-[20px] my-6">Payment Method</h2>

            <div className="flex gap-4">
                <Button
                    type="button"
                    variant="outline"
                    onClick={stepBack}
                    className="px-6 py-3 border-kotumablue hover:bg-kotumablue rounded hover:text-white transition-colors font-medium"
                >
                    Back 
                </Button>
                <Button 
                    type="button"
                    onClick={handleSubmit}
                    className="px-6 py-3 bg-kotumablue hover:!bg-kotumablack text-white rounded-lg transition-colors font-medium"
                >
                    Continue 
                </Button>
            </div>
        </section>
        
    )
}

export default BookingForm;