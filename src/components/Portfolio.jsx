import React from 'react'
import { FaFolderOpen, FaUserCircle } from 'react-icons/fa'

export default function Portfolio() {
  return (
    
       <section className='text-gray-800 px-4 h-screen flex flex-col items-center justify-evenly relative' id='portfolio'>
      <section className='flex text-justify max-w-2xl  flex-col h-full items-center justify-center'>
      <div data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom"
     data-aos-duration="1000">

        <h1 className='text-2xl font-bold text-center flex items-center gap-2 mb-10'>
          <FaFolderOpen className="w-6 h-6 text-gray-800 " />
          PORTFÓLIO
          </h1>
        </div>
        </section>
        </section>
  )
}
