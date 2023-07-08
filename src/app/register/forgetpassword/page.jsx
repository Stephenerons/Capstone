import Link from 'next/link'
import React from 'react'
import css from './forgetpassword.module.css'


export default function page() {
  return (

    <section className='w-[1280px] h-screen bg-stone-50 flex'>

    <div className='w-[640px] h-screen bg-slate-800 flex flex-col justify-center items-center'>

    <div className='mt-[4rem] text-center'>
    <div className={`h-[329px] rounded-tr-xl rounded-bl-xl ${css.background}`}></div>
        <h1 className=' text-center mt-[3rem] text-[32px] text-[#ff7777] font-semibold'>Forgot Password ?</h1>
        <p className='w-[478px] text-white text-[20px] font-normal mt-[24px] text-center'>
            Let&apos;s help with that 
        </p>
    </div>

</div>
   
    <div className=' h-screen w-[640px] flex flex-col justify-center items-center '>
    <h1 className=' text-[40px] text-[#ff7777] text-center mt-5 mb-8 font-bold'>
        Oxy&apos;s Tv 
    </h1>

    <h2 className='text-[32px] text-[#1b1b1b] font-medium text-center mb-10'>Forget password</h2>


    <form  className=' flex flex-col items-center mb-14'>     
    <input type="email" required maxLength={30} minLength={30} placeholder='Email Address' className='py-2 shadow-md pr-[2.62rem] pl-2.5 w-[21.5rem] outline-none border  rounded-[0.625rem] border-[#A4B3C5]' name="" id="" /> 
    </form>

<div className='flex justify-center flex-col items-center mb-4 mx-auto'>
      <button className='bg-slate-400 transition-colors duration-300 hover:bg-[#ff7777] focus:text-[#Fff]  text-white shadow-lg border-[1px] border-black text-center rounded-[14px] p-2 w-[18rem] mb-10'>Send</button>

</div>

    <div className=' flex'>
    <p className='pr-1'>Already have an account ?  </p> <Link href='./login' passHref> <span className='  hover:text-red-400 text-[#A4B3C5]  transition-colors duration-300 focus:text-[#FF6347]'>Sign in</span> </Link> 
    </div>

</div>

</section>

  )
}

