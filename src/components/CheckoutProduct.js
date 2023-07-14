import Image from "next/image"
import Currency from 'react-currency-formatter'
import { AiOutlineStar } from "react-icons/ai"
import { useDispatch } from "react-redux"
import { addToBasket, removeFromBasket } from "../slices/basketSlice"
function CheckoutProduct({id, title, price,rating, description, category, image, hasPrime}) {
  const dispatch = useDispatch()

  const addItemToBasket =()=> {
  const product = {
    id, title, price,rating, description, category, image, hasPrime
  }
  dispatch(addToBasket(product))
}

const removeItemFromBasket = ()=> {
  dispatch(removeFromBasket({id}))
}

  
  return (
    <div className=" grid grid-cols-5 ">
      <Image src={image} height={200} width={200} style={{objectFit:'contain'}} />
    <div className="col-span-3 mx-3">
    <p>{title}</p>
    <div className="flex">
    {Array(rating).fill()
  .map((_, i) => (
 <AiOutlineStar size={30} key={i} className='h-5 text-yellow-500 ' />
    )) }
    </div>
    <p className="text-xs mt-2 my-2 line-clamp-3">{description}</p>
    <Currency quantity= {price}  currency='GBP'/>
    {hasPrime &&(
      <div className='flex items-center space-x-2 -mt-5' >
        <img className='w-12' src='https://links.papareact.com/fdw'/>
        <p className='text-xs text-gray-500'>FREE Next-da Delivery</p>
         </div>)}
    </div>
  
    <div className="flex flex-col space-y-2 my-auto justify-self-end">
      <button className="button" onClick={addItemToBasket}>Add to basket</button>
      <button className="button" onClick={removeItemFromBasket}>Remove From basket</button>
    </div>
    </div>
  )
}

export default CheckoutProduct
