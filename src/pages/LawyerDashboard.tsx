import CalenderIc from "@assets/Calendar.svg";
import VectorIc from "@assets/Vector.svg";
import FolderIc from "@assets/FolderOpen.svg";
import Counter from "@assets/Counter.svg";
import { useAuth } from '../contexts/AuthContext';

export default function LawyerDashboard() {
  const { user } = useAuth();
  const firstName = user?.name?.split(' ')[0] || 'Barrister';
  
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
              Here&apos;s what&apos;s happening with your legal practice today.
            </p>
          </div>
          
          {/* Lawyer Profile Summary */}
          {user?.legalExpertise && (
            <section className="bg-white rounded-[10px] shadow-sm border border-gray-200 p-6">
              <h3 className="font-bold text-lg mb-4 text-black">Your Legal Expertise</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm mb-4">
                <div>
                  <span className="font-medium text-gray-700">Service Method:</span>
                  <span className="ml-2 text-black">{user.legalExpertise.serviceMethod}</span>
                </div>
                <div>
                  <span className="font-medium text-gray-700">Languages:</span>
                  <span className="ml-2 text-black">{user.legalExpertise.language}</span>
                </div>
                {user.employmentStatus && (
                  <div>
                    <span className="font-medium text-gray-700">Employment Status:</span>
                    <span className="ml-2 text-black capitalize">{user.employmentStatus.replace('-', ' ')}</span>
                  </div>
                )}
              </div>
              
              {user.legalExpertise.practiceAreas.length > 0 && (
                <div className="mb-4">
                  <span className="font-medium text-gray-700 block mb-2">Practice Areas:</span>
                  <div className="flex flex-wrap gap-2">
                    {user.legalExpertise.practiceAreas.map((area, index) => (
                      <span key={index} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                        {area.area} • {area.years}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              
              {user.legalExpertise.bio && (
                <div>
                  <span className="font-medium text-gray-700 block mb-2">Professional Bio:</span>
                  <p className="text-black text-sm bg-gray-50 p-3 rounded">{user.legalExpertise.bio}</p>
                </div>
              )}
            </section>
          )}

          {/* Case progress */}
          <section className="bg-white rounded-[10px] shadow-sm border border-gray-200 p-6">
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-start gap-3">
                <img src={FolderIc} className="w-6 h-6 mt-1" alt="Case" />
                <div>
                  <h3 className="font-bold text-lg text-black">
                    Employment Law - Wrongful Termination
                  </h3>
                  <div className="text-sm text-gray-500 space-y-1">
                    <p>Client: Josephine Obong</p>
                    <p>
                      Description: Client alleges termination after reporting
                      workplace discrimination. Preparing for initial
                      consultation.
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
                  <div className="text-black font-medium">Review Intake</div>
                  <div className="text-sm text-blue-500">Reviewed</div>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-blue-100 text-[#03156B] text-xs font-semibold grid place-items-center mt-0.5">
                  2
                </div>
                <div>
                  <div className="text-black font-medium">
                    Initial Consultation
                  </div>
                  <p className="text-sm text-blue-500">
                    Scheduled for September 5, 2025
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-gray-200 text-black text-xs font-semibold grid place-items-center mt-0.5">
                  3
                </div>
                <div>
                  <div className="text-black font-medium">
                    Engagement Agreement
                  </div>
                  <div className="text-sm text-blue-500">
                    Awaiting signature
                  </div>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-gray-200 text-black text-xs font-semibold grid place-items-center mt-0.5">
                  4
                </div>
                <div>
                  <div className="text-black font-medium">Case Initiation</div>
                  <div className="text-sm text-gray-500">
                    Start case strategy outline for wrongful termination
                  </div>
                </div>
              </li>
            </ol>

            {/* Buttons */}
            <div className="flex gap-4 mt-8">
              <button className="py-3 px-8 rounded-[30px] bg-[#03156B] text-white font-medium hover:bg-[#03156B]/90 transition-colors">
                View Client File
              </button>
              <button className="py-3 px-10 rounded-[30px] border-2 border-[#03156B] text-[#03156B] font-medium hover:bg-[#03156B]/5 transition-colors">
                Create Case Strategy
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
                Initial case assessment and strategy discussion with your client
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-3">
                  <img src={CalenderIc} className="w-5 h-5 mt-0.5" alt="Cal" />
                  <div>
                    <a
                      href="#"
                      className="font-medium text-blue-500 underline underline-offset-2"
                    >
                      Consultation with Michael Atansuyi
                    </a>
                    <p className="text-gray-500 text-sm">
                      August 30, 2025 • 4:00PM
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <img src={CalenderIc} className="w-5 h-5 mt-0.5" alt="Cal" />
                  <div>
                    <a
                      href="#"
                      className="font-medium text-blue-500 underline underline-offset-2"
                    >
                      Consultation with John Bamigboye
                    </a>
                    <p className="text-gray-500 text-sm">
                      August 22, 2025 • 4:00PM
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <img src={CalenderIc} className="w-5 h-5 mt-0.5" alt="Cal" />
                  <div>
                    <a
                      href="#"
                      className="font-medium text-blue-500 underline underline-offset-2"
                    >
                      Consultation with Mrs Aderigbe
                    </a>
                    <p className="text-gray-500 text-sm">
                      August 28, 2025 • 4:00PM
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
                        className="font-medium text-blue-500 underline underline-offset-2"
                      >
                        Josephine Obong
                      </a>{" "}
                      booked consultation for September 5, 2025
                    </p>
                    <p className="text-gray-500 text-sm">5 mins ago</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <img src={VectorIc} className="w-5 h-5 mt-0.5" alt="Act" />
                  <div>
                    <p className="text-black">
                      <a
                        href="#"
                        className="font-medium text-blue-500 underline underline-offset-2"
                      >
                        Emmanuel Godwin
                      </a>{" "}
                      uploaded case documents
                    </p>
                    <p className="text-gray-500 text-sm">1 hour ago</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <img src={VectorIc} className="w-5 h-5 mt-0.5" alt="Act" />
                  <div>
                    <p className="text-black">
                      Engagement agreement signed by{" "}
                      <a
                        href="#"
                        className="font-medium text-blue-500 underline underline-offset-2"
                      >
                        Gabriella Attah
                      </a>
                    </p>
                    <p className="text-gray-500 text-sm">
                      August 28, 2025 • 4:00PM
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
          <div className="flex items-center gap-6">
            <a href="#" className="text-[#03156B] hover:underline">
              Privacy Policy
            </a>
            <a href="#" className="text-[#03156B] hover:underline">
              Terms of Service
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
