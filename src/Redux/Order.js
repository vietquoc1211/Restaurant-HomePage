import {createSlice} from '@reduxjs/toolkit';

const orderSlice=createSlice({
    name:"order",
    initialState:{
        items:[],
        subtotal: 0,
        totalprice: 0,
    },
    reducers:{
        addtoorders: (state, action) => {
            const existItem = state.items.find(item => item.idMeal === action.payload.idMeal);
            if (existItem) {
              existItem.quantity += action.payload.quantity; // Update quantity
            } else {
              state.items.push({ ...action.payload, quantity: action.payload.quantity }); // Add new item
            }
          },          

        removefromorder:(state,action)=>{
          const { idMeal } = action.payload;
          state.items = state.items.filter((item) => item.idMeal !== idMeal);
        },
        clearOrderItems: (state) => {
          state.items = [];
        }
    }
})
// Assuming state.order.items is an array of order items
// Selector for calculating order total
export const selectorderTotal = (state) => {
  const orderTotal = state.order.items.reduce((sum, item) => {
    // Extract the first 3 digits from idMeal and convert to a number
    const price = parseFloat(item.idMeal?.substring(0, 3)) || 0;
    const quantity = parseInt(item.quantity, 10) || 0; // Ensure quantity is a number

    return sum + price * quantity;
  }, 0);

  return Math.round(orderTotal); // Round to nearest integer
};

// Selector for calculating the last total with tax
export const selectorderLastTotal = (state) => {
  const subtotal = selectorderTotal(state); // Already rounded to an integer
  const taxRate = 0.1; // Example: 10% tax
  const totalprice = subtotal + Math.round(subtotal * taxRate); // Add tax and round to an integer

  return totalprice; // Return integer
};


 
export const {addtoorders ,removefromorder,clearOrderItems} = orderSlice.actions;
export default orderSlice.reducer