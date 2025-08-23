import { Button } from "./components/ui/button";

const ChooseKotuma = () => {
    return (
        <section aria-label="Why Choose Kotuma?" className="container bg-darkbluebg text-white w-full max-w-[1440px] mx-auto px-8 py-16 lg:p-16">
            <div>
                <h1>Why Choose Kotuma?</h1>
                <p>Kotuma offers transparent pricing, trusted verified lawyers, easy booking with live consultations, and pro bono support for those in need - all on a secure, user-friendly platform.</p>
                <Button className="bg-kotumablue text-sm font-bold font-inter w-[152px] h-[50px]">Get Started</Button>
            </div>
        </section>
    );
}

export default ChooseKotuma;