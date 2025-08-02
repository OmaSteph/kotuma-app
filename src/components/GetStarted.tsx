import manImg from "@assets/man-img.png";
import { Button } from "./components/ui/button";


const GetStarted = () => {

  return (
    <section aria-label="Get Started" className="container bg-darkbluebg px-8 py-16 md:px-16">
        <div className="flex flex-col items-center justify-between gap-8 lg:flex-row ">
            <header className="w-full max-w-[556px] mx-auto md:self-start md:px-8 text-kotumapink text-center lg:text-left">
                <h2 className="md:text-[44px] text-4xl leading-[1.2] font-bold">Start your journey to justice with us</h2>
                <p className="my-4 text-kotumagrey">
                    Kotuma connects individuals, businesses, and vulnerable groups with verified lawyers across Africa. We make legal services accessible, affordable, and trustworthy for everyone. Together, we bridge the legal access gap to build a society where justice is truly for all.
                </p>
                <Button className="bg-kotumablue text-sm font-bold">Get Started</Button>
            </header>
            <div className="w-full max-w-[622px]  ">
                <img src={manImg} alt="man-folding-arm"  />
            </div>
        </div>
    </section>
  );
};

export default GetStarted;
