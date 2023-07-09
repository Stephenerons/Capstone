'use client';
import Image from 'next/image';
import {useParams} from 'next/navigation'
import {BsTwitter, BsLinkedin} from 'react-icons/Bs'
import jobs from '../../jsonfiles/jobs.json'

const ProductDetails = ({ params }) => {
  const router = useParams()
  const {slug} = params
  const details = jobs.find((product) => product.slug === slug);

  if (!details) {
    return <div>Loading...</div>; // Add a loading state while fetching the data
  }
  
  return(
<div className='flex flex-col justify-center items-center mb-[100px] mt-[72px]'>
        <Image className="w-[194px] h-[194px] mt-[4.5rem] mb-[2rem] rounded-full" src={details.image} width={400} height={400} alt= {details.name} /> 
        <h1 className="text-red-400 text-[40px] mb-[1.5rem] font-semibold">{details.name}</h1>
        <h2 className="text-neutral-900 text-[24px] 
        mb-[1.5rem] font-medium ">{details.specialty}</h2>
        <div className="w-[1080px] text-zinc-800 text-[20px] font-normal mb-[3.31rem]">{details.bio}</div>
        <div className= ' flex gap-6 '>

            <span className=''>
            <BsTwitter className='text-[#00acee] transition-colors duration-300' size={30} />
            </span>

            <span>    
            <BsLinkedin className='text-[#00acee] transition-colors duration-300' size={30}/>
            </span>
        </div>

    </div>
  )
  };
  
  export default ProductDetails;
  
  