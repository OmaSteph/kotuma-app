import CalenderIc from "@assets/Calendar.svg";
import VectorIc from "@assets/Vector.svg";
import FolderIc from "@assets/FolderOpen.svg";
import Counter from "@assets/Counter.svg";
import { useAuth } from '../contexts/AuthContext';

export default function ClientDashboard() {
  const { user } = useAuth();
  const firstName = user?.name?.split(' ')[0] || 'Client';
  
  return (
    <div className="min-h-screen w-full bg-gray-50 flex flex-col">
      {/* Main */}
      <main className="flex-1">
        <div className="max-w-[1317px] mx-auto px-6 py-8 flex flex-col gap-8">
          {/* Welcome */}
          <div>
            <h2 className="text-2xl font-bold mb-1 text-black">
              Good morning, {firstName}!
            </h2>
            <p className="text-gray-600">
              Here&apos;s what&apos;s happening with your legal matters today.
            </p>
          </div>
          
          {/* User Profile Summary */}
          {/* {user?.legalNeeds && (
            <section className="bg-white rounded-[10px] shadow-sm border border-gray-200 p-6">
              <h3 className="font-bold text-lg mb-4 text-black">Your Legal Needs</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="font-medium text-gray-700">Category:</span>
                  <span className="ml-2 text-black">{user.legalNeeds.category}</span>
                </div>
                <div>
                  <span className="font-medium text-gray-700">Timeline:</span>
                  <span className="ml-2 text-black">{user.legalNeeds.timeline}</span>
                </div>
                <div>
                  <span className="font-medium text-gray-700">Court Proceedings:</span>
                  <span className="ml-2 text-black">{user.legalNeeds.hasProceedings}</span>
                </div>
                {user.preferences && (
                  <div>
                    <span className="font-medium text-gray-700">Budget Range:</span>
                    <span className="ml-2 text-black">{user.preferences.budget}</span>
                  </div>
                )}
              </div>
              {user.legalNeeds.description && (
                <div className="mt-4">
                  <span className="font-medium text-gray-700 block mb-2">Description:</span>
                  <p className="text-black text-sm bg-gray-50 p-3 rounded">{user.legalNeeds.description}</p>
                </div>
              )}
            </section>
          )} */}

          {/* Case progress */}
          <section className="bg-white rounded-[10px] shadow-sm border border-gray-200 p-6">
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-start gap-3">
                <img src={FolderIc} className="w-6 h-6 mt-1" alt="Case" />
                <div>
                  <h3 className="font-bold text-lg text-black">
                    Problem Case - {user?.legalNeeds?.category || "Wrongful Termination"} Issue
                  </h3>
                  <div className="text-sm text-gray-500 space-y-1">
                    <p>
                      {user?.legalNeeds?.description}
                      {/* Josephine Obong was recently terminated from her position
                      as a marketing manager at a tech start up after she
                      reported */}
                    </p>
                    <p>
                      concerns about discriminatory hiring practices to HR. She
                      was fired two weeks....
                    </p>
                  </div>
                </div>
              </div>

              {/* Pending + Counter */}
              <div className="flex items-center gap-3 shrink-0">
                <span className="px-3 py-1 rounded-full text-sm font-medium bg-[#FDECC8] text-[#A66A00]">
                  Pending
                </span>
                <button
                  type="button"
                  aria-label="Toggle case section"
                  className="w-8 h-8 rounded-full border border-gray-200 grid place-items-center hover:bg-gray-50"
                >
                  <img src={Counter} alt="" className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Steps */}
            <ol className="mt-6 space-y-5">
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-green-600 text-white text-xs font-semibold grid place-items-center mt-0.5">
                  ✓
                </div>
                <div>
                  <div className="text-black font-medium">
                    Initial Consultation
                  </div>
                  <div className="text-sm text-gray-700 space-y-1">
                    <p>You've booked a meeting with your preferred attorney</p>
                    <div className="text-sm text-blue-600">
                      Consultation Confirmed
                    </div>
                  </div>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-blue-100 text-[#03156B] text-xs font-semibold grid place-items-center mt-0.5">
                  2
                </div>
                <div>
                  <div className="text-black font-medium">
                    Consultation Meetings
                  </div>
                  <div className="text-sm text-gray-700 space-y-1">
                    <p>Meet with your lawyer to discuss your case.</p>
                    <p className="text-sm text-blue-600">
                      Scheduled for October 15, 2025
                    </p>
                  </div>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-gray-200 text-black text-xs font-semibold grid place-items-center mt-0.5">
                  3
                </div>
                <div>
                  <div className="text-black font-medium">
                    Lawyer Engagement
                  </div>
                  <div className="text-sm text-gray-700 space-y-1">
                    <p>Sign engagement agreement</p>
                    <div className="text-sm text-blue-600">
                      Pending Completion of Consultation
                    </div>
                  </div>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-gray-200 text-black text-xs font-semibold grid place-items-center mt-0.5">
                  4
                </div>
                <div>
                  <div className="text-black font-medium">Case Initiation</div>
                  <div className="text-sm text-gray-700">
                    Begin working with your lawyer on case strategy
                  </div>
                </div>
              </li>
            </ol>

            {/* Buttons */}
            <div className="flex gap-4 mt-8">
              <button className="py-3 px-8 rounded-[30px] bg-[#03156B] text-white font-medium hover:bg-[#03156B]/90 transition-colors">
                View Full Case
              </button>
              <button className="py-3 px-10 rounded-[30px] border-2 border-[#03156B] text-[#03156B] font-medium hover:bg-[#03156B]/5 transition-colors">
                Manage Appointment
              </button>
            </div>
          </section>

          {/* Two-column layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Upcoming */}
            <section className="bg-white rounded-[10px] shadow-sm border border-gray-200 p-6">
              <h3 className="font-bold text-lg mb-1 text-black">
                Upcoming Consultation
              </h3>
              <p className="text-gray-600 mb-6 text-sm">
                Initial case assessment and strategy discussion with your
                attorney
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-3">
                  <img src={CalenderIc} className="w-5 h-5 mt-0.5" alt="Cal" />
                  <div>
                    <p className="text-black">
                      Initial Consultation with{" "}
                      <a
                        href="#"
                        className="font-medium text-blue-500 underline underline-offset-2"
                      >
                        Bar. Micheal Atansuyi
                      </a>
                    </p>
                    <p className="text-gray-500 text-sm">
                      July 20, 2025 • 2:00PM
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <img src={CalenderIc} className="w-5 h-5 mt-0.5" alt="Cal" />
                  <div>
                    <p className="text-black">
                      Initial Consultation with{" "}
                      <a
                        href="#"
                        className="font-medium text-blue-500 underline underline-offset-2"
                      >
                        Bar. James Coleman
                      </a>
                    </p>
                    <p className="text-gray-500 text-sm">
                      July 22, 2025 • 4:00PM
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <img src={CalenderIc} className="w-5 h-5 mt-0.5" alt="Cal" />
                  <div>
                    <p className="text-black">
                      Initial Consultation with{" "}
                      <a
                        href="#"
                        className="font-medium text-blue-500 underline underline-offset-2"
                      >
                        Bar. Hayden Babatunde
                      </a>
                    </p>
                    <p className="text-gray-500 text-sm">
                      July 28, 2025 • 4:00PM
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="bg-white rounded-[10px] shadow-sm border border-gray-200 p-6">
              <h3 className="font-bold text-lg mb-1 text-black">
                Recent Activity
              </h3>
              <p className="text-gray-600 mb-6 text-sm">
                Keep track of new messages, documents, and case milestones
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-3">
                  <img src={VectorIc} className="w-5 h-5 mt-0.5" alt="Act" />
                  <div>
                    <p className="text-black">
                      <a
                        href="#"
                        className="font-medium text-blue-600 underline underline-offset-2"
                      >
                        Bar. James Coleman
                      </a>{" "}
                      sent you an engagement agreement
                    </p>
                    <p className="text-gray-500 text-sm">2 hours ago</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <img src={VectorIc} className="w-5 h-5 mt-0.5" alt="Act" />
                  <div>
                    <p className="text-black">
                      You have succcessfully booked
                      <a
                        href="#"
                        className="font-medium text-blue-600 underline underline-offset-2"
                      >
                        Bar. Hayden Babatunde
                      </a>{" "}
                      for July 22, 2025 • 4:00PM
                    </p>
                    <p className="text-gray-500 text-sm">
                      for July 22, 2025 • 4:00PM
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <img src={VectorIc} className="w-5 h-5 mt-0.5" alt="Act" />
                  <div>
                    <p className="text-black">
                      You have successfully booked{" "}
                      <a
                        href="#"
                        className="font-medium text-blue-600 underline underline-offset-2"
                      >
                        Bar. Michael Atansuyi
                      </a>
                      for July 20, 2025 • 2:00PM
                    </p>
                    <p className="text-gray-500 text-sm">
                      July 28, 2025 • 4:00PM
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-4 mt-12">
        <div className="max-w-[1317px] mx-auto px-6 flex items-center justify-between">
          <p className="text-gray-500">© 2025 Kotuma Inc.</p>
          <div className="flex items-center gap-6 text-gray-500">
            <a href="#" className="underline hover:underline-offset-8">
              Privacy Policy
            </a>
            <a href="#" className="underline hover:underline-offset-4">
              Terms of Service
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
