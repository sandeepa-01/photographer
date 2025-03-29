import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import Gig from '../../Components/gig/Gig'
import ThirdNavbar from '../../Components/thrid_navbar/ThirdNavbar'
import Bgvideo from '../../Components/background/Bgvideo'

function Sellers() {
  return (
    <div>
      <Navbar/>
      <ThirdNavbar/>
      <Bgvideo/>

          <div className='px-25 py-10'>
              <div>
                <h1 className='text-center text-white mb-3 text-4xl font-bold'>Camera Sellers</h1>
              </div>

              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
              <Gig/>
              <Gig/>
              <Gig/>
              <Gig/>
              <Gig/>
              <Gig/>

              </div>
          </div>
      <Footer/>
    </div>
  )
}

export default Sellers