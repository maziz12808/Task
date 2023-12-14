import Layout from "@/components/shared/layout"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react";
import {
    SearchOutlined,
    CarOutlined,
    HeartFilled 
} from "@ant-design/icons";
import {
    Card,
    Button
} from "antd";

const { Meta } = Card;

const BySellerCompany = ()=>{
    const [cardAddToCart,setCardAddToCart] = useState("hidden")
    const [cardIndex,setCardIndex] = useState(-1)
    const eShopProducts = [
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
    
    const onHideAddToCart = ()=>{
        setCardAddToCart("animate__animated animate__fadeOutDown") 
        setTimeout(()=> {
            if(cardAddToCart == "block") return setCardAddToCart("hidden")
        },500)
    }
    return (
        <Layout>
            <div className="px-[3.6%] py-[3%] bg-[#FFFFFF] flex flex-col gap-y-9">
                <div className=" overflow-hidden relative w-full h-[240px] rounded-lg">
                    <Image 
                        src="/images/102.jpg" 
                        width={0} 
                        height={0} 
                        sizes="100vw"  
                        style={{
                            width: "100%",
                            height: "auto"
                        }} 
                    />
                </div>
                <div className="w-5/12 relative">
                    <input 
                        size="large"
                        placeholder={`Search for Products`}
                        className="bg-[#F4F6F5] rounded-full pl-5 py-3.5 w-full focus:outline-none capitalize" 
                    />
                    <SearchOutlined className=" absolute right-3 top-5 select-none" />
                </div>
                <div>
                    <h1 className="text-xl font-medium border-b-2 w-fit border-orange-700 pb-2">
                        Sri Krishna Industries
                    </h1>
                    <div className="border-t w-fit grid grid-cols-4 gap-y-7 gap-x-10">
                    {
                        eShopProducts.map((eShopProductItem,eShopProductIndex)=>(
                            <Card 
                                hoverable
                                style={{
                                width: 270,
                                }} 
                                onMouseOver={()=> {
                                    setCardIndex(eShopProductIndex) 
                                    setCardAddToCart("block animate__animated animate__slideInUp")
                                }} 
                                onMouseOut={onHideAddToCart}
                                className="p-3 shadow-lg relative pb-0" 
                                key={eShopProductIndex}
                                cover={
                                    <div className="w-full h-[200px]">
                                        <Image 
                                            src={eShopProductItem.image} 
                                            width={0}
                                            height={0}
                                            sizes="100vw"
                                            style={{ width: '100%', height: 'auto' }} 
                                            alt={eShopProductItem} 
                                        />
                                    </div>
                                }
                            >
                                <Meta 
                                    title={
                                        <span className=" text-blue-400">
                                            <Link href={`/product/${eShopProductItem.title.split(" ").join("-")}`}>
                                                {eShopProductItem.title}
                                            </Link>
                                        </span>
                                    } 
                                    description={<span className="text-red-500 font-bold text-lg">{eShopProductItem.price}</span>} 
                                /> 
                                {
                                    cardIndex == eShopProductIndex ? 
                                    <div 
                                    className={`
                                        absolute -bottom-1 -left-[2px] bg-black ${cardAddToCart} p-4 
                                        flex justify-between items-center
                                    `} 
                                    style={{width: "102%"}}
                                    >
                                        <Button 
                                            size="large" 
                                            type="text" 
                                            className="bg-white text-lg font-semibold text-red-500" 
                                            icon={<CarOutlined />} 
                                            style={{borderRadius: 0,backgroundColor: "white"}} 
                                        >
                                            Add To cart
                                        </Button>
                                        <Button 
                                            size="middle"  
                                            className="text-red-500 border rounded-full" 
                                            icon={<HeartFilled />} 
                                        />
                                    </div> : null
                                }
                                
                            </Card>
                        ))
                    }
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default BySellerCompany