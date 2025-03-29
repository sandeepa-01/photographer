import React from 'react'
import companylogo from '../../assets/clogo.png'
import { Link } from 'react-router-dom'
import Bgvideo from '../background/Bgvideo'


function Gig() {
  return (
    <div>
        <Link to="/portfolio">
            <main>
                {/* service card grid */}
                
                {/* service card 01 */}
                    <div className='glass border  border-gray-300/30 rounded-lg p-8 flex flex-col items-center text-center hover:shadow-md transition-shadow'>
                        <div className='bg-white p-4 rounded-lg mb-4 border border-purple-200'>
                            <img src={companylogo} alt="" className='w-50'/>
                        </div>
                        <h3 className='text-xl text-white font-semibold mb-1'>Chopsy events</h3>
                        <p className='text-purple-400 italic mb-3'>"Freeze the Moments"</p>
                        <div className='bg-gradient-to-r from-[#850FFD] to-[#DF10FD]  text-white px-3 py-1 rounded-full text-sm mb-4'>
                            Level - 1
                        </div>
                        <p className='text-gray-400'>  Professional product photography services tailored to showcase your items with perfect lighting and composition.</p>
                    </div>
               
        </main>
        </Link>
    </div>
  )
}

export default Gig