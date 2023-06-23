import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteProduct } from '../stores/action'

export default function CartProducts({cartStore}) {
    console.log(cartStore)
    const dispatch = useDispatch()
    const handleDeleteProduct = (productId) => {
        console.log(productId)
        dispatch(deleteProduct(productId))
    }
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
                    {cartStore.map((item, index) => (
                        <tr key={index}>
                            <td>{item.productId}</td>
                            <td>{item.productName}</td>
                            <td>{item.price} USD</td>
                            <td>
                                <input type="number" value={item.quantity} style={{width:"50px"}}/>
                            </td>
                            <td>{item.quantity * item.price} USD</td>
                            <td>
                                <button>update</button>
                                <button onClick={() => {
                                    handleDeleteProduct(item.productId)
                                }}>delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
