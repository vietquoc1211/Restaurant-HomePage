// import {createSlice} from '@reduxjs/toolkit';
 
// const initialState = {
//     user:null,
//     token:null,
//     error:null
// }

// const AuthSlic = createSlice({ 
//   name: "Auth",
//   initialState,
//   reducers: {
//     signUp: (state, action) => {
//       const { email, password, phone } = action.payload;
//       const userData ={email,password,phone}
//       localStorage.setItem('user',JSON.stringify(userData))
//       state.user=userData;
//     },
//     signin: (state, action) => {
//       const { email, password } = action.payload;
//       const storedUserdata = JSON.parse(localStorage.getItem("user"));
//       if (
//         storedUserdata &&
//         storedUserdata.email === email &&
//         storedUserdata.password === password
//       ) {
//         return {
//           ...state,
//           user: storedUserdata,
//           token: "fake-jwt-token",
//           error: null,
//         };
//       } else {
//         return {
//           ...state,
//           error: "Invalid email or password",
//         };
//       }
//     },
//     Logout: (state) => {
//       state.user = null;
//       state.token = null;
//       state.error = null; // Clear error on logout
//     },
//   },
// });

// export const { signUp, signin, Logout} = AuthSlic.actions;
// export default AuthSlic.reducer;

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  token: null,
  error: null,
};

const AuthSlice = createSlice({
  name: "Auth",
  initialState,
  reducers: {
    signUp: (state, action) => {
      const { email, password, phone } = action.payload;
      const users = JSON.parse(localStorage.getItem("users")) || [];
      const isEmailTaken = users.some(user => user.email === email);
      if (!isEmailTaken) {
        const newUser = { email, password, phone };
        users.push(newUser);
        localStorage.setItem("users", JSON.stringify(users));
        state.user = newUser;
        state.error = null;
      } else {
        state.error = "An account with this email already exists.";
      }
    },
    signin: (state, action) => {
      const { email, password } = action.payload;
      const users = JSON.parse(localStorage.getItem("users")) || [];
      const user = users.find(user => user.email === email && user.password === password);
      if (user) {
        state.user = user;
        state.token = "fake-jwt-token";
        state.error = null;
      } else {
        state.error = "Invalid email or password.";
      }
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.error = null;
    },
    clearError: (state) => {
      state.error = null;
    },
  },
});

export const { signUp, signin, logout, clearError } = AuthSlice.actions;
export default AuthSlice.reducer;
