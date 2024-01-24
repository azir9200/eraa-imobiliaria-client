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
const [wishList, refetch]  = useWishlist();
const navigate = useNavigate();

const totalPrice = wishList.reduce((total, item) => total + item.price, 0)

 useEffect(() => {

  if (totalPrice > 0) {
      axiosSecure.post('/create-payment-intent', { price: totalPrice })
          .then(res => {
              console.log(res.data.clientSecret);
              setClientSecret(res.data.clientSecret);
          })
  }
 }, [axiosSecure, totalPrice])


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

 // the payment  save in the database
 const payment = {
  email: user.email,
  price: totalPrice,
  transactionId: paymentIntent.id,
  date: new Date(), 
  cartIds: wishList.map(item => item._id),
  menuItemIds: wishList.map(item => item.menuId),
  status: 'pending'
}
          
const res = await axiosSecure.post('/payments', payment);
console.log('payment saved', res.data);
   refetch();
if (res.data?.paymentResult?.insertedId) {
    Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Thank you for the taka paisa",
        showConfirmButton: false,
        timer: 1500
    });
    navigate('/dashboard/paymentHistory')  
  }

  }}
        

  }

  return (
    <div className=" m-6 p-4 lg:m-12 lg:p-28 w-40%  border rounded">

      <h2 className="text-center text-2xl font-semibold underline text-indigo-700 pb-12">Make Payment</h2>
           <form onSubmit={handleSubmit}>
      <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '24px',
                            color: '#e7d618',
                            '::placeholder': {
                                color: '#2ad54d',
                            },
                        },
                        invalid: {
                            color: '#9925da',
                        },
                    },
                }}
            />
   <button className="btn btn-outline ml-24 mt-8 text-xl my-4" type="submit" disabled={!stripe || !clientSecret}>
                Payment 
            </button>
            <p className="text-red-600">{error}</p>
            {transactionId && <p className="text-green-600"> Your transaction id: {transactionId}</p>}
      </form>
      
    </div>
  );
};

export default PaymentForm;
