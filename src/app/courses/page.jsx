"use client"
import Image from 'next/image'
import style from './courses.module.css'
import React, { useState, useEffect } from 'react'
// import pic from '../images/e-learning.jpg'
import tools from '../images/tools.webp'
import Ads from '../images/Googleads.png'
import laptop from '../images/laptopondeskbcg.jpg'
import typo from '../images/typography.webp'
import webdev from '../images/webdevelopment.png'
import {GoSearch} from 'react-icons/Go'







const data = [

    {
      "id": 1,
      "rating": 5,
      "stars": 5,
      "viewnums": '(400)',
      "newprice": '$170' ,
      "oldprice": '$350',
      "image":  tools,
      "title": "Design",
      "subtitle": "Ultimate google ads training",
      "names":"John"
      
    },
  
    {
      "id": 2,
      "rating": 5,
      "stars": 5,
      "viewnums": '(200)',
      "newprice": '$180',
      "oldprice": '$250',
      "image":  Ads,
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
      "image":  laptop,
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
      "image":  typo,
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
      "image":  webdev,
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
      "image":  tools,
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
      "image":  Ads,
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
      "image":  laptop,
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
      "image":  typo,
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
      "image":  webdev,
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
      "image":  tools,
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
      "image":  Ads,
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
      "image":  laptop,
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
      "image":  typo,
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
      "image":  webdev,
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
      "image":  tools,
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
      "image":  Ads,
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
      "image":  laptop,
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
      "image":  typo,
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
      "image":  webdev,
      "title": "Design",
      "subtitle": "graphic design essentials with Adobe photoshop",
      "names": "Jonathan"
    }
  ]


  const popular = [
    {
        "id": 1,
        "rating": 5,
        "stars": 5,
        "viewnums": '(400)',
        "newprice": '$170' ,
        "oldprice": '$350',
        "image":  tools,
        "title": "Design",
        "subtitle": "Ultimate google ads training",
        "names":"John"
        
      },
    {
        "id": 2,
        "rating": 5,
        "stars": 5,
        "viewnums": '(600)',
        "newprice": '$160',
        "oldprice": '$200',
        "image":  typo,
        "title": "Design",
        "subtitle": "graphic design essentials with Adobe photoshop",
        "names": "Emma"
      },
    {
        "id": 3,
        "rating": 5,
        "stars": 5,
        "viewnums": '(10)',
        "newprice": '$170',
        "oldprice": '$400',
        "image":  tools,
        "title": "Development",
        "subtitle": "graphic design essentials with Adobe photoshop",
        "names": "Isabella"
      },
    {
        "id": 4,
          "rating": 5,
        "stars": 5,
        "viewnums": '(42)',
        "newprice": '$769',
        "oldprice": '$2000',
        "image":  Ads,
        "title": "Design",
        "subtitle": "Random Subtitle 12",
        "names": "Carter"
      },
    {
        "id": 5,
          "rating": 5,
        "stars": 5,
        "viewnums": '(426)',
        "newprice": '$453',
        "oldprice": '$968',
        "image":  laptop,
        "title": "Art",
        "subtitle": "Ultimate google ads training3",
        "names": "Henry"
      },
    {
        "id": 6,
          "rating": 5,
        "stars": 5,
        "viewnums": '(12)',
        "newprice": '$435',
        "oldprice": '$850',
        "image":  Ads,
        "title": "Art",
        "subtitle": "Web developer bootcamp",
        "names": "Joseph"
      },
    {
        "id": 7,
          "rating": 5,
        "stars": 5,
        "viewnums": '(34)',
        "newprice": '$170',
        "oldprice": '$350',
        "image":  laptop,
        "title": "Development       ",
        "subtitle": "Ultimate google ads training",
        "names": "Jackson"
      },
    {
        "id": 8,
          "rating": 5,
        "stars": 5,
        "viewnums": '(1,345)',
        "newprice": '$170',
        "oldprice": '$350',
        "image":  webdev,
        "title": "Design",
        "subtitle": "graphic design essentials with Adobe photoshop",
        "names": "Jonathan"
      }
  ]




 


//   const random =Math.floor(Math.random()*data.length).map((card) =>( 

//     <div  key={card.id} className=' w-[252px] rounded-lg border-2 flex flex-col transform hover:scale-105 hover:shadow-lg'>
              
//     <div className='w-[252px] h-[132px] rounded-t-[8px] border-r-2 '>    
//     <Image className='w-[252px] h-[132px] rounded-t-lg' src={card.image}/> 
//     </div>

//     <div className='w-[252px] h-[213px] bg-[#fcf7f7] border-r-2'>
//           <div className=' w-fit rounded-[1.25rem] p-2 bg-[#E8e4f8] mt-6 ml-4 '>
//             <h1 className='text-xs text-center text-[#7A77FF] font-normal '>
//                 {card.title}
//             </h1>
//           </div>

//           <h2 className='text-sm text-[#333333] font-semibold h-[34px] mt-4  ml-4'>
//             {card.subtitle}
//           </h2>

//           <p className=' text-[#7a77ff] font-normal text-xs mt-4 ml-4 '>
//             {card.names}
//           </p>

//             <div className='W-[156PX] h-[34px] gap-2  mt-4 flex flex-col ml-4'>

//               <span className=' gap-4'>
//                 <p className=' text-[10px] font-normal text-[#111111]'>
//                 {card.rating}
//                 </p>

//                 <p>
                  
//                 </p>

//                 <p className='text-[#111111] text-[10px] font-normal'>
//                     {card.viewnums}
//                 </p>
//               </span>
              

//               <span className='gap-3 flex'>

//                 <p className='font-light text-[#111111] text-[10px] '>
//                   {card.newprice} 
//                 </p>

//                 <p className='font-light text-[#666666] text-[10px] line-through'>
//                 {card.oldprice}
//                 </p>

//               </span>
              
//             </div>

//     </div>

//   </div>
// ))



  const first = data.slice(0, 8).map((card) =>( 

    <div  key={card.id} className=' w-[252px] rounded-lg border-2 flex flex-col transform hover:scale-105 hover:shadow-lg'>
              
    <div className='w-[252px] h-[132px] rounded-t-[8px] border-r-2 '>    
    <Image className='w-[252px] h-y[132px] rounded-t-lg' src={card.image} alt={card.names}/> 
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





export default function Courses() {

    const shuffledData = data.sort(() => Math.random() - 0.5);
    const randomItems1 = shuffledData.slice(0, 3);
    const randomItems2 = shuffledData.slice(0, 2);
    const randomItems3 = shuffledData.slice(0, 6);
    const randomItems4 = shuffledData.slice(0, 3);
    const randomItems5 = shuffledData.slice(0, 5);


    const develop = randomItems1.map( (item) => (
        <div  key={item.id} className=' w-[252px] rounded-lg border-2 flex flex-col transform hover:scale-105 hover:shadow-lg'>
              
        <div className='w-[252px] h-[132px] rounded-t-[8px] border-r-2 '>    
        <Image className='w-[252px] h-[132px] rounded-t-lg' src={item.image} alt={item.names}/> 
        </div>
    
        <div className='w-[252px] h-[213px] bg-[#fcf7f7] border-r-2'>
              <div className=' w-fit rounded-[1.25rem] p-2 bg-[#E8e4f8] mt-6 ml-4 '>
                <h1 className='text-xs text-center text-[#7A77FF] font-normal '>
                    {item.title}
                </h1>
              </div>
    
              <h2 className='text-sm text-[#333333] font-semibold h-[34px] mt-4  ml-4'>
                {item.subtitle}
              </h2>
    
              <p className=' text-[#7a77ff] font-normal text-xs mt-4 ml-4 '>
                {item.names}
              </p>
    
                <div className='W-[156PX] h-[34px] gap-2  mt-4 flex flex-col ml-4'>
    
                  <span className=' gap-4'>
                    <p className=' text-[10px] font-normal text-[#111111]'>
                    {item.rating}
                    </p>
    
                    <p>
                      
                    </p>
    
                    <p className='text-[#111111] text-[10px] font-normal'>
                        {item.viewnums}
                    </p>
                  </span>
                  
    
                  <span className='gap-3 flex'>
    
                    <p className='font-light text-[#111111] text-[10px] '>
                      {item.newprice} 
                    </p>
    
                    <p className='font-light text-[#666666] text-[10px] line-through'>
                    {item.oldprice}
                    </p>
    
                  </span>
                  
                </div>
    
        </div>
    
      </div>
    ))
    
    const business = randomItems2.map( (item) => (
        <div  key={item.id} className=' w-[252px] rounded-lg border-2 flex flex-col transform hover:scale-105 hover:shadow-lg'>
              
        <div className='w-[252px] h-[132px] rounded-t-[8px] border-r-2 '>    
        <Image className='w-[252px] h-[132px] rounded-t-lg' src={item.image}  alt={item.names}/> 
        </div>
    
        <div className='w-[252px] h-[213px] bg-[#fcf7f7] border-r-2'>
              <div className=' w-fit rounded-[1.25rem] p-2 bg-[#E8e4f8] mt-6 ml-4 '>
                <h1 className='text-xs text-center text-[#7A77FF] font-normal '>
                    {item.title}
                </h1>
              </div>
    
              <h2 className='text-sm text-[#333333] font-semibold h-[34px] mt-4  ml-4'>
                {item.subtitle}
              </h2>
    
              <p className=' text-[#7a77ff] font-normal text-xs mt-4 ml-4 '>
                {item.names}
              </p>
    
                <div className='W-[156PX] h-[34px] gap-2  mt-4 flex flex-col ml-4'>
    
                  <span className=' gap-4'>
                    <p className=' text-[10px] font-normal text-[#111111]'>
                    {item.rating}
                    </p>
    
                    <p>
                      
                    </p>
    
                    <p className='text-[#111111] text-[10px] font-normal'>
                        {item.viewnums}
                    </p>
                  </span>
                  
    
                  <span className='gap-3 flex'>
    
                    <p className='font-light text-[#111111] text-[10px] '>
                      {item.newprice} 
                    </p>
    
                    <p className='font-light text-[#666666] text-[10px] line-through'>
                    {item.oldprice}
                    </p>
    
                  </span>
                  
                </div>
    
        </div>
    
      </div>
    ))
    

    const design = randomItems3.map( (item) => (
        <div  key={item.id} className=' w-[252px] rounded-lg border-2 flex flex-col transform hover:scale-105 hover:shadow-lg'>
              
        <div className='w-[252px] h-[132px] rounded-t-[8px] border-r-2 '>    
        <Image className='w-[252px] h-[132px] rounded-t-lg' src={item.image}  alt={item.names}/> 
        </div>
    
        <div className='w-[252px] h-[213px] bg-[#fcf7f7] border-r-2'>
              <div className=' w-fit rounded-[1.25rem] p-2 bg-[#E8e4f8] mt-6 ml-4 '>
                <h1 className='text-xs text-center text-[#7A77FF] font-normal '>
                    {item.title}
                </h1>
              </div>
    
              <h2 className='text-sm text-[#333333] font-semibold h-[34px] mt-4  ml-4'>
                {item.subtitle}
              </h2>
    
              <p className=' text-[#7a77ff] font-normal text-xs mt-4 ml-4 '>
                {item.names}
              </p>
    
                <div className='W-[156PX] h-[34px] gap-2  mt-4 flex flex-col ml-4'>
    
                  <span className=' gap-4'>
                    <p className=' text-[10px] font-normal text-[#111111]'>
                    {item.rating}
                    </p>
    
                    <p>
                      
                    </p>
    
                    <p className='text-[#111111] text-[10px] font-normal'>
                        {item.viewnums}
                    </p>
                  </span>
                  
    
                  <span className='gap-3 flex'>
    
                    <p className='font-light text-[#111111] text-[10px] '>
                      {item.newprice} 
                    </p>
    
                    <p className='font-light text-[#666666] text-[10px] line-through'>
                    {item.oldprice}
                    </p>
    
                  </span>
                  
                </div>
    
        </div>
    
      </div>
    ))
    

    const marketing = randomItems4.map( (item) => (
        <div  key={item.id} className=' w-[252px] rounded-lg border-2 flex flex-col transform hover:scale-105 hover:shadow-lg'>
              
        <div className='w-[252px] h-[132px] rounded-t-[8px] border-r-2 '>    
        <Image className='w-[252px] h-[132px] rounded-t-lg' src={item.image}  alt={item.names}/> 
        </div>
    
        <div className='w-[252px] h-[213px] bg-[#fcf7f7] border-r-2'>
              <div className=' w-fit rounded-[1.25rem] p-2 bg-[#E8e4f8] mt-6 ml-4 '>
                <h1 className='text-xs text-center text-[#7A77FF] font-normal '>
                    {item.title}
                </h1>
              </div>
    
              <h2 className='text-sm text-[#333333] font-semibold h-[34px] mt-4  ml-4'>
                {item.subtitle}
              </h2>
    
              <p className=' text-[#7a77ff] font-normal text-xs mt-4 ml-4 '>
                {item.names}
              </p>
    
                <div className='W-[156PX] h-[34px] gap-2  mt-4 flex flex-col ml-4'>
    
                  <span className=' gap-4'>
                    <p className=' text-[10px] font-normal text-[#111111]'>
                    {item.rating}
                    </p>
    
                    <p>
                      
                    </p>
    
                    <p className='text-[#111111] text-[10px] font-normal'>
                        {item.viewnums}
                    </p>
                  </span>
                  
    
                  <span className='gap-3 flex'>
    
                    <p className='font-light text-[#111111] text-[10px] '>
                      {item.newprice} 
                    </p>
    
                    <p className='font-light text-[#666666] text-[10px] line-through'>
                    {item.oldprice}
                    </p>
    
                  </span>
                  
                </div>
    
        </div>
    
      </div>
    ))
    

    const health = randomItems5.map( (item) => (
        <div  key={item.id} className=' w-[252px] rounded-lg border-2 flex flex-col transform hover:scale-105 hover:shadow-lg'>
              
        <div className='w-[252px] h-[132px] rounded-t-[8px] border-r-2 '>    
        <Image className='w-[252px] h-[132px] rounded-t-lg' src={item.image}  alt={item.names}/> 
        </div>
    
        <div className='w-[252px] h-[213px] bg-[#fcf7f7] border-r-2'>
              <div className=' w-fit rounded-[1.25rem] p-2 bg-[#E8e4f8] mt-6 ml-4 '>
                <h1 className='text-xs text-center text-[#7A77FF] font-normal '>
                    {item.title}
                </h1>
              </div>
    
              <h2 className='text-sm text-[#333333] font-semibold h-[34px] mt-4  ml-4'>
                {item.subtitle}
              </h2>
    
              <p className=' text-[#7a77ff] font-normal text-xs mt-4 ml-4 '>
                {item.names}
              </p>
    
                <div className='W-[156PX] h-[34px] gap-2  mt-4 flex flex-col ml-4'>
    
                  <span className=' gap-4'>
                    <p className=' text-[10px] font-normal text-[#111111]'>
                    {item.rating}
                    </p>
    
                    <p>
                      
                    </p>
    
                    <p className='text-[#111111] text-[10px] font-normal'>
                        {item.viewnums}
                    </p>
                  </span>
                  
    
                  <span className='gap-3 flex'>
    
                    <p className='font-light text-[#111111] text-[10px] '>
                      {item.newprice} 
                    </p>
    
                    <p className='font-light text-[#666666] text-[10px] line-through'>
                    {item.oldprice}
                    </p>
    
                  </span>
                  
                </div>
    
        </div>
    
      </div>
    ))
    


    const [activeItem, setActiveItem] = useState('Most popular');

    const [isExpanded, setIsExpanded] = useState(false);

    const [searchWords, setSearchWords] = useState('')
    const [searchResults, setSearchResults] = useState([]);

    const handleSearch = () => {
        const results = data.filter((item) => {
        
            return (
              item.title.toLowerCase().includes(searchWords.toLowerCase()) ||
              item.subtitle.toLowerCase().includes(searchWords.toLowerCase())  
            );

        });
        
        console.log(setSearchResults(results));
    }

    useEffect(() => {
        searchWords === '' ? setSearchResults ([]) : handleSearch(searchWords);
      }, [searchWords]);

   const search = searchResults.map((item) => (
        <div className='py-4' key={item.id}>
          <h2 className='text-xl text-[#ff7777]'>{item.title}</h2>
          <p className=' text-[#333]'>{item.subtitle}</p>
        </div>
      ))
    
    const displayMaps = () => {
        setIsExpanded(!isExpanded)
        console.log(isExpanded)
    }
  
    const activeState = (item) => {
        item !== activeItem ? setActiveItem(item) : null;
      };
     
    const handleButtonClick = (item) => {
        const result1 = displayMaps();
        const result2 =  activeState(item);
      };

    


  return (

    <section className='h-full'>
        
        <div className={`h-[30.8125rem] w-[67.5rem] rounded-[16px] mx-[6.25rem] mt-[2rem] flex justify-center item-center  ${style.background} `  }>
            {/* <Image className=' h-[30.8125rem] w-[67.5rem]  rounded-[8px]' width={200} height={200} src={pic}/> */}
            <h1 className='w-fit h-fit my-auto opacity-60 text-red-400 text-[96px] font-semibold'>
            Courses
            </h1>

        </div>
        
        <section className='h-[72.3125rem] w-[67.5rem] ml-[6.25rem]'>
            <div className='mt-[4.5rem] '>
                 <p className='w-[145px] h-[29px] font-normal text-[24px] text-[#7A77FF] '>Our courses</p>

                <span className='flex items-center justify-between'>  
                    
                <h2 className='w-[417px] h-[44px] font-semibold text-[36px] text-[#333333] mt-[1.5rem] '>
                Explore Top Courses
                </h2>

                <span className='flex border border-[#ff7777] rounded-3xl h-fit item-center pr-2 mt-6'>
                <input type="search" onChange={ (e) => setSearchWords (e.target.value) } className='w-[22.25rem] py-2 px-[1rem] rounded-l-3xl outline-none' name="" id="" placeholder='Search Courses' />

                <button onClick={handleSearch} className='px-[1rem] '>
                <GoSearch/>
                </button>
               

                </span>
               


                </span>


                    <div className='flex justify-end  shadow-2xl '>
                    <span className= 'bg-white h-fit absolute z-10 w-[26.25rem] pl-8  mt-8  rounded-tl-3xl rounded-br-3xl '>
                    {search}
                </span>
                    </div>
               
                  <div className ='w-[1080px] h-[53px] mt-[40px] gap-[56px] flex items-center '>


                      <button onClick={ () =>handleButtonClick('Most popular')} className = {activeItem === 'Most popular' ? 'font-normal text-[16px] text-[#ffffff] py-[12px] px-[10px] bg-[#ff7777] border rounded-[25px] text-center w-[200px]  gap-[10px]' : 'font-normal text-[16px] text-[#666666] h-[24px] w-[138px]'} >
                       <p>Most popular </p> 
                      </button>
                      
                      <button onClick={ () =>handleButtonClick('Development')} className = {activeItem === 'Development' ? 'font-normal text-[16px] text-[#ffffff] py-[12px] px-[10px] bg-[#ff7777] border rounded-[25px] text-center w-[200px]  gap-[10px]' : 'font-normal text-[16px] text-[#666666] h-[24px] w-[138px]'} >
                          Development
                      </button>
                      
                      <button onClick={ () =>handleButtonClick('Business')} className = {activeItem === 'Business' ? 'font-normal text-[16px] text-[#ffffff] py-[12px] px-[10px] bg-[#ff7777] border rounded-[25px] text-center w-[200px]  gap-[10px]' : 'font-normal text-[16px] text-[#666666] h-[24px] w-[138px]'} >
                          Business
                      </button>
                        
                      <button onClick={ () =>handleButtonClick('Design')} className = {activeItem === 'Design' ? 'font-normal text-[16px] text-[#ffffff] py-[12px] px-[10px] bg-[#ff7777] border rounded-[25px] text-center w-[200px]  gap-[10px]' : 'font-normal text-[16px] text-[#666666] h-[24px] w-[138px]'} >
                          Design
                      </button>
                        
                      <button onClick={ () =>handleButtonClick('Marketing')} className = {activeItem === 'Marketing' ? 'font-normal text-[16px] text-[#ffffff] py-[12px] px-[10px] bg-[#ff7777] border rounded-[25px] text-center w-[200px]  gap-[10px]' : 'font-normal text-[16px] text-[#666666] h-[24px] w-[138px]'}  >
                          Marketing
                      </button>
                        
                      <button onClick={ () =>handleButtonClick('Health & Fitness')}className = {activeItem === 'Health & Fitness' ? 'font-normal text-[16px] text-[#ffffff] py-[12px] px-[10px] bg-[#ff7777] border rounded-[25px] text-center w-[200px]  gap-[10px]' : 'font-normal text-[16px] text-[#666666] h-[24px] w-[138px]'} >
                           Health & Fitness
                      </button>

                  </div>

                  <div className='h-[1538px] mx-[100px] mt-14  gap-6 flex flex-wrap items-start'>
                            { activeItem === 'Most popular' ? first
                             : activeItem === 'Development' ? develop 
                             : activeItem === 'Business' ? business 
                             : activeItem === 'Design' ? design
                             : activeItem === 'Marketing' ? marketing
                             : activeItem === 'Health & Fitness' ? health  : null
                            }                  
                      </div>

            </div>
        </section>
    </section>
  )
}
