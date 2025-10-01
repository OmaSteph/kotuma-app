import confirmIcon from "../../assets/confirm-icon.svg";
import { Button } from "@components/components/ui/button";
import { Card, CardContent } from "@components/components/ui/card";

interface PaymentProp{
    price: number | string;
    onClick: () => void;
}

const PaymentConfirm = ({price, onClick}:PaymentProp) =>{
    return (
        <section className="font-inter max-w-[636px] mx-auto">
            <Card className="text-black bg-transparent p-0 gap-0 ">
                <CardContent className="bg-whitebg rounded-xl shadow-sm pt-8 pb-4 flex flex-col gap-3 justify-center items-center">
                    <img src={confirmIcon} alt="payment-confirm-icon" className="w-10 h-10" />
                    <h2 className="font-bold text-2xl">Payment Confirmed!</h2>
                    <p className="text-xs max-w-[318px] text-text-secondary text-center">
                        Thank you for your payment.
                        <span className="block">Your payment has been processed successfully.</span>
                    </p>
                </CardContent>
                <CardContent className="shadow-sm pt-8 pb-4 flex flex-col gap-4 justify-center items-center">
                    <div>
                        <p className="text-xs max-w-[318px] text-text-secondary text-center">
                            You have paid
                        </p>
                        <h2 className="font-black text-2xl">₦{price}</h2>
                    </div>

                    <p className="text-xs max-w-[318px] text-text-secondary text-center">
                        Receipt No. KTM#0123
                    </p>

                    <div className="pt-4">
                        <p className="text-xs max-w-[318px] text-text-secondary text-center">
                            {new Date().toUTCString()}
                        </p>
                        <p className="text-xs max-w-[318px] pt-1 text-text-secondary text-center">
                            We have sent a confirmation email with 
                            your receipt for your records.
                        </p>
                        
                    </div>
                </CardContent>


            </Card>
            <div className="text-center mt-6">
                <Button
                    onClick={onClick}
                    className="px-6 py-3 bg-kotumablue hover:!bg-kotumablack text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                >
                    Back to Dashboard 
                </Button>
            </div>
         </section>
    )
}

export default PaymentConfirm;