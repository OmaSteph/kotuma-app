import { Button } from "./components/ui/button";
 
const ChooseKotuma = () => {
    return (
        <section aria-label="Why Choose Kotuma?" className="bg-darkbluebg py-[171px]">
            <div className= "container flex items-center gap-[178px] text-white px-5 lg:p-16">
                <div className="grid gap-3">
                    <h1>Why Choose Kotuma?</h1>
                    <p className="max-w-[508px] font-neue font-normal text-base leading-[24px]">
                        Kotuma offers transparent pricing, trusted verified lawyers, easy booking with live consultations, and pro bono support for those in need - all on a secure, user-friendly platform.
                    </p>
                    <Button className="bg-kotumablue text-sm font-bold font-inter w-[152px] h-[50px]">Get Started</Button>
                </div>

                <div className="grid gap-6">
                    <div className="bg-white grid gap-2 rounded-[20px]">
                        <h1 className="text-kotumablue font-inter font-bold text-5xl leading-[56px] px-10 pt-8">
                            Our Mission
                        </h1>
                        <p className="font-neue leading-[24px] text-[#828181] pb-8 px-10">
                            To make legal services accessible, affordable, and trustworthy for everyone, everywhere.
                        </p>
                    </div>
                    <div className="bg-white grid gap-2 rounded-[20px]">
                        <h1 className="text-kotumablue font-inter font-bold text-5xl leading-[56px] px-10 pt-8">
                            Our Vision
                        </h1>
                        <p className="font-neue leading-[24px] text-[#828181] pb-8 px-10">
                            A world where justice is within everyone's reach
                        </p>
                    </div>
                    <div className="bg-white grid gap-2 rounded-[20px]">
                        <h1 className="text-kotumablue font-inter font-bold text-5xl leading-[56px] px-10 pt-8">
                            Our Values
                        </h1>
                        <p className="font-neue leading-[24px] text-[#828181] pb-8 px-10">
                            Integrity, accessibility, professionalism, compassion, innovation.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ChooseKotuma;