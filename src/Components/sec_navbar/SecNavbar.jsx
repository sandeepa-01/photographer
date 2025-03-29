import React from 'react'
import { Link } from 'react-router-dom'


function SecNavbar() {
  return (
    <div>
       <div className=' py-3 border-b rounded-2xl glass mt-2 border-gray-200'>
        <div className='container mx-auto px-4'>
          <ul className='flex flex-wrap justify-center gap-15 text-sm'>
            
            <li>
              <Link to='/wedding' className='text-gray-400 hover:text-purple-600 transition-colors'>Wedding</Link>
            </li>
            
            <li>
              <Link to='/graduation' className='text-gray-400 hover:text-purple-600 transition-colors'>Graduation</Link>
            </li>
            
            <li>
              <Link to='/events' className='text-gray-400 hover:text-purple-600 transition-colors'>Events</Link>
            </li>
            
            <li>
              <Link to='/musicevents' className='text-gray-400 hover:text-purple-600 transition-colors'>Music events</Link>
            </li>
            
            <li>
              <Link to='/portrait' className='text-gray-400 hover:text-purple-600 transition-colors'>Portrait</Link>
            </li>
            
            <li>
              <Link to='/product' className='text-gray-400 hover:text-purple-600 transition-colors'>Product</Link>
            </li>

            <li>
              <Link to='/videography' className='text-gray-400 hover:text-purple-600 transition-colors'>Videography</Link>
            </li>
          </ul>
        </div>
       </div>
    </div>
  )
}

export default SecNavbar