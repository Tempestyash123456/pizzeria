import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: "cart",

    initialState: {
        items: [],
        ingredientsCost: 0,
    },

    reducers: {
        addToCart(state, action){
            const existing = state.items.find((item) => item.id === action.payload.id);

            if(existing){
                existing.quantity += 1;
            } else {
                state.items.push({...action.payload, quantity: 1}); 
            }
        }, 

        removeFromCart(state, action){
            state.items = state.items.filter((item) => item.id !== action.payload);
        }, 

        increaseQuantity(state, action){
            const currItem = state.items.find((item) => item.id === action.payload); 
            if(currItem){
                currItem.quantity += 1; 
            }
        }, 

        decreaseQuantity(state, action){
            const currItem = state.items.find((item) => item.id === action.payload); 

            if(currItem && currItem.quantity > 1){
                currItem.quantity -= 1; 
            } else {
                state.items = state.items.filter((item) => item.id !== action.payload);
            }
        }, 

        clearCart(state){
            state.items = [];
            state.ingredientsCost = 0;
        }, 

        setIngredientsCost(state, action){
            state.ingredientsCost = action.payload;
        },
    },
});

export const {
    addToCart, 
    removeFromCart, 
    increaseQuantity, 
    decreaseQuantity,
    clearCart, 
    setIngredientsCost,
} = cartSlice.actions;

export default cartSlice.reducer;