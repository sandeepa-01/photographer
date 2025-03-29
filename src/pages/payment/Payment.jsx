import React from 'react'
import lockicon from '../../assets/lock.png'
import Bgvideo from '../../Components/background/Bgvideo'

function Payment() {
  return (
    <div>
        <Bgvideo/>
        <div className='glass font-sans antialiased'>
            <div className='min-h-screen flex items-center justify-center p-4'>
                <div className=' rounded-xl shadow-lg w-full max-w-md overflow-hidden'>
                    {/* headr */}
                    <div className='px-6 py-4 border-b border-gray-200'>
                        <h1 className='text-xl font-semibold text-gray-300'>Checkout</h1>
                    </div>

                    {/* payment option */}
                    <div className='p-6'>
                        <h2 className='text-lg font-medium text-gray-300 mb-4'>Payment Options</h2>

                        <div className='space-y-3 mb-6'>
                            {/* credit & debit cards option */}
                            <div className=' border border-blue-200 rounded-lg p-4 cursor-pointer'>
                                <div className='flex items-center justify-between'>
                                    <div className='flex items-center'>
                                        <div className='w-5 h-5 bg-purple-800 rounded-full flex items-center justify-center mr-3'>
                                            <div className='w-2 h-2 bg-white rounded-full'>
                                            </div>
                                        </div>
                                        <span className='font-medium text-gray-400'>Credit & Debit Cards</span>

                                        
                                    </div>
                                    <div className="flex space-x-1">
                                        <div className="w-8 h-5 bg-blue-600 rounded"></div>
                                        <div className="w-8 h-5 bg-red-500 rounded"></div>
                                        <div className="w-8 h-5 bg-green-500 rounded"></div>
                                        <div className="w-8 h-5 bg-orange-500 rounded"></div>
                                        <div className="w-8 h-5 bg-yellow-500 rounded"></div>
                                    </div>
                                </div>
                            </div>

                            {/* paypal option */}
                            {/* <div className='border border-gray-200 rounded-lg p-4 cursor-pointer hover:bg-gray-50'>
                                <div className='flex items-center'>
                                    <div className='w-5 h-5 border border-gray-300 rounded-full flex items-center justify-center mr-3'></div>
                                    <span className='font-medium text-gray-800'>PayPal</span>
                                </div>
                            </div> */}
                        </div>

                        {/* card detail form */}
                        <div className='space-y-4'>
                            {/* card number */}
                            <div>
                                <label htmlFor="card-number" class="block text-sm font-medium text-gray-300 mb-2">Card Number</label>
                                <div className='relative'>
                                    <input type="text" id='card-number' Value='**** **** **** ****' placeholder='1234 5678 9012 3456' 
                                    className='w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-200 focus:outline-none focus:ring-1 focus:ring-purple-500 focus:border-purple-500'
                                    readOnly/>

                                    <div className='absolute inset-y-0 right-0 flex items-center pr-3'>
                                        <img src={lockicon} alt="lock icon" className='h-5 w-5 text-gray-400' />
                                    </div>
                                </div>
                            </div>

                            {/* expriation date and cvv */}
                            <div className='grid grid-cols-2 gap-4'>
                                <div>
                                    <label htmlFor="expire" className='block text-sm font-medium text-gray-300 mb-1'>Expiration Date</label>
                                    <input type="text"
                                    id='expire' 
                                    placeholder='MM/YY' className='w-full px-4 py-2 border text-white border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-purple-500 focus:border-purple-500'/>
                                </div>
                                <div>
                                <label htmlFor="cvv" className='block text-sm font-medium text-gray-300 mb-1'>Security Code</label>
                                <input type="text" id='cvv' placeholder='CVV' className='w-full text-white px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-purple-500 focus:border-purple-500' />
                                </div>
                            </div>

                            {/* card holder name */}
                            <div>
                                <label htmlFor="name" className='block text-sm font-medium text-gray-300 mb-1'>Cardholder's Name</label>

                                <input type="text" id='name' placeholder='As written on card' className='w-full px-4 text-white py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-purple-500 focus:border-purple-500' />
                            </div>

                            {/* save card checkbox */}
                            <div className='flex items-center'>
                                <input type="checkbox" id='save-card' className='h-4 w-4 text-purple-500 focus:ring-purple-400 border-gray-300 rounded' />
                                <label htmlFor="save-card" className='ml-2 block text-sm text-gray-400'>Save this card for future payments</label>
                            </div>
                        </div>

                        {/* billing information */}
                        <div className='mt-8'>
                            <h2 className='text-lg font-medium text-gray-300 mb-4'>Billing Information</h2>
                            <div className=' rounded-lg p-4 border border-gray-200'>
                                <div className='flex justify-between items-center'>
                                    <div>
                                        <div className='flex items-center mb-'>
                                            <span className='text-sm font-medium text-gray-300'>Username - </span>
                                            <span className='text-sm font-medium text-gray-400 ml-2'>Sandeepa </span>
                                        </div>

                                        <div className='flex items-center mb-'>
                                            <span className='text-sm font-medium text-gray-300'>Location - </span>
                                            <span className='text-sm font-medium text-gray-400 ml-2'>Anuradhapura </span>
                                        </div>
                                    </div>
                                    <button className='bg-gradient-to-r from-[#850FFD] to-[#DF10FD] text-white px-2 py-1 rounded-4xl cursor-pointer text-sm font-medium'>Add details</button>
                                </div>
                            </div>
                        </div>

                        {/* pay button */}
                        <div className='mt-8'>
                            <button className='w-full  bg-gradient-to-r from-[#850FFD] to-[#DF10FD] text-white font-medium py-3 px-4 rounded-lg cursor-pointer'>Pay 80 000 LKR</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Payment