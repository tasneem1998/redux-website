import { ADD_TO_CART } from "../constants";

const addToCart = (data) =>{
    console.log(data,"add to cart data");
    return {
        type: ADD_TO_CART,
        payload: data
    }
}

export {
    addToCart
}