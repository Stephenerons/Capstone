import Link from 'next/link'
import React from 'react'
import {FcGoogle} from 'react-icons/Fc'
import {SiFacebook} from 'react-icons/Si'
import{SiApple} from 'react-icons/Si'
import style from './login.module.css'


export default function page() {
  return (


    <section className='w-[1280px] h-screen bg-stone-50 flex'>
<div className='w-[640px] h-screen bg-slate-800 flex flex-col justify-center items-center'>

    <div className='mt-[4rem] text-center'>
        
        <div className={`h-[329px] rounded-tr-xl rounded-bl-xl ${style.background}`}></div>
        <h1 className=' text-center mt-[3rem] text-[32px] text-[#ff7777] font-semibold'>Welcome !</h1>
        <p className='w-[478px] text-white text-[20px] font-normal mt-[24px] text-center'>
            It&apos;s nice to have you back
        </p>
        
    </div>

</div>
    

    <div className='h-screen w-[640px] bg-stone-50 flex flex-col justify-center items-center '>
    <h1 className=' text-[40px] text-[#ff7777] text-center mb-4 mt-5 font-bold'>
        Oxy&apos;s Tv 
    </h1>

    <h2 className='text-[24px] text-[#1b1b1b] flex justify-center mb-8 font-medium'>Login</h2>

    <form  className=' flex flex-col items-center mb-8'>     
    <input type="email" required maxLength={30} minLength={30} placeholder='Email Address' className='py-2 shadow-md pr-[2.62rem] pl-2.5 w-[21.5rem] mb-6 outline-none border  rounded-[0.625rem] border-[#A4B3C5]' name="" id="" />
    <input type="password"  required maxLength={20} minLength={8} placeholder='Password' className='py-2 pr-[2.62rem] shadow-md w-[21.5rem] pl-2.5 outline-none border rounded-[0.625rem] border-[#A4B3C5]' name=""  id="" />

    </form>

    <Link href='./forgetpassword' passHref> <p className='flex justify-end mb-6 text-[14px] pr-3 text-[#1b1b1b] w-[20rem] hover:text-[#FF6347] focus:text-[#FF6347] font-light' >Forget Password ?</p></Link>


        <div className='flex justify-center flex-col items-center '>

            <Link href={'../'} passHref> <button className='bg-slate-400 transition-colors duration-300 hover:bg-[#ff7777] focus:text-[#Fff]  text-white shadow-lg border-[1px] border-black text-center rounded-[14px] p-2 w-[18rem] mb-8'>Sign Up</button></Link>

            <div className="w-[375px] h-[17px] justify-center items-center gap-[26px] inline-flex">
  <div className="w-[50px] h-[0px] border border-[#A4B3C5]"></div>
  <div className="text-black text-[14px] font-normal">or continue with ?</div>
  <div className="w-[50px] h-[0px] border border-[#A4B3C5]"></div>
</div>

        <div className='flex'>
           <span className='bg-[#E9EFF7] px-[20px] py-[10px] my-8 mx-4 rounded-[10px] shadow-lg'>
           <Link href={'https://accounts.google.com/signup/v2/createaccount?flowName=GlifWebSignIn&flowEntry=SignUp'} passHref><FcGoogle size={16}/></Link>
            </span> 
            

            <span className='p-8 bg-[#E9EFF7] px-[20px] py-[10px] my-8  mx-4 rounded-[10px] shadow-lg'>
            <Link href={'https://www.facebook.com/login'} passHref><SiFacebook size={16} /></Link> 
            </span>
            

            <span className='p-8 bg-[#E9EFF7] px-[20px] py-[10px] my-8  mx-4 rounded-[10px] shadow-lg'>
            <Link href={'https://www.icloud.com/'} passHref><SiApple size={16}/></Link>
            </span>
            

        </div>

    </div>

    <div className=' flex'>
              <p className='pr-1'>Don&apos;t have an account ?  </p> <Link href='./signup' passHref> <span className=' hover:text-red-400 text-[#A4B3C5]  transition-colors duration-300 focus:text-[#FF6347]'>Sign Up</span> </Link> 
    </div>
</div>
</section>
  )
}
