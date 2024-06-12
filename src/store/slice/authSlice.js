import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	isAuth: false,
	token: "",
	email: "",
	firstName: "",
	lastName: "",
};

export const authSliec = createSlice({
	name: "auth",
	initialState,
	reducers: {},
   extraReducers:(builder) => {
      builder.addCase(authSliec.login, (state, {payload}) => {
         state.isAuth = true;
         state.token = payload.token;
         state.email = payload.email;
         state.firstName = payload.firstName;
         state.lastName = payload.lastName;
      });
      builder.addCase(authSliec.logout, (state) => {
         state.isAuth = false;
         state.token = "";
         state.email = "";
         state.firstName = "";
         state.lastName = "";
      });
   }
});
