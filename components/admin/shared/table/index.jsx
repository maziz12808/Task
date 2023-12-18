import {Table} from "antd"
const TableEl = ({column,tableData})=>{
    return (
        <Table 
            dataSource={tableData && tableData} 
            columns={column} 
            //onChange={onPagination} 
            size="small" 
            bordered
            //pagination={{total: allProduct && allProduct.total}}
            scroll={{
                x: 1000,
                y: 430,
            }}
        />
    )
}

export default TableEl