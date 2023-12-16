import { DashboardOutlined, MenuOutlined } from "@ant-design/icons"
import { Button, Layout,Menu } from "antd"
import Link from "next/link"
import { useState } from "react"

const {Sider,Content,Header} = Layout

const LayoutEl = ({children})=>{
    const [open,setOpen] = useState(false)
    const menu = [
        {
            label: 'Dasbboard',
            key: '/dashboard',
            icon: <DashboardOutlined />,
        },
        {
            label: <Link href="/admin/category">Category</Link>,
            key: '/category',
            icon: <i className='bx bx-category' />,
        }
    ]
    return (
        <Layout>
            <Sider 
                trigger={null} 
                collapsed={open} 
                collapsible 
                className="min-h-screen" 
                theme="light"
            >
                <Menu items={menu} />
            </Sider>
            <Layout>
                <Header className="bg-gray-200">
                    <Button type="text" icon={<MenuOutlined />} onClick={()=> setOpen(!open)} />
                </Header>
                <Content className="p-4">
                    {
                        children
                    }
                </Content>
            </Layout>
        </Layout>
    )
}

export default LayoutEl