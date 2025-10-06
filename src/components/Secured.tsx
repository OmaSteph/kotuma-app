import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./components/ui/card"
import thumbIcon from "@assets/thumbUp.svg";
import img1 from "@assets/law-item-img-1.jpg";
import img2 from "@assets/process-img-2.jpg";
import img3 from "@assets/law-item-img-2.jpg";

const Secured = () => {

    const securityMeasures = [
        "Advanced Encryption to protect all your personal data and legal discussions. ",
        "Designed to ensure that no unauthorized person can access your session details. ",
        "Verify every lawyer on our platform to maintain a safe environment for all users encryption",
        "Confidentiality fot true legal support."
    ]

    return (
        <section className="container px-8 py-16 lg:p-16">
            <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">
                <Card className="border-0 shadow-none text-kotumablack ">
                    <CardHeader className="p-0">
                        <CardTitle className="md:text-[44px] text-4xl mb-4 leading-[1.2] text-center lg:text-left">You are always protected</CardTitle>
                        <CardDescription className="text-kotumagrey text-base lg:text-left text-center">
                            At Kotuma, your safety and privacy are our top priorities. Every consultation you have on our platform is completely secure and confidential.
                        </CardDescription>
                    </CardHeader>
                    
                    <CardContent className="p-0">
                        <ul>
                            { securityMeasures.map((measure, index) => (
                                <li key={index} className="flex items-center gap-4 mb-4">
                                    <div className="flex flex-none items-center justify-center w-10 h-10 bg-[#1C0F4D] rounded-full">
                                        <img src={thumbIcon} alt="thumb-up-icon" className="object-contain w-4" loading="lazy"/>
                                    </div>
                                    <span className="inline-block text-kotumagrey leading-[1.5]">{measure}</span>
                                </li>
                            ))}
                        </ul>
                    </CardContent>
                </Card>
                <div className="w-full max-w-[652px] grid grid-cols-2 gap-4 h-full">
                    <div className="row-span-2 ">
                        <img src={img1} alt="law-balance-image" className="w-full !h-full object-cover rounded-lg" loading="lazy"  />
                    </div>
                    <div className="">
                        <img src={img2} alt="a-lawyer-and-a-client" className="w-full h-auto object-cover rounded-lg" loading="lazy"  />
                    </div>
                    <div>
                        <img src={img3} alt="law-verdict-stick"  className="w-full h-auto object-cover rounded-lg" loading="lazy" />
                    </div>
                </div>
            </div>
        </section>
     
    )
}

export default Secured;