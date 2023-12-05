import { Button,Avatar } from "antd"
import Image from "next/image"
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Parallax, Navigation } from 'swiper/modules';

const MansaServices = ()=>{
    return (
        <>
            <div className="px-[3.6%] py-[5%] bg-[#F8F9FB]">
                <div className="grid grid-cols-3 gap-x-9">
                    <div className="flex gap-x-6">
                        <i className='bx bxs-message-square text-4xl text-[#718AAC] mt-5' />
                        <div>
                            <h1 className="text-md font-bold text-[#3d4abf] mb-2">Make Your Life Easy</h1>
                            <p className=" text-base text-gray-500">
                                Mansa Easy Mart is an Indian e-commerce platform which promise to our clients & 
                                users.......a promise for quality services, consistency, competency, transparency &
                                reliability for mutual growth & happiness.
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-x-6">
                        <i className='bx bxs-cart-alt text-4xl text-[#A5D383] mt-5' />
                        <div>
                            <h1 className="text-md font-bold text-[#3d4abf] mb-2">Make Your Life Easy</h1>
                            <p className="text-base text-gray-500">
                                Mansa Easy Mart is an Indian e-commerce platform which promise to our clients & 
                                users.......a promise for quality services, consistency, competency, transparency &
                                reliability for mutual growth & happiness.
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-x-6">
                        <i className='bx bxs-like text-4xl text-[#41BCC3] mt-5' />
                        <div>
                            <h1 className="text-md font-bold text-[#3d4abf] mb-2">Make Your Life Easy</h1>
                            <p className="text-base text-gray-500">
                                Mansa Easy Mart is an Indian e-commerce platform which promise to our clients & 
                                users.......a promise for quality services, consistency, competency, transparency &
                                reliability for mutual growth & happiness.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-2">
                <div className="w-full h-[225px] relative">
                    <Image 
                        src="/Images/image-1.png" 
                        fill 
                        alt="image-1"
                    />
                    <span className=" absolute top-0 left-[5%] right-[5%] text-center text-xl font-bold opacity-60">
                        WE CONNECT BUYERS & SELLERS FOR A VERY GOOD <br />
                        DEALS THAT YOUR'S GREAT FEELINGS WILL <br />
                        MAKE ALWAYS HAPPY TO US.
                    </span>
                </div>
                <div className="w-full h-[225px] relative">
                    <Image 
                        src="/Images/image-2.png" 
                        fill 
                        alt="image-2"
                    />
                    <div className="absolute top-0 left-[8%]">
                        <div className="flex flex-col gap-y-7">
                            <span className="text-xl font-bold text-white">
                                GET MANSA EASY MART APP
                            </span>
                            <Button 
                                className="bg-[red] border-0 w-fit h-auto flex justify-start items-center pr-5 py-2 text-white hover:bg-black" 
                                style={{borderRadius:0,color:"white"}}
                            >
                                <i className='bx bxl-android text-5xl'/>
                                <div className="flex flex-col">
                                    <span className="text-xs">Abailable On</span>
                                    <span className="text-lg">App Store</span>
                                </div>
                            </Button>
                        </div>
                    </div>
                   

                </div>
            </div>
            <div className="px-[3.6%] grid grid-cols-3 py-[7%]">
                <div className="flex flex-col gap-y-10 items-center">
                    <div className="bg-[red] w-[80px] h-[80px] rounded-3xl flex items-center justify-center">
                        <i className='bx bxs-lock-alt text-3xl opacity-60' />
                    </div>
                    <div className="px-2">
                        <h1 className="text-2xl text-center mb-2">Secure Transaction</h1>
                        <p className=" text-base text-gray-500 text-start">
                            Mansa Easy Mart allows you to have a personal and
                            secure conversation in real time, in a language of your 
                            choice. Use the 3D Secure password service for online 
                            transactions, providing an additional layer of security 
                            through identity verification.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col gap-y-10 items-center">
                    <div className="bg-[#F0AD4E] w-[80px] h-[80px] rounded-3xl flex items-center justify-center">
                        <i className='bx bx-headphone text-3xl opacity-60' />
                    </div>
                    <div className="px-2">
                        <h1 className="text-2xl text-center mb-2">24/7 Best Support</h1>
                        <p className=" text-base text-gray-500 text-start">
                            Mansa Easy Mart provides 24/7 Best Support access to 
                            new markets with a fast, low-cost, low-wastage, highly-
                            reliable shipping & delivery system across India for its 
                            buyers and sellers.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col gap-y-10 items-center">
                    <div className="bg-[#5CB85C] w-[80px] h-[80px] rounded-3xl flex items-center justify-center">
                        <i className='bx bxs-like text-3xl opacity-60' />
                    </div>
                    <div className="px-2">
                        <h1 className="text-2xl text-center mb-2">Secure Transaction</h1>
                        <p className=" text-base text-gray-500 text-start">
                            Mansa Easy Mart allows you to have a personal and
                            secure conversation in real time, in a language of your 
                            choice. Use the 3D Secure password service for online 
                            transactions, providing an additional layer of security 
                            through identity verification.
                        </p>
                    </div>
                </div>
            </div>
            <div className="customer-box w-full h-full py-[5%]">
                <h1 className="text-3xl text-center mb-12">Our Happy Customers</h1>
                <Swiper
                    style={{
                    '--swiper-navigation-color': '#fff',
                    '--swiper-pagination-color': '#fff',
                    }}
                    speed={600}
                    parallax={true}
                    navigation={true}
                    
                    modules={[Parallax, Navigation]}
                    className=" shadow-xl rounded-xl swiper-customer"
                >
                    <div
                    slot="container-start"
                    className="parallax-bg"
                    data-swiper-parallax="-23%"
                    ></div>
                    <SwiperSlide className="swiper-slide-customer">
                        <div className="flex flex-col items-center justify-center">
                    <div className="title mb-3" data-swiper-parallax="-300">
                        <Avatar className="border border-gray-200" size={100} src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                    </div>
                    <div className="text" data-swiper-parallax="-100">
                        <p className="text-[#978FB1] text-lg">
                            It's B2B services largest customer services in india.good app and smooth.
                        </p>
                    </div>
                    <div className="subtitle text-gray-500 text-sm font-semibold" data-swiper-parallax="-200">
                        Ravindra
                    </div>
                    <div className="subtitle text-[#FA591C] text-sm font-semibold" data-swiper-parallax="-200">
                        Customer
                    </div>
                    </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide-customer">
                        <div className="flex flex-col items-center justify-center">
                    <div className="title mb-3" data-swiper-parallax="-300">
                        <Avatar 
                            className="border border-gray-200" 
                            size={100} 
                            src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" 
                        />
                    </div>
                    <div className="text" data-swiper-parallax="-100">
                        <p className="text-[#978FB1] text-lg">
                            It's B2B services largest customer services in india.good app and smooth.
                        </p>
                    </div>
                    <div className="subtitle text-gray-500 text-sm font-semibold" data-swiper-parallax="-200">
                        Rajesh
                    </div>
                    <div className="subtitle text-[#FA591C] text-sm font-semibold" data-swiper-parallax="-200">
                        Customer
                    </div>
                    </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide-customer">
                        <div className="flex flex-col items-center justify-center">
                    <div className="title mb-3" data-swiper-parallax="-300">
                        <Avatar className="border border-gray-200" size={100} src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                    </div>
                    <div className="text" data-swiper-parallax="-100">
                        <p className="text-[#978FB1] text-lg">
                            It's B2B services largest customer services in india.good app and smooth.
                        </p>
                    </div>
                    <div className="subtitle text-gray-500 text-sm font-semibold" data-swiper-parallax="-200">
                        Ravindra
                    </div>
                    <div className="subtitle text-[#FA591C] text-sm font-semibold" data-swiper-parallax="-200">
                        Customer
                    </div>
                    </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </>
    )
}

export default MansaServices