"use client"
import { useState } from 'react'
import pic from './images/airbnb.png'
import Slack from './images/Slack.png'
import twitter from './images/twitter.png'
import mapbox from './images/mapbox.png'
import tools from './images/tools.webp'
import Ads from './images/Googleads.png'
import laptop from './images/laptopondeskbcg.jpg'
import typo from './images/typography.webp'
import webdev from './images/webdevelopment.png'
import illus from './images/Illustration2.png'
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import jobs from './jsonfiles/jobs.json'
import Image from 'next/image'
import React from 'react'
import { BsPlayCircle } from 'react-icons/bs'
import ill from './images/illustration.png'


SwiperCore.use([Navigation, Pagination, Autoplay]);



const data = [

  {
    "id": 1,
    "rating": 5,
    "stars": 5,
    "viewnums": '(400)',
    "newprice": '$170',
    "oldprice": '$350',
    "image": tools,
    "title": "Design",
    "subtitle": "Ultimate google ads training",
    "names": "John"

  },

  {
    "id": 2,
    "rating": 5,
    "stars": 5,
    "viewnums": '(200)',
    "newprice": '$180',
    "oldprice": '$250',
    "image": Ads,
    "title": "Development",
    "subtitle": "Web developer bootcamp",
    "names": "Sophia"
  },

  {
    "id": 3,
    "rating": 5,
    "stars": 5,
    "viewnums": '(900)',
    "newprice": '$60',
    "oldprice": '$150',
    "image": laptop,
    "title": "Marketing",
    "subtitle": "graphic design essentials with Adobe photoshop",
    "names": "Liam"
  },

  {
    "id": 4,
    "rating": 5,
    "stars": 5,
    "viewnums": '(600)',
    "newprice": '$160',
    "oldprice": '$200',
    "image": typo,
    "title": "Design",
    "subtitle": "graphic design essentials with Adobe photoshop",
    "names": "Emma"
  },

  {
    "id": 5,
    "rating": 5,
    "stars": 5,
    "viewnums": '(80)',
    "newprice": '$800',
    "oldprice": '$1,350',
    "image": webdev,
    "title": "Ultimate google ads trainingArt",
    "subtitle": "Random Subtitle 5",
    "names": "Noah"
  },

  {
    "id": 6,
    "rating": 5,
    "stars": 5,
    "viewnums": '(10)',
    "newprice": '$170',
    "oldprice": '$400',
    "image": tools,
    "title": "Development",
    "subtitle": "graphic design essentials with Adobe photoshop",
    "names": "Isabella"
  },

  {
    "id": 7,
    "rating": 5,
    "stars": 5,
    "viewnums": '(759)',
    "newprice": '$53',
    "oldprice": '$90',
    "image": Ads,
    "title": "Marketing",
    "subtitle": "Random Subtitle 7",
    "names": "Jacob"
  },

  {
    "id": 8,
    "rating": 5,
    "stars": 5,
    "viewnums": '(76)',
    "newprice": '$327',
    "oldprice": '$875',
    "image": laptop,
    "title": "Design",
    "subtitle": "graphic design essentials with Adobe photoshop",
    "names": "Oliver"
  },

  {
    "id": 9,
    "rating": 5,
    "stars": 5,
    "viewnums": '(754)',
    "newprice": '$534',
    "oldprice": '$850',
    "image": typo,
    "title": "Art",
    "subtitle": "Ultimate google ads training",
    "names": "Mason"
  },

  {
    "id": 10,
    "rating": 5,
    "stars": 5,
    "viewnums": '(6)',
    "newprice": '$432',
    "oldprice": '$764',
    "image": webdev,
    "title": "Development",
    "subtitle": "graphic design essentials with Adobe photoshop",
    "names": "Elijah"
  },

  {
    "id": 11,
    "rating": 5,
    "stars": 5,
    "viewnums": '(565)',
    "newprice": '$36',
    "oldprice": '$50',
    "image": tools,
    "title": "Markering",
    "subtitle": "Web developer bootcamp",
    "names": "Aiden"
  },

  {
    "id": 12,
    "rating": 5,
    "stars": 5,
    "viewnums": '(42)',
    "newprice": '$769',
    "oldprice": '$2000',
    "image": Ads,
    "title": "Design",
    "subtitle": "Random Subtitle 12",
    "names": "Carter"
  },

  {
    "id": 13,
    "rating": 5,
    "stars": 5,
    "viewnums": '(426)',
    "newprice": '$453',
    "oldprice": '$968',
    "image": laptop,
    "title": "Art",
    "subtitle": "Ultimate google ads training3",
    "names": "Henry"
  },

  {
    "id": 14,
    "rating": 5,
    "stars": 5,
    "viewnums": '(246)',
    "newprice": '$746',
    "oldprice": '$1,667',
    "image": typo,
    "title": "Development       ",
    "subtitle": "Ultimate google ads training",
    "names": "Gabriel"
  },

  {
    "id": 15,
    "rating": 5,
    "stars": 5,
    "viewnums": '(632)',
    "newprice": '$343',
    "oldprice": '$675',
    "image": webdev,
    "title": "Markering",
    "subtitle": "graphic design essentials with Adobe photoshop",
    "names": "Samuel"
  },

  {
    "id": 16,
    "rating": 5,
    "stars": 5,
    "viewnums": '(223)',
    "newprice": '$563',
    "oldprice": '$875',
    "image": tools,
    "title": "Design",
    "subtitle": "graphic design essentials with Adobe photoshop",
    "names": "David"
  },

  {
    "id": 17,
    "rating": 5,
    "stars": 5,
    "viewnums": '(12)',
    "newprice": '$435',
    "oldprice": '$850',
    "image": Ads,
    "title": "Art",
    "subtitle": "Web developer bootcamp",
    "names": "Joseph"
  },

  {
    "id": 18,
    "rating": 5,
    "stars": 5,
    "viewnums": '(34)',
    "newprice": '$170',
    "oldprice": '$350',
    "image": laptop,
    "title": "Development       ",
    "subtitle": "Ultimate google ads training",
    "names": "Jackson"
  },

  {
    "id": 19,
    "rating": 5,
    "stars": 5,
    "viewnums": '(223)',
    "newprice": '$35',
    "oldprice": '$100',
    "image": typo,
    "title": "Markering",
    "subtitle": "Ultimate google ads training",
    "names": "Anthony"
  },

  {
    "id": 20,
    "rating": 5,
    "stars": 5,
    "viewnums": '(1,345)',
    "newprice": '$170',
    "oldprice": '$350',
    "image": webdev,
    "title": "Design",
    "subtitle": "graphic design essentials with Adobe photoshop",
    "names": "Jonathan"
  }
]


