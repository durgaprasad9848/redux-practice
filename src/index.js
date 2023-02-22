import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { configureStore, createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { value: 0, showCounter: true },
  reducers: {
    increment: (state) => {
      state.value++;
    },
    decrement: (state) => {
      state.value--;
    },
    increase : (state,action) =>{
      state.value=state.value + action.payload;
    },
    toggleCounter: (state) => {
      state.showCounter = !state.showCounter;
    },
  },
});



const authSlice = createSlice({
  name:'authentication',
  initialState : {isAuthenticated:false},
  reducers: {
    login : (state) =>{
      state.isAuthenticated = true;
    
    },
    logout : (state) =>{
      state.isAuthenticated = false;
    
    },
  },
});





const store = configureStore({
  reducer: { counter: counterSlice.reducer,auth:authSlice.reducer },
});


export const { increment, decrement,increase, toggleCounter } = counterSlice.actions;

export const { login, logout} = authSlice.actions;


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
     <Provider store={store}>
     <App />
     </Provider>
   
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
