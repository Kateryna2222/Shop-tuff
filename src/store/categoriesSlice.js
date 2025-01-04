import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL } from "../utils/constants";

export const getCategories = createAsyncThunk(
    'categories/getCategories',
    async function(_, thunkAPI) {
        try {
            const res = await fetch(`${BASE_URL}/categories?limit=5`)
            if(!res.ok){
                throw new Error('Server error')
            }
            const data = await res.json()
            return data
        } 
        catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
)

const categoriesSlice = createSlice({
    name: "categories",
    initialState: {
        categories: [],
    },
    extraReducers: (builder) => {
        builder.addCase(getCategories.fulfilled, (state, {payload}) => {
            state.categories = payload
        })
    }
})

export default categoriesSlice.reducer;