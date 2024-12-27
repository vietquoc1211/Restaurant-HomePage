import { createSlice } from '@reduxjs/toolkit';

const LikeOrder = createSlice({
  name: "like",
  initialState: {
    items: [], 
    error: null,
  },
  reducers: {
    addlikeorder: (state, action) => {
      if (!Array.isArray(state.items)) {
        state.items = [];  
      }

      const existlikeorder = state.items.find(item => item.idMeal === action.payload.idMeal);
      if (existlikeorder) {
        state.error = "This Order is already in your Love List";
      } else {
        state.items.push(action.payload);
        state.error = null; // Clear any previous error
      }
    },
    removelikeorder: (state, action) => {
      if (!Array.isArray(state.items)) {
        state.items = []; 
      }

      const { idMeal } = action.payload;
      state.items = state.items.filter(item => item.idMeal !== idMeal);
      state.error = null; 
    },
  },
});

export const { addlikeorder, removelikeorder } = LikeOrder.actions;
export default LikeOrder.reducer;
