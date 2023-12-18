import Head from "next/head"
import Link from "next/link"
import { useState } from "react"
import { Button, Layout,Menu } from "antd"
import { DashboardOutlined, MenuOutlined } from "@ant-design/icons"

const {Sider,Content,Header} = Layout

const LayoutEl = ({children,title=null,toolbar=null})=>{
    const [open,setOpen] = useState(false)
    const menu = [
        {
            label: <Link href="/admin">Dasbboard</Link>,
            key: 'dashboard',
            icon: <DashboardOutlined />,
        },
        {
            label: <Link href="/admin/category">Category</Link>,
            key: 'category',
            icon: <i className='bx bx-category' />,
        }
    ]
    return (
        <Layout>
            <Head>
                <title>{ title && title}</title>
            </Head>
            <Sider 
                trigger={null} 
                collapsed={open} 
                collapsible 
                className="min-h-screen admin-sider" 
            >
                <Menu items={menu}  />
            </Sider>
            <Layout>
                <Header className="bg-white flex justify-between items-center px-4">
                    <Button type="text" icon={<MenuOutlined />} onClick={()=> setOpen(!open)} />
                    <div className="flex gap-x-4">
                        {toolbar && toolbar}
                    </div>
                </Header>
                <Content className="p-4 bg-[#FDFCFB] border-t">
                    {
                        children
                    }
                </Content>
            </Layout>
        </Layout>
    )
}

export default LayoutEl