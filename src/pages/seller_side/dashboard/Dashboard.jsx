import React from 'react'
import Dnavbar from '../../../Components/D_navbar/Dnavbar'
import logo from '../../../assets/clogo.png'
import Footer from '../../../Components/Footer/Footer'
import { Link } from 'react-router-dom'
import Bgvideo from '../../../Components/background/Bgvideo'

function Dashboard() {
  return (
    <div>
        <Dnavbar/>
        <Bgvideo/>

        {/* main section */}
        <section className='flex-grow container mx-auto px-6 py-8'>
            <div className='flex flex-col md:flex-row gap-8'>
                {/* left side */}
                <div className='w-full md:w-2/3 space-y-8 '>
                    <div className='mb-8'>
                        <h1 className='text-transparent bg-clip-text  bg-gradient-to-r from-[#850FFD] to-[#DF10FD] text-3xl font-bold'>Welcome, Chopsy events</h1>
                    </div>

                    <div className='flex flex-col space-y-6 '>
                        <Link to="/order"><div className='glass border border-purple-300/30  rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow '>
                            <h2 className='text-xl text-white font-bold mb-2'>Check your orders</h2>
                            <p className='text-gray-400'>View manage all your current photography oders.</p>
                        </div></Link>

                        <Link to="/notice"><div className='glass border border-purple-300/30 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow'>
                            <h2 className='text-xl text-white font-bold mb-2'>Notice</h2>
                            <p className='text-gray-400'>Important updates and notifications for your account.</p>
                        </div></Link>

                        <Link to="/earning"><div className='glass border border-purple-300/30 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow'>
                            <h2 className='text-xl text-white font-bold mb-2'>Earning</h2>
                            <p className='text-gray-400'>Track your revenue and payment history.</p>
                        </div></Link>
                    </div>
                </div>

                {/* right side */}

                <div className='w-full md:w-1/3'>
                    <div className='border glass border-purple-300/30 rounded-lg p-6 shadow-sm'>
                        <div className='flex flex-col items-center mb-6'>
                            <div className='w-40 h-30 rounded-full flex items-center justify-center mb-4'>
                                <img src={logo} alt="" />
                            </div>

                            <h2 className='text-xl text-white font-bold'>Chopsy events</h2>
                            <button className='mt-4  text-white px-4 py-2 rounded-md bg-gradient-to-r from-[#850FFD] to-[#DF10FD]'>View Profile</button>
                        </div>

                        <div className='border-t border-purple-400 pt-4 mb-6' >
                            <h3 className='font-bold text-white mb-2'>My level - level 2</h3>
                            <p className='mb-1 text-gray-400'>Completed project - 82</p>
                        </div>

                        <div className='border-t border-gpurpleay-400 pt-4'>
                            <h3 className='font-bold text-white mb-2'>
                               Upcoming Event</h3>
                                <p className='text-gray-400'>Event in November </p>
                                <p className='text-2xl font-bold text-purple-800'>15</p>
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <Footer/>
    </div>
  )
}

export default Dashboard