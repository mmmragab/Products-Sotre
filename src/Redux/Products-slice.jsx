import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";



export const fetchProducts= createAsyncThunk("productsSlice/fetchProducts", async()=>{
    const res= await fetch('https://fakestoreapi.com/products');
    const data= await res.json();
    console.log(data);
    return data;
})

export const productsSlice= createSlice({
    name:"productsSlice",
    initialState:[{id:1, title:'Prod1'}],
    reducers:{
        addProduct:(state, action)=>{
            state.push(action.payload);
        },
        },
        extraReducers: (builder) => {
            builder.addCase(fetchProducts.fulfilled, (state,action) => {
                console.log(action);
                return action.payload;
                
            })
        }
    }
);
export const { addProduct } = productsSlice.actions;
export default productsSlice.reducer