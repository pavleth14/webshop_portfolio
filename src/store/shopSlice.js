// shopSlice.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    allItems: [],
};

const shopSlice = createSlice({
    name: 'shopSlice',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            state.allItems.push(action.payload); // Adds the item to the cart
        },
        removeFromCart: (state, action) => {
            state.allItems = state.allItems.filter(item => item.id !== action.payload); // Removes the item from the cart by ID
        }
    }
});

export const { addToCart, removeFromCart } = shopSlice.actions;
export default shopSlice.reducer;
