import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { Card } from "react-bootstrap";
import { useSelector } from "react-redux";



const instialState={
    cartTotalQuantity:0,
    cartTotalAmount:0,
    cartItems:localStorage.getItem("cartItems")?JSON.parse(localStorage.getItem("cartItems")):[]
};

const cartSlice=createSlice({
    
    name:'cart',
    initialState:instialState,
    reducers:{
        addToCart: (state,action)=>{

            const itemIndex=state.cartItems.findIndex(
                (item)=>item.id===action.payload.id);
            if(itemIndex >= 0){
                state.cartItems[itemIndex].cartQuantity ++;
                toast.info(`Additional Amount of ${action.payload.title} Added in Your Cart`,{
                    position: "bottom-left",
                    autoClose: 800,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
                
            }
            else{

                const addProductCart={...action.payload, cartQuantity:1};
                state.cartItems.push(addProductCart);
                toast.success(`${action.payload.title} is Added to Cart`,{
                    position: "bottom-left",
                    autoClose: 800,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                })
            }
            
            state.cartTotalQuantity++;
            localStorage.setItem("cartItem",JSON.stringify(state.cartItems));
        },
            
        
            removeFromCart: (state,action)=>{ 
            state.cartItems=state.cartItems.filter(item=>item.id!==action.payload);
            state.cartQuantity=state.cartQuantity-action.payload.quantity;
            localStorage.setItem("cartItem",JSON.stringify(state.cartItems));},

            decreaseItems:(state,action)=>{
            const itemIndex=state.cartItems.findIndex(
            (cartItem)=>cartItem.id === action.payload.id);
            if(state.cartItems[itemIndex].cartQuantity >1) {
                state.cartItems[itemIndex].cartQuantity --}

                else if (state.cartItems[itemIndex].cartQuantity ===1){
                    const nextCartItems= state.cartItems.filter(
                        (cartItem)=>cartItem.id!==action.payload.id);
                        state.cartItems=nextCartItems;}
                localStorage.setItem("cartItem",JSON.stringify(state.cartItems));},

            IncreaseItems:(state,action)=>{
                const itemIndex=state.cartItems.findIndex(
                (cartItem)=>cartItem.id === action.payload.id);
                 {state.cartItems[itemIndex].cartQuantity ++}
                    localStorage.setItem("cartItem",JSON.stringify(state.cartItems));},

            totalPrice:(state,action)=>{
             let {total,quantity} =state.cartItems.reduce(
               (cartTotal,cartItem) =>{
                 const {price,cartQuantity}=cartItem;
                 const itemTotal=price * cartQuantity;
            
                 cartTotal.total +=itemTotal;
                 cartTotal.quantity +=cartQuantity;
                 return cartTotal;},
                 {total:0,quantity:0}
                );
              state.cartTotalAmount=total;
              state.cartTotalQuantity=quantity;
                },

                clearCart:(state,action)=>{
                    state.cartItems=[];
                    state.cartTotalAmount=0;
                    state.cartTotalQuantity=0;
                    localStorage.setItem("cartItem",JSON.stringify(state.cartItems));},
                

    }
});

export const {addToCart,removeFromCart,decreaseItems, IncreaseItems, totalPrice,clearCart}=cartSlice.actions;


export default cartSlice.reducer;