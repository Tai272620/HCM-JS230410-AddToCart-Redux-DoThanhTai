import { ADD_PRODUCT, DELETE_PRODUCT } from "./constant";

export const addProduct = (newProduct) => ({
    type: ADD_PRODUCT,
    newProduct: newProduct
})

export const deleteProduct = (productId) => ({
    type: DELETE_PRODUCT,
    productId: productId
})