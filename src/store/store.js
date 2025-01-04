import { configureStore, combineReducers } from "@reduxjs/toolkit";
import categoriesSlice from "../store/categoriesSlice";
import productsSlice from "../store/productsSlice"

const rootReducer = combineReducers({
    categories: categoriesSlice,
    products: productsSlice,
})

export const store = configureStore({
    reducer: rootReducer,
})