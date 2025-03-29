import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import searchicon from '../../assets/search-icon.png'
import uploadicon from '../../assets/upload.png'
import sendicon from '../../assets/send.png'
import Bgvideo from '../../Components/background/Bgvideo'


function Message() {
  return (
    <div>
        <Navbar/>
        <Bgvideo/>
        <div className='glass font-sans antialiased'>
            <div className='flex h-screen'>
                <div className='w-80 border-r border-gray-200 flex flex-col'>
                    <div className='p-4 border-b border-gray-200'>
                        <div className='flex items-center justify-between'>
                            <h1 className='text-lg font-semibold text-gray-100'>All Messages</h1>
                            <button className='text-gray-500 hover:text-gray-700'><img src={searchicon} alt="" className='h-5 w-5' /></button>
                        </div>
                    </div>

                    {/* message list */}
                    <div className='flex-1 overflow-y-auto'>
                        <div className='p-4 bg-gray-50/20 border-l-4           border-purple-600 cursor-pointer'>
                            <div className='flex items-start'>
                                <div className='relative flex-shrink-0'>
                                    <div className='w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center text-gray-600 font-semibold'>
                                        S
                                    </div>
                                </div>
                                <div className='ml-3 flex-1 min-w-0'>
                                    <div className='flex items-center justify-between'>
                                        <h2 className='text-sm font-semibold text-gray-100 truncate'>
                                            sandeepa
                                        </h2>
                                        <span className='text-xs text-gray-100'>1 Day</span>
                                    </div>
                                    <p className='text-sm text-gray-300 truncate'>@sandeepa</p>
                                </div>
                            </div>
                        </div>

                        {/* message preview */}

                        <div className='p-4 hover:bg-gray-50/10 cursor-pointer'>
                            <div className='flex items-start'>
                                <div className='relative flex-shrink-0'>
                                    <div className='w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center text-gray-600 font-semibold'>
                                        S
                                    </div>
                                    <div className='absolute bottom-0 right-0 w-3 h-3 bg-purple-500 rounded-full border-2 border-white'></div>
                                </div>
                                <div className='ml-3 flex-1 min-w-0'>
                                    <div className='flex items-center justify-between'>
                                        <h2 className='text-sm font-semibold text-gray-100 truncate'>
                                            sandeepa
                                        </h2>
                                        <span className='text-xs text-gray-100'>2 Years</span>
                                    </div>
                                    <p className='text-sm text-gray-300 truncate'>How are you doing.</p>
                                </div>
                            </div>
                        </div>

                        <div className='p-4 hover:bg-gray-50/10 cursor-pointer'>
                            <div className='flex items-start'>
                                <div className='relative flex-shrink-0'>
                                    <div className='w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center text-gray-600 font-semibold'>
                                        S
                                    </div>
                                    <div className='absolute bottom-0 right-0 w-3 h-3 bg-purple-500 rounded-full border-2 border-white'></div>
                                </div>
                                <div className='ml-3 flex-1 min-w-0'>
                                    <div className='flex items-center justify-between'>
                                        <h2 className='text-sm font-semibold text-gray-100 truncate'>
                                            sandeepa
                                        </h2>
                                        <span className='text-xs text-gray-100'>2 Years</span>
                                    </div>
                                    <p className='text-sm text-gray-300 truncate'>How are you doing.</p>
                                </div>
                            </div>
                        </div>

                        <div className='p-4 hover:bg-gray-50/10 cursor-pointer'>
                            <div className='flex items-start'>
                                <div className='relative flex-shrink-0'>
                                    <div className='w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center text-gray-600 font-semibold'>
                                        S
                                    </div>
                                    <div className='absolute bottom-0 right-0 w-3 h-3 bg-purple-500 rounded-full border-2 border-white'></div>
                                </div>
                                <div className='ml-3 flex-1 min-w-0'>
                                    <div className='flex items-center justify-between'>
                                        <h2 className='text-sm font-semibold text-gray-100 truncate'>
                                            sandeepa
                                        </h2>
                                        <span className='text-xs text-gray-100'>2 Years</span>
                                    </div>
                                    <p className='text-sm text-gray-300 truncate'>How are you doing.</p>
                                </div>
                            </div>
                        </div>

                        <div className='p-4 hover:bg-gray-50/10 cursor-pointer'>
                            <div className='flex items-start'>
                                <div className='relative flex-shrink-0'>
                                    <div className='w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center text-gray-600 font-semibold'>
                                        S
                                    </div>
                                    <div className='absolute bottom-0 right-0 w-3 h-3 bg-purple-500 rounded-full border-2 border-white'></div>
                                </div>
                                <div className='ml-3 flex-1 min-w-0'>
                                    <div className='flex items-center justify-between'>
                                        <h2 className='text-sm font-semibold text-gray-100 truncate'>
                                            sandeepa
                                        </h2>
                                        <span className='text-xs text-gray-100'>2 Years</span>
                                    </div>
                                    <p className='text-sm text-gray-300 truncate'>How are you doing.</p>
                                </div>
                            </div>
                        </div>

                        <div className='p-4 hover:bg-gray-50/10 cursor-pointer'>
                            <div className='flex items-start'>
                                <div className='relative flex-shrink-0'>
                                    <div className='w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center text-gray-600 font-semibold'>
                                        S
                                    </div>
                                    <div className='absolute bottom-0 right-0 w-3 h-3 bg-purple-500 rounded-full border-2 border-white'></div>
                                </div>
                                <div className='ml-3 flex-1 min-w-0'>
                                    <div className='flex items-center justify-between'>
                                        <h2 className='text-sm font-semibold text-gray-100 truncate'>
                                            sandeepa
                                        </h2>
                                        <span className='text-xs text-gray-100'>2 Years</span>
                                    </div>
                                    <p className='text-sm text-gray-300 truncate'>How are you doing.</p>
                                </div>
                            </div>
                        </div>

                        

                        


                    </div>
                </div>

                {/* right side  */}
                <div className='flex-1 flex flex-col'>
                    {/* chat header */}
                    <div className='p-4 border-b border-gray-200 flex items-center'>
                        <div className='flex items-center'>
                            <div className='w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center text-gray-600 font-semibold'>
                                S
                            </div>
                            <div className='ml-3'>
                                <h2 className='text-base font-semibold text-gray-900'>Sandeepa</h2>
                                <p className='text-xs text-gray-500'>@sandeepa </p>
                            </div>
                        </div>
                    </div>

                    {/* chat meassage area */}
                    <div className='flex-1 p-4 overflow-y-auto'>
                        <div className='flex items-center justify-center h-full text-gray-400'>
                            <p>No Messages yet</p>
                        </div>
                    </div>

                    {/* message input */}
                    <div className='p-4 border-t border-gray-200'>
                        <div className='flex items-center'>
                            <button className='text-gray-500 hover:text-gray-700 mr-2'>
                                <img src={uploadicon} alt="" className='h-5 w-6'/>
                            </button>
                            <input type="text" placeholder='Send meassage ...' className='flex-1 border border-gray-300 rounded-full py-2 px-4 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500'/>
                            <button className='ml-2 bg-gray-100/10 hover:bg-gray-200 rounded-full p-2 text-gray-600'>
                                <img src={sendicon} alt="" className='h-7 w-7'/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Message