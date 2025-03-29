import React from 'react'
import searchicon from '../../assets/search-icon.png'

function SearchBar() {
  return (
    <div>    <section className='container mx-auto px-4 py-6 sm:py8'>
                <div className='max-w-2xl mx-auto relative'>
                    <input type="text" placeholder='Search for photographers, cameras, or services ...' className='glass w-full py-2 sm:py-3 px-4 pr-12 border border-gray-300/30 rounded-full focus:outline-none text-white focus:ring-1 focus:ring-purple-900'/>
                    <button className='absolute right-5 top-1/3 transition-translate-y-1/2 text-purple-dark'><img src={searchicon} alt="search icon" className='w-5 h-5 sm:h-6 not-sm:w-6' /></button>
                </div>
            </section>
</div>
  )
}

export default SearchBar