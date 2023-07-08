// import Image from 'next/image'
import React from 'react'
import styling from './signup.module.css'
import Link from 'next/link'
export default function Signup() {
  return (
    <section className='w-[1280px] h-screen bg-stone-50 flex'>

        <div className='w-[640px] h-screen bg-slate-800 flex flex-col justify-center items-center'>

    <div className='mt-[4rem] text-center'>
    <div className={`h-[329px] rounded-tr-xl rounded-bl-xl ${styling.background}`}> </div>
        <h1 className='  mt-[3rem] text-[32px] text-white pr-1 font-semibold'>Hello <span className='text-[#ff7777]'>There</span>!</h1>
        <p className='w-[478px] text-white text-[20px] font-normal '>
        Welcome to our E-learning community, Lets get you started 
        </p>
    </div>

</div>

        <div  className="w-[640px] h-screen bg-stone-50 flex flex-col justify-center items-center ">
        
            <h2 className="text-red-400 text-[40px] font-semibold text-center mb-[2rem]">Sign Up Form</h2>
            <div className='flex gap-[1.5rem] mb-[1.5rem]'>
                 <input type="text" autoFocus required placeholder= 'First Name' className='py-2 px-[0.625rem] w-[10rem] border rounded-[0.625rem] border-[#A4B3C5] outline-none' name="" id="" />
                 <input type="text" required placeholder='Last Name' className='py-2 px-[0.625rem] w-[10rem] border rounded-[0.625rem] border-[#A4B3C5] outline-none' name="" id="" />
            </div>

            <input type="email" required maxLength={30} minLength={30} placeholder='Email Address' className='py-2 pr-[2.62rem] pl-2.5 w-[21.5rem] mb-[1.5rem] outline-none border rounded-[0.625rem] border-[#A4B3C5]' name="" id="" />
            <input type="password"  required maxLength={20} minLength={8} placeholder='Password' className='py-2 pr-[2.62rem] pl-2.5 w-[21.5rem] mb-[3.75rem] outline-none border rounded-[0.625rem] border-[#A4B3C5]' name=""  id="" />

            <Link href={'../'} passHref>  <button className="w-[21.5rem] h-12 px-10 py-3 bg-slate-400 rounded-2xl gap-2.5 mb-[4rem] text-center  transition-colors duration-300 hover:bg-[#ff7777] ">
                <p className="text-zinc-900 text-[20px]  transition-colors duration-300 font-normal h-full hover:text-[#fff] ">Create Account</p>
            </button> </Link>
           
           <div className='flex'>
            <p className=''>Already have an account ?</p> <Link href='./login' passHref> <span className='  hover:text-red-400 text-[#A4B3C5]  transition-colors duration-300 focus:text-red-400'>Sign in</span> </Link>    
           </div>

        </div>
    </section>
  )
}
