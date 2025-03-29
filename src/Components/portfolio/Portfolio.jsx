import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import { Link } from 'react-router-dom'
import image01 from '../../assets/img1.jpg'
import image02 from '../../assets/img2.jpg'
import Footer from '../Footer/Footer'
import Bgvideo from '../background/Bgvideo'


function Portfolio() {
  return (
    <div>
        <Navbar/>
        <Bgvideo/>
        <div className='min-h-screen glass'>
          <div className='container mx-auto px-4 py-8'>
          {/* header section */}

          <header className='mb-8'>
            <div className='flex flex-col md:flex-row justify-between items-start md:items-center mb-4'>
              <div className='flex items-center mb-4 md:mv-0 '>
                <h1 className='text-xl text-white font-bold mr-3'>
                  Chopsy events
                </h1>
                <span className='bg-gradient-to-r from-[#850FFD] to-[#DF10FD] text-white text-xs px-2 py-1 rounded-full'>Level - 2</span>
              </div>
              <div className='flex items-center'>
                <div className='flex mr-3'>
                {/* {[1, 2, 3, 4].map((star) => (
                <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              ))} */}
              {/* <Star/> */}
                </div>
                <span className='bg-gradient-to-r from-[#850FFD] to-[#DF10FD] text-white text-xs px-2 py-1 rounded-full'>events - 67</span>
              </div>
            </div>
            <h2 className='text-2xl md:text-3xl text-white font-bold'>I will do portrait photography in Sri Lanka</h2>
          </header>


          <div className='flex flex-col lg:flex-row gap-8'>
            <div className='w-full lg:w-2/3'>

              {/* main content  */}

              <section className='container mx-auto p-4'>
                <div className='rounded-lg overflow-hidden mb-4'>
                   <img src={image01} alt="" className='w-full h-64 md:h-80 object-cover'/>
                </div>

                <div className='grid grid-cols-3 gap-4 mb-6'>
                  {[1,2,3].map ((img) =>(
                    <div key={img} className='rounded-lg overflow-hidden shadow-sm'>
                      <img src={image02} alt={`preview ${img}`} className='w-full h-24 object-cover'/>
                    </div>
                  ))
                  }
                </div>
                <div className=' rounded-lg p-4 shadow-sm'>
                  <p className='text-gray-300'>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu
                    sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla
                    enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor.
                  </p>
                </div>
              </section>


              {/* feedback section */}
              
              <section className='mb-8'>
                <h3 className='text-xl font-bold text-white mb-4'>Feedback</h3>
                <div className='space-y-4'>  
                    {[1, 2, 3, 4, 5].map((feedback) => (
                    <div key={feedback} className="text-white rounded-lg p-4 shadow-sm border border-gray-300/30">
                      <div className="flex items-start">
                        <div className="w-10 h-10 rounded-full bg-purple-200 mr-3 flex-shrink-0"></div>
                        <div>
                          <h4 className="font-medium">Client {feedback}</h4>
                          <p className="text-gray-400 text-sm mt-1">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus
                            hendrerit arcu sed erat molestie vehicula.
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>


              {/* contact section */}
              <section className='mb-8'>
                <div className=' rounded-lg p-6 shadow-md border border-gray-300/30'>
                  <div className='flex flex-col space-y-4'>
                    <textarea placeholder='Type Here ...' className=' text-white w-full p-3 border border-gray-300/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent' rows={4}></textarea>
                    <button className='text-transparent bg-clip-text  bg-gradient-to-r from-[#850FFD] to-[#DF10FD] font-bold py-3 px-6 rounded-lg transition border border-purple-400 hover:duration-200 cursor-pointer'>Sent feedback</button>
                    <Link to="/message" className='bg-gradient-to-r from-[#850FFD] to-[#DF10FD] text-white font-medium py-3 px-6 rounded-lg transition duration-200 text-center'> <button>Contact Me</button></Link>
                  </div>
                </div>
              </section>


              {/* about section */}
              <section className='mb-8'>
                <h3 className='text-xl text-white font-bold mb-4'>
                  Get to know Chopy Events
                </h3>
                <div className='text-white rounded-lg p-6 shadow-md border border-gray-300/30'>
                  <div className='flex justify-between items-center '>
                    <h4 className='text-lg font-bold mr-3'>Chopsy events</h4>
                    <span className='bg-gradient-to-r from-[#850FFD] to-[#DF10FD] text-white text-xs px-2 py-1 rounded-full'>Level - 2</span>
                  </div>

                  <p className='text-sm flex text-gray-400 mb-10'>Events completed - 67</p>

                  <div className='text-purple-400 grid grid-cols-1 md:grid-cols-2 gap-4 my-4'>
                    <div className='flex items-center'>
                      <span className='text-sm'>Anuradhapura, Sri lanka</span>
                    </div>

                    <div className='flex items-center'>
                      <span className='text-sm'>Member since: January 2025</span>
                    </div>

                    <div className='flex items-center'>
                      <span className='text-sm'>Response time: 2 hours</span>
                    </div>

                    <div className='flex items-center'>
                      <span className='text-sm'>Last event: 1 week ago</span>
                    </div>

                    <div className='flex items-center'>
                      <span className='text-sm'>Languages: Sinhala, English</span>
                    </div>
                  </div>

                  <p className='text-gray-300 mt-6'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui officia accusamus quasi perspiciatis magnam vero aspernatur amet voluptates molestias possimus! Magni maxime laboriosam amet at neque explicabo eaque a quibusdam vel laudantium dolorem error nam, autem esse, ullam, nulla non fuga ipsam accusamus minima deserunt in eius. Minus, rerum consequuntur.</p>
                </div>
              </section>

              {/* gallery section */}
              <section>
                <h3 className='text-xl font-bold mb-4'>Gallery</h3>
                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4'>
                  {["Concerts", "Graduation", "Shoots", "Wedding", "Other Events"].map((category) => (
                  <div key={category} className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100">
                    <div className="h-32 overflow-hidden">
                      <img
                        src={image02}
                        alt={category}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-3">
                      <h5 className="font-medium text-sm">{category}</h5>
                    </div>
                  </div>
                ))}
                </div>
              </section>
            </div>

            {/* packages */}
            <div className='w-full lg:w-1/3'>
              <div className='text-white rounded-lg p-6 shadow-md border border-gray-300/30 sticky top-4'>
                <h3 className='text-xl font-bold mb-4'>Pricing and packages</h3>

                {/* photography */}
                <div className='mb-6'>
                  <h4 className='font-bold text-lg mb-3 text-gray-500'>Photography</h4>

                  {/* package tabs */}

                  <div className=' border-b border-purple-300/50 mb-4'>
                    <button className='py-2 px-4 text-sm font-medium text-purple-600 border-b-2 border-purple-700 cursor-pointer'>
                      Basic
                    </button>

                    <button className='py-2 px-4 text-sm font-medium text-gray-400 hover:text-purple-700 cursor-pointer'>
                      Standed
                    </button>

                    <button className='py-2 px-4 text-sm font-medium text-gray-400 hover:text-purple-700 cursor-pointer'>
                      Advance
                    </button>


                  </div>
                  <Link to={"/payments"}><div className='space-y-4'>
                    <div className='p-4 border border-gray-300/30 rounded-lg mb-2 cursor-pointer'>
                      <h5 className='font-medium'>Wedding</h5>
                      <p className='text-lg font-bold my-1'>80,000 LKR</p>
                      <ul className='text-sm text-left text-gray-300 space-y-1 mt-2'>
                        <li>• 200 edited pictures</li>
                        <li>• 5 min video</li>
                        <li>• Printed album</li>
                      </ul>
                      </div>
                  </div></Link>

                  <Link to={"/payments"}><div className='space-y-4 cursor-pointer'>
                    <div className='p-4 border border-gray-300/30 rounded-lg  mb-2'>
                      <h5 className='font-medium'>Photo shoot </h5>
                      <p className='text-[13px] text-gray-400'>Portrait</p>
                      <p className='text-lg font-bold my-1'>50,000 LKR</p>
                      <ul className='text-sm text-left text-gray-300 space-y-1 mt-2'>
                        <li>• 200 edited pictures</li>
                        <li>• 1 min video</li>
                        <li>• Google drive</li>
                      </ul>
                      </div>
                  </div></Link>

                 <Link to={"/payments"}> <div className='space-y-4 cursor-pointer'>
                    <div className='p-4 border border-gray-300/30 rounded-lg  mb-2'>
                      <h5 className='font-medium'>Concert & Music events</h5>
                      <p className='text-lg font-bold my-1'>30,000 LKR</p>
                      <ul className='text-sm text-left text-gray-300 space-y-1 mt-2'>
                        <li>• 150 edited pictures</li>
                        <li>• 2 min video</li>
                        <li>• Google drive</li>
                      </ul>
                      </div>
                  </div></Link>

                  <Link to={"/payments"}><div className='space-y-4 cursor-pointer' >
                    <div className='p-4 border border-gray-300/30 rounded-lg  mb-2'>
                      <h5 className='font-medium'>Graduation</h5>
                      <p className='text-lg font-bold my-1'>10,000 LKR</p>
                      <ul className='text-sm text-left text-gray-300 space-y-1 mt-2'>
                        <li>• 30 edited pictures</li>
                        <li>• 1 min video</li>
                        <li>• Google drive</li>
                      </ul>
                      </div>
                  </div></Link>

                  <Link to={"/paymets"}><div className='space-y-4 cursor-pointer'>
                    <div className='p-4 border border-gray-300/30 rounded-lg  mb-2'>
                      <h5 className='font-medium'>Indoor events</h5>
                      <p className='text-lg font-bold my-1'>40,000 LKR</p>
                      <ul className='text-sm text-left text-gray-300 space-y-1 mt-2'>
                        <li>• 150 edited pictures</li>
                        <li>• 2 min video</li>
                        <li>• Google drive</li>
                      </ul>
                      </div>
                  </div></Link>

                  <Link to={"/paymets"}><div className='space-y-4 cursor-pointer'>
                    <div className='p-4 border border-gray-300/30 rounded-lg mb-2 '>
                      <h5 className='font-medium'>Other events</h5>
                      <p className='text-lg font-bold my-1'>45,000 LKR</p>
                      <ul className='text-sm text-left text-gray-300 space-y-1 mt-2'>
                        <li>• 200 edited pictures</li>
                        <li>• 2 min video</li>
                        <li>• Google drive</li>
                      </ul>
                      </div>
                  </div></Link>
                </div>

                {/* videography */}
                <div className='mb-6'>
                  <h4 className='font-bold text-lg mb-3 text-purple-500'>Videography</h4>

                  {/* package tab */}
                  <div className=' border-b border-gray-500 mb-4'>
                    <button className='py-2 px-4 text-sm font-medium text-purple-600 border-b-2 border-purple-700 cursor-pointer'>
                      Basic
                    </button>

                    <button className='py-2 px-4 text-sm font-medium text-gray-400 hover:text-purple-700 cursor-pointer'>
                      Standed
                    </button>

                    <button className='py-2 px-4 text-sm font-medium text-gray-400 hover:text-purple-700 cursor-pointer'>
                      Advance
                    </button>
                  </div>
                  <Link to={"/paymets"}><div className='space-y-4 cursor-pointer'>
                    <div className='p-4 border border-gray-300/30 rounded-lg mb-2'>
                      <h5 className='font-medium'>Wedding</h5>
                      <p className='text-lg font-bold my-1'>80,000 LKR</p>
                      <ul className='text-sm text-left text-gray-300 space-y-1 mt-2'>
                        <li>• High quality video</li>
                        <li>• 15 min video</li>
                        <li>• Google drive</li>
                      </ul>
                      </div>
                  </div></Link>

                  <Link to={"/payments"}><div className='space-y-4 cursor-pointer'>
                    <div className='p-4 border border-gray-300/30 rounded-lg  mb-2'>
                      <h5 className='font-medium'>Music events</h5>
                      <p className='text-lg font-bold my-1'>20,000 LKR</p>
                      <ul className='text-sm text-left text-gray-300 space-y-1 mt-2'>
                        <li>• High quality video</li>
                        <li>• 5 min video </li>
                        <li>• Google drive</li>
                      </ul>
                      </div>
                  </div></Link>

                  <Link to={"/payments"}><div className='space-y-4 cursor-pointer'>
                    <div className='p-4 border border-gray-300/30 rounded-lg  mb-2'>
                      <h5 className='font-medium'>Documentary</h5>
                      <p className='text-lg font-bold my-1'>30,000 LKR</p>
                      <ul className='text-sm text-left text-gray-300 space-y-1 mt-2'>
                        <li>• High quality video</li>
                        <li>• 5 min video</li>
                        <li>• Google drive</li>
                      </ul>
                      </div>
                  </div></Link>

                  <Link to={"/payments"}><div className='space-y-4 cursor-pointer'>
                    <div className='p-4 border border-gray-300/30 rounded-lg  mb-2'>
                      <h5 className='font-medium'>Other events</h5>
                      <p className='text-lg font-bold my-1'>80,000 LKR</p>
                      <ul className='text-sm text-left text-gray-300 space-y-1 mt-2'>
                        <li>• High quality video</li>
                        <li>• 5 min video</li>
                        <li>• Google drive</li>
                      </ul>
                      </div>
                  </div></Link>

                  
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Portfolio