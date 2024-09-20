import React from 'react'
import {ReactTyped} from 'react-typed'
export default function Hero() {
  return (
    // <div className='text-center items-center justify-center pt-72 max-h-[1240px]'>
    //     <div className='max-w-[800px] mt-[-96px] w-full h-screen  mx-auto text-center flex flex-col '>
    //         <p className='uppercase font-bold text-xl text-[#00df9a] p-2'>growing with data analytics</p>
    //         <h1 className='font-bold text-4xl md:text-7xl sm:6xl md:py-6'>Grow with data.</h1>
    //         <div className='text-xl sm:text-4xl md:text-5xl'>
    //             <p>
    //                 Fast, Flexible financing for <ReactTyped strings={['BTB','BTC','SASS']} typeSpeed={120} backSpeed={130} input_type="text" loop/>
    //             </p>
    //         </div>
    //         <button className='bg-[#00df9a] text-black px-6 py-3 mt-9 mx-auto rounded-md font-semibold'>Get Started</button>
    //     </div>
    // </div>
    <div className='text-center items-center justify-center pt-72 max-h-[1240px]'>
      <div className='max-w-[800px] mb-64 mx-auto text-center flex flex-col max-h-screen'>
        <p className='uppercase font-bold text-xl text-[#00df9a] p-2'>growing with data analytics</p>
        <h1 className='font-bold text-4xl md:text-7xl sm:6xl md:py-6'>Grow with data.</h1>
        <div className='text-xl sm:text-4xl md:text-5xl'>
                 <p>
                     Fast, Flexible financing for <ReactTyped strings={['BTB','BTC','SASS']} typeSpeed={120} backSpeed={130} input_type="text" loop/>
                 </p>
             </div>
             <button className='bg-[#00df9a] text-black px-6 py-3 my-9 mx-auto rounded-md font-semibold'>Get Started</button>
      </div>
    </div>
  )
}
