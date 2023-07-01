import React from 'react'

export default function Footer() {
  return (
    <section className='h-[505px] w-full bg-[#002B34] mt-[92px] flex '>
               <div className='gap-10 flex flex-col items-start  mt-[120px] ml-[100px] mr-24'>
                    <h2 className='font-semibold text-xl text-[#CCD5D6]'>Features</h2> 
                    <p className='text-[#D1D1D1] font-medium text-sm'>Contactless payments</p>
                    <p className='text-[#D1D1D1] font-medium text-sm'>Every card network </p>
                    <p className='text-[#D1D1D1] font-medium text-sm'>Multi currency</p>
                    <p className='text-[#D1D1D1] font-medium text-sm'>Discounts, tips and taxes</p>     
               </div>

               <div className='gap-10 flex flex-col items-start mt-[120px] '>
                      <h2 className='font-semibold text-xl text-[#CCD5D6]'>Industry</h2>
                      <p className='text-[#D1D1D1] font-medium text-sm'>Retail</p>
                      <p className='text-[#D1D1D1] font-medium text-sm'>Food and Resturants </p>
                      <p className='text-[#D1D1D1] font-medium text-sm'>Professional Services </p>
                      <p className='text-[#D1D1D1] font-medium text-sm'>Health Care</p>
               </div >

               <div className='gap-10 flex flex-col items-start ml-24 mt-[120px] '>
                      <h2 className='font-semibold text-xl text-[#CCD5D6]'>Scale</h2>
                      <p className='text-[#D1D1D1] font-medium text-sm'>Growing Business</p>
                      <p className='text-[#D1D1D1] font-medium text-sm'>Startup</p>
                      <p className='text-[#D1D1D1] font-medium text-sm'>Enterprise</p>
                      <p className='text-[#D1D1D1] font-medium text-sm'>Healthcare</p>
               </div>

               <div className='ml-24 mt-[120px] gap-10 flex flex-col items-start' >
                      <h2 className='font-semibold text-xl text-[#CCD5D6]'>Subscribe to our News letter </h2>
                      <p className='text-[#D1D1D1] font-medium text-sm w-[338px] h-[20px]'>We built Nomod for our bilt Nomod of all shapes and size. Weather Handles.</p>
                      <span className='flex'>
                        <input type="email" name="" id="" className='w-[226px] h-[42px] py-3 px-4' placeholder='Enter your email' />
                        <button className='bg-[#FF7777] '>
                          <p className='w-[101px] h-[41px] text-[#ffff] flex justify-center items-center'>Subscribe</p>
                        </button>
                      </span>
               </div>
      </section>
  )
}
