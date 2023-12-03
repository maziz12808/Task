import Image from "next/image"
import Link from "next/link"

const EShop = ()=>{
    const companiesBrands = [
        {
            image: "/Images/Avence_3p_set.jpg",
            href: "/e-shop"
        },
        {
            image: "/Images/20210611_192511.png",
            href: "/e-shop"
        },
        {
            image: "/Images/natures-basket.jpg",
            href: "/e-shop"
        },
        {
            image: "/Images/fresh-mart.jpeg",
            href: "/e-shop"
        },
        {
            image: "/Images/IMG-20210114-WA0003.jpg",
            href: "/e-shop"
        },
        {
            image: "/Images/Screenshot_20210718-190529_Google1.jpg",
            href: "/e-shop"
        },
        {
            image: "/Images/Screenshot_20230622_190559_Chrome1.jpg",
            href: "/e-shop"
        },
        {
            image: "/Images/21.jpg",
            href: "/e-shop"
        },
        {
            image: "/Images/Aagam_Images.jpg",
            href: "/e-shop"
        }

    ]
    const eShopBySallerName = [
        {
            image: "/Images/Avence_3p_set.jpg",
            href: "/e-shop"
        },
        {
            image: "/Images/20210611_192511.png",
            href: "/e-shop"
        },
        {
            image: "/Images/natures-basket.jpg",
            href: "/e-shop"
        },
        {
            image: "/Images/fresh-mart.jpeg",
            href: "/e-shop"
        },
        {
            image: "/Images/IMG-20210114-WA0003.jpg",
            href: "/e-shop"
        },
        {
            image: "/Images/Screenshot_20210718-190529_Google1.jpg",
            href: "/e-shop"
        }
    ]
    return (
        <div className="bg-[#F8F9FB] px-[3.6%] py-[3.5%] text-center shadow">
            <div>
                <h1 className="text-3xl">E-Shop - By Companies Brand</h1>
                <div className="grid grid-cols-8 gap-x-5 gap-y-5 mt-12 px-16">
                    {
                        companiesBrands.map((companiesBrandItem,companiesBrandIndex)=>(
                            <div className="shadow-xl rounded-2xl w-[90px] h-[90px]" key={companiesBrandIndex}>
                                <Link href="/">
                                <Image 
                                    src={companiesBrandItem.image} 
                                    width={0} 
                                    height={0} 
                                    sizes="100vw" 
                                    style={{width: "100%",height: "100%"}} 
                                    className="rounded-2xl" 
                                    alt={`companies-brand-image${companiesBrandIndex}`}
                                />
                                </Link>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div>
                <h1 className="text-3xl">E-Shop - By Seller's Name</h1>
                <div className="grid grid-cols-6 gap-x-1 gap-y-5 mt-12 px-32 place-items-center">
                    {
                        eShopBySallerName.map((eShopBySallerNameItem,eShopBySallerNameIndex)=>(
                            <div className="shadow-xl rounded-2xl w-[90px] h-[90px]" key={eShopBySallerNameIndex}>
                                <Link href="/">
                                <Image 
                                    src={eShopBySallerNameItem.image} 
                                    width={0} 
                                    height={0} 
                                    sizes="100vw" 
                                    style={{width: "100%",height: "100%"}} 
                                    className="rounded-2xl" 
                                    alt={`companies-brand-image${eShopBySallerNameItem}`}
                                />
                                </Link>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default EShop