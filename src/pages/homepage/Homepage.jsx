import React from 'react'

import picture1 from '../../assets/img h1.jpg'
import picture2 from '../../assets/img h2.png'
import picture3 from '../../assets/img h6.jpg'
import picture4 from '../../assets/img h4.png'
import picture5 from '../../assets/img h5.jpg'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import { Link } from 'react-router-dom'
import SearchBar from '../../Components/searchbar/SearchBar'
import Bgvideo from '../../Components/background/Bgvideo'


function Homepage() {
  return ( 
    <>

    <Navbar />
    <Bgvideo/>


    <section className='container mx-auto px-4 py-8 glass md:py-16 lg:py-11 mt-10 '>
        <div className='flex flex-col md:flex-row items-center gap-8 '>
            <div className='w-full md:w-1/2'>
                <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold text-white'>
                    Capture Your Moments !
                </h1>
                <p className='text-base sm:text-lg text-gray-400 mb-6'>Find the perfect local photographer for your special occasions, events, and memorable moments.</p>
                <button className='bg-gradient-to-r from-[#850FFD] to-[#DF10FD] text-white px-6 sm:px-8 py-2 sm:py-3 rounded-md text- sm:text-lg font-semibold'><Link>BOOK NOW !</Link></button>
            </div>
            <div className='w-full md:w-1/2 flex justify-center'>
                <img src={picture1} alt="picture 01" className='max-w-full h-auto rounded-lg shadow-lg' />
            </div>
        </div>
    </section>

    {/* search bar */}
        <SearchBar/>

    {/* Photographer service section  */}
    <section className='container max-auto py-8 sm:py-12  rounded-xl my-8 sm:my-12 glass'>
        <div className='flex flex-col md:flex-row items-center gap-8'>
            <div className='w-full md:w-1/2'>
                <h2 className='text-2xl sm:text-3xl font-bold text-gray-100 mb-3 sm:mb-4'>
                     Looking to capture unforgettable moments?
                </h2>
                <p className='text-sm sm:text-base text-gray-400 mb-4 sm:mb-6'>Our professional photographers are ready to help you preserve your special events, from weddings and birthdays to corporate gatherings and family portraits. Get connected with skilled photographers in your area.</p>
                <button className=' text-white px-5 sm:px-6 py-2 rounded-md font-semibold bg-gradient-to-r from-[#850FFD] to-[#DF10FD]'><Link to="/photographer">Hiring NOW !</Link></button>
            </div>
            
            <div className='w-full md:w-1/2 flex justify-center'>
                <img src={picture2} alt="picture 02" className='max-w-full h-auto rounded-lg shadow-md'/>
            </div>
        </div>
    </section>

    {/* ad section */}
    <section className='container mx-auto px-4 py-6 sm:py-8 my-8 glass sm:my-12'>
        <div className='flex justify-center'>
            <img src={picture4} alt="picture 04" className='max-w-full h-auto rounded-lg shadow-xl'/>
        </div>
    </section>

    {/* store section */}
    <section className='container mx-auto px-4 py-8 sm:py-12 glass rounded-xl my-8 sm:my-12'>
        <div className='flex flex-col md:flex-row-reverse items-center gap-8'>
            <div className='w-full md:w-1/2'>
                <h2 className='text-2xl sm:text-3xl font-bold text-gray-100 mb-3 sm:mb-4'>Explore our camera rental and sales store!</h2>

                <p className='text-sm sm:text-base text-gray-400 mb-4 sm:mb-6'>Discover a wide selection of cameras, lenses, and accessories for rent or purchase. Whether you're a professional or a hobbyist, we have the perfect equipment for your photography needs.</p>

                <button className=' text-white px-5 sm:px-6 py-2 rounded-md font-semibold bg-gradient-to-r from-[#850FFD] to-[#DF10FD]'><Link to="/seller">Visit NOW !</Link></button>
            </div>
            <div className='w-full md:w-1/2 flex justify-center'>
                <img src={picture3} alt="picture 03" className='max-w-full h-auto rounded-lg shadow-md'/>
            </div>
        </div>
    </section>

    {/* renters section */}

    <section className='container max-auto py-8 sm:py-12 glass rounded-xl my-8 sm:my-12'>
        <div className='flex flex-col md:flex-row items-center gap-8'>
            <div className='w-full md:w-1/2'>
                <h2 className='text-2xl sm:text-3xl font-bold text-gray-100 mb-3 sm:mb-4'>
                     Looking to capture unforgettable moments?
                </h2>
                <p className='text-sm sm:text-base text-gray-400 mb-4 sm:mb-6'>Our professional photographers are ready to help you preserve your special events, from weddings and birthdays to corporate gatherings and family portraits. Get connected with skilled photographers in your area.</p>
                <button className=' text-white px-5 sm:px-6 py-2 rounded-md font-semibold bg-gradient-to-r from-[#850FFD] to-[#DF10FD]'><Link to="/renter">Rent NOW !</Link></button>
            </div>
            
            <div className='w-full md:w-1/2 flex justify-center'>
                <img src={picture5} alt="picture 02" className='max-w-full h-auto rounded-lg shadow-md'/>
            </div>
        </div>
    </section>
    <Footer/>
    </>
  )
}

export default Homepage