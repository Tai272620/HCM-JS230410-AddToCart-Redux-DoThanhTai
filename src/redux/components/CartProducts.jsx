import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteProduct, updateProduct } from '../stores/action';

export default function CartProducts({ cartStore }) {
  const dispatch = useDispatch();
  const handleDeleteProduct = (productId) => {
    dispatch(deleteProduct(productId));
  };

  const handleUpdateProduct = (product) => {
    dispatch(updateProduct(product));
  };

  return (
    <div className='cart-container'>
      <h2>Your Cart</h2>
      <table>
        <thead>
          <tr>
            <td>#</td>
            <td>Name</td>
            <td>Price</td>
            <td>Quantity</td>
            <td>Subtotal</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {cartStore.map((product, index) => (
            <tr key={index}>
              <td>{product.productId}</td>
              <td>{product.productName}</td>
              <td>{product.price} USD</td>
              <td>
                <input
                  type='number'
                  value={product.quantity}
                  style={{ width: '50px' }}
                />
              </td>
              <td>{product.quantity * product.price} USD</td>
              <td>
                <button onClick={() => handleUpdateProduct(product)}>
                  update
                </button>
                <button onClick={() => handleDeleteProduct(product.productId)}>
                  delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>There are {cartStore.length} items in the shopping cart</p>
    </div>
  );
}
