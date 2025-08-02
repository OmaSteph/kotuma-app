import { Button } from "./components/ui/button";
import { TrendingUp } from 'lucide-react';


const HeroSection = () => {

    const achievement = [
        {
            title: "4000+",
            desc: "Successful Clients",
        },
        {
            title: "100+",
            desc: "Experts",
        },
        {
            title: "500+",
            desc: "Satisfied Clients",
        }
    ];

    return (
        <section arial-label="Hero-Section" className="relative container mx-auto px-4 py-16 bg-[url('assets/hero-bcg.webp')] bg-cover bg-center">
             <div className="absolute inset-0 bg-kotumablack/75 z-0" />
            <div className="relative z-10 flex flex-col items-center gap-8  mx-8 md:mb-20 mt-28 text-kotumapink">
                <header className="flex flex-col items-center gap-4 max-w-[698px] text-center">
                    <h2 className=" font-bold md:text-6xl text-5xl leading-[1.2]">Find the right lawyer for your <span className="text-kotumagold">legal</span> needs</h2>
                    <p className="text-2xl text-kotumagrey">
                        Connect with experienced lawyers for consultation and representation. Our platform helps you find legal experts.
                    </p>
                </header>
                
                <div className="flex flex-col sm:flex-row gap-4 items-center" >
                    <Button className="bg-kotumablue" arial-label="Book a Lawyer">Book a Lawyer</Button>
                    <Button variant="outline" className="border-kotuma-blue border-2 bg-transparent" aria-label="Report a Case">Report a Case</Button>
                </div>
            <div className="md:relative md:top-20 flex flex-wrap justify-center gap-8 md:mt-20 mt-10">
                {achievement.map((item, index) => (
                    <div key={index} className="bg-whitebg/5 flex justify-between w-[227px] rounded-sm p-2 backdrop-blur-md" >
                        <div className="flex flex-col">
                            <span className="block text-2xl font-bold">{item.title}</span>
                            <span className="text-xs text-[#767676]">{item.desc}</span>
                        </div>
                        <TrendingUp className="text-kotumagreen" aria-hidden="true" />
                        
                        
                    </div>
                ))}

            </div>
            </div>

        </section>
    )
}

export default HeroSection;