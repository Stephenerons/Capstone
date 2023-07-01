"use client"
import Image from 'next/image'
import React, { useState}  from 'react'
import myLogo from '../images/logo.png'
import Link from 'next/link'
// import { RxHamburgerMenu } from 'react-icons/Rx'


export default function Navbar() {

const [style, setStyle] = useState('')

const activate = (color) => (
  setStyle(color)

)

  return (
    <>
          <nav className='md:w-full bg-[#fffff] md:h-[104px] md:mx-auto md:my-auto md:flex  md:justify-between h-20 shadow-md md:rounded-lg md:bg-[#fff] md:fixed md:top-0 md:z-50'>
                <div className=' flex justify-center items-center my-auto pl-8'>
                <Image className='w-[50px]' width={200} height={200} src={myLogo} alt=''/> <p className='font-medium text-[18px]'>Oxycode</p>
                  {/* <RxHamburgerMenu size={30}/>
                  <ion-icon name="menu-outline"></ion-icon> */}
                 </div>

                <div className='flex'>

                    <span>
                   <ul className=' md:flex md:flex-row md:justify-around md:gap-[53px] md:h-fit md:w-fit md:mr-[53px] md:pt-[34px]  '>
                         <Link onClick={ () =>  activate('Home')} href='../'> <li className={ style === setStyle ? 'text-[#FF7777]' : 'font-medium text-[20px] text-center' }>Home</li> </Link> 
                         <Link onClick={ () => activate('Courses')}  href={'../courses'}> <li className=' font-medium text-[20px] text-center'>Courses</li> </Link> 
                         <Link onClick={ () => activate('Dashboard')} href={'../'}> <li className=' font-medium text-[20px] text-center'>Dashboard</li> </Link> 
                   </ul>
                   </span>
                   
                    
                      

                     <div className=' md:pt-[24px]  mr-8 '>
                        <button className='w-[117px] h-[40px] px-[16px] rounded-[6px] bg-[#F6E5E3] text-[20px] text-[#FF7777] font-medium'> Register </button> 
                     </div>
                    
                </div>
                    
              
          </nav>
    </>
  )
}
