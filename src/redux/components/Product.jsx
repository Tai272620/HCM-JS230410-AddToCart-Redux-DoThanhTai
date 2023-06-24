import React, { useState } from 'react'
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card } from 'antd';
import { useDispatch } from 'react-redux';
import { addProduct } from '../stores/action';
const { Meta } = Card;

export default function Product({product}) {
  
  const dispatch = useDispatch()

  function formSubmit (event, product) {
    event.preventDefault()
    dispatch(addProduct({
      product:product,
      quantity: parseInt(event.target.quantity.value)
    }))
  }
  
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
    <form className='product-button' onSubmit={(e) => formSubmit(e, product)}>
      <input type="number" defaultValue={1} name="quantity"/>
      <button>12 USD</button>
    </form>
  </div>
  )
}
