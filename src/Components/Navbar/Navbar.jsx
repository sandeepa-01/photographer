import React from 'react'
import { Link } from 'react-router-dom'


function Navbar() {
  return (
    <div>
        <header className='glass border border-white rounded shadow-sm sticky top-0 z-50 '>
            <div className='container mx-auto px-4 py-4'>
                <div className='flex flex-col md:flex-row justify-between items-center'>
                    <div className='flex justify-between w-full md:w-auto'>
                        <div><img src="logo-white.png" alt="logo" className='w-56'/></div>

                    </div> 

                    {/* Navigation */}
                    <nav className='hidden md:flex flex-col md:flex-row w-full md:w-auto mt-4 md:mt-0 space-y-2 md:space-y-0 md:space-x-6'>
                        <Link to='/' className='text-gray-200 hover:text-purple-dark font-medium block py-1 md:inline'>Home</Link>
                        <Link to='/wedding' className='text-gray-200 hover:text-purple-dark font-medium block py-1 md:inline'>Photographers</Link>
                        <Link to='/seller' className='text-gray-200 hover:text-purple-dark font-medium block py-1 md:inline'>Store</Link>
                        <Link to='/aboutus' className='text-gray-200 hover:text-purple-dark font-medium block py-1 md:inline' >About Us</Link>
                        <Link to='/dashboard' className='text-transparent bg-clip-text font-bold bg-gradient-to-r from-[#850FFD] to-[#DF10FD]  px-4 py-1 rounded-md '>Switch to Selling</Link>
                        <Link to='/signin' className='text-gray-200 hover:text-purple-dark font-medium block py-1 md:inline'>Sign In</Link>
                        <Link to='/login' className='bg-gradient-to-r from-[#850FFD] to-[#DF10FD] text-white px-4 py-1 rounded-md '>Log In</Link>
                       
                    </nav>
                </div>
            </div>
        </header>
    </div>
  )
}

export default Navbar