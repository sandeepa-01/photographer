import React from 'react'
import { Link } from 'react-router-dom'

function ThirdNavbar() {
  return (
    <div>
    <div className=' py-3 border-b rounded-2xl glass border-gray-200'>
     <div className='container mx-auto px-4'>
       <ul className='flex flex-wrap justify-center gap-15 text-sm'>
         
         <li>
           <Link to='/seller' className='text-gray-400 hover:text-purple-600 transition-colors'>Sellers</Link>
         </li>
         
         <li>
           <Link to='/renter' className='text-gray-400 hover:text-purple-600 transition-colors'>Providers</Link>
         </li>
         
         
       </ul>
     </div>
    </div>
 </div>
  )
}

export default ThirdNavbar