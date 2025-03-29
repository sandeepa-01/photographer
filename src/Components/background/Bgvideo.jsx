import React from 'react'
import backgroundvideo from '../../assets/bg-video 5.mp4'

function Bgvideo() {
  return (
    <div>
      
    <div>
      <video autoPlay loop muted plays-inline  className='background-clip video-background  video-background'>
        <source src={backgroundvideo} />
      </video>
    </div>
    </div>
  )
}

export default Bgvideo