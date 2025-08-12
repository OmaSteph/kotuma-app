import { Button } from "../ui/button"
import { Input } from "../ui/input"

const OnboardClients= ()=>{
  return(
    
        <div className="w-[600px] mt-0"> 
            <h3 className="text-[#292929] text-[32px] font-semibold">Let's start with some basic information </h3>
            <p className="text-[#9DA4AE] font-mediumgi"> This helps us to connect you with the right lawyers in your area</p>
<form className="space-y-5">
    <fieldset className="border rounded-2xl p-2">
 <label className="px-2">Full Name</label>   
        <Input type="text" placeholder="Enter full name" className="border-0 w-full "/>
</fieldset>
<fieldset className="border rounded-2xl p-2">
 <label className="px-2">Email Address</label>   
        <Input type="email" placeholder="Enter Email Address" className="border-0 "/>
</fieldset>
<fieldset className="border rounded-2xl p-2">
 <label className="px-2">Phone Number</label>   
        <Input type="text" placeholder="Enter Phone Number" className="border-0 "/>
</fieldset>
<fieldset className="border rounded-2xl p-2">
 <label className="px-2">Location</label>   
        <Input type="text" placeholder="City, State." className="border-0 "/>
</fieldset>
<Button className="w-full">Proceed
</Button>
    </form>
        </div>
        
    

  )  }   
  export default OnboardClients