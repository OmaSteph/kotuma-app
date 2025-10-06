
import manExplains from "@assets/manexplains.png"
import menDiscuss from "@assets/mendiscuss.png"
import handshake from "@assets/handshake.png"
const WhatWeDo = () => {
    return (
        <section aria-label="What We Do">
            <div className="container flex items-center gap-30 px-5 lg:p-16">
                <div className="grid gap-[62px]">
                    <h1 className="font-inter font-bold text-[44px] leading-14">What We Do</h1>

                    <div className="grid gap-10 max-w-[568px]">
                        <div>
                            <h1 className="font-neue font-bold leading-[24px]">Connect Clients with Verified Lawyers</h1>
                            <p className="font-neue leading-[24px] text-[#828181]">Browse lawyers by legal categories such as real estate, family law, business law, eviction before lease ends, land fraud and more. They are also categorised by state for localized support.</p>
                        </div>
                        <div>
                            <h1 className="font-neue font-bold leading-[24px]">Enable Affordable Legal Consultations</h1>
                            <p className="font-neue leading-[24px] text-[#828181]">Access live, secure consultations with lawyers at transparent prices with no hidden costs.</p>
                        </div>
                        <div>
                            <h1 className="font-neue font-bold leading-[24px]">Support Vulnerable Communities</h1>
                            <p className="font-neue leading-[24px] text-[#828181]">Are you experiencing domestic violence? Nigeria, an abusive partner? Our pro bono section connects survivors of abuse and individuals unable to afford legal fees with lawyers offering free legal support.</p>
                        </div>
                        <div>
                            <h1 className="font-neue font-bold leading-[24px]">Ensure Trust and Quality</h1>
                            <p className="font-neue leading-[24px] text-[#828181]">All lawyers on Kotuma are verified via their Supreme Court Number (SCN) to ensure authenticity, professionalism, and peace of mind.</p>
                        </div>
                        <div>
                            <h1 className="font-neue font-bold leading-[24px]">Promote Appreciation and Goodwill</h1>
                            <p className="font-neue leading-[24px] text-[#828181]">Clients can show gratitude to their lawyers through our 'Tip and Appreciation' feature after services are delivered.</p>
                        </div>
                    </div>
                </div>

                <div className="flex gap-4">
                    <div>
                        <img src={manExplains} alt="Man Explaining" />
                    </div>
                    <div className="grid gap-5.5">
                        <img src={menDiscuss} alt="Men Discussing" />
                        <img src={handshake} alt="Handshake" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default WhatWeDo;