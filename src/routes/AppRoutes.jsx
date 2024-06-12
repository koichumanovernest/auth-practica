import React from "react";
import {
	Navigate,
	RouterProvider,
	createBrowserRouter,
} from "react-router-dom";
import SignUp from "../components/registration/signUp";
import SignIn from "../components/registration/SignIn";
import Email from "../components/registration/Email";

const AppRoutes = () => {
	const router = createBrowserRouter([
		{
			index:true,
			element: <SignIn/>
		},
		{
			path: "/singup",
			element: <SignUp />,
		},

		{
			path: "*",
			element: <Error404 />,
		},
	]);
	return <RouterProvider router={router} />;
};

export default AppRoutes;
