import { ADD_PRODUCT, DELETE_PRODUCT } from "./constant";

const listProducts = [
    {
        productId: 1,
        productName: "Pizza",
        image: "../images/pizza.jpg",
        title:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        price: 12,
        quantity: 1,
    },
    {
        productId: 2,
        productName: "Hamburger",
        image: "../images/Hamburger.jpg",
        title:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        price: 16,
        quantity: 1,
    },
    {
        productId: 3,
        productName: "Bread",
        image: "../images/bread.jpg",
        title:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        price: 13,
        quantity: 1,
    },
    {
        productId: 4,
        productName: "Cake",
        image: "../images/Cake.jpg",
        title:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        price: 14,
        quantity: 1,
    },
];

const initialState = {
    products: listProducts,
    cart: []
}

const addToCartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PRODUCT:
            let tempState = [...state.cart]
            let check = tempState.find((product) => product.productId === action.payload.product.productId)
            if (!check) {
                tempState.push({...action.payload.product, quantity:action.payload.quantity})
                localStorage.setItem("Cart", JSON.stringify(tempState))
                return {
                    ...state,
                    cart: tempState
                }
            } else {
                tempState.map((product) => {
                    if (product.productId === action.payload.product.productId) {
                        return product.quantity += action.payload.quantity
                    } else {
                        return product
                    }
                })
                localStorage.setItem("Cart", JSON.stringify(tempState))
                return {
                    ...state,
                    cart: tempState
                }
            }
            
        case DELETE_PRODUCT:
            localStorage.setItem("Cart", JSON.stringify(state.cart.filter(
                (product) => product.productId !== action.productId
            )))
            return {
                ...state,
                cart: state.cart.filter(
                    (product) => product.productId !== action.productId
                ),
            };
        default:
            return {
                ...state,
                cart: JSON.parse(localStorage.getItem("Cart")) || []
            }
    }
}


export default addToCartReducer