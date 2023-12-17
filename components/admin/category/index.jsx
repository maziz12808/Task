import { useState,useRef } from "react"
import LayoutEl from "../shared/layout"
import { 
    Button,
    Drawer, 
    Form,
    Input,
    Select,
    Divider,
    Space
} from "antd"
import {PlusOutlined } from "@ant-design/icons"

const { Item } = Form;
const Category = ()=>{
    const [openDrawer,setOpenDrawer] = useState(false);
    const [items, setItems] = useState([]);
    const [name, setName] = useState('');
    const inputRef = useRef(null);
    const toolbar = [
        <Button 
            type="text" 
            className="font-semibold"  
            style={{backgroundColor: "#4FC9DA",borderRadius:0,color:"white"}} 
            onClick={()=> setOpenDrawer(!openDrawer)}
        >
            Add Category
        </Button>
    ]
    const showDrawer = () => {
        setOpenDrawer(true);
      };
      const onClose = () => {
        setOpenDrawer(false);
      };
      const onNameChange = (event) => {
        setName(event.target.value);
      };
      const addItem = (e) => {
        e.preventDefault();
        if(name=='') return alert("please enter category name") 
        if(items.indexOf(name) !== -1) return (setName(''),alert("Category Already Exist"))
        setItems([...items, name]);
        setName('');
        setTimeout(() => {
          inputRef.current?.focus();
        }, 0);
      };
    const onCategory = (val)=>{
        console.log(val);
    }
    return (
        <LayoutEl toolbar={toolbar}>
            <Drawer title="Basic Drawer" placement="right" onClose={onClose} open={true}>
                <Form onFinish={onCategory}>
                    <Item 
                        name="catetitlegory" 
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
                            dropdownRender={(menu) => (
                                <>
                                    <Divider
                                        style={{
                                        margin: '8px 0',
                                        }}
                                    />
                                    <Space>
                                        <Input
                                            placeholder="Please enter category name"
                                            ref={inputRef}
                                            value={name}
                                            onChange={onNameChange}
                                            onKeyDown={(e) => e.stopPropagation()} 
                                        />
                                        <Button 
                                            type="text" 
                                            size="middle" 
                                            icon={<PlusOutlined />} 
                                            onClick={addItem} 
                                        >
                                            Add item
                                        </Button>
                                    </Space>
                                    {menu}
                                </>
                            )}
                            options={items.map((item) => {
                                return {
                                    label: item,
                                    value: item,
                                }
                            })}
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
        </LayoutEl>
    )
}

export default Category