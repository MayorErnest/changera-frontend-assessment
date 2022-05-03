import React, { useEffect, useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { GithubLogo } from "../../assets/svgs";
import { Button, Loader } from "../../components";
import { login } from "../../store/slices";
import { supabase } from "../../supaBaseClient";
// import { supabase } from "../../supaBaseClient";

import styles from "./styles.module.css";

// import { supabase } from "./client";

const Login = () => {
	const [loading, setloading] = useState(false);

	const dispatch = useDispatch();

	const { user: myUser } = useSelector((state) => state.authSlice);

	const navigate = useNavigate();

	const checkUser = useCallback(async () => {
		setloading(true);

		// simulate API load time to show loader
		const timer = setTimeout(() => {
			const user = supabase.auth.user();
			dispatch(login(user?.user_metadata?.user_name));
			setloading(false);
		}, 2500);
		return () => clearTimeout(timer);
	}, [dispatch]);

	async function signInWithGithub() {
		await supabase.auth.signIn({
			provider: "github",
		});
	}

	// effect login
	useEffect(() => {
		checkUser();
		window.addEventListener("hashchange", function () {
			checkUser();
		});
	}, [checkUser]);

	// protect route
	useEffect(() => {
		if (myUser) {
			navigate("/dashboard");
		}
	}, [myUser, navigate]);

	if (loading) {
		return <Loader />;
	}

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
