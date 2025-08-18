import LawyerCard from "@components/booking/LawyerCard";
import { useNavigate } from "react-router-dom";

export default function Lawyers() {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate("#")}
      className="container lg:px-16 p-4 cursor-pointer"
    >
      <h2 className="font-semibold text-[32px] text-[#292929] mb-3">
        Find Lawyers
      </h2>
      <p className="font-medium text-[#9DA4AE]">
        Here's what's happening with your legal matters today
      </p>

      <div className="grid grid-cols-3 gap-6 mt-6">
        <LawyerCard />
        <LawyerCard />
        <LawyerCard />
        <LawyerCard />
        <LawyerCard />
        <LawyerCard />
        <LawyerCard />
        <LawyerCard />
        <LawyerCard />
      </div>
    </div>
  );
}
