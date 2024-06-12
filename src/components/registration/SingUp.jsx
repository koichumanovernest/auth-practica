import { Container, TextField, styled } from "@mui/material";
import Button from "../UI/Button";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup"
import { useDispatch } from "react-redux";
import { signUp } from "../../store/slice/authThunk";
import { NavLink } from "react-router-dom";

const INPUT_ARRAY = [
	{
		name: "firstName",
		label: "firstName",
		type: "text",
	},
	{
		name: "lastName",
		label: "lastName",
		type: "text",
	},
	{
		name: "phoneNumber",
		label: "phoneNumber",
		type: "tel",
	},
	{
		name: "email",
		label: "Email",
		type: "email",
	},
	{
		name: "password",
		label: "password",
		type: "password",
	},
];

const schema = yup
	.object({
		firstName: yup.string().required(),
      lastName: yup.string().required(),
      phoneNumber: yup.string().required(),
      email: yup.string().email().required(),
      password: yup.string().min(6).max(16),
		
	})
	.required();

const SingUp = () => {
   const dispatch = useDispatch()

	const { register, handleSubmit,reset,formState:{errors} } = useForm({
		defaultValues: {
			firstName: "",
			lastName: "",
			phoneNumber: "",
			email: "",
			password: "",
		},
      resolver:yupResolver(schema)
	});

	const submitHandler = (data) => {
      
      dispatch(signUp(data))
      reset();
	};
	return (
		<Container>
			<FormContainer onSubmit={handleSubmit(submitHandler)}>
				{INPUT_ARRAY.map((item) => (
					<TextField
						placeholder={item.label}
						label={item.label}
						key={item.name}
						type={item.name}
                  helperText={errors[item.name]?.massage}
                  error={!!errors[item.name]?.massage}
						{...register(item.naem, { required: true })}
					/>
				))}
				<Button type="submit" variant="contained" size="large">
					Register
				</Button>
            <NavLink to="/">Login</NavLink>
			</FormContainer>
		</Container>
	);
};

export default SingUp;

const FormContainer = styled("form")(() => ({
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	gap: "20px",
	border: "1px solid",
	width: "fit-content",
	padding: "20px",
	margin: "150px auto",
	borderRadius: "10px",
	boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.5)",
}));
