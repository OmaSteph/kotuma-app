import { ClientSidebarSteps } from "../onboarding-steps";

const StepIcon = ({ index, currentStep }: { index: number; currentStep: number }) => {
  const isCurrent = index === currentStep;
  const baseClasses =
    "w-6 h-6 rounded-full flex items-center justify-center text-sm font-semibold transition-colors duration-300 flex-shrink-0";

  return (
    <span
      className={`${baseClasses} ${
        isCurrent
          ? "bg-white border-2 border-[#0A1D5B] text-[#0A1D5B]"
          : "bg-white border border-[#E5E7EB] text-[#9DA4AE]"
      }`}
    >
      {index + 1}
    </span>
  );
};

const ClientSidebar = ({ currentStepIndex }: { currentStepIndex: number }) => {
  const sidebar = ClientSidebarSteps;

  return (
    <aside
      className="
        hidden lg:flex lg:fixed top-0 left-0 z-10 h-screen
        px-6 pt-20 bg-[#fff6f4] border-r border-gray-100 shadow-xl/10
        w-0 sm:w-0 lg:w-[230px] flex-col justify-center
      "
    >
      <div className="flex flex-col items-start">
        <h6 className="text-[#9DA4AE] font-medium transition-colors duration-300 whitespace-nowrap mb-6 text-sm">
          Getting Started
        </h6>

        <ul className="flex flex-col gap-4 sm:gap-6">
          {sidebar.map((step, index) => (
            <li key={index} className="flex gap-4 items-center">
              <StepIcon index={index} currentStep={currentStepIndex} />
              <span
                className={`text-sm font-medium transition-colors duration-300 whitespace-nowrap ${
                  index === currentStepIndex ? "text-[#101828]" : "text-[#9DA4AE]"
                }`}
              >
                {step.name}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default ClientSidebar;
