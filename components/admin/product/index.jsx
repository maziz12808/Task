import { useState } from "react"
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
    const [messageApi, contextHolder] = message.useMessage();

    // Fetch category
    const {data:purchaseProduct,error,loading} = useSWR("/purchase",fetcher)
    const {data:product,producterror,productloading} = useSWR("/product",fetcher)
    console.log(product);
    const tableDataSource = [];
    product && product.map((item)=>{
        tableDataSource.push(
            {
                title: item.purchaseProduct.title,
                category: item.purchaseProduct.category.title,
                childrenCategory:item.purchaseProduct.childrenCategory,
                price: item.price,
                discount: item.discount,
                description: item.description,
                stock: item.purchaseProduct.stock
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
            Add Product
        </Button>
    ]
   
    const onClose = () => {
    setOpenDrawer(false);
    };
      
    
    const onProduct = async (val)=>{
        //Add Category
        try{
            const data = await axios.post(`/product`,val)
            console.log(data);
            //mutate("/category")
        }
        catch(err)
        {
            console.log(err);
        }
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
            title: 'subCategory',
            dataIndex: 'childrenCategory',
            key: 'childrenCategory'
        },
        {
            title: 'Price',
            dataIndex: 'price',
            key: 'price'
        },
        {
            title: 'Discount',
            dataIndex: 'discount',
            key: 'discount'
        },
        {
            title: 'Stock',
            dataIndex: 'stock',
            key: 'stock'
        },
        {
            title: 'Description',
            dataIndex: 'description',
            key: 'description'
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
            <Drawer title="Add Sub Category" placement="right" onClose={onClose} open={openDrawer}>
                {contextHolder}
                {/* add Product */}
                <Form onFinish={onProduct}>
                    <Item 
                        name="purchaseProduct" 
                        rules={
                            [
                                {
                                    required: true,
                                    message: "Product name is required!"
                                }
                            ]
                        }
                    >
                        <Select 
                            size="large" 
                            showSearch
                            placeholder="Search to Select" 
                            optionFilterProp="children" 
                            filterOption={(input, option) => (option?.label ?? '').includes(input)} 
                            filterSort={(optionA, optionB) =>
                                (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                            }
                            options={purchaseProduct && purchaseProduct.map((item,index) => {
                                return {
                                    label: item.title,
                                    value: item._id
                                }
                            })}
                        />
                    </Item>
                    <Item name="price" rules={[{required:true, message:"product price is required"}]}>
                        <Input size="large" placeholder="Enter Product Price" />
                    </Item>
                    <Item name="discount">
                        <Input size="large" placeholder="Enter Product Discount" />
                    </Item>
                    <Item name="description" rules={[{required:true,message: 'Product Description is required'}]}>
                        <Input size="large" placeholder="Enter Product Description" />
                    </Item>
                    <Item>
                        <Button 
                            size="large"
                            htmlType="submit" 
                            style={
                                {
                                    backgroundColor:"#4FC9DA",
                                    color:"white",
                                    border:0,
                                    padding: '0 px'
                                }
                            }
                        >
                            Submit
                        </Button>
                    </Item>
                </Form>
            </Drawer>
        </LayoutEl>
    )
}

export default Category