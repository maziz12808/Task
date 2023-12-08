import Head from "next/head"
import Image from "next/image";
import {Fade} from "../effect" 
import menu from "@/json/menu.json"
import { 
    Badge,
    Button,
    Popconfirm
 } from "antd";
import { 
    MenuOutlined,
    ShoppingOutlined, 
    UserOutlined,
    RightOutlined,
    DownOutlined,
    TwitterOutlined,
    InstagramOutlined
} from '@ant-design/icons';
import Link from "next/link";
import { useState } from "react";

const Layout = ({children,title=null})=>{
    // Const
    const [show, setShow] = useState(false)
    const [openCart, setOpenCart] = useState(false)
    const [subMenuOpen, setSubMenuOpen] = useState("hidden")
    const [dropdownOpen, setDropdownOpen] = useState("hidden")
    const [subMenuData, setSubMenuData] = useState([])

    const lenguages = [
        {
            label: "Select Language",
            value: ""
        },
        {
            label: "Assamese",
            value: "assamese"
        },
        {
            label: "Bengali",
            value: "bengali"
        },
        {
            label: "Gujrati",
            value: "gujrati"
        },
        {
            label: "Hindi",
            value: "hindi"
        },
        {
            label: "Kannada",
            value: "Kannada"
        },
        {
            label: "Malayalam",
            value: "malayalam"
        },
        {
            label: "Marathi",
            value: "Marathi"
        },
        {
            label: "Odia (Oriya)",
            value: "odia"
        },
        {
            label: "Punjabi",
            value: "punjabi"
        },
        {
            label: "Tumil",
            value: "tumil"
        },
        {
            label: "Telgu",
            value: "telgu"
        },
        {
            label: "Urdu",
            value: "urdu"
        },
    ] 
    const footerCategoryMenu = [
        {
            label: "Mansa E-Shop",
            href: "/shop-category/mansa-e-shop"
        },
        {
            label: "Office & Stationary",
            href: "/shop-category/office-stationary"
        },
        {
            label: "A to Z Groceries",
            href: "/shop-category/a-to-z-groceries"
        },
        {
            label: "Bags, Luggage & Travel items",
            href: "/shop-category/bags-luggage-travel-items"
        },
        {
            label: "Every Things Else",
            href: "/shop-category/every-things-else"
        }
    ]
    const footerInformationMenu = [
        {
            label: "About us",
            href: "/about-us"
        },
        {
            label: "Contact us",
            href: "/contact-us"
        },
        {
            label: "Terms Of Use",
            href: "/terms-of-use"
        },
        {
            label: "Terms Of Sale",
            href: "/terms-of-sale"
        },
        {
            label: "Privacy Policy",
            href: "/privacy-policy"
        }
    ]
    // Functions
    const onMouseEnter = (item)=>{
        setSubMenuOpen("block")
        setSubMenuData(item.subMenu2);
    }
    const onMouseOut = ()=>{
        setSubMenuOpen("hidden")
    }
    const onOpenMenu = ()=>{
        setSubMenuOpen("hidden")
        setSubMenuData([])
        setShow(!show)
        
    }
    const onDropdownClick = ()=>{
        if(dropdownOpen === "hidden")
        {
            setDropdownOpen("block")
        }
        else{
            setDropdownOpen("hidden")
        }
    }
    const SubMenu = ({subMenu})=>{
        if(subMenu.isSubMenu)
        {
        return (
                <div 
                    className={
                        `absolute py-3 px-12 left-[100%] top-0 border border-t-2
                        border-t-rose-500 w-[600px]  ${subMenuOpen} font-normal h-full bg-white -z-[1]`
                    } 
                    onMouseLeave={onMouseOut} 
                >
                    {
                        subMenuData && subMenuData.map((subMenuItem,subMenuIndex)=>{
                            return (
                                <div className="flex flex-col gap-y-1 mt-3" key={subMenuIndex}>
                                    <p className="font-semibold">{subMenuItem.catLabel}</p>
                                    <Link href="/" legacyBehavior>
                                        <a className="text-gray-500">{subMenuItem.label}</a>
                                    </Link>
                                </div>
                            )
                        })
                    }
                </div>
        )
        }
    }
    const DropdownMenu = ({dropdownMenu})=>{
        return (
            <Fade state={show}>
            <div className="flex flex-col absolute top-14 border left-0 bg-gray-50 w-full px-3">
                <div className="relative">
                {
                    dropdownMenu.map((dropdownMenuItem,dropdownMenuIndex)=>{
                        return (
                            <div key={dropdownMenuIndex}>
                                <div 
                                    className="border-b flex items-center justify-between 
                                    px-1 py-2 hover:bg-gray-100 hover:font-semibold" 
                                    onMouseEnter={()=> onMouseEnter(dropdownMenuItem)} 
                                    
                                >
                                    <a href="#" className="text-sm">{dropdownMenuItem.label}</a>
                                    <RightOutlined style={{fontSize:12}} />
                                </div>
                                <SubMenu subMenu={dropdownMenuItem} />
                            </div>
                        )
                    })
                }
                </div>
            </div>
            </Fade>
        )
    }
    return (
        <div>
            <Head>
                <title>{title && title}</title>
            </Head>
            <header>
                <div className="bg-[#479AB2] h-14 px-3 py-3 flex items-center">
                    <marquee behavior="scroll"  direction="left" width="100%" className="text-3xl">
                        Explore the world of possibilities, Make Your Life Easy by Selling and 
                        Buying Products & Services on your "Own E-Shop"
                    </marquee> 
                </div>
                <div className="px-[3.6%] py-[2.1%] flex items-center gap-x-4">
                    <Link href="/">
                        <Image src='/Images/mansa-logo-v10.png' width={270} height={85} alt="mansa-logo-v10" />
                    </Link>
                    <div className="w-5/12">
                        <input 
                            type="search"
                            placeholder="Search for products"
                            className="bg-zinc-100 rounded-e-3xl rounded-s-3xl h-12 pl-3 w-full focus:outline-none" 
                        />
                    </div>
                    <div>
                        <select
                            className="rounded-full border px-4 py-2 focus:outline-none text-[13px]"
                        >
                            {
                                lenguages.map((languageItem,languadeIndex)=>(
                                    <option value={languageItem.value} key={languadeIndex}>
                                        {languageItem.label}
                                    </option>
                                ))
                            }
                        </select>
                        <a href="https://translate.google.com" target="_blank" className="flex flex-col relative">
                            <Image src="/Images/google_icon.png" width={35} height={10} alt="google_icon" />
                            <span className="absolute top-6 text-sm font-semibold">Translate</span>
                        </a>
                    </div>
                   <div className="flex gap-x-9">
                        <Badge 
                            count={0} 
                            offset={[-10, 28]} 
                            size="large" 
                            showZero 
                            className="cursor-pointer"
                            onClick={()=> setOpenCart(!openCart)}
                        >
                            <Button type="text" icon={<ShoppingOutlined style={{fontSize:25}} />}/>
                        </Badge>
                        
                        <Button 
                            className="rounded-e-3xl rounded-s-3xl px-4 
                            py-4 flex items-center border-red-600 border-2 text-base text-gray-600" 
                            icon={<UserOutlined className="-mr-1" />} 
                        >
                            <Link href="/login">Login</Link>
                        </Button>
                        <Popconfirm
                        placement="bottomRight" 
                        open={openCart}
                        arrow={false} 
                        showCancel={false} 
                        icon={false} 
                        okText="Ok"
                        description="You don't have any items in your cart" 
                        id="components-popconfirm-demo-placement"
                        />
                   </div>
                </div>
                <div className="px-[3.6%] flex gap-x-10 pt-2 items-center border-b">
                    {
                        menu.map((menuItem,menuIndex)=>{
                            if(menuItem.label == "Shop By Department" &&  menuItem.isDropdown)
                            {
                                return (
                                    <div 
                                        className="relative z-10" 
                                        key={menuIndex}
                                    >
                                        <a 
                                            className="bg-[#F70A0A] text-white pl-5 pr-14 py-3
                                            flex gap-x-1 text-lg font-medium rounded-t-lg select-none cursor-pointer" 
                                            onClick={onOpenMenu} 
                                        >
                                            <MenuOutlined style={{color: "white"}} />
                                            {menuItem.label}
                                        </a>
                                        <DropdownMenu dropdownMenu={menuItem.dropdown} />
                                    </div>
                                )
                            }
                            if(menuItem.isDropdown)
                            {
                                return (
                                    <div className="relative" key={menuIndex}>
                                        <a 
                                            className=" text-sm font-bold flex gap-x-2 items-center cursor-pointer select-none" 
                                            onClick={onDropdownClick}
                                        >
                                            {menuItem.label} 
                                            <DownOutlined style={{fontSize: 10}}  />
                                        </a>
                                        <div 
                                            className={`border flex flex-col gap-y-3 absolute top-8 
                                            w-40 px-2 py-3 border-t-2 border-t-red-500 animate__animated animate__slideInTop
                                            ${dropdownOpen}`
                                            }
                                        >
                                            {
                                                menuItem.dropdown.map((dropdownItem,dropdownIndex)=>{
                                                    return (
                                                        <Link href={dropdownItem.href} legacyBehavior key={dropdownIndex} >
                                                            <a className="text-sm text-gray-500">
                                                                {dropdownItem.label}
                                                            </a>
                                                        </Link>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                )
                            }
                            return (
                                <Link href={menuItem.href} legacyBehavior key={menuIndex}>
                                    <a className=" text-sm font-bold">{menuItem.label}</a>
                                </Link>
                            )
                        })
                    }
                </div>
            </header>
            <section className="px-[3.6%]">
                {
                    children
                }
            </section>
            <footer className="border-t">
                <div className="grid grid-cols-4 px-[3.6%] my-[5%]">
                    <div className="flex flex-col gap-y-3">
                        <h1 className="text-sm font-bold">Find It Fast</h1>
                        {
                            footerCategoryMenu.map((footerCategoryItem,footerCategoryIndex)=>(
                                <Link href={footerCategoryItem.href} legacyBehavior key={footerCategoryIndex}>
                                    <a className="text-sm text-gray-500">{footerCategoryItem.label}</a>
                                </Link>
                            ))
                        }
                    </div>
                    <div className="flex flex-col gap-y-3">
                        <h1 className="text-sm font-bold">Information</h1>
                        {
                            footerInformationMenu.map((footerInformationItem,footerInformationIndex)=>(
                                <Link 
                                    href={footerInformationItem.href} legacyBehavior key={footerInformationIndex}>
                                    <a className="text-sm text-gray-500">{footerInformationItem.label}</a>
                                </Link>
                            ))
                        }
                    </div>
                    <div className="flex flex-col gap-y-3">
                        <h1 className="text-sm font-bold">Contact Info</h1>
                        <address className="text-sm text-gray-500">
                            Mansa Easy Mart Pvt. Ltd.<br />
                            #40/1-8, Sharief Market, 4th Floor,<br />
                            Patnoolpet, O.T.Pet Cross, Bandimutt,<br />
                            Bangalore - 560053.
                        </address>
                        <div className="flex gap-x-5">
                            <Link href="https://www.facebook.com/profile.php?id=100066817545855" target="_blank">
                                <i 
                                    className='bx bxl-facebook opacity-60 hover:opacity-100' 
                                    style={{fontSize: 25}} 
                                />
                            </Link>
                            <Link href="https://www.linkedin.com/in/mansa-easy-mart-16596a1b6/" target="_blank">
                                <i 
                                    className='bx bxl-linkedin  opacity-60 hover:opacity-100' 
                                    style={{fontSize: 25}} 
                                />
                            </Link>
                            <Link href="https://twitter.com/EasyMansa" target="_blank">
                                <TwitterOutlined 
                                    className=" opacity-60 hover:opacity-100" 
                                    style={{fontSize: 25}} 
                                />
                            </Link>
                            <Link href="https://www.instagram.com/mansaeasymart/?hl=en" target="_blank">
                                <InstagramOutlined 
                                    className=" opacity-60 hover:opacity-100" 
                                    style={{fontSize: 25}} 
                                />
                            </Link>
                        </div>
                    </div>
                    <div className="flex flex-col gap-y-3">
                        <Image src='/Images/mansa-logo-v10.png' width={270} height={85} alt="mansa-logo-v10" />
                        <div className="flex  gap-x-2 items-center">
                            <i className='bx bx-phone-call text-6xl text-red-500' />
                            <div>
                                <span className="text-sm text-gray-500">Got Questions ? Call us 24/7!</span>
                                <p className=" text-xl">080-22356613</p>
                                <p className=" text-xl">+91 7625010555</p>
                                <p className=" text-xl">+91 7338240777</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="px-[3.6%] py-4 bg-[#1D1C2A] w-full">
                    <h1 className="text-white opacity-90 text-sm">
                        Copyright © 2023 Mansa All Rights Reserved.
                    </h1>
                </div>
            </footer>
        </div>
    )
}

export default Layout