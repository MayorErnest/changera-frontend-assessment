import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { GithubLogo } from "../../assets/svgs";
import { Button } from "../../components";
import { login, logout } from "../../store/slices";
import { supabase } from "../../supaBaseClient";
// import { supabase } from "../../supaBaseClient";

import styles from "./styles.module.css";

// import { supabase } from "./client";

const Login = () => {
	// const [user, setUser] = useState(null);

	const dispatch = useDispatch();

	const { user } = useSelector((state) => state.authSlice);

	// useEffect(() => {
	// 	const user = supabase.auth.user();
	// 	dispatch(login(user));
	// 	window.addEventListener("hashchange", function () {
	// 		const user = supabase.auth.user();
	// 		dispatch(login(user));
	// 	});
	// }, [dispatch]);

	// async function checkUser() {
	// 	const user = supabase.auth.user();
	// 	dispatch(login(user));
	// }
	// async function signInWithGithub() {
	// 	console.log("Hello");
	// 	dispatch(login());
	// }
	// async function signOut() {
	// 	dispatch(logout());
	// }

	const navigate = useNavigate();

	// useEffect(() => {
	// 	checkUser();
	// 	window.addEventListener("hashchange", function () {
	// 		checkUser();
	// 	});
	// }, []);

	async function checkUser() {
		const user = supabase.auth.user();
	}
	async function signInWithGithub() {
		dispatch(login());
	}

	// protect route
	useEffect(() => {
		if (user) {
			navigate("/dashboard");
		}
	}, [user, navigate]);

	console.log(user);
	return (
		<main className={styles.container}>
			<div className={styles.box}>
				<GithubLogo />
				<Button btnType="secondary" onClick={signInWithGithub}>
					Authorize
				</Button>
			</div>
		</main>
	);
};

export { Login };
