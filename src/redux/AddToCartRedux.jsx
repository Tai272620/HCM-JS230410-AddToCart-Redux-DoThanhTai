import React, { useState } from 'react'
import ListProducts from './components/ListProducts'
import { useSelector } from 'react-redux'
import CartProducts from './components/CartProducts'

export default function AddToCartRedux() {
  const store = useSelector(state=>state.store)
  return (
    <div style={{display:"flex"}}>
      <ListProducts productStore={store.products}/>
      <CartProducts cartStore={store.cart}/>
    </div>
  )
}
