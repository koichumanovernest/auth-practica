import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../config/axiosInstance";

export const signUp = createAsyncThunk(
	"auth/signUp",
	async (userData, { rejectWithValue }) => {
		try {
			const {data} = await axiosInstance.post("register",  userData );
         localStorage.setItem("auth", JSON.stringify(data))
			return data;
		} catch (error) {
			return rejectWithValue(error);
		}
	}
);
export const signIn = createAsyncThunk(
	"auth/signIp",
	async (userData, { rejectWithValue }) => {
		try {
			const response = await axiosInstance.post("auth",  userData );
			console.log(response);
			return response.data;
		} catch (error) {
			return rejectWithValue(error);
		}
	}
);
