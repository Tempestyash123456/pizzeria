import { createSlice } from "@reduxjs/toolkit";

const buildPizzaSlice = createSlice({
    name: "buildPizza",

    initialState: {
        selectedIngredients: [],
        totalCost: 0,
    },

    reducers: {
        toggleIngredient(state, action){
            const ingredient = action.payload;
            const exists = state.selectedIngredients.find((item) => item.id === ingredient.id);

            if(exists){
                state.selectedIngredients = state.selectedIngredients.filter((item) => item.id !== ingredient.id);
                state.totalCost -= ingredient.price;
            } else {
                state.selectedIngredients.push(ingredient);
                state.totalCost += ingredient.price;
            }
        }, 

        resetBuild(state){
            state.selectedIngredients = [];
            state.totalCost = 0; 
        },
    },
});

export const {
    toggleIngredient, 
    resetBuild
} = buildPizzaSlice.actions; 

export default buildPizzaSlice.reducer;