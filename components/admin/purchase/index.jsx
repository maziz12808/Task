import { useState } from "react"
import LayoutEl from "../shared/layout"
import useSWR, {mutate} from "swr"
import axios from "axios";
import Table from "../shared/table"
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
    const [subCategory,setSubCategory] = useState(false);
    const [messageApi, contextHolder] = message.useMessage();

    // Fetch category
        const {data,error,loading} = useSWR("/category",fetcher)
        const {data:purchaseData,purchaseError,purchaseLoading} = useSWR("/purchase",fetcher)
        const tableDataSource = [];
        purchaseData && purchaseData.map((item)=>{
            tableDataSource.push(
                {
                    title: item.title,
                    category: item.category.title,
                    childrenCategory:item.childrenCategory,
                    price: item.purchasePrice,
                    stock: item.stock
                }
            )
        })
    const toolbar = [
        <Button 
            type="text" 
            className="font-semibold"  
            style={{backgroundColor: "#4FC9DA",borderRadius:0,color:"white"}} 
            onClick={()=> setOpenDrawer(!openDrawer)}
        >
            Add Purchase Product
        </Button>
    ]
      const onClose = () => {
        setOpenDrawer(false);
      };
      

    const onPurchase = async (val)=>{
        //Add Puschase Product
        try{
            const data = await axios.post(`/purchase`,val)
            console.log(data);
            messageApi.open({
                type: 'success',
                content: 'Sub Category Created',
                duration: 3,
              });
            mutate("/purchase")
        }
        catch(err)
        {
            console.log(err);
        }
    }
    const onChangeCategory = (val,obj,)=>{
        setSubCategory([]);
        var result = data.filter(obj => {
            if(obj._id == val)
            {
                return obj
            }
        })
        const subOptions = []
        result.map((item)=>{
            item.childrenCategory.map((item)=>{
                subOptions.push({
                    value: item,
                    label: item,
                });
            })
        })
        setSubCategory(subOptions);

    }
    const editDeleteDesign = (text,obj)=>{
        return (
            <div className="flex gap-2">
                <Button className="border-0" onClick={()=> editProduct(obj)} icon={<EditOutlined />} />
                <Button onClick={()=> deleteProduct(obj._id)} className="text-red-500 border-0" icon={<DeleteOutlined />} />
            </div>
        )
    }
    const columns = [
        {
            title: 'Product Name',
            dataIndex: 'title',
            key: 'title'
        },
        {
            title: 'Category',
            dataIndex: 'category',
            key: 'category'
        },
        {
            title: 'Sub Category',
            dataIndex: 'childrenCategory',
            key: 'childrenCategory'
        },
        {
            title: 'Price',
            dataIndex: 'price',
            key: 'price'
        },
        {
            title: 'Stock',
            dataIndex: 'stock',
            key: 'stock'
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
            <Table column={columns} tableData={tableDataSource} />
            <Drawer title="Add Purchase Product" placement="right" onClose={onClose} open={openDrawer}>
                {contextHolder}
                <Form onFinish={onPurchase}>
                    <Item 
                        name="category" 
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
                            initialValues="Select Category"
                            size="large"
                            placeholder="Select Category" 
                            onChange={onChangeCategory}
                            options={data && data.map((item,index) => {
                                return {
                                    label: item.title,
                                    value: item._id
                                }
                            })}
                        />
                    </Item>
                    <Item  
                        name='childrenCategory'
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
                            initialValues="select Sub Category"
                            size="large"
                            placeholder="Select Category"
                            options={subCategory}
                        />
                    </Item>
                    <Item name="title" rules={[{required:true,message:"Product name is required"}]}>
                        <Input placeholder="Enter Product Name" />
                    </Item>
                    <Item name="purchasePrice" rules={[{required:true,message:"Product price is required"}]}>
                        <Input type="number" placeholder="Enter Product Price" />
                    </Item>
                    <Item name="stock" rules={[{required: true,message:"Product Quantity is required"}]}>
                        <Input type="number" placeholder="Enter Product Quantity"/>
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