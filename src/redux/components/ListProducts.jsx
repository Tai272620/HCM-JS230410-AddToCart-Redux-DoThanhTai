import React, {useState} from 'react'
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card } from 'antd';
import { addProduct } from '../stores/action';
import { useDispatch } from 'react-redux';
import Product from './Product';
const { Meta } = Card;

const listCart = JSON.parse(localStorage.getItem("listCart")) || [];
export default function ListProducts({ productStore }) {

  const dispatch = useDispatch();
  const handleAddProduct = (product) => {
    dispatch(addProduct(product))
  }
  return (
    <div className='products-container'>
      <h1>List Products</h1>
      {productStore.map((product, index) => (
        <Product product={product} key={index} handleAddProduct={handleAddProduct}/>
      ))}
  </div>
  )
}
