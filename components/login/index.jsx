import Layout from "../shared/layout";
import Link from 'next/link';
import {RightOutlined} from "@ant-design/icons";
import { 
    Breadcrumb,
    Form,
    Input,
    Button,
    Divider
} from "antd";

const { Item } = Form;

const Login = ()=>{
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
                <div className="grid grid-cols-2 min-h-screen px-5 py-24">
                    <div className="pl-2 pr-20">
                        <h1 className="text-3xl font-normal border-b-2 w-1/5 pb-2 border-orange-600">Login</h1>
                        <div className="border-t border-gray-300 py-7">
                            <p className="text-gray-700">Welcome back! Sign in to your account</p>
                            <Form layout="vertical">
                                <Item 
                                    label={<p className=" text-base font-semibold">Email*</p>}
                                    name="email"
                                >
                                    <Input size="large" className=" rounded-full py-2.5" />
                                </Item>
                                <Item 
                                    label={<p className=" text-base font-semibold">Password*</p>}
                                    name="password"
                                >
                                    <Input size="large" className="rounded-full py-2.5" />
                                </Item>
                                <Item>
                                    <Button 
                                        type="text"
                                        className="bg-[#F70A0A] text-white rounded-full px-7 py-[22px] flex items-center font-semibold"
                                    >Login</Button>
                                </Item>
                            </Form>

                        </div>
                    </div>
                    
                    <div className="pl-14 pr-20">
                        <h1 className="text-3xl font-normal border-b-2 w-1/5 pb-2 border-orange-600">Login</h1>
                        <div className="border-t border-gray-300 py-7">
                            <p className="text-gray-700">Welcome back! Sign in to your account</p>
                            <Form layout="vertical">
                                <Item 
                                    label={<p className=" text-base font-semibold">First Name*</p>}
                                    name="firstname"
                                >
                                    <Input size="large" className=" rounded-full py-2.5 text-gray-500" />
                                </Item>
                                <Item 
                                    label={<p className=" text-base font-semibold">Last Name*</p>}
                                    name="lastname"
                                >
                                    <Input size="large" className="rounded-full py-2.5 text-gray-500" />
                                </Item>
                                <Item 
                                    label={<p className=" text-base font-semibold">Email ID*</p>}
                                    name="email"
                                >
                                    <Input size="large" className="rounded-full py-2.5 text-gray-500" />
                                </Item>
                                <Item 
                                    label={<p className=" text-base font-semibold text-gray-500">Mobile No*</p>}
                                    name="mobile"
                                >
                                    <Input size="large" className="rounded-full py-2.5 text-gray-500" />
                                </Item>
                                <Item 
                                    label={<p className=" text-base font-semibold text-gray-500">Address*</p>}
                                    name="address"
                                >
                                    <Input.TextArea 
                                        rows={5}
                                        size="large" 
                                        className="p-2 text-md text-gray-500 rounded-xl" 
                                    />
                                </Item>
                                <Item>
                                    <Button 
                                        htmlType="submit"
                                        type="text"
                                        className="bg-[#F70A0A] text-white rounded-full px-7 py-[22px] flex items-center font-semibold"
                                    >Register</Button>
                                </Item>
                            </Form>

                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Login