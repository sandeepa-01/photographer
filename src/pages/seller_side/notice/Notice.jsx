import React from 'react'
import Dnavbar from '../../../Components/D_navbar/Dnavbar'
import Footer from '../../../Components/Footer/Footer'
import Bgvideo from '../../../Components/background/Bgvideo'

function Notice() {
  return (
    <div>
        <Dnavbar/>
        <Bgvideo/>
        <div className='flex-grow container mx-auto px-6 py-8'>
            <div className='mb-8'>
                <h1 className='text-3xl text-white font-bold'>Notices & Announcements</h1>
                <p className='text-gray-300 mt-2'>Stay updated with important information and announcements</p>
            </div>


            <div className='space-y-6'>

                <div className='glass rounded-lg border border-purple-300/30 shadow-sm overflow-hidden'>
                    <div className='p-4 border-b border-gray-400 bg-purple-light/30 flex justify-between items-center'>
                        <h2 className='font-bold text-white text-lg'>Platform Update: New Features</h2>
                        <span className='text-sm text-gray-500'>March 20, 2024</span>
                    </div>
                    <div className=' text-white p-6'>
                        <p className='mb-4'>We're excited to announce several new features that have been added to the platform </p>
                        <ul className='list-disc pl-5 mb-4 space-y-2'>
                            <li>Enhanced photo editing tools with AI capabilities</li>
                            <li>Improved client communication system</li>
                            <li>New payment options including cryptocurrency</li>
                            <li>Expanded portfolio showcase options</li>
                        </ul>
                        <p>These updates are now live. Please refresh your browser to access the new features.</p>
                        <div className='mt-4 flex justify-end'>
                            <button className='text-purple hover:text-purple-dark font-medium'>Read More</button>
                        </div>
                    </div>
                </div>

            </div>


        </div>

        <Footer/>
    </div>
  )
}

export default Notice