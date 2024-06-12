import { styled } from "@mui/system";
import Button from "../UI/Button";
import { TextField } from "@mui/material";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signIn } from "../../store/slice/authThunk";


const INPUT_ARRAY = [
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

const SignIn = () => {
  const dispatch = useDispatch()
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		defaultValues: {
			email: "",
			password: "",
		},
	});
	const submitHandler = (data) => {
    dispatch(signIn(data))
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
					Login
				</Button>
        <NavLink to="signup">Registratsia</NavLink>
			</FormContainer>
		</Container>
	);
};

export default SignIn;

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
