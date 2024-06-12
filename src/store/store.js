import { configureStore } from "@reduxjs/toolkit";
import { authSliec } from "./slice/authSlice";


export const store  = configureStore({
   reducer:{
      [authSliec.name]: authSliec.reducer
   }
})