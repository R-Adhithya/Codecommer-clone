import React from 'react'

export default function NewsLetter() {
  return (
    <div className='bg-[#000300] w-full text-white my-32 text-center md:flex items-baseline gap-4 content-center'>
            <div className='max-w-[1240px] mx-auto'>
                <h1 className='font-bold text-4xl'>
                    Want Tips and tricks to optimize your flow?
                </h1>
                <h6 className='text-2xl mt-4'>
                    Sign up for our newsletter.
                </h6>
            </div>

            <div className='max-w-[1240px] mx-4'>
                <input type="text" placeholder='Enter your email' className='pl-1 w-full my-4 md:my-0 md:w-[300px] rounded-md py-2 text-black'/>
                <button submit className='bg-[#00df9a] mx-2 lg:mx-4  my-4 px-3 rounded-md py-2'>Notify Me</button>
                <p className='my-3 text-left'>We care more bout your privacy. Read our <br /><a href="/" className='text-[#00df9a] hover:underline'>Privacy Policy</a></p>
            </div>
    </div>
  )
}
