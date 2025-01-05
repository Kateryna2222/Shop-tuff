import { configureStore, combineReducers } from "@reduxjs/toolkit";
import categoriesSlice from "../store/categoriesSlice";
import productsSlice from "../store/productsSlice";
import likedSlice from "../store/likedSlice";
import busketSlice from "../store/busketSlice";

const rootReducer = combineReducers({
    categories: categoriesSlice,
    products: productsSlice,
    liked: likedSlice,
    busket: busketSlice
})

export const store = configureStore({
    reducer: rootReducer,
})