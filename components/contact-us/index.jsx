import Layout from "../shared/layout";
import {
    Form,
    Input,
    Button
} from "antd"
const { Item } = Form;
const { TextArea } = Input;

const ContactUs = ()=>{
    return (
        <Layout>
            <div  className="px-[3.6%] py-5">
                <div className="grid grid-cols-4">
                    <div className="col-span-3 p-2">
                        <h1 className="text-2xl mb-3">Send Us Message</h1>
                        <Form className="grid grid-cols-2 gap-x-5 gap-y-1">
                            <Item
                                name="fullname"
                                rules={[
                                    {
                                    required: true,
                                    message: 'Please enter your fullname!',
                                    },
                                ]}
                            >
                                <Input 
                                    size="large"
                                    className="rounded-3xl focus:shadow-none hover:border-inherit px-4 py-2.5 text-gray-500" 
                                    placeholder="Name*" 
                                />
                            </Item>
                            <Item
                                name="email"
                                rules={[
                                    {
                                    required: true,
                                    message: 'Please enter your email!',
                                    },
                                ]}
                            >
                                <Input 
                                    size="large"
                                    className="px-4 py-2.5 rounded-3xl focus:shadow-none hover:border-inherit text-gray-500" 
                                    placeholder="Email"  
                                />
                            </Item>
                            <Item
                                name="message"
                                rules={[
                                    {
                                    required: true,
                                    message: 'Please enter your message!',
                                    },
                                ]} 
                                className=" col-span-2"
                            >
                                <TextArea 
                                    maxLength={100} 
                                    rows={8}
                                    size="large"
                                    className="px-4 py-2.5 rounded-lg focus:shadow-none hover:border-inherit text-gray-500" 
                                    placeholder="Message*"  
                                />
                            </Item>
                            <Item>
                                <Button 
                                    type="text" 
                                    size="cirlce"
                                    className="px-7 py-[23px] flex items-center rounded-3xl"
                                    style={{backgroundColor: "red", color: "white"}} 
                                >
                                    Send Message
                                </Button>
                            </Item>
                        </Form>
                    </div>
                    <div className="px-5 py-3 flex flex-col gap-y-3">
                    <h1 className="text-2xl">Contact Info</h1>
                        <address className="text-sm text-gray-600 leading-6">
                            Mansa Easy Mart Pvt. Ltd.<br />
                            #40/1-8, Sharief Market, 4th Floor,<br />
                            Patnoolpet, O.T.Pet Cross, Bandimutt,<br />
                            Bangalore - 560053.
                        </address>
                        <div className=" text-blue-800 text-[15px] flex flex-col gap-y-1">
                            <a href="#" className="hover:text-gray-500">customersupport@mansaeasymart.com</a>
                            <a href="#" className="hover:text-gray-500">080-22356613</a>
                            <a href="#" className="hover:text-gray-500">+91 7625010555</a>
                            <a href="#" className="hover:text-gray-500">+91 7338240777</a>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default ContactUs