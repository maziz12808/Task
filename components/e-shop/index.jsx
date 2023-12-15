import Image from "next/image";
import Link from "next/link";
import Layout from "../shared/layout"
import { usePathname } from 'next/navigation'
import {
    Card,
    Breadcrumb
} from "antd";
import { 
    SearchOutlined,
    RightOutlined
} from "@ant-design/icons";

const { Meta } = Card;

const EShop = ()=>{
    const pathname = usePathname()
    const eShopProducts = [
        {
            title: "Nilgiris",
            image: "/images/nilgiris.jpg",
        },
        {
            title: "Aaditya Mart",
            href: "/",
            image: "/images/aaditya-mart.jpg"
        },
        {
            title: "Raj Laxmi Enterprises( SS)",
            href: "/",
            image: "/images/IMG-20171129-WA0020.jpg",
            price: "₹180"
        },
        {
            title: "M S Trading",
            href: "/",
            image: "/images/IMG-20210528-WA00012.jpg",
            price: "₹180"
        },
        {
            title: "Blue Rose Pouch (22gm)",
            href: "/",
            image: "/images/IMG-20211229-WA0011.jpg",
            price: "₹180"
        },
        {
            title: "A K Enterprises",
            href: "/",
            image: "/images/Mix_Products_MEM.jpg",
            price: "₹180"
        }
    ]
    const breadcrumbItem = ()=>{
        const items = pathname.split("/").slice(0,2).map((item,index)=>(
            index == 0 ? 
            {title: <Link href="/">Home</Link>} : 
            {title: item}
        ))
        return items
    }
    return (
        <Layout>
            <Breadcrumb 
                className=" capitalize border-b px-[3.6%] py-4"
                items={breadcrumbItem()}
                separator={<RightOutlined style={{fontSize: '11px'}} />}
            />
            <div  className="px-[3.6%] py-[2%] bg-[#FEFEFE] flex flex-col gap-y-8">
            {/* {`home pathname.split("/")[2].split("-")`} */}
           
                <h1 className="bg-white px-3 py-3 text-3xl font-normal shadow border border-gray-50 capitalize">
                    E-Shop - By {pathname.split("/")[2].split("-").slice(3).join(" ")}
                </h1>
                <div className="w-5/12 relative">
                    <input 
                        size="large"
                        placeholder={`Search for E-Shop - By ${pathname.split("/")[2].split("-").slice(3).join(" ")}`}
                        className="bg-[#F4F6F5] rounded-full pl-5 py-3.5 w-full focus:outline-none capitalize" 
                    />
                    <SearchOutlined className=" absolute right-3 top-5 select-none" />
                </div>
                <div>
                    <div className="grid grid-cols-4 gap-y-9 gap-x-5">
                        {
                            eShopProducts.map((eshopItem,eshopIndex)=>(
                                <Card
                                    hoverable
                                    style={{
                                    width: 280,
                                    }}
                                    className="p-3 relative shadow-lg pb-0" 
                                    key={eshopIndex}
                                    cover={
                                            <div className="w-full h-[235px] overflow-hidden">
                                                <Link href={"/e-shop/e-shop-by/"+eshopItem.title.toLocaleLowerCase().split(" ").join("-")}>
                                                    <Image 
                                                        src={eshopItem.image} 
                                                        width={0} 
                                                        height={0}  
                                                        sizes="100vw" 
                                                        style={{width: "99%",height: "auto"}} 
                                                        alt={eshopItem.title}
                                                    />
                                                </Link>
                                            </div>
                                    }
                                >
                                    <Meta title=<p className="mx-auto w-fit text-lg">{eshopItem.title}</p>  />

                                    
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