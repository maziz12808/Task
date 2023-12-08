import Image from "next/image"
import Link from "next/link"

const EShop = ()=>{
    const companiesBrands = [
        {
            label: "test-sub-category",
            image: "/Images/Avence_3p_set.jpg",
            href: "/e-shop"
        },
        {
            label: "ma-provision-mart",
            image: "/Images/20210611_192511.png",
            href: "/e-shop"
        },
        {
            label: "natures-basket",
            image: "/Images/natures-basket.jpg",
            href: "/e-shop"
        },
        {
            label: "fresh-mart",
            image: "/Images/fresh-mart.jpeg",
            href: "/e-shop"
        },
        {
            label: "mansa",
            image: "/Images/IMG-20210114-WA0003.jpg",
            href: "/e-shop"
        },
        {
            label: "pragathi-international",
            image: "/Images/Screenshot_20210718-190529_Google1.jpg",
            href: "/e-shop"
        },
        {
            label: "master-industries",
            image: "/Images/Screenshot_20230622_190559_Chrome1.jpg",
            href: "/e-shop"
        },
        {
            label: "jay-ganesh-agarbatti-company",
            image: "/Images/21.jpg",
            href: "/e-shop"
        },
        {
            label: "aagam-incense",
            image: "/Images/Aagam_Images.jpg",
            href: "/e-shop"
        }

    ]
    const eShopBySallerName = [
        {
            label: "nilgiris",
            image: "/Images/nilgiris.jpg",
            href: "/e-shop"
        },
        {
            label: "aaditya-mart",
            image: "/Images/aaditya-mart.jpg",
            href: "/e-shop"
        },
        {
            label: "rajlaxmi-enterprises",
            image: "/Images/IMG-20171129-WA0020.jpg",
            href: "/e-shop"
        },
        {
            label: "m-s-trading",
            image: "/Images/IMG-20210528-WA00012.jpg",
            href: "/e-shop"
        },
        {
            label: "a-k-enterprises",
            image: "/Images/IMG-20211229-WA0011.jpg",
            href: "/e-shop"
        },
        {
            label: "rle-mansa-",
            image: "/Images/Mix_Products_MEM.jpg",
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
                                <Link href={`/e-shop/${companiesBrandItem.label}`}>
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
                                <Link href={`/e-shop/${eShopBySallerNameItem.label}`}>
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