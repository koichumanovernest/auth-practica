import { Button as MuiButton } from "@mui/material";
import React from "react";

const Button = ({ onClick, variant, children, type = "button", ...rest }) => {
	return (
		<MuiButton onClick={onClick} variant={variant} type={type} {...rest}>
			{children}
		</MuiButton>
	);
};

export default Button;
