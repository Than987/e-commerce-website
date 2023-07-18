import { configureStore } from '@reduxjs/toolkit';
import CartReducer from './slices/CartSlice';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = configureStore({
    reducer: {
        cart: CartReducer,
        composeWithDevTools
    },

})
export default store;