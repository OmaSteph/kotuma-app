import { Outlet } from 'react-router-dom'
import OnboardingHeader from '../components/components/onboarding/onboardingheader'
import Sidebar from '@components/components/onboarding/onboardingsidebar'


const OnboardingLayout = () => {
    return (
        <div className="flex">
             <Sidebar/>
            <>
            <OnboardingHeader />
            <main className="mt-[80px] ml-[450px] flex flex-col justify-center items-center min-h-screen font-neue">
            
                 <Outlet />
                
            </main>
            </>
            
        </div>
    )
}

export default OnboardingLayout
