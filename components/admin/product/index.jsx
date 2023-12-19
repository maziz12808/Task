import { useState } from "react";
import Layout from "../shared/layout";
import {
    Button,
    Drawer,
    message,
    Form,
    Input,
    Select
} from "antd";

const { Item } = Form;

const Product = ()=>{
    const [openDrawer,setOpenDrawer] = useState(false);
    const [messageApi, contextHolder] = message.useMessage();
    const toolbar = [
        <Button 
            type="text" 
            className="font-semibold"  
            style={{backgroundColor: "#4FC9DA",borderRadius:0,color:"white"}} 
            onClick={()=> setOpenDrawer(!openDrawer)}
        >
            Add Product
        </Button>
    ]

    // ****************Functions**********************
    const onClose = () => {
        setOpenDrawer(false);
      };

    return (
        <Layout toolbar={toolbar} title="product">
            <Drawer title="Add Sub Category" placement="right" onClose={onClose} open={openDrawer}>
                {contextHolder}
                <Form>
                    <Item 
                        name="_id" 
                        rules={
                            [
                                {
                                    required: true,
                                    message: "Category name is required!"
                                }
                            ]
                        }
                    >
                        <Select 
                            size="large"
                            placeholder="Select Category"
                            
                            options={[]}
                        />
                    </Item>
                    <Item name="childrenCategory">
                        <Input size="large" />
                    </Item>
                    <Item>
                        <Button htmlType="submit">Submit</Button>
                    </Item>
                </Form>
            </Drawer>
        </Layout>
    )
}

export default Product