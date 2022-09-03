import { ADD_TO_CART, REMOVE_FROM_CART } from "../constants";

const initialState = {
    cardData: []
}

export const cardItems = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return {
                ...state,
                cardData: [...state.cardData, action.payload]
            }
            break;
        case REMOVE_FROM_CART:
            state.cardData.pop()
            return{
                ...state,
                cardData: [...state.cardData]
            }
            break;
        default:
            return state
    }
}