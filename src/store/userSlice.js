import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URL } from "../utils/constants";

export const createUser = createAsyncThunk(
    'user/createUser',
    async function(payload, thunkAPI) {
        try{
            const request = await fetch(`${BASE_URL}/users`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload)
            })

            if(!request.ok){
                throw new Error(`Failed to create user`);
            }
            const data = await request.json()
            return data
        }
        catch(e){
            return thunkAPI.rejectWithValue(e)
        }
    }
)

export const updateUser = createAsyncThunk(
    'user/updateUser',
    async function({id, upadateValues}, thunkAPI) {
        try{
            const request = await fetch(`${BASE_URL}/users/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(upadateValues),
            })

            if(!request.ok){
                throw new Error(`Failed to update user`);
            }
            const data = await request.json()
            return data
        }
        catch(e){
            return thunkAPI.rejectWithValue(e)
        }
    }
)


export const authUser = createAsyncThunk(
    'user/authUser',
    async function(values, thunkAPI) {
        try{
            const request = await fetch(`${BASE_URL}/auth/login`, {
                method: 'POST',
                headers:{
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(values)
            })

            if(!request.ok){
                throw new Error(`Failed to log in user`);
            }

            const loginData = await request.json();
            if (!loginData.access_token) {
                throw new Error('Access token not found');
            }

            const login = await fetch(`${BASE_URL}/auth/profile`, {
                headers:{
                    "Authorization": `Bearer ${loginData.access_token}`
                }
            })
            console.log(login)

            if(!login.ok){
                throw new Error(`Failed to log in user`);
            }

            const data = await login.json()
            return data
        }
        catch(e){
            return thunkAPI.rejectWithValue(e)
        }
    }
)

const userSlice = createSlice({
    name: 'user',
    initialState: {
        currentUser: {},
        isUser: false,
        authError: false
    },
    reducers:{
        logOut: (state)=>{
            state.currentUser = {};
            state.isUser = false
        }
    },
    extraReducers: (builder)=>{
        builder.addCase(createUser.fulfilled, (state, {payload})=>{
            state.currentUser = payload;
            state.isUser = true;
            alert(`Wellcome ${state.currentUser.name}`)
        })
        builder.addCase(updateUser.fulfilled, (state, {payload})=>{
            state.currentUser = {...state.currentUser, ...payload};
        })
        builder.addCase(authUser.fulfilled, (state, {payload})=>{
            state.currentUser = payload;
            state.isUser = true;
            state.authError = false
            alert(`Wellcome ${state.currentUser.name}`)
        })
        builder.addCase(authUser.rejected, (state)=>{
            state.authError = true
        })
    }
})
export const {logOut} = userSlice.actions;
export default userSlice.reducer;

