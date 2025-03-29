import React from 'react'
import { Link } from 'react-router-dom'
import icon01 from '../../assets/messages.png'
import icon02 from '../../assets/notification.png'
import icon03 from '../../assets/profile.png'

function Dnavbar() {
  return (
    <div >
        <header className='glass border border-white rounded shadow-sm sticky top-0 z-50    '>
                    <div className='container mx-auto px-4 py-4'>
                        <div className='flex flex-col md:flex-row justify-between items-center'>
                            <div className='flex justify-between w-full md:w-auto'>
                                <div><img src="logo-white.png" alt="logo" className='w-56'/></div>
        
                            </div>
        
                            {/* Navigation */}
                            <nav className='hidden md:flex space-x-6'>
                                <Link to='/dashboard' className='text-gray-200 hover:text-purple-dark font-medium block py-1 md:inline hover:text-purple-600'>Dashboard</Link>
                                <Link to='/order' className='text-gray-200 hover:text-purple-dark font-medium block py-1 md:inline hover:text-purple-600'>Orders</Link>
                                <Link to='/notice' className='text-gray-200 hover:text-purple-dark font-medium block py-1 md:inline  hover:text-purple-600'>Notice</Link>
                                <Link to='/earning' className='text-gray-200 hover:text-purple-dark font-medium block py-1 md:inline hover:text-purple-600' >Earnings</Link>
                                <Link to='/about' className='text-gray-200 hover:text-purple-dark font-medium block py-1 md:inline hover:text-purple-600'>About Us</Link>
                                
                                
                            </nav>

                            <div className='flex items-center space-x-7'>
                            {/* <Link to='/' className='text-transparent bg-clip-text font-bold bg-gradient-to-r from-[#850FFD] to-[#DF10FD]  px-4 py-1 rounded-md '>Switch to Buying</Link> */}
                                <button>
                                    <img src={icon01} alt="messages icon" className='w-6 cursor-pointer'/>
                                    
                                </button>

                                <button>
                                    <img src={icon02} alt="notification icon" className='w-6 cursor-pointer' />
                                    {/* <span class="absolute -top-1 bg-purple-400 text-black text-xs rounded-full h-4 w-4 flex items-center justify-center">3</span> */}
                                </button>

                                <button>
                                    <img src={icon03} alt="profile icon" className='w-6 cursor-pointer'/>
                                    
                                </button>
                            </div>
                        </div>
                    </div>
                </header>
    </div>
  )
}

export default Dnavbar