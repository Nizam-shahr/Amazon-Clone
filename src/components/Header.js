import Image from 'next/image'
import {AiOutlineMenu,  } from 'react-icons/ai'
import { HiSearch, HiShoppingCart } from "react-icons/hi";
 import{signIn, signOut, useSession} from 'next-auth/react'
import { useRouter } from 'next/router'
import {  useSelector } from 'react-redux';
import { selectItems } from '../slices/basketSlice';
 function Header (){
 
const router = useRouter()
const items = useSelector(selectItems)
  const { data: session } = useSession()
    return (
       <header>
         <div className='flex items-center bg-amazon_blue p-1 flex-grow py-2' >
            <div className='mt-2 flex items-center flex-grow sm:flex-grow-0 '>
                <Image
                src='https://links.papareact.com/f90'
                width={150}
                height={40}
             style={{objectFit: 'contain'}}
                className='cursor-pointer'
                onClick={()=> router.push('/')}
                /> 
            </div>
            <div className =' hidden sm:flex items-center h-10 
            rounded-md:text-sm flex-grow cursor-pointer
            bg-yellow-400 hover:bg-yellow-500'>
              <input className='p-2 h-full w-6 flex-grow flex-shrink rounded l-md:text-sm
              focus:outline-none px-4' type ='text' />
              <HiSearch size={30} className = ' p-1 ' /> 
            </div>
            <div  className = 'text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap '>
              <div onClick={!session? signIn : signOut} className = 'link  '> 
                <p>{session ? `Hello ${session.user.name}` : 'Sign In'} </p> 
                <p className =' font-extrabold md:text-sm'
                >Account and lists</p>
              </div>
              <div  className ='link '>
                <p>Returns</p>
                <p className=' font-extrabold md:text-sm' >& Orders</p>
              </div>
              <div  className ='relative flex items-center link '>
              <span className=' absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold
              '>{items.length}</span>
                <HiShoppingCart size={40} className= "p-1" />
                <p className ='hidden md:inline font-extrabold md:text-sm mt-2 bg' onClick={()=> router.push('/checkout')} >Basket</p>
              </div>
               </div> 
                     </div>
              <div className='flex items-center space-x-3 p-2 pl-4 bg-amazon_blue-light text-white text-sm'> 
                <p className='flex items-center'> 
                  <AiOutlineMenu className =' h-5 mr-3 text-white-500 '/>
                  All
                </p>
             <p className ='link'>Prime Video</p>
             <p className="link">Amazon Business</p>
             <p className="link">Today's Deals</p>
             <p className="link hidden lg:inline-flex">Electronics</p>
             <p className="link hidden lg:inline-flex">Food and Grocery</p>
             <p className="link hidden lg:inline-flex">Prime</p>
             <p className="link hidden lg:inline-flex">Buy Again</p>
             <p className="link hidden lg:inline-flex">Shopper Toolkit</p>
             <p className="link hidden lg:inline-flex">Health & Personal Care</p>
        
         </div>
       </header>
    )
}
export default Header