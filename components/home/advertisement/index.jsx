
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import style from "./style.module.css"

// import required modules
import { EffectFade,Autoplay, Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image';
const Advertisement = ()=>{
    const sliderImages = [
        "/Images/advantages_of_online_business_platform_en.png",
        "/Images/advantages_of_online_business_platform_hi.png",
        "/Images/IMG-20190101-WA0018.jpg",
        "/Images/Banner-_RLE_122.jpg",
        "/Images/Pragathi_2_half2.jpg",
        "/Images/Screenshot_20230622_190559_Chrome1.jpg",

    ]
    return (
        <div className=' h-[450px]'>
        <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }} 
        effect={'Fade'} 
        modules={[EffectFade,Autoplay, Pagination, Navigation]}
        className={style.swiper}
      >
        {
            sliderImages.map((imageItem,imageIndex)=>(
                <SwiperSlide key={imageIndex}>
                    <Image 
                        src={imageItem} 
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: '100%', height: '100%' }} 
                        alt='advantages_of_online_business_platform_hi' 
                    />
                </SwiperSlide>
            ))
        }
            
        </Swiper>
        </div>
    )
}

export default Advertisement