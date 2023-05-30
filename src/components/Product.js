import Image from 'next/image'
import {useState} from 'react'
import {StarIcon} from '@heroicons/react/solid'
import Currency from 'react-currency-formatter'
function Product({id, title, price, description, category, image}) {
    const minRating =2
    const maxRating = 5
    const [rating]= useState(Math.floor(Math.random() * (maxRating - minRating + 1)) * minRating

    )
    const [hasPrime] = useState(Math.random() < 0.5)
  return (
    <div className='relative flex flex-col m-5 bg-white z-30 p-18'>
        <p className='absolute top-2 right-2 text-xs italic text-gray-400'>Category</p>
        <image src={image} height={200} objectFit='contain'/>
        <h4>{title}</h4>

        <div className="flex">
            {Array(rating)
            .fill()
            .map((_, i) => (
                <StarIcon className= 'h-5 text-yellow-500' />
            ))
            }
            
        </div>
        <p className='text-xs my-2 line-clamp-2' >{description}</p>
    <div className='mb-2'>
            <Currency quantity={price} currency='GBP' />
    </div>
    {hasPrime && (
        <div className='flex items-center space-x-2 -mt-5' >
            <img className='w-12' src='https://links.papareact.com/fdv' />
            <p className='text-xs text-gray-500'>FREE Next-day Delivery</p>
             </div>
    )}
    <button className='mt-auto button'>Add to Basket</button>
    </div>
  )
}

export default Product