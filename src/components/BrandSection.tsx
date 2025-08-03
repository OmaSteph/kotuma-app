import kpmgLogo from "../assets/kpmg_logo.svg";
import zenithLogo from "../assets/zenith_logo.svg";
import accessBankLogo from "../assets/access_bank_logo.svg";
import airbnbLogo from "../assets/airbnb_logo.svg";
import qatarLogo from "../assets/qatar_logo.svg";
import deloitteLogo from "../assets/deloitte_logo.svg";
import { Carousel, CarouselContent, CarouselItem} from "./components/ui/carousel";

const BrandSection = () => {

    const brandImages = [
        kpmgLogo,
        qatarLogo,
        accessBankLogo,
        airbnbLogo,
        zenithLogo,
        deloitteLogo
    ]

    return (
        <section aria-label="Brand Section" className="container py-16 px-4 md:px-20">
            <Carousel>
                <CarouselContent>
                    {brandImages.map((image, index) => (
                        <CarouselItem key={index} className="flex items-center justify-center basis-1/6">
                            <img key={index} src={image} alt={`Brand ${index + 1}`}  />
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </section>
    )

}

export default BrandSection;