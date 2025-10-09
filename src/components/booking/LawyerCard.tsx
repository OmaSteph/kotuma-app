import Favorite from "../../assets/favourite.svg";
import { useNavigate } from "react-router-dom";

interface LawyerCardProps {
  id: string;
  name: string;
  profession: string;
  location: string;
  imageUrl: string;
}

const LawyerCard = ({ id, name, profession, location, imageUrl }: LawyerCardProps) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/app/lawyers/${id}`)}
      className="h-[395px] w-full rounded-2xl overflow-hidden relative cursor-pointer"
    >
      <img
        src={imageUrl}
        alt={name}
        className="absolute w-full h-full object-cover"
      />

      <div className="absolute z-10 top-4 right-4">
        <img src={Favorite} alt="" />
      </div>
      <div className="absolute bottom-8 left-4 right-4 bg-white z-10 p-6 rounded-[12px] flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-[#2A2A2A]">{name}</p>

          <p className="text-sm font-medium text-[#6C6C68]">
            {profession}
          </p>
        </div>
        <p className="text-sm font-medium text-[#6C6C68]">{location}</p>
      </div>
    </div>
  );
};

export default LawyerCard;
