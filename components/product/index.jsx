import React, { useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import 'swiper/css/effect-cards';
import { FreeMode, Thumbs, Virtual,Pagination,Autoplay  } from 'swiper/modules';
import Layout from "@/components/shared/layout"
import { 
    Button, 
    Divider, 
    Input,
    Tabs,
    Card
} from "antd";
import { 
    MinusOutlined, 
    PlusOutlined,
} from "@ant-design/icons";

const { Meta } = Card;

const Product = ()=>{
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [cardAddToCart,setCardAddToCart] = useState("hidden")
    const [cardIndex,setCardIndex] = useState(-1)
    const [qtyValue, setQtyValue] = useState(0);
    const product = [
        "/Images/IMG-20220919-WA00121.jpg",
        "/Images/IMG-20230117-WA00071.jpg",
        "/Images/IMG-20230117-WA000511.jpg",
        "/Images/IMG-20230117-WA000511.jpg"
    ]
    const ProductDesciption = ()=>{
        return (
            <div className="flex flex-col gap-y-7 px-5 py-5 text-sm opacity-90">
                <p>Krosa Kitchen Gas Lighter-Wave with plastic Handle</p>
                <p>
                    Krosa Wave Gas Lighter  availble in three colors  with best quality into 
                    economic range.
                </p>
                <p>Manufactured by- M/S- Sri Krishna Industries- Rajkot (Gujrat)</p>
                <p>
                    1Pc Gas Lighter With 1Pc Knife free - MRP.-Rs.135.00 ( Inclusive 
                    of All Taxes)
                </p>
                <p>1 Pc MRP- Rs.135.00 ( Inclusive of All Taxes)</p>
                <p>10 Pcs =1 Box = MRP- Rs.1350.00 ( Inclusive of All Taxes)</p>
                <p>
                    1 Box*48= 48 Box= 1 Caton( 480 Pcs)= MRP- Rs.64,
                    800 ( Inclusive of All Taxes)
                </p>
            </div>
        )
    }
    const ProductReview = ()=>{
        return (
            <div className='px-5 py-5 text-sm opacity-90'>
                <h1>Please login to review this product.</h1>
            </div>
        )
    }
    const tabItems = [
        {
            label: <span className='ml-3'>Description</span>,
            key: '1',
            children: <ProductDesciption />,
        },
        {
            label: <span className='ml-3'>Reviews</span>,
            key: '2',
            children: <ProductReview />,
        },
    ]
    const onMouseOver = (index)=> {
        setCardIndex(index) 
        setCardAddToCart("block")
    }
    const onHideAddToCart = ()=>{
        setCardIndex(-1)
        
    }
    const relatedProducts = [
        {
            title: "Blue Rose Pouch (22gm)",
            href: "/",
            image: "/images/Blue_Rose_Pouch.jpg",
            price: "₹180"
        },
        {
            title: "Blue Rose Pouch (22gm)",
            href: "/",
            image: "/images/Blue_Rose_Pouch.jpg",
            price: "₹180"
        },
        {
            title: "Blue Rose Pouch (22gm)",
            href: "/",
            image: "/images/Blue_Rose_Pouch.jpg",
            price: "₹180"
        },
        {
            title: "Blue Rose Pouch (22gm)",
            href: "/",
            image: "/images/Blue_Rose_Pouch.jpg",
            price: "₹180"
        },
        {
            title: "Blue Rose Pouch (22gm)",
            href: "/",
            image: "/images/Blue_Rose_Pouch.jpg",
            price: "₹180"
        },
        {
            title: "Blue Rose Pouch (22gm)",
            href: "/",
            image: "/images/Blue_Rose_Pouch.jpg",
            price: "₹180"
        },
        {
            title: "Blue Rose Pouch (22gm)",
            href: "/",
            image: "/images/Blue_Rose_Pouch.jpg",
            price: "₹180"
        },
        {
            title: "Blue Rose Pouch (22gm)",
            href: "/",
            image: "/images/Blue_Rose_Pouch.jpg",
            price: "₹180"
        },
        {
            title: "Blue Rose Pouch (22gm)",
            href: "/",
            image: "/images/Blue_Rose_Pouch.jpg",
            price: "₹180"
        },
        {
            title: "Blue Rose Pouch (22gm)",
            href: "/",
            image: "/images/Blue_Rose_Pouch.jpg",
            price: "₹180"
        },
        {
            title: "Blue Rose Pouch (22gm)",
            href: "/",
            image: "/images/Blue_Rose_Pouch.jpg",
            price: "₹180"
        },
        {
            title: "Blue Rose Pouch (22gm)",
            href: "/",
            image: "/images/Blue_Rose_Pouch.jpg",
            price: "₹180"
        },
        {
            title: "Blue Rose Pouch (22gm)",
            href: "/",
            image: "/images/Blue_Rose_Pouch.jpg",
            price: "₹180"
        },
        {
            title: "Blue Rose Pouch (22gm)",
            href: "/",
            image: "/images/Blue_Rose_Pouch.jpg",
            price: "₹180"
        },
        {
            title: "Blue Rose Pouch (22gm)",
            href: "/",
            image: "/images/Blue_Rose_Pouch.jpg",
            price: "₹180"
        },
        {
            title: "Blue Rose Pouch (22gm)",
            href: "/",
            image: "/images/Blue_Rose_Pouch.jpg",
            price: "₹180"
        },
        {
            title: "Blue Rose Pouch (22gm)",
            href: "/",
            image: "/images/Blue_Rose_Pouch.jpg",
            price: "₹180"
        },
        {
            title: "Blue Rose Pouch (22gm)",
            href: "/",
            image: "/images/Blue_Rose_Pouch.jpg",
            price: "₹180"
        },
        {
            title: "Blue Rose Pouch (22gm)",
            href: "/",
            image: "/images/Blue_Rose_Pouch.jpg",
            price: "₹180"
        },
        {
            title: "Blue Rose Pouch (22gm)",
            href: "/",
            image: "/images/Blue_Rose_Pouch.jpg",
            price: "₹180"
        }
    ]
    const increamentQty = ()=>{
        setQtyValue(qtyValue + 1)
    }
    const decreamentQty = ()=>{
        if(qtyValue > 1) return setQtyValue(qtyValue - 1)
    }
    return (
        <Layout>
            <div className="px-[3.6%] py-5">
                <div className="grid grid-cols-12">
                    <div className="col-span-5 p-7 relative">
                        <div className="bg-[red] px-2 py-[2px] text-center w-fit absolute top-10 left-0 z-50">
                            <span className="text-white font-bold text-base">
                                Sale!
                            </span>
                        </div>
                        
                        <Swiper
                            style={{
                            '--swiper-navigation-color': '#fff',
                            '--swiper-pagination-color': '#fff',
                            }}
                            loop={true}
                            spaceBetween={10}
                            thumbs={{swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null}}
                            modules={[FreeMode, Thumbs]}
                            className="mySwiper2" 
                            id="poroduct"
                        >
                            {
                                product.map((productItem,productIndex)=>{
                                    return (
                                        <SwiperSlide key={productIndex}>
                                            <Image 
                                                src={productItem} 
                                                width={0} 
                                                height={0} 
                                                sizes="100vw" 
                                                style={{width: "auto",height: "100%"}} 
                                                alt={productItem}
                                            />
                                        </SwiperSlide>
                                    )
                                })
                            
                            }
                            
                        </Swiper>
                        <Swiper
                        onSwiper={setThumbsSwiper}
                        loop={true}
                        spaceBetween={2}
                        slidesPerView={5}
                        freeMode={true}
                        watchSlidesProgress={true}
                        modules={[FreeMode, Thumbs]}
                        className="mySwiper"
                        >
                            {
                                product.map((item,index)=>{
                                    return (
                                        <SwiperSlide key={index}>
                                            <Image src={item} width={70} height={100} alt={item} />
                                        </SwiperSlide>
                                    )
                                })
                            
                            }
                        </Swiper>
                    </div>
                    <div className="col-span-7 p-7">
                        <div className="flex flex-col gap-y-3">
                            <h1>Krosa Wave with Plastic Handle (Gas Lighter)</h1>
                            <div className="flex items-center gap-x-1">
                                <div>
                                    <i className='bx bx-star text-base text-gray-300' />
                                    <i className='bx bx-star text-base text-gray-300' />
                                    <i className='bx bx-star text-base text-gray-300' />
                                    <i className='bx bx-star text-base text-gray-300' />
                                    <i className='bx bx-star text-base text-gray-300' />
                                </div>
                                <span className="text-sm text-gray-500 hover:text-black cursor-pointer">
                                    (0 customer reviews)
                                </span>
                            </div>
                            <p className="text-base">
                                Availablity: <span className="text-[#4dac4d] font-semibold">IN STOCK</span>
                            </p>
                            <Divider />
                            <div>
                                <a href="#" className="text-sm text-gray-500 hover:text-black mr-4">
                                    <i className='bx bx-heart mr-[2px] text-sm text-red-500' />
                                    Wishlist
                                </a>
                                <a href="#" className="text-sm text-gray-500 hover:text-black">
                                    <i className='bx bx-git-compare bx-rotate-90 mr-[5px] text-sm text-red-500' />
                                    Compare
                                </a>
                            </div>
                            <div className="flex flex-col gap-y-4 text-sm opacity-90">
                                <p>Krosa Kitchen Gas Lighter-Wave with plastic Handle</p>
                                <p>
                                    Krosa Wave Gas Lighter  availble in three colors  with best quality into 
                                    economic range.
                                </p>
                                <p>Manufactured by- M/S- Sri Krishna Industries- Rajkot (Gujrat)</p>
                                <p>
                                    1Pc Gas Lighter With 1Pc Knife free - MRP.-Rs.135.00 ( Inclusive 
                                    of All Taxes)
                                </p>
                                <p>1 Pc MRP- Rs.135.00 ( Inclusive of All Taxes)</p>
                                <p>10 Pcs =1 Box = MRP- Rs.1350.00 ( Inclusive of All Taxes)</p>
                                <p>
                                    1 Box*48= 48 Box= 1 Caton( 480 Pcs)= MRP- Rs.64,
                                    800 ( Inclusive of All Taxes)
                                </p>
                            </div>
                            <div className="mt-5 flex flex-col gap-y-3">
                                <p className="text-base text-gray-500 border-b border-gray-100">
                                    MRP :<span className="text-[#4dac4d] font-semibold"> ₹135.00</span>
                                </p>
                                <div className="text-base text-gray-500 flex gap-x-20">
                                    <div>
                                        <span>Price (1 - 1)</span>
                                        <p className="text-orange-500 font-bold">₹45.00</p>
                                    </div>
                                    <div>
                                        <span>Price (2 - 2)</span>
                                        <p className="text-orange-500 font-bold">₹41.00</p>
                                    </div>
                                    <div>
                                        <span>Price (3 - 3)</span>
                                        <p className="text-orange-500 font-bold">₹39.00</p>
                                    </div>
                                    <div>
                                        <span>(4 & above)</span>
                                        <p className="text-orange-500 font-bold">₹37.00</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center gap-x-1 border-y py-4 border-gray-100">
                                <span className="text-gray-500">Qty :</span>
                                <div>
                                <Input 
                                    size="large" 
                                    value={qtyValue}
                                    addonAfter={
                                        <Button  
                                            onClick={increamentQty} 
                                            type="text" 
                                            icon={<PlusOutlined />} 
                                            style={{backgroundColor: "inherit"}}
                                        />
                                    } 
                                    addonBefore={
                                        <Button  
                                            onClick={decreamentQty} 
                                            type="text" 
                                            icon={<MinusOutlined />} 
                                            style={{backgroundColor: "inherit"}}
                                        /> 
                                    } 
                                    className="w-6/12"
                                />
                                </div>
                            </div>
                            <div>
                                <Button  
                                    className={`
                                         flex items-center px-10 py-6 rounded-3xl 
                                        font-bold border-0
                                    `}
                                    style={{backgroundColor: "red",color: "white"}}
                                >
                                    <i className='bx bx-cart-download text-xl mr-3' />
                                    Add To Cart
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="px-[3.6%] py-5">
                <Tabs
                    defaultActiveKey="1"
                    items={tabItems} 
                    className="border" 
                    id='product-desc-review'
                />
            </div>

            {/* Related Products Start */}
            <div className="px-[3.6%] py-5 h-[480px]">
                <h1 className='border-b-2 border-orange-500 w-fit'>Related Products</h1>
                <div className="border-t relative">
                <div>
                <Swiper
                    modules={[Virtual, Pagination,Autoplay]}
                    slidesPerView={4}
                    centeredSlides={true}
                    spaceBetween={0}
                    autoplay={{
                        delay: 4000,
                        disableOnInteraction: false,
                    }}
                    virtual 
                    id="related-product"
                >
                    {
                        relatedProducts.map((relatedProductsItem,relatedProductsIndex)=>(
                            <SwiperSlide key={relatedProductsIndex}>
                                <Card 
                                    bordered
                                    style={{width: 250}} 
                                    onMouseOver={()=> onMouseOver(relatedProductsIndex)} 
                                    onMouseOut={onHideAddToCart}
                                    className="p-2 shadow" 
                                    cover={
                                        <div className="w-[220px] h-[190px]">
                                            <Image 
                                                src={relatedProductsItem.image} 
                                                width={0}
                                                height={0}
                                                sizes="100vw"
                                                style={{ width: '100%', height: 'auto' }} 
                                                alt={relatedProductsItem} 
                                            />
                                        </div>
                                    }
                                >
                                    <Meta 
                                        title={
                                            <span className=" text-blue-400">
                                                <Link href={`/product/${relatedProductsItem.title.split(" ").join("-")}`}>
                                                    {relatedProductsItem.title}
                                                </Link>
                                            </span>
                                        } 
                                        description={
                                            <div className="flex justify-between">
                                                <span className="text-red-500 font-bold text-lg">
                                                    {relatedProductsItem.price}
                                                </span>
                                                <Button 
                                                    type='circle' 
                                                    size="middle"
                                                    style={{backgroundColor: "red",color: "white"}}
                                                >
                                                <i className='bx bx-cart-download text-xl' />
                                                </Button>
                                            </div>
                                    } 
                                    /> 
                                    {
                                        cardIndex == relatedProductsIndex ? 
                                        <div className={`${cardAddToCart} flex items-center justify-center border-t mt-5`}>
                                            <a href="#" className="text-sm text-gray-500 hover:text-black mr-4 mt-2">
                                                <i className='bx bx-heart mr-[5px] text-sm text-red-500' />
                                                Wishlist
                                            </a>
                                        </div> : null
                                    }          
                                </Card>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
                
            </div>
                </div>
            </div>
            {/* Related Product End */}
        </Layout>
    )
}

export default Product