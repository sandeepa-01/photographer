import React from 'react'
import Navbar from '../../../Components/Navbar/Navbar'

import Gig from '../../../Components/gig/Gig'
import Footer from '../../../Components/Footer/Footer'
import SecNavbar from '../../../Components/sec_navbar/SecNavbar'
import Bgvideo from '../../../Components/background/Bgvideo'

function Videography() {
  return (
    <div >
        <Navbar/>
        <SecNavbar/>
        <Bgvideo/>
        <div className='px-25 py-10'>
          <div>
            <h1 className='text-center text-white text-4xl font-bold'> Videography</h1>
          </div>

        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        <Gig/>
        <Gig/>
        <Gig/>
        <Gig/>
        <Gig/>
        <Gig/>
        </div>
          <div className='py-8'>

          </div>
        <Footer/>
    </div>
  )
}

export default Videography