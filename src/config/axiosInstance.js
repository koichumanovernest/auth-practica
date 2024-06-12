import axios from "axios";
import { store } from "../store/store";

export const axiosInstance = axios.create({
	baseURL: "https://10e838ce1528e9ce.mokky.dev",
});

axios.interceptors.request.use(
	function (config) {
		const updatadConfig = { ...config };
		const { token } = store.getState().auth;
		if (token) {
			return updatadConfig.headers.Authorization = `Bearer ${token}`;
		}
		return config;
	},
	function (error) {
		return Promise.reject(error);
	}
);

axios.interceptors.response.use(
	function (response) {
		return response;
	},
	function (error) {
		return Promise.reject(error);
	}
);
