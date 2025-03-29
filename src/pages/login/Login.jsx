import React from 'react';
import { Link } from 'react-router-dom';
import mailicon from '../../assets/icon 1.png';
import lockicon from '../../assets/icon 3.png';
import Bgvideo from '../../Components/background/Bgvideo';

function Login() {
  return (
    <div>
      <Bgvideo />
      <div className='h-screen flex items-center justify-center p-4'>
        <div className='w-full max-w-4xl flex rounded-xl shadow-2xl overflow-hidden'>
          {/* Left side section */}
          <div className='w-2/5 bg-gradient-to-r from-[#850FFD] to-[#DF10FD] p-8 flex flex-col items-center justify-center text-white relative'>
            <div className='absolute'>
              <h1 className='text-3xl font-bold mb-4'>Hello, welcome!</h1>
              <p className='mb-8'>Don't have an account?</p>
              <button className='border-2 border-white bg-transparent text-white font-semibold py-2 px-8 rounded-full cursor-pointer'>
                <Link to='/signin'>Register</Link>
              </button>
            </div>
          </div>

          {/* Right side section */}
          <div className='w-3/5 glass p-12 flex flex-col'>
            <h2 className='text-3xl font-bold text-white text-center mb-10'>
              Login
            </h2>
            <div className='mb-6'>
              <div className='border-2 border-purple-500 rounded-lg flex items-center p-3'>
                <input type='text' placeholder='User name' className='text-white bg-transparent w-full outline-none' />
                <img src={mailicon} alt='mail icon' className='w-4' />
              </div>
            </div>

            <div className='mb-6'>
              <div className='border-2 border-purple-500 rounded-lg flex items-center p-3'>
                <input type='password' placeholder='Password' className='text-white bg-transparent w-full outline-none' />
                <img src={lockicon} alt='lock icon' className='w-4' />
              </div>
            </div>

            {/* Role Selection */}
            <div className='mb-6'>
              <div className='border-2 border-purple-500 rounded-lg flex items-center p-3'>
                <select className='bg-transparent text-white w-full outline-none appearance-none'>
                  <option value='' disabled selected className='text-black'>Select Role</option>
                  <option value='client' className='text-black'>Client</option>
                  <option value='photographer' className='text-black'>Photographer</option>
                </select>
              </div>
            </div>

            <div className='text-right mb-6'>
              <a href='#' className='text-gray-500 hover:text-custom-purple transition-colors duration-300 text-sm'>
                Forgot password?
              </a>
            </div>

            <button className='bg-gradient-to-r from-[#850FFD] to-[#DF10FD] hover:opacity-90 transition-opacity duration-300 text-white font-semibold py-3 px-4 rounded-lg mb-8 cursor-pointer'>
              Login
            </button>

            <div className='mt-auto flex justify-center'>
              <img src='logo-white.png' alt='' className='w-50' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
