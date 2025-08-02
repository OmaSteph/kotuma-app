import img1 from "@assets/process-img-1.jpg";
import img2 from "@assets/process-img-2.jpg";
import img3 from "@assets/process-img-3.jpg";
import img4 from "@assets/process-img-4.jpg";
import { Button } from "./components/ui/button";


const HowItWorks = () => {
    return (
        <section aria-label="How it works" className="container px-8 pt-16 lg:pl-16 lg:px-16">
                <div className="flex flex-col items-center gap-16 lg:flex-row ">
                    <header className="flex-1 w-full max-w-[498px] shrink-1 lg:self-start text-kotumablack text-center lg:text-left">
                        <h2 className="md:text-[44px] text-4xl leading-[1.2] font-bold">Your Legal Journey, Simplified!</h2>
                        <p className="my-4 text-kotumagrey text-4xl">
                            From Legal Questions to Real Solutions
                        </p>
                    </header>
                    <div className="lg:flex-1 grid grid-cols-1 md:grid-cols-2 gap-6 gap-y-10 md:w-[664px] w-full justify-items-center">
                        <article className="relative w-full max-w-[315px] pl-10 md:pl-0 border-l md:border-l-0 md:border-t md:pt-6" >

                            <div className="absolute -left-4 md:left-0 md:-top-4 bg-kotumablue text-kotumapink  w-8 h-8 rounded-full flex items-center justify-center">01</div>
                            {/* <div className="hidden md:block w-[2px] h-full bg-kotumablue ml-3"></div> */}
                            <h3 className="text-kotumablack text-2xl font-[500]">Instant Legal Access</h3>
                            <p className="text-sm text-kotumagrey py-2">
                                Experience hassle-free legal support Connect with qualified lawyers instantly. No waiting, just immediate legal guidance.
                            </p>
                            <img src={img1} alt="legal practitioners discussing" className="w-full h-auto object-cover rounded-lg" loading="lazy" />
                        </article>
                        <article className="relative w-full max-w-[315px] pl-10 md:pl-0 border-l md:border-l-0 md:border-t md:pt-6">
                            <div className="absolute -left-4 md:left-0 md:-top-4 bg-whitebg border-1 border-kotumagrey text-kotumagrey w-8 h-8 rounded-full flex items-center justify-center">02</div>
                            <h3 className="text-kotumablack text-2xl">Trusted Connections</h3>
                            <p className="text-sm text-kotumagrey py-2">
                                Your gateway to verified legal assistance Every lawyer is thoroughly vetted. We've done the research for you.
                            </p>
                            <img src={img2} alt="a lawyer and a client" className="w-full h-auto object-cover rounded-lg" loading="lazy" />
                        </article>
                    </div>
                </div>
                <div className="flex flex-col items-center gap-16 lg:flex-row my-16">
                    <div className="lg:flex-1 grid grid-cols-1 md:grid-cols-2 gap-6 gap-y-10 md:w-[664px] w-full justify-items-center">
                        <article className="relative w-full max-w-[315px] pl-10 md:pl-0 border-l md:border-l-0 md:border-t md:pt-6" >

                            <div className="absolute -left-4 md:left-0 md:-top-4 bg-kotumablue text-kotumapink  w-8 h-8 rounded-full flex items-center justify-center">03</div>
                            {/* <div className="hidden md:block w-[2px] h-full bg-kotumablue ml-3"></div> */}
                            <h3 className="text-kotumablack text-2xl font-[500]">Proven Results</h3>
                            <p className="text-sm text-kotumagrey py-2">
                                Verified lawyers and real solutions Experienced attorneys with thousands of successful cases and real outcomes.
                            </p>
                            <img src={img3} alt="legal practitioners discussing" className="w-full h-auto object-cover rounded-lg" loading="lazy" />
                        </article>
                        <article className="relative w-full max-w-[315px] pl-10 md:pl-0 border-l md:border-l-0 md:border-t md:pt-6">
                            <div className="absolute -left-4 md:left-0 md:-top-4 bg-whitebg border-1 border-kotumagrey text-kotumagrey w-8 h-8 rounded-full flex items-center justify-center">04</div>
                            <h3 className="text-kotumablack text-2xl">Affordable Excellence</h3>
                            <p className="text-sm text-kotumagrey py-2 xl:pr-6">
                                Quality legal help within your reach Professional legal services without the premium price tag.
                            </p>
                            <img src={img4} alt="a lawyer and a client" className="w-full h-auto object-cover rounded-lg" loading="lazy" />
                        </article>
                    </div>

                    <header className="flex-1 w-full max-w-[358px] xl:max-w-[458px] shrink-1 lg:self-start text-kotumablack text-center lg:text-left ">
                        <h3 className="text-2xl leading-[1.2] font-bold">Need legal help today?</h3>
                        <p className="my-4 text-kotumagrey text-xl">
                            Connect with verified legal experts across all practice areas.
                        </p>
                        <Button className="bg-kotumablue text-sm px-8 py-6">Book a Lawyer</Button>
                    </header>
                    
                </div>
        </section>
    )
}

export default HowItWorks;