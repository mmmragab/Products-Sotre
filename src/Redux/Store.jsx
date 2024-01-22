import { configureStore } from '@reduxjs/toolkit'
import bankReducer from '../Redux/Slice-prod'
import productReducer from '../Redux/Products-slice'
import cartReducer from './Cart-slice'


export const store = configureStore({
  reducer: {
    bank: bankReducer,
    products: productReducer,
    cart: cartReducer,
  },
})