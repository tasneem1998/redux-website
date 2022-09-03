import { ADD_TO_CART, REMOVE_FROM_CART } from "../constants";

const addToCart = (data) => {
    return {
        type: ADD_TO_CART,
        payload: data
    }
}

const removeFromCart = (id) => { // id => no use for now
    return {
        type: REMOVE_FROM_CART,
        payload: id
    }
}

export {
    addToCart,
    removeFromCart
}