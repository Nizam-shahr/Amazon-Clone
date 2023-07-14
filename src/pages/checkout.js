import Image from "next/image"
import Header from "../components/Header"
import { useSelector } from "react-redux"
import CheckoutProduct from "../components/CheckoutProduct"
import { selectItems, totalItems } from "../slices/basketSlice"
import { useSession } from "next-auth/react"
import Currency from 'react-currency-formatter'
import {loadStripe} from '@stripe/stripe-js'
import axios from "axios"
const stripePromise = loadStripe(process.env.stripe_public_key)
function checkout({}) {
const items = useSelector(selectItems)
const total = useSelector(totalItems)
const { data: session } = useSession()

const createCheckOutSession =async ()=> {
  const stripe = await stripePromise

  const checkoutSession = await axios.post('api/createCheckoutSession',
  {
    items: items,
    email: session.user.email,
  }
  );
  const result = await stripe.redirectToCheckout({
    sessionId: checkoutSession.data.id,
  });
  if(result.error) alert(result.error.message)
}
  return (
    <div className="bg-gray-100">
      <Header />
      <main className="lg:flex max-w-screen-2xl mx-auto">

      <div className="flex-grow m-5 shadow-sm"> 
          <Image 
          src='https://links.papareact.com/ikj'
          width={1020}
          height={250}
          style={{objectFit:'contain'}}
          />
<div className="flex flex-col p-5 space-y-10 bg-white">
  <h1 className="text-3xl border-b pb-4">{items.lentgh ===0 ? 'Your Basket Is Empty' :'Shopping Basket'}

  </h1>
  {items.map((item , i) => (
    <CheckoutProduct 
    key={i}
  id={item.id}
  title={item.title}
  price={item.price}
  rating={item.rating}
  description={item.description}
  category={item.category}
  image={item.image}  
  hasPrime= {item.hasPrime}
    />
 ) )}
</div>
</div>
         
          <div className="flex flex-col bg-white p-10 shadow-md" >
            {items.length >0 && (
              <>
              <h2 className="whitespace-nowrap">
                subTotal ({items.length} items)
              </h2>
              <span className="font-bold">
            <Currency quantity={total} currency="GBP"/>
              </span>
              <button 
              role= 'link'
              onClick={createCheckOutSession}
              disabled={!session}
              className={`button mt-2 ${!session && 
              'from-gray-300 to-gray-500 border-gray-200 text-gray-300 cursor-not-allowed'}`}>
                 {session ? 'proceed to checkout' : 'Sing-in to checkout'}
              </button>
              </>
            )}
        </div>
      </main>
    </div>
  )
}

export default checkout
