
import { Button } from "./components/ui/button";
import businessPeople from "@assets/business-people.png";
import diasporaPeople from "@assets/diaspora-people.png";
import singleParent from "@assets/single-parents.png";
import vulnerableGroups from "@assets/vulnerable-groups.png";

const LegalHelp = () => {

    const LegalHelpAreas = [
        {
            title: "Vulnerable Groups",
            image: vulnerableGroups,
        },
        {
            title: "Business People",
            image: businessPeople,
        },
        {
            title: "Single Parents",
            image: singleParent,
        },
        {
            title: "People in Diaspora",
            image: diasporaPeople,
        },
    ];
    return (
        <section aria-label="Legal Help" className="pt-32">
            <div className="container mx-auto px-5 lg:px-16 grid gap-65">
                <div className="flex justify-between items-center">
                    <h1 className="font-neue font-bold text-[64px] tracking-tighter leading-none max-w-[543px]">Making Legal Help Accessible to All</h1>
                    <div className="max-w-[508px] flex flex-col gap-4">
                        <p className="font-neue font-normal text-[16px] leading-[24px]">
                            At Kotuma, we believe everyone deserves trusted legal support. We connect individuals, businesses, and vulnerable communities with verified lawyers across Africa. Our platform makes legal services easy, safe, and affordable for all.
                        </p>
                        <Button className="bg-kotumablue text-sm font-bold font-inter w-[152px] h-[50px]">Get Started</Button>
                    </div>
                </div>

            <div className="flex items-center justify-items-center mb-9">
                {LegalHelpAreas.map((item, index) => (
                    <div key={index} className="px-10 py-6 border-x-[1px] border-borderwhite">
                        <h2 className="font-medium text-xl leading-9">{item.title}</h2>
                        <img src={item.image} alt={item.title} className="py-6" />
                    </div>
                ))}
            </div>
            </div>
        </section>
    )
}

export default LegalHelp;