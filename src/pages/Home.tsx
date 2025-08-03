import Benefits from "@components/Benefit";
import BrandSection from "@components/BrandSection";
import GetStarted from "@components/GetStarted";
import HeroSection from "@components/HeroSection"
import HowItWorks from "@components/HowItWorks";
import LegalArea from "@components/LegalArea";
import Secured from "@components/Secured";
import Subscribe from "@components/Subscribe";
import Testimonials from "@components/Testimonials";

const Home = () => {
  return (
    <>
      {/* <h1>Home Page</h1> */}
      <HeroSection/>
      <BrandSection/>
      <LegalArea/>
      <Benefits/>
      <GetStarted/>
      <HowItWorks/>
      <Testimonials/>
      <Secured/>
      <Subscribe/>
      
    </>
  );
}

export default Home;