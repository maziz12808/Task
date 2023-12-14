import { CarOutlined, HeartFilled } from "@ant-design/icons";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const { Card, Button } = require("antd")
const { Meta } = Card;
const MensaProducts = ()=>{
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

    // Functions
    const onHideAddToCart = ()=>{
        setCardAddToCart("animate__animated animate__fadeOutDown") 
        setTimeout(()=> {
            if(cardAddToCart == "block") return setCardAddToCart("hidden")
        },500)
    }
    return (
        <div className="px-[3.6%] py-[7%] text-center">
            <h1 className="text-3xl">E-Shop - By Seller's Name</h1>
            <p className="my-3 mb-7 text-gray-500">Vocal for Local / Branded / MNC all products</p>
            <div className="grid grid-cols-4 gap-y-7 gap-x-7">
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
                            className="p-3 shadow-lg relative" 
                            key={eShopProductIndex}
                            cover={
                                <div className="w-full h-[230px]">
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
                                className=""
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
                                    border w-full absolute -bottom-1 -left-[2px] bg-black ${cardAddToCart} px-4 py-3
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
    )
}

export default MensaProducts