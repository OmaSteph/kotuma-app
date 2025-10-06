import Avatar from "../../assets/lawyer.png";
import type { ServiceType } from "../../pages/Booking";
import clsx from "clsx";

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

  return (
    <aside className="bg-darkbluebg p-16 flex flex-col gap-20 rounded ">
        <div className="flex flex-col gap-8">
            <div className="w-[152px] h-[152px] rounded-full overflow-hidden">
                <img src={Avatar} className="w-full h-full object-cover" alt="" />
            </div>
            <div className="text-white">
                <h4 className="font-bold text-4xl">Anna Boateng</h4>
                <p>Legal Consultant</p>
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
