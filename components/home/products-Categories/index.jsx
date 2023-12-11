import { CarOutlined, HeartFilled } from "@ant-design/icons";
import Image from "next/image";
import { useState } from "react";

const { Card, Button,Tabs,Empty } = require("antd")
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
    const AllCategories = [
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
        setCardAddToCart(" animate__animated animate__fadeOutDown") 
        setTimeout(()=> {
            if(cardAddToCart == "block") return setCardAddToCart("hidden")
        },500)
    }
    const AllCategory = ()=>{
        return (
            <div className="grid grid-cols-4 gap-y-7 ">
            {
                AllCategories.map((AllCategoryItem,AllCategoryIndex)=>(
                    <Card 
                        hoverable
                        style={{
                        width: 260,
                        }} 
                        onMouseOver={()=> {
                            setCardIndex(AllCategoryIndex) 
                            setCardAddToCart("block animate__animated animate__slideInUp")
                        }} 
                        onMouseOut={onHideAddToCart}
                        className="p-3 shadow-lg relative" 
                        key={AllCategoryIndex}
                        cover={
                            <div className="w-[220px] h-[230px]">
                                <Image 
                                    src={AllCategoryItem.image} 
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                    style={{ width: '100%', height: 'auto' }} 
                                    alt={AllCategoryItem} 
                                />
                            </div>
                        }
                    >
                        <Meta 
                            title={<span className=" text-blue-400">{AllCategoryItem.title}</span>} 
                            description={<span className="text-red-500 font-bold text-lg">{AllCategoryItem.price}</span>} 
                        /> 
                        {
                            cardIndex == AllCategoryIndex ? 
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
                                    className="bg-white text-lg font-semibold text-red-500 add-to-cart-btn" 
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
        )
    }
    const tabItems = [
        {
            label: <span className="font-semibold text-gray-600">All Categories</span>,
            key: '1',
            children: <div className="animate__animated animate__zoomIn animate__faster"><AllCategory /></div>,
        },
        {
            label: <span className="font-semibold text-gray-600">Mensa E-Shop</span>,
            key: '2',
            children: <Empty />,
        },
        {
            label: <span className="font-semibold text-gray-600">Office & Stationary</span>,
            key: '3',
            children: <Empty />,
        },
        {
            label: <span className="font-semibold text-gray-600">A to Z Groceries</span>,
            key: '4',
            children: <Empty />,
        },
        {
            label: <span className="font-semibold text-gray-600">Bags, Luggage & Travel items</span>,
            key: '5',
            children: <Empty />,
        }
    ]
    return (
        <div className="px-[3.6%] py-[7%] text-center roun">
            <h1 className="text-3xl">Our Categories</h1>
            <p className="my-3 mb-7 text-gray-500">
                Market or marketplace is location where people regularly purchase
                 and provisins.
            </p>
           
            <Tabs
                centered 
                size="large" 
                tabBarGutter={50} 
                animated
                items={tabItems} 
                id="category" 
            />
        </div>
    )
}

export default MensaProducts