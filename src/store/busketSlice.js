import { createSlice } from "@reduxjs/toolkit";


const busketSlice = createSlice({
    name: "busket",
    initialState: {
        productsInBusket: [],
        total: 0,
    },
    reducers: {
        toggleBusket: (state, {payload})=>{
            const isInBusket = state.productsInBusket.some(product => product.id === payload.id)
            if(isInBusket){
                state.productsInBusket = state.productsInBusket.filter(product => product.id !== payload.id);
                state.total = state.total - (payload.count * payload.price);
            }
            else{
                state.productsInBusket.push(payload);
                state.total = state.total + (payload.count * payload.price);
            }
        },
        removeFromBusket: (state, {payload})=>{
            state.productsInBusket = state.productsInBusket.filter(product => product.id !== payload.id);
            state.total = state.total - (payload.count * payload.price);
        },
        increaseTotal: (state, {payload})=>{
            const oldTotalState = state.total - (payload.count * payload.price)
            state.productsInBusket = state.productsInBusket.map(item => {
                if(item.id === payload.id){
                    item.count++
                }
            })
            state.total = oldTotalState + (payload.count * payload.price);
        },
        disreaseTotal: (state, {payload})=>{
            state.total = state.total - (payload.count * payload.price) + (payload * payload.price);
        },
    }
})


export const {toggleBusket, removeFromBusket, increaseTotal, disreaseTotal} = busketSlice.actions;
export default busketSlice.reducer;