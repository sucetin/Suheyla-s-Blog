import { useState } from "react";
import fire from "../../config/fire-config";
import { useRouter } from "next/router";

const Login = () => {
	const [userName, setUserName] = useState("");
	const [password, setPassword] = useState("");
	const [notification, setNotification] = useState("");
	const router = useRouter();

	const handleLogin = (e) => {
		e.preventDefault();

		fire
			.auth()
			.signInWithEmailAndPassword(userName, password)
			.catch((err) => {
				console.log(err.code, err.message);
				setNotification(err.message);
				setTimeout(() => {
					setNotification("");
				}, 2000);
			});

		setUserName("");
		setPassword("");
		router.push("/");
	};

	return (
		<div>
			<h1>Login</h1>
			{notification}
			<form onSubmit={handleLogin}>
				Email
				<input
					type="text"
					value={userName}
					onChange={(e) => setUserName(e.target.value)}
				></input>
				<br />
				Password
				<input
					type="password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				></input>
				<br />
				<button type="submit">Login</button>
			</form>
		</div>
	);
};

export default Login;
