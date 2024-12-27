import {createSlice} from '@reduxjs/toolkit';

const CheckoutSlice =createSlice({
    name:"checkout",
    initialState:{
        paymentMethod: null,
        orderStatus: 'idle',
        customerInfo: {},
    },
    reducers:{
        setPaymentMethod:(state,action)=>{
            state.paymentMethod=action.payload
        },
        setOrderStatus:(state,action)=>{
          state.orderStatus=action.payload
        },
        setCustomerInfo:(state,action)=>{
           state.customerInfo=action.payload
        }
    }
})
export const {setCustomerInfo,setOrderStatus,setPaymentMethod}=CheckoutSlice.actions;
export default CheckoutSlice.reducer