import { Link } from "react-router-dom";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";

const Subscribe = () => {

    return (
        <section className="container px-8 py-16 lg:p-16">
            <div className="flex flex-col items-center justify-between gap-8 lg:flex-row text-kotumablack">
                <h2 className="flex-1 lg:text-[44px] lg:leading-[1.2] text-4xl font-bold lg:text-left text-center">Stay Updated with Legal Insights</h2>
                <div className="flex-1 flex flex-col gap-4 px-4 lg:text-left text-center">
                    <p className="text-xl">Subscribe to our newsletter for the latest updates and expert legal advice tailored just for you. Stay informed and empowered in your legal journey.</p>
                    <form className="w-full max-w-md lg:mx-0 mx-auto flex gap-2 ">
                        <Input type="email" placeholder="Enter your email"/>
                        <Button className="bg-kotumablue text-sm font-bold">Subscribe</Button>
                    </form>
                    <small className="text-xs text-kotumagrey">By clicking Subscribe you're confirming that you agree with our <Link to="/" className="text-blue-500 hover:underline">Terms and Conditions</Link>.</small>
                </div>
            </div>
        </section>
     
    )
}

export default Subscribe;