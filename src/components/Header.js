import Image from 'next/image'
import  {MenuIcon,
          SearchIcon,
          ShoppingCartIcon,
          HeroIcon
} from '@heroicons/react/outline';
function Header (){
    return (
       <header>
         <div className='flex items-center bg-amazon-blue p-1 flex-grow py-2' >
            <div className='mt-2 flex items-center flex-grow sm:flex-grow-0 '>
                <Image
                src='https://links.papareact.com/f90'
                width={150}
                height={40}
                objectFit= 'contain'
                className='cursor-pointer'
                /> 
            </div>
            <div className =' hidden sm:flex items-center h-10 
            rounded-md:text-sm flex-grow cursorvpointer
            bg-yellow-400 hover:bg-yellow-500'>
              <input className='p-2 h-full w-5 flex-grow flex-shrink rounded l-md:text-sm
              focus:outline-none
              ' type ='text' />
              <SearchIcon className = 'h-12 p-4' /> 
            </div>
            <div  className = 'text-white flex items-center text-xs space-x-7  mx-8 whitespace-nowrap '>
              <div className = 'link  '> 
                <p>Hello Sony Sanga </p> 
                <p className =' font-extrabold md:text-sm'
                >Account and lists</p>
              </div>
              <div  className ='link '>
                <p>Returns</p>
                <p classNmae=' font-extrabold md:text-sm' >& Orders</p>
              </div>
              <div  className ='relative flex items-center link '>
              <span className=' absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow rounded-full text-black font-bold
              '>0</span>
                <ShoppingCartIcon className= "h-12 p-4" />
                <p className ='hidden md:inline font-extrabold md:text-sm mt-2' >Basket</p>
              </div>
               </div> 
              <div className='flex items-center space-x-3 p-2 pl-4 bg-amazon_blue-light text-white text-sm'> 
                <p className='flex items-center'> 
                  <HeroIcon className =' h-5 mr-3 '/>
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
         </div>
       </header>
    )
}
export default Header