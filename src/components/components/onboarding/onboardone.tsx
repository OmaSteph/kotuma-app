import { Button } from "../ui/button"
import { useNavigate } from "react-router-dom"
const OnboardOne = ()=>{
    const navigate= useNavigate()
    return(
        <section className="flex justify-center items-center min-h-[60vh]">
            <div>

            <h3 className="font-semibold text-[2rem] tracking-tighter text-gray-800">How can we help you?</h3>
            <p className= "font-medium text-[#9da4ae] tracking-tighter"> Choose the options that best describes what you're looking for</p>
            {/* radio button begins */}
            <div className="mt-2.5 space-y-5">
                {/*radio 1  */}
                <div className="flex gap-4 items-start py-5 px-4 border border-[#E5e7eb] shadow-nd rounded-[10px]">
                    <input type="radio" className="w-6 h-6 mt-1" />
                    <div>
                     <p className="font-semibold tracking-tight text-gray-800"> I am new and need legal help</p>
                     <p> Connect with qualified lawyers who can help you with your legal matter</p>
                        </div>
                
                </div>
                {/* radio 2 */}
                <div className="flex gap-4 items-start py-5 px-4 border border-[#E5e7eb] shadow-nd rounded-[10px]">
                    <input type="radio" className="w-6 h-6 mt-1" />
                    <div>
                     <p className="font-semibold tracking-tight text-gray-800"> I'm a returning clients</p>
                     <p> Sign in to access your account with new legal matters</p>
                        </div>
                
                </div>
                 {/*radio 3  */}
                  <div className="flex gap-4 items-start py-5 px-4 border border-[#E5e7eb] shadow-nd rounded-[10px]">
                    <input type="radio" className="w-6 h-6 mt-1" />
                    <div>
                     <p className="font-semibold tracking-tight text-gray-800"> I'm a lawyer</p>
                     <p> Join our network and connect with clients who need your expertise</p>
                        </div>
                
                </div>
            </div>
            <Button onClick={()=>navigate("/onboarding/onboardclients")} className="w-full mt-5"> Proceed</Button>
            </div>
        </section>
    )
}

export default OnboardOne