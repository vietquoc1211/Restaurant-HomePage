import {createSlice} from '@reduxjs/toolkit';

const initialState={
    messages:[]
}
const contectSlice = createSlice({
    name:"Contact",
    initialState,
    reducers:{
        addMessage: (state, action) => {
            state.messages.push(action.payload); // Adds the new message to the array
          },
    }
})

export const {addMessage}=contectSlice.actions
export default contectSlice.reducer