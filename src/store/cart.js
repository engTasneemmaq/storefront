import {localStorageData} from './localStorage' 

const initialState = {
    cartItems: [],
    totalCartItems: 0
};

localStorageData(initialState)

export default(state = initialState, action) => {
    const {type, payload} = action;
    switch (type) {
        case 'addToCart':
            let exists = false;
            for (let i = 0; i < state.cartItems.length; i++) {
                if (state.cartItems[i].name === payload.name) {
                    exists = true;
                    state.cartItems[i].inCart += 1;
                    state.totalCartItems += 1;
                }
            }
            if (!exists) {
                state
                    .cartItems
                    .push(payload);
                state.totalCartItems += 1;
            }
            return state;

        case 'DELETE':
            state = JSON.parse(localStorage.getItem('cart'))
            let exist = true;
            for (let i = 0; i < state.cartItems.length; i++) {
                if (state.cartItems[i].name === payload.name && state.cartItems[i].inCart > 0) {
                    state.totalCartItems = state.totalCartItems - 1;
                    state.cartItems[i].inCart -= 1;
                    if (state.cartItems[i].inCart === 0) {

                        exist = false

                    }

                }
            }
            localStorageData(state)
            
            return state;
        default:
            return state;
    }
};

export const addToCart = product => {
    return {type: 'addToCart', 
    payload: product};
};

export const deletefromcart = product => {
    return {type: 'DELETE', 
    payload: product};
};