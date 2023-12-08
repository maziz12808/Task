import { useState } from "react"
import Image from "next/image"
import Layout from "../shared/layout"
import { Card,Button  } from "antd"
import {CarOutlined,HeartFilled } from "@ant-design/icons"
const { Meta } = Card;

const EShop = ()=>{
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
        setCardAddToCart(" animate__animated animate__fadeOutDown") 
        setTimeout(()=> {
            if(cardAddToCart == "block") return setCardAddToCart("hidden")
        },500)
    }
    return (
        <Layout>
            <div className="px-[3.6%] flex flex-col gap-y-14 py-8">
                <Image 
                    src="/Images/Banner-_RLE_1.jpg" 
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: '100%', height: 250 }} 
                />
                <input 
                    type="search"
                    placeholder="Search for products"
                    className="bg-zinc-100 rounded-e-3xl rounded-s-3xl h-12 pl-3 focus:outline-none w-5/12" 
                />
                <div>
                    <h1 className="text-xl font-medium border-b-2 border-b-orange-700 w-fit gap-y-0">
                        Pragathi International
                    </h1>
                    <div className="grid grid-cols-4 border-t gap-y-7">
                        {
                            eShopProducts.map((eShopProductItem,eShopProductIndex)=>(
                                <Card 
                                    hoverable
                                    style={{
                                    width: 260,
                                    }} 
                                    onMouseOver={()=> {
                                        setCardIndex(eShopProductIndex) 
                                        setCardAddToCart("block animate__animated animate__slideInUp")
                                    }} 
                                    onMouseOut={onHideAddToCart}
                                    className="p-3 shadow-lg relative" 
                                    key={eShopProductIndex}
                                    cover={
                                        <div className="w-[220px] h-[230px]">
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
                                        title={<span className=" text-blue-400">{eShopProductItem.title}</span>} 
                                        description={<span className="text-red-500 font-bold text-lg">{eShopProductItem.price}</span>} 
                                    /> 
                                    {
                                        cardIndex == eShopProductIndex ? 
                                        <div 
                                        className={`
                                            border w-full absolute -bottom-1 -left-[2px] bg-black ${cardAddToCart} p-4 
                                            flex justify-between items-center
                                        `} 
                                        style={{width: 262}}
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

export default EShop