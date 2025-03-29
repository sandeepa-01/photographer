import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Gig from '../../Components/gig/Gig'
import Footer from '../../Components/Footer/Footer'
import ThirdNavbar from '../../Components/thrid_navbar/ThirdNavbar'
import Bgvideo from '../../Components/background/Bgvideo'

function Renters() {
  return (
    <div>
        <Navbar/>
        <ThirdNavbar/>
        <Bgvideo/>

          <div className='px-25 py-10'>
              <div>
                <h1 className='text-center text-white text-4xl font-bold mb-3'>Camera Renters</h1>
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

export default Renters