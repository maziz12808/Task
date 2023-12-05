import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Navigation } from 'swiper/modules';
import Image from 'next/image';

export default function App() {
  
  return (
    <div className='px-[3.6%] py-[3%]'>
      <Swiper
        slidesPerView={5}
        centeredSlides={true}
        spaceBetween={30}
        
        navigation={true}
        modules={[Navigation]}
      >
        <SwiperSlide>
          <Image 
            src="/Images/thumb-1-1.jpg"  
            width={65} 
            height={65} 
            alt='thumb-1-1' 
            className='opacity-20 hover:opacity-100 select-none'
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image 
            src="/Images/thumb-2.jpg"  
            width={65} 
            height={65} 
            alt='thumb-1-1' 
            className='opacity-20 hover:opacity-100 select-none'
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image 
            src="/Images/thumb-1-3.jpg"  
            width={65} 
            height={65} 
            alt='thumb-1-1' 
            className='opacity-20 hover:opacity-100 select-none'
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image 
            src="/Images/thumb-1-1.jpg"  
            width={65} 
            height={65} 
            alt='thumb-1-1' 
            className='opacity-20 hover:opacity-100 select-none'
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image 
            src="/Images/thumb-1-1.jpg"  
            width={65} 
            height={65} 
            alt='thumb-1-1' 
            className='opacity-20 hover:opacity-100 select-none'
          />
        </SwiperSlide>
      </Swiper>

      
    </div>
  );
}
