import React, { useState } from 'react'
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card } from 'antd';
const { Meta } = Card;

export default function Product({product, handleAddProduct}) {
  const [quantity, setQuantity] = useState(1)
  
  return (
    <div className='product'>
    <Card
      className='product-item'
      cover={
        <img
          alt="example"
          src={product.image}
          style={{width:"250px"}}
        />
      }
    >
      <Meta
        title={product.productName}
        description={product.title}
      />
    </Card>
    <div className='product-button'>
      <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)}/>
      <button onClick={() => {handleAddProduct({...product, quantity:parseInt(quantity)})
    }}>12 USD</button>
    </div>
  </div>
  )
}
