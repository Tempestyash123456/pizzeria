import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: "cart",

    initialState: {
        items: [],
        ingredientsCost: 0,
        ingredients: [],
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
            state.ingredients = [];
        }, 

        setIngredientsCost(state, action){
            state.ingredientsCost = action.payload;
        },
        setIngredients(state, action){
            state.ingredients = action.payload;
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
    setIngredients,
} = cartSlice.actions;

export default cartSlice.reducer;