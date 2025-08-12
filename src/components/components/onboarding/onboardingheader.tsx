
import Profile from '@assets/User.svg'

const OnboardingHeader = ()=>{
    return (
        <header className='fixed top-0 left-0 right-0 bg-white flex justify-end items-center h-[48px] py-[35px] px-[26px]'>


<div className="flex justify-center w-12 h-12 border border-[#E5E7EB] rounded-full shadow">
    <img src={Profile} alt="" className='w-6 h-6'/>
</div>
        </header>
    )
}
export default OnboardingHeader