import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";



export const bankSlice=createSlice({
    initialState: 1000,   
    name: "bankSlice",
    reducers: {
        withdraw: (state, action)=>{
            return state=state-action.payload;
        },
        deposite: (state, action)=>{
            return state=state+action.payload;
        },
        bankstate:(state,action)=>
        state=action.payload
    },

})

export const {withdraw,deposite,bankstate}=bankSlice.actions;
export default bankSlice.reducer;