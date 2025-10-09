import type { ServiceType } from "../../pages/Booking";
import clsx from "clsx";
import { MOCK_LAWYERS } from "../../data/mockData";
import type { Lawyer } from "../../data/mockData";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";


const serviceList: ServiceType[] =[
    {
        title: "30-min Consultation",
        service: "Detailed legal advice session",
        price: 15000,
        id: 1
        
    },
    {
        title: "Document Review",
        service: "Contract or agreement analysis",
        price: 10000,
        id: 2
    },
    {
        title: "30-min Consultation",
        service: "Family Law advice",
        price: 20000,
        id: 3
    },
]

interface ConsultationProps {
  selectedService: ServiceType | null;
  onServiceSelect: (service: ServiceType) => void;
}

const Consultation = ({selectedService, onServiceSelect}: ConsultationProps) => {
  const [searchParams] = useSearchParams();
  const [lawyer, setLawyer] = useState<Lawyer | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const lawyerId = searchParams.get('lawyer');
    if (lawyerId) {
      // Find lawyer by ID from mock data
      const foundLawyer = MOCK_LAWYERS.find(l => l.id === lawyerId);
      setLawyer(foundLawyer || null);
    }
    setLoading(false);
  }, [searchParams]);

  if (loading) {
    return (
      <aside className="bg-darkbluebg p-16 flex flex-col gap-20 rounded">
        <div className="flex items-center justify-center text-white">
          <p>Loading lawyer information...</p>
        </div>
      </aside>
    );
  }

  if (!lawyer) {
    return (
      <aside className="bg-darkbluebg p-16 flex flex-col gap-20 rounded">
        <div className="flex items-center justify-center text-white">
          <p>Lawyer not found</p>
        </div>
      </aside>
    );
  }

  return (
    <aside className="bg-darkbluebg p-16 flex flex-col gap-20 rounded ">
        <div className="flex flex-col gap-8">
            <div className="w-[300px] h-[300px] rounded-full overflow-hidden">
                <img src={lawyer.avatar} className="w-full h-full object-cover" alt={lawyer.name} />
            </div>
            <div className="text-white">
                <h4 className="font-bold text-4xl">{lawyer.name}</h4>
                <p>{lawyer.specialization.join(', ')} | {lawyer.experience}+ years</p>
                <p className="text-sm opacity-80">{lawyer.location}</p>
            </div>
      </div>

      <div className="flex flex-col gap-8">
        {serviceList.map((service) => (
            <div 
                key={service.id}
                onClick={() => onServiceSelect(service)}
                className={clsx("max-w-[345px] w-full rounded-xl p-4 cursor-pointer transition-all duration-200", {
                    "bg-whitebg text-kotumablue": selectedService?.id === service.id,
                    "bg-kotumablue hover:bg-whitebg text-whitebg hover:text-kotumablue": selectedService?.id != service.id
    })}
            >
                <h4 className="text-2xl font-bold">{service.title}</h4>
                <p className="text-sm font-medium">{service.service}</p>
                <p className="text-2xl font-bold">₦{service.price.toLocaleString()}</p>
            </div>
        ))}
      </div>


    </aside>
  )
}

export default Consultation;
