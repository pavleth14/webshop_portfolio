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
            const isExisting = state.allItems.find(item => item.id === action.payload.id);

            if(action.payload.quantity) {
                if (isExisting) {
                    isExisting.quantity += action.payload.quantity
                } else {
                    state.allItems.push({ ...action.payload, quantity: action.payload.quantity });
                }     
                return;           
            }
            
            if(isExisting) {
                isExisting.quantity++
            } else {                
                state.allItems.push({ ...action.payload, quantity: 1 });
            }
            
             
        },
        addOneMore: (state, action) => {
            const isExisting = state.allItems.find(item => item.id === action.payload.id);
            isExisting.quantity++;
        },
        removeOne: (state, action) => {
            const isExisting = state.allItems.find(item => item.id === action.payload.id);
            if(isExisting.quantity > 1) {
                isExisting.quantity--;
            } else {                
                state.allItems = state.allItems.filter(item => item.id !== action.payload.id)
            }
        },
        removeFromCart: (state, action) => {
            state.allItems = state.allItems.filter(item => item.id !== action.payload); 
        }
    }
});

export const { addToCart, removeFromCart, addOneMore, removeOne } = shopSlice.actions;
export default shopSlice.reducer;
