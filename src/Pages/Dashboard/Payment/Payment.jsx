import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import PaymentForm from "../PaymentForm/PaymentForm";

// const stripePromise = loadStripe( "");
 const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
 

const Payment = () => {
  return (
    <div>
           <div className="">
                <Elements stripe={stripePromise}>
                    <PaymentForm></PaymentForm>
                </Elements>

           </div>


    </div>
  );
};

export default Payment;