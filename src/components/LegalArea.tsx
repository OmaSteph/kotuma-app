import airplaneIcon from "@assets/AirplaneTakeoff.svg";
import familyIcon from "@assets/familyIcon.svg";
import filmSlateIcon from "@assets/FilmSlate.svg";
import criminalIcon from "@assets/criminalIcon.svg";
import toolBoxIcon from "@assets/Toolbox.svg";
import cityIcon from "@assets/City.svg";

const LegalArea = () => {

    const legalAreas = [
        {
            title: "Immigration Law",
            image: airplaneIcon
        },
        {
            title: "Family Law",
            image: familyIcon,
        },
        {
            title: "Entertainment Law",
            image: filmSlateIcon,
        },
        {
            title: "Criminal Law",
            image: criminalIcon,
        },
        {
            title: "Corporate Law",
            image: toolBoxIcon,
        },
        {
            title: "Real Estate Law",
            image: cityIcon,
        },
    ]

  return (
    <section aria-label="Legal Area" className="container bg-darkbluebg py-16">
      <header className="text-center px-8 text-kotumapink">
        <h2 className="lg:text-[44px] text-4xl font-bold" >Our Legal Areas</h2>
        <p className="text-[#C6C6C6] mt-4 max-w-xl mx-auto">
          We focus on assisting individuals and organizations thrive in our
          ever-changing technological and digital-driven . We focus on assisting
          individuals and organizations thrive in our ever-changing
          technological
        </p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 gap-y-12 px-8 py-16 max-w-6xl mx-auto items-center justify-items-center text-kotumapink">
        {legalAreas.map((item, index) => (
            <figure key={index} className="flex flex-col items-center gap-2 ">
                <img src={item.image} alt={item.title} className="w-12 h-12 object-contain" />
                <figcaption className="md:text-2xl text-xl">{item.title}</figcaption>
            </figure>
        ))}
      </div>

      
    </section>
  );
};

export default LegalArea;
