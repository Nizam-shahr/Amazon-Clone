import Image from 'next/image'
import {useState} from 'react'
import {AiOutlineStar} from 'react-icons/ai'
import { addToBasket } from '../slices/basketSlice'
import { useDispatch } from 'react-redux'
import Currency from 'react-currency-formatter'
function Product({id, title, price, description, category, image}) {
  const dispatch = useDispatch()
    const minRating =1
    const maxRating = 5
    const [rating]= useState(Math.floor(Math.random() * (maxRating - minRating + 1)) * minRating
    )
    const [hasPrime] = useState(Math.random() < 0.5)
const addItemToBasket = ()=> {
  const product = {
    id, title, price, description, category, image, price , hasPrime, rating
  };
  dispatch(addToBasket(product))
}

  return (
   <div className='relative flex flex-col m-5 bg-white z-30 p-10'>
  
    <p absolute className='absolute top-s right-2 italic text-gray-400'>
      {category}
    </p>
    <Image src={image} height={200} width={200} style={{objectFit:'contain'}}/>
    <h4 className='my-3'>{title}</h4>
     < div className='flex'> 
  {Array(rating).fill()
  .map((_, i) => (
 <AiOutlineStar key={i} className='h-5 text-yellow-500 ' />
    )) }
    </div>
    <p className='text-xs my-2 line-clamp-2'>
      {description}
    </p>
    <div>
      <Currency quantity={price} currency='GBP' />
    </div>
    {hasPrime &&(
      <div className='flex items-center space-x-2 -mt-5' >
        <img className='w-12' src='https://links.papareact.com/fdw'/>
        <p className='text-xs text-gray-500'>FREE Next-da Delivery</p>
         </div>
    )}
    <button onClick={addItemToBasket} className='mt-auto button  '>Add to Basket</button>

   </div>
    
  );
}

export default Product