import React from 'react'
import Dnavbar from '../../../Components/D_navbar/Dnavbar'
import Footer from '../../../Components/Footer/Footer'
import Bgvideo from '../../../Components/background/Bgvideo'

function Order() {
  return (
    <div>
        <Dnavbar/>
        <Bgvideo/>
        <div className='flex-grow container mx-auto px-6 py-8'>
            <div className='mb-8'>
                <h1 className='text-3xl text-white font-bold'>Your Orders</h1>
                <p className='text-gray-200 mt-2'>Manage and track all your orders</p>
            </div>

            <div className='glass rounded-lg border border-purple-300 shadow-sm overflow-hidden'>
            <div className='p-4 border-b border-gray-400 bg-gradient-to-r from-[#850FFD] to-[#DF10FD]/10'>
                <div className='flex justify-between items-center'>
                    <h2 className='font-bold text-lg text-white '>Recent Orders</h2>
                    <div className='flex space-x-2'>
                        <select className='px-3 py-1 border text-white border-pink-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-purple cursor-pointer'>
                            <option className='text-black cursor-pointer'>All Orders</option>
                            <option className='text-black cursor-pointer'>Pending</option>
                            <option className='text-black cursor-pointer'>Completed</option>
                            <option className='text-black cursor-pointer    '>Cancelled</option>
                        </select>
                        
                    </div>
                </div>
            </div>

            <table className='w-full'>
                <thead className='bg-gray-50/20 text-left'>
                    <tr className='border-b border-gray-200'>
                        <th className='px-6 py-3 text-xs font-medium text-gray-300 uppercase tracking-wider'>Order Number</th>
                        <th className='px-6 py-3 text-xs font-medium text-gray-300 uppercase tracking-wider'>Client</th>
                        <th className='px-6 py-3 text-xs font-medium text-gray-300 uppercase tracking-wider'>Date</th>
                        <th className='px-6 py-3 text-xs font-medium text-gray-300 uppercase tracking-wider'>Location</th>
                        <th className='px-6 py-3 text-xs font-medium text-gray-300 uppercase tracking-wider'>Price</th>
                    </tr>
                </thead>
                <tbody className='divide-y divide-gray-200/30'>
                    <tr className='hover:bg-gray-50/10'>
                        <td className='px-6 py-4 text-white  whitespace-nowrap'>0001</td>
                        <td className='px-6 py-4 text-white whitespace-nowrap'>Dinith sandeepa</td>
                        <td className='px-6 py-4 text-white whitespace-nowrap'>Mar 10, 2025</td>
                        <td className='px-6 py-4 text-white whitespace-nowrap'>Anuradhapura</td>
                        <td className='px-6 py-4 text-white whitespace-nowrap'> 40 000 LKR</td>
                    </tr>

                    <tr className='hover:bg-gray-50/10'>
                        <td className='px-6 py-4 text-white whitespace-nowrap'>0002</td>
                        <td className='px-6 py-4 text-white whitespace-nowrap'>Samitha wijethunga</td>
                        <td className='px-6 py-4 text-white whitespace-nowrap'>Mar 16, 2025</td>
                        <td className='px-6 py-4 text-white whitespace-nowrap'>Wennappuwa</td>
                        <td className='px-6 py-4 text-white whitespace-nowrap'> 80 000 LKR</td>
                    </tr>

                    <tr className='hover:bg-gray-50/10'>
                        <td className='px-6 py-4 text-white whitespace-nowrap'>0003</td>
                        <td className='px-6 py-4 text-white whitespace-nowrap'>Shone fernando</td>
                        <td className='px-6 py-4 text-white whitespace-nowrap'>Mar 21, 2025</td>
                        <td className='px-6 py-4 text-white whitespace-nowrap'>Marawila</td>
                        <td className='px-6 py-4 text-white whitespace-nowrap'> 20 000 LKR</td>
                    </tr>
                </tbody>
            </table>

            <div className='px-6 py-4 border-t border-gray-200'>
                <div className='flex justify-between items-center'>
                    <span className='text-sm text-gray-400'>Showing 3 of 9 orders</span>
                    <div className='flex space-x-1'>
                        <button className='px-3 py-1 border text-gray-400 border-gray-300 rounded-md text-sm cursor-pointer'>Previous</button>
                        <button className='px-3 py-1 bg-purple-200 text-gray-700 rounded-md text-sm cursor-pointer'>1</button>
                        <button className='px-3 py-1 border text-gray-400 border-gray-300 rounded-md text-sm cursor-pointer'>2</button>
                        <button className='px-3 py-1 border text-gray-400 border-gray-300 rounded-md text-sm cursor-pointer'>3</button>
                        <button className='px-3 py-1 border text-gray-400 border-gray-300 rounded-md text-sm cursor-pointer'>Next</button>
                    </div>
                </div>
            </div>
        </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Order