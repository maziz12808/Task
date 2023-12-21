import { useState,useRef, useEffect } from "react"
import LayoutEl from "../shared/layout"
import useSWR, {mutate} from "swr"
import axios from "axios";
import Table from "../shared/table"
axios.defaults.baseURL = "http://localhost:8080"
import { 
    Button,
    Drawer, 
    Form,
    Input,
    Select,
    message
} from "antd"
import {EditOutlined,DeleteOutlined  } from "@ant-design/icons"

const { Item } = Form;

const fetcher = async (url)=>{
    try {
        const {data} = await axios.get(url)
        return data
    }
    catch(err)
    {
       return err
    }
}

const Category = ()=>{
    const [openDrawer,setOpenDrawer] = useState(false);
    const [items, setItems] = useState([]);
    const [name, setName] = useState('');
    const inputRef = useRef(null);
    const [messageApi, contextHolder] = message.useMessage();

    // Fetch category
        const {data,error,loading} = useSWR("/category",fetcher)
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
    const onSubCategory = async (val)=>{
        // Add Category
        try{
            const data = await axios.put(`/category/${val._id}`,val)
            messageApi.open({
                type: 'success',
                content: 'Sub Category Created',
                duration: 3,
              });
            mutate("/category")
        }
        catch(err)
        {
            console.log(err);
        }
    }
    const onCategory = async (val)=>{
        //Add Category
        try{
            const data = await axios.post(`/category`,val)
            mutate("/category")
        }
        catch(err)
        {
            console.log(err);
        }
    }
    const handleChange = (value) => {
        //console.log(value);
      };
      const editDeleteDesign = (text,obj)=>{
        return (
            <div className="flex gap-2">
                <Button className="border-0" onClick={()=> editProduct(obj)} icon={<EditOutlined />} />
                <Button onClick={()=> deleteProduct(obj._id)} className="text-red-500 border-0" icon={<DeleteOutlined />} />
            </div>
        )
    }
    const SubCategory = (text,obj)=>{
        console.log(obj._id);
        const options = [];
        for (let sub of obj.childrenCategory) {
            options.push({
                value: sub,
                label: sub,
            });
        }
        return (
            <Select
            size="small"
            defaultValue="a1"
            onChange={handleChange}
            style={{
              width: "90%",
            }}
            options={options} 
          />
        )
    }
    const columns = [
        {
            title: 'category',
            dataIndex: 'title',
            key: 'title'
        }, 
        {
            title: 'Sub Category',
            dataIndex: 'childrenCategory',
            key: 'childrenCategory',
            render: SubCategory
        },
        {
            title: 'Action',
            dataIndex: 'action',
            key: 'action',
            render: editDeleteDesign
        }
    ];
    return (
        <LayoutEl toolbar={toolbar}>
            
            <Table column={columns} tableData={data} />
            <Drawer title="Add Sub Category" placement="right" onClose={onClose} open={openDrawer}>
                {contextHolder}
                {/* add category */}
                <Form onFinish={onCategory}>
                    <Item name="title">
                        <Input size="large" placeholder="Enter category name" />
                    </Item>
                    <Item>
                        <Button htmlType="submit">Submit</Button>
                    </Item>
                </Form>
                {/* add Sub Category */}
                <Form onFinish={onSubCategory}>
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
                            options={data && data.map((item,index) => {
                                return {
                                    label: item.title,
                                    value: item._id
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