import React from "react";
import { GithubLogo } from "../../assets/svgs";
import { Button } from "../../components";

import styles from "./styles.module.css";

const Login = () => {
	return (
		<main className={styles.container}>
			<div className={styles.box}>
				<GithubLogo />
				<Button btnType="secondary">Authorize</Button>
			</div>
		</main>
	);
};

export { Login };