export default function Page() {

  const [isExpanded, setIsExpanded] = useState(false);

  const view = () => {
    setIsExpanded(!isExpanded);
    console.log(isExpanded)
  }



  const filteredCard = data.slice(0, 8).map((card) => (

    <div key={card.id} className=' w-[252px] rounded-lg border-2 flex flex-col transform hover:scale-105 hover:shadow-lg'>

      <div className='w-[252px] h-[132px] rounded-t-[8px] border-r-2 '>
        <Image className='w-[252px] h-[132px] rounded-t-lg' src={card.image} width={200} height={200} alt={card.title} />
      </div>


      <div className='w-[252px] h-[213px] bg-[#fcf7f7] border-r-2'>
        <div className=' w-fit rounded-[1.25rem] p-2 bg-[#E8e4f8] mt-6 ml-4 '>
          <h1 className='text-xs text-center text-[#7A77FF] font-normal '>
            {card.title}
          </h1>
        </div>

        <h2 className='text-sm text-[#333333] font-semibold h-[34px] mt-4  ml-4'>
          {card.subtitle}
        </h2>

        <p className=' text-[#7a77ff] font-normal text-xs mt-4 ml-4 '>
          {card.names}
        </p>

        <div className='W-[156PX] h-[34px] gap-2  mt-4 flex flex-col ml-4'>

          <span className=' gap-4'>
            <p className=' text-[10px] font-normal text-[#111111]'>
              {card.rating}
            </p>

            <p>

            </p>

            <p className='text-[#111111] text-[10px] font-normal'>
              {card.viewnums}
            </p>
          </span>


          <span className='gap-3 flex'>

            <p className='font-light text-[#111111] text-[10px] '>
              {card.newprice}
            </p>

            <p className='font-light text-[#666666] text-[10px] line-through'>
              {card.oldprice}
            </p>

          </span>

        </div>

      </div>

    </div>
  ))



  const card = data.map((card) => (

    <div key={card.id} className=' w-[252px] rounded-lg border-2 flex flex-col transform hover:scale-105 hover:shadow-lg'>

      <div className='w-[252px] h-[132px] rounded-t-[8px] border-r-2 '>
        <Image className='w-[252px] h-[132px] rounded-t-lg' width={100} height={100} src={card.image} alt={card.title} />
      </div>

      <div className='w-[252px] h-[213px] bg-[#fcf7f7] border-r-2'>
        <div className=' w-fit rounded-[1.25rem] p-2 bg-[#E8e4f8] mt-6 ml-4 '>
          <h1 className='text-xs text-center text-[#7A77FF] font-normal '>
            {card.title}
          </h1>
        </div>

        <h2 className='text-sm text-[#333333] font-semibold h-[34px] mt-4  ml-4'>
          {card.subtitle}
        </h2>

        <p className=' text-[#7a77ff] font-normal text-xs mt-4 ml-4 '>
          {card.names}
        </p>

        <div className='W-[156PX] h-[34px] gap-2  mt-4 flex flex-col ml-4'>

          <span className=' gap-4'>
            <p className=' text-[10px] font-normal text-[#111111]'>
              {card.rating}
            </p>

            <p>

            </p>

            <p className='text-[#111111] text-[10px] font-normal'>
              {card.viewnums}
            </p>
          </span>


          <span className='gap-3 flex'>

            <p className='font-light text-[#111111] text-[10px] '>
              {card.newprice}
            </p>

            <p className='font-light text-[#666666] text-[10px] line-through'>
              {card.oldprice}
            </p>

          </span>

        </div>

      </div>

    </div>

  )
  )
  const career = jobs.map((job) => (
    <div key={job.id} className=' w-[252px] h-[394px] rounded-lg border-2 flex flex-col transform hover:scale-105 hover:shadow-lg'>

      <div className='w-[252px] h-[267px] rounded-t-[8px] border-r-2  bg-blue-600'>
        <Image className='w-[252px] h-[267px] rounded-t-lg' src={job.image} width={200} height={200} alt={card.title} />
      </div>

      <div className='w-[252px] h-[157px] bg-[#fcf7f7] border-r-2 rounded-b-lg'>

        <h1 className='text-[1.75rem] text-center text-[#333] font-semibold mt-8 '>
          {job.name}
        </h1>


        <h2 className='text-base text-[#666] font-medium mt-4 text-center ml-4'>
          {job.specialty}
        </h2>
      </div>

    </div>))


  return (

    <section className='h-full'>


      <div className=' w-[1080px]  h-[30.8125rem] bg-[#F6E5E3] rounded-[1.5625rem]  mx-[100px] mt-[136px] flex ' >

          <div className='flex ml-[4rem] flex-col'>

                <span className=' mt-[6.81rem]'>

                      <h1 className='font-semibold text-[3.375rem] w-[30.3125rem] h-[8.25rem] text-[#333333] '>
                        Dont just <span className=' text-[#7A77FF]'> dream</span>, <span className=' text-[#7A77FF]'>Learn</span> with us.
                      </h1>

                      <p className=' text-[1.25rem] text-[#333333] mt-[1.8rem]'>
                        Learn anytime anywhere with expert .
                      </p>
                </span>

                 <span className='mt-[2.88rem] flex'>
                      <button className='text-[1.25rem] font-normal px-[24px] py-[10px] bg-[#FF7777] text-white rounded-[1.5625rem]'>
                               Join now
                      </button>


                      <button className='flex ml-[45px] my-auto'>

                              <span className='mr-[15px]'>
                                     <BsPlayCircle size={25} />
                              </span>

                              <p className=' font-normal text-[#333333] '>
                                       Watch course
                              </p>
                      </button>
                   </span>

      
          </div>

                  <Image className='w-[531px] h-[493px]'  src={ill} width={800} height={800} alt='a_pleasant_girl_illustration'/>
 
      </div>

      <section className='mx-[100px] '>

        <div className=''>
          <h2 className=' w-[581px] h-[118px] mt-[120px] ml-[250px] font-semibold text-[48px] text-[#333333] text-center'>
            Trusted by  more than 150+ companies
          </h2>

          <div className='flex justify-center gap-[80px] mt-[88px]'>
            <Image className='w-[117.78px]' src={pic} alt='airbnb' width={50} height={50}/>
            <Image className='w-[45.21px]' src={twitter} width={50} height={50} alt='twitter' />
            <Image className='w-[161.9px]' src={mapbox} width={50} height={50} alt='mapbox' />
            <Image className='w-[149.28px]' src={Slack} width={50} height={50} alt='Slack' />

          </div>

          <div>

            <p className='w-[145px] h-[29px] font-normal text-[24px] text-[#7A77FF] mt-[96px] '>
              Our courses
            </p>

            <h2 className='w-[417px] h-[44px] font-semibold text-[36px] text-[#333333] mt-[24px] '>
              Explore Top Courses
            </h2>

            <div className='w-[1080px] h-[53px] mt-[40px]  gap-[56px] flex items-center '>


              <span className='font-normal text-[16px] text-[#ffffff] py-[12px] px-[10px] bg-[#ff7777] border rounded-[25px] text-center w-[200px]  gap-[10px]' >
                <p>Most popular </p>
              </span>

              <span className='font-normal text-[16px] text-[#666666] h-[24px] w-[138px]  '>
                Development
              </span>

              <span className='font-normal text-[16px] text-[#666666] h-[24px] w-[138px]' >
                Business
              </span>

              <span className='font-normal text-[16px] text-[#666666]' >
                Design
              </span>

              <span className='font-normal text-[16px] text-[#666666]' >
                Marketing
              </span>

              <span className='font-normal text-[16px] text-[#666666] w-[242px] h-[24px]' >
                Health & Fitness
              </span>

            </div>
          </div>

          <div className='  mt-14  gap-4 flex flex-wrap items-start' >
            {isExpanded ? card : filteredCard}
          </div>

          <div className=' mt-10 mb-[102px] rounded-lg border w-fit border-[#FF7777] mx-auto'>
            <button onClick={view} className=' text-[#333] bg-[#FFEBEB] font-normal  text-xl p-4 rounded-lg   ' >
              {isExpanded ? 'View Less' : 'View More'}
            </button>

          </div>

        </div>

      </section>

      <section className='w-[1080px] mx-[100px] '>

        <h2 className='text-5xl font-semibold text-[#333333] mt-[100px] text-center'>
          Our expert instructors
        </h2>

        <p className='text-xl font-medium text-[#666666] mt-[56px] text-center h-6 '>
          Prototype virality direct mailing disruptive bootstrapping startup user experience vesting period equity incubator entrepreneur premium holy grail
        </p>

      </section>

      <section className='  mt-[115px] mx-[100px]  gap-6'>
        <div className=' flex flex-wrap'>
          <Swiper
            spaceBetween={10}
            slidesPerView={4}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
            loop
          >
            {jobs.map((job) => (
              <SwiperSlide key={job.id}>
                <div className=' w-[252px] h-[394px] rounded-lg border-2 flex flex-col transform hover:scale-105 hover:shadow-lg'>

                  <div className='w-[252px] h-[267px] rounded-t-[8px] border-r-2  bg-blue-600'>
                    <Image className='w-[252px] h-[267px] rounded-t-lg' width={200} height={200} src={job.image} alt={job.name} />
                  </div>

                  <div className='w-[252px] h-[157px] bg-[#fcf7f7] border-r-2 rounded-b-lg'>

                    <h1 className='text-[1.75rem] text-center text-[#333] font-semibold mt-8 '>
                      {job.name}
                    </h1>


                    <h2 className='text-base text-[#666] font-medium mt-4 text-center ml-4'>
                      {job.specialty}
                    </h2>
                  </div>

                </div>

              </SwiperSlide>
            ))}
          </Swiper>
        </div>


      </section>



      <div className='rounded-2xl bg-[#F6E5E3] mt-[102px] w-1080 h-[400px] mb-[72px] mx-[100px] flex '>
        <span className='flex flex-col'>
          <h2 className='text[#333] font-semibold text-[40px]  pt-[80px]  ml-14 w-[478px] h-[90px] mb-24'>
            Get ready to learn and grow your Skill
          </h2>

          <button className='rounded-lg bg-[#FF7777] mt-[2.62rem] w-[165px] h-[44px] ml-[56px] '>

            <p className='py-3 px-4 text-base text-white '>
              Get started now
            </p>

          </button>


        </span>


        <span>
          <Image className='absolute right-[102px] w-[740px]' width={400} height={30} src={illus} alt='' />
        </span>

      </div>



    </section>

    // add dark mode 
    // add hover effects 
    // add card effects 
    // add cursors to clickable
    // add links to icons 
    // add animations 
    // recustomize the swiper 


  )
}

