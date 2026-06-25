import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice.js';
import buildPizzaReducer from './buildPizzaSlice.js';

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        buildPizza: buildPizzaReducer,
    },
});