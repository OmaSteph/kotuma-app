import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../ui/button";

const LawyerCreateProfile = () => {
  const navigate = useNavigate();
  const [bio, setBio] = useState("");
  const [avatar, setAvatar] = useState<File | null>(null);

  const onFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] ?? null;
    setAvatar(file);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate("/onboarding/onboardlawyers/account-setup");
  };

  return (
    <div className="w-full max-w-[640px]">
      <h3 className="text-[#292929] text-[28px] md:text-[32px] font-semibold">
        Create your professional profile
      </h3>
      <p className="text-[#98A2B3] text-sm md:text-base font-medium">
        Add a photo and bio to help clients connect with you and understand your legal expertise
      </p>

      <form onSubmit={onSubmit} className="mt-6 space-y-6">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white border border-[#E5E7EB] flex items-center justify-center">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M12 12a5 5 0 1 0-5-5 5 5 0 0 0 5 5Z" stroke="#667085" strokeWidth="1.5" />
              <path d="M21 22c0-3.9-4.03-7-9-7s-9 3.1-9 7" stroke="#667085" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </div>

          <div>
            <input id="avatar" type="file" accept="image/*" onChange={onFile} className="hidden" />
            <label
              htmlFor="avatar"
              className="inline-flex items-center rounded-xl border border-[#E5E7EB] bg-white px-4 py-2 text-sm cursor-pointer hover:bg-gray-50"
            >
              Upload Photo
            </label>
            {avatar && (
              <div className="mt-1 text-xs text-[#667085] truncate max-w-[260px]">{avatar.name}</div>
            )}
          </div>
        </div>

        <fieldset className="border border-[#E5E7EB] rounded-2xl p-2">
          <textarea
            rows={5}
            placeholder="Professional bio and summary"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            className="w-full px-3 py-3 rounded-xl border-0 outline-none resize-y placeholder:text-[#98A2B3]"
          />
        </fieldset>

        <Button type="submit" className="w-full h-11 md:h-12">
          Proceed
        </Button>
      </form>
    </div>
  );
};

export default LawyerCreateProfile;
