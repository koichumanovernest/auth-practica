import { TextField } from "@mui/material";
import React from "react";

const Input = ({ onChange, type = "text", placeholder, value, ...rest }) => {
	return <TextField onChange={onChange} value={value} type={type} placeholder={placeholder} {...rest} />;
};

export default Input;
