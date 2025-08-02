import thumbIcon from "@assets/thumbUp.svg";
import professionalIcon from "@assets/profile-star-icon.svg";
import qualityIcon from "@assets/gem-icon.svg";
import flexibleIcon from "@assets/strength-icon.svg";
import shieldicon from "@assets/shield-icon.svg";
import empowerIcon from "@assets/empower-icon.svg";

const Benefits = () => {

    const benefitLists = [
        {
            title: "Accessible and affordable",
            desc: "We enable live, legal consultations between clients and top legal professionals, at affordable prices.",
            image: thumbIcon
        },
        {
            title: "Professional and reliable",
            desc: "Kotuma lawyers help with domestic violence, unpaid salary, bigamy and land disputes.",
            image: professionalIcon,
        },
        {
            title: "Quality you can trust",
            desc: "Kotuma enables live, legal consultations between clients and top legal professionals, at affordable prices.", 
            image: qualityIcon,
        },
        {
            title: "Convenient and flexible",
            desc: "Our experts, ensure only the highest quality legal consultations. Transparent  and comparison leaves no surprises",
            image: flexibleIcon,
        },
        {
            title: "Safe and transparent",
            desc: "For landlord dispute legal, police arrest anything you can think of, we can help with.",
            image: shieldicon,
        },
        {
            title: "Empowering and legal",
            desc: "Here, we ensure  only the highest quality, free,  legal consultations. ",
            image: empowerIcon,
        },
    ]
    

  return (
    <section aria-label="Benefits" className="container py-16 text-kotumablack">
      <header className="text-center px-8 tex max-w-lg mx-auto">
        <h2 className="lg:text-[44px] text-4xl font-bold" >Safe for clients, great for lawyers</h2>
      </header>

      <ul className="grid grid-cols-1 sm:grid-cols-2  gap-x-8 gap-y-12 px-8 py-16 max-w-[946px] mx-auto justify-items-center">
        {benefitLists.map((item, index) => (
            <li key={index} className="flex gap-3">
                <figure className="flex flex-none items-center justify-center mt-1 w-15 h-15 bg-[#1C0F4D] rounded-full">
                    <img loading="lazy" src={item.image} alt={item.title} className="object-contain " />
                </figure>

               <div className="flex-1 px-2 space-y-1">
                    <h3 className="text-2xl">{item.title}</h3>
                    <p className="text-kotumagrey">{item.desc}</p>
               </div>
            </li>
        ))}
      </ul>
    </section>
  );
};

export default Benefits;
