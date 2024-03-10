import React from 'react'
import { GrLinkNext } from "react-icons/gr";
import { Link } from 'react-router-dom';
const Preface = () => {
  return (
    <div className='max-w-screen-2xl container mx-auto transition-all duration-300 '>
      <div className='flex flex-col lg:flex-row px-4 md:px-24 justify-between items-center py-32 gap-8'>
        <div className='lg:w-1/2 '>
          <div className='flex flex-col justify-center items-center'>
            <p className='text-3xl lg:text-4xl text-red mb-4 font-semibold'><i>Italyan Restaurant</i></p>
            <p className='text-5xl lg:text-6xl font-extrabold tracking-10 pb-14'>WELCOME</p>
            <p className=' text-center text-lg pb-10'>Donec quis lorem nulla. Nunc eu odio mi. Morbi nec lobortis est. Sed fringilla, nunc sed imperdiet lacinia, nisl ante egestas mi, ac facilisis ligula sem id neque.</p>
            <Link to={'/about'} className='flex items-center group/edit' >
              <p className='text-md text-gray-400 group-hover/edit:text-red cursor-pointer tracking-widest'>OUR STORY  </p>
              <GrLinkNext className='pl-2 w-6 h-6 group-hover/edit:text-red cursor-pointer' />
            </Link>
          </div>
        </div>
        <div className='lg:w-1/2 hap'>
          <div className='lg:ml-32 w-420 h-420 rounded-lg overflow-hidden group'>
            <img className='transition-all duration-500 ease-in-out hover:scale-125 rounded-lg '
              src="https://preview.colorlib.com/theme/pato/images/our-story-01.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Preface
