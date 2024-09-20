import React from 'react'
import Laptop from "../assets/laptop.jpg"
export default function Analytics() {
  return (
    <div className="bg-white w-full py-16 px-4">
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <img src={Laptop} alt="Laptop"/>
            <div className='text-black my-32 text-center'>
                <p className='text-[#00df9a] font-medium'>DATA ANALYTICS DASHBOARD</p>
                <h1 className='my-5 font-bold text-4xl '>
                        Manage Data Analytics Centrally    
                </h1>
                <p className='text-left my-4'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur laboriosam facilis totam sint dolorem, hic voluptatum minus quibusdam quod temporibus quam ratione necessitatibus architecto a perferendis! Officia eaque nostrum dicta?
                </p>
                <button className='text-[#00df9a] bg-black font-medium w-[150px] rounded-md py-4 my-4 mx-auto'>Get started</button>
            </div>
        </div>
    </div>
  )
}
