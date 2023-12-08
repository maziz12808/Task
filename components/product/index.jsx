import Layout from "@/components/shared/layout"
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-cards';

import { EffectCards } from 'swiper/modules';
import Image from "next/image";

const Product = ()=>{
    const product = [
        "/Images/Riya_Zipper1.jpg",
        "/Images/IMG-20220919-WA00131.jpg",
    ]
    return (
        <Layout>
            <div className="px-[3.6%] py-5">
                <div className="grid grid-cols-12">
                    <div className="border col-span-5 p-7">
                        <Swiper
                            effect={'cards'}
                            grabCursor={true}
                            modules={[EffectCards]}
                            className="mySwiper" 
                            id="product"
                        >
                            {
                                product.map((productItem,productIndex)=>(
                                    <SwiperSlide key={productIndex}>
                                        <Image 
                                            src={productItem}
                                            width={0}
                                            height={0}
                                            sizes="100vw"
                                            style={{ width: '100%', height: '100%' }} 
                                            alt={productItem}
                                        />
                                    </SwiperSlide>
                                ))
                            }
                        </Swiper>
                    </div>
                    <div className="border col-span-7">2</div>
                </div>
            </div>
        </Layout>
    )
}

export default Product