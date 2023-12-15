import Layout from "../shared/layout";
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import {RightOutlined} from "@ant-design/icons";
import { Breadcrumb } from "antd";

const Login = ()=>{
    const pathname = usePathname();
    return (
        <Layout>
            <Breadcrumb 
                className=" capitalize border-b px-[3.6%] py-4"
                items={[
                    {title: <Link href="/">Home</Link>},  
                    {title: " Login-Registration"}
                ]}
                separator={<RightOutlined style={{fontSize: '11px'}} />}
            />
            <div className="px-[3.6%]">
                <h2>Login</h2>
            </div>
        </Layout>
    )
}

export default Login