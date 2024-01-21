import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Providers/AuthProviders";
import UseAxiosSecure from "../../../Components/Hocks/UseExiosecure/UseAxiosSecure";
import useWishlist from "../../../Components/Hocks/useWishlist/useWishlist";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";


const PaymentForm = () => {
  const [error, setError] = useState('');
  const [clientSecret, setClientSecret] = useState('')
  const [transactionId, setTransactionId] = useState('');
const stripe = useStripe();
const elements = useElements();
const axiosSecure  = UseAxiosSecure()
const {user} = useContext(AuthContext);
const [wishList]  = useWishlist();
const navigate = useNavigate();

const totalPrice = wishList.reduce((total, item) => total + item.price, 0)

// const { user } = useContext(AuthContext);


// useEffect(() => {
//   if (totalPrice > 0) {
//       axiosSecure.post('/create-payment-intent', { price: totalPrice })
//           .then(res => {
//               console.log(res.data.clientSecret);
//               setClientSecret(res.data.clientSecret);
//           })
//   }
// }, [axiosSecure, totalPrice])


  const handleSubmit = async (event) => {
    event.preventDefault();
  

  if (!stripe || !elements) {
    return
}

const card = elements.getElement(CardElement)

if (card === null) {
    return
}

const { error, paymentMethod } = await stripe.createPaymentMethod({
  type: 'card',
  card
})

if (error) {
  console.log('payment error', error);
  setError(error.message);
}
else {
  console.log('payment method', paymentMethod)
  setError('');
}
 // confirm payment
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || 'anonymous',
                    name: user?.displayName || 'anonymous'
                }
            }
        })

        if (confirmError) {
            console.log('confirm error')
        }
        else {
          console.log('payment intent', paymentIntent)
          if (paymentIntent.status === 'succeeded') {
              console.log('transaction id', paymentIntent.id);
              setTransactionId(paymentIntent.id);
          }}
        

  }

  return (
    <div>

      <h2>Please Payment now</h2>
           <form onSubmit={handleSubmit}>
      <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '20px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
   <button className="btn btn-sm btn-primary my-4" type="submit" disabled={!stripe || !clientSecret}>
                Payment 
            </button>
            <p className="text-red-600">{error}</p>
            {transactionId && <p className="text-green-600"> Your transaction id: {transactionId}</p>}
      </form>
      
    </div>
  );
};

export default PaymentForm;