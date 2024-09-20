import React from 'react'
import Double from "../assets/double.png"
import Single from "../assets/single.png"
import triple from "../assets/triple.png"
export default function Cards() {
  return (
    <div className='w-full py-[10rem] px-4 bg-white text-black'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                <img src={Single} alt="Single Plan" className='w-28 mx-auto mt-[-3rem] bg-white' />
                <h2 className='text-2xl font-bold text-center py-8'>Single User</h2>
                <p className='text-center text-4xl font-bold'>$149</p>
                <div>
                    <p className='py-2 border-b mx-8 mt-8'>500 GB Storage</p>
                    <p className='py-2 border-b mx-8'>1 Granted User</p>
                    <p className='py-2 border-b mx-8'>Send up to 2 GB</p>
                </div>
                <button className='bg-[#00df9a] text-center mx-auto px-3 py-2 my-4 rounded-sm hover:shadow-xl'>Start Trial</button>
            </div>
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                <img src={Double} alt="Single Plan" className='w-28 mx-auto mt-[-3rem] bg-white' />
                <h2 className='text-2xl font-bold text-center py-8'>Two Users</h2>
                <p className='text-center text-4xl font-bold'>$399</p>
                <div>
                    <p className='py-2 border-b mx-8 mt-8'>1 TB Storage</p>
                    <p className='py-2 border-b mx-8'>2 Granted User</p>
                    <p className='py-2 border-b mx-8'>Send up to 5 GB</p>
                </div>
                <button className='bg-[#00df9a] text-center mx-auto px-3 py-2 my-4 rounded-sm hover:shadow-xl'>Start Trial</button>
            </div>
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                <img src={triple} alt="Triple Plan" className='w-28 mx-auto mt-[-3rem] bg-white' />
                <h2 className='text-2xl font-bold text-center py-8'>Three Users</h2>
                <p className='text-center text-4xl font-bold'>$549</p>
                <div>
                    <p className='py-2 border-b mx-8 mt-8'>1.5 TB Storage</p>
                    <p className='py-2 border-b mx-8'>3 Granted User</p>
                    <p className='py-2 border-b mx-8'>Send up to 10 GB</p>
                </div>
                <button className='bg-[#00df9a] text-center mx-auto px-3 py-2 my-4 rounded-sm hover:shadow-xl'>Start Trial</button>
            </div>
        </div>
    </div>
  )
}
