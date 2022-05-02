import React from "react";
import { GithubLogo } from "../../assets/svgs";

import styles from "./styles.module.css";

const Loader = () => (
	<div className={styles.container}>
		<GithubLogo />
	</div>
);

export { Loader };
