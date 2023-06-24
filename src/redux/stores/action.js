import { ADD_PRODUCT, DELETE_PRODUCT, UPDATE_PRODUCT } from "./constant";

export const addProduct = (payload) => ({
    type: ADD_PRODUCT,
    payload: payload
})

export const deleteProduct = (productId) => ({
    type: DELETE_PRODUCT,
    productId: productId
})

export const updateProduct = (product) => ({
    type: UPDATE_PRODUCT,
    product: product
  }); 