import img1 from "@assets/testimonial-img-1.jpg";
import img2 from "@assets/testimonial-img-2.jpg";
import img3 from "@assets/testimonial-img-3.jpg";
import { Avatar, AvatarImage } from "./components/ui/avatar";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "./components/ui/carousel";


const Testimonials = () => {
    const testimonies = [
        {
            testimony: '“Kotuma made it so easy for me to find a lawyer I could trust. The consultation process was smooth, and I got the legal advice I needed without leaving my home. Highly recommend their platform for anyone seeking quick, professional legal support.”',
            userName: "Grace A.",
            occupation: "Business Owner",
            image: img1,
        },
        {
            testimony: "“I was impressed with how affordable and transparent Kotuma's services are. I compared different lawyers, booked a session, and got clear guidance on my property issue within hours. Excellent experience.”",
            userName: "Emeka O.",
            occupation: "Real Estate Agent",
            image: img2,
        },
        {
            testimony: '“As someone living abroad, Kotuma helped me consult with Nigerian lawyers seamlessly. It saved me time, money, and stress. Their platform is user-friendly and their customer support team is always responsive.”',
            userName: "Ibraheem Rofiat",
            occupation: "Nurse in the Uk",
            image: img3,
        },
        {
            testimony: '“Kotuma made it so easy for me to find a lawyer I could trust. The consultation process was smooth, and I got the legal advice I needed without leaving my home.”',
            userName: "Grace A.",
            occupation: "Business Owner",
            image: img1,
        },
        {
            testimony: "“I was impressed with how affordable and transparent Kotuma's services are. I compared different lawyers, booked a session, and got clear guidance on my property issue within hours. Excellent experience. I was impressed with how affordable and transparent Kotuma's services are. I compared different lawyers, booked a session, and got clear guidance on my property issue within hours. Excellent experience.”",
            userName: "Emeka O.",
            occupation: "Real Estate Agent",
            image: img2,
        },
        {
            testimony: '“As someone living abroad, Kotuma helped me consult with Nigerian lawyers seamlessly. It saved me time, money, and stress. Their platform is user-friendly and their customer support team is always responsive.”',
            userName: "Ibraheem Rofiat",
            occupation: "Nurse in the Uk",
            image: img3,
        }
    ]
    return (

        <section arial-label="what-our-clients-say" className="container bg-darkbluebg p-16 text-kotumapink">
            <h2 className="lg:text-[44px] text-4xl font-bold text-center" >What clients say about us</h2>
            <div className="hidden lg:grid grid-cols-1 lg:grid-cols-3 gap-6 gap-y-12 px-8 py-16 max-w-6xl mx-auto justify-items-center text-kotumapink">
                {testimonies.map((item, index) => (
                    <figure key={index} className="px-6">
                        <blockquote>{item.testimony}</blockquote>
                        <figcaption className="flex items-center gap-4 mt-4">
                            <Avatar>
                                <AvatarImage src={item.image}/>
                            </Avatar>
                            <p className="text-sm font-bold">{item.userName} <span className="block font-normal text-kotumagrey">{item.occupation}</span></p>
                        </figcaption>
                    </figure>
                ))}
            </div>
            <Carousel className="px-8 py-16 max-w-6xl mx-auto lg:hidden">
                <CarouselContent className="max-w-6xl mx-auto">
                    {testimonies.map((item, index) => (
                        <CarouselItem key={index} className="md:basis-1/2 basis-1/1 md:px-6">
                            <blockquote>{item.testimony}</blockquote>
                            <div className="flex items-center gap-4 mt-4">
                                <Avatar>
                                    <AvatarImage src={item.image} alt={`Photo of ${item.userName}`} />
                                </Avatar>
                                <p className="text-sm font-bold">{item.userName} <span className="block font-normal text-kotumagrey">{item.occupation}</span></p>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="md:hidden flex" />
                <CarouselNext className="md:hidden flex" />
            </Carousel>
        </section>
    )
}

export default Testimonials;