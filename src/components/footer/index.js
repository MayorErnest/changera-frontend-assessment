import React from "react";
import { GithubLogo } from "../../assets/svgs";

import styles from "./styles.module.css";

const Footer = () => {
	return (
		<footer className={styles.container}>
			<div className={`container`}>
				<div className={styles["logo-container"]}>
					<GithubLogo />
					<span>&copy;2022 Github, Inc.</span>
				</div>
				<ul>
					<li>Terms</li>
					<li>Privacy</li>
					<li>Security</li>
					<li>Status</li>
					<li>Docs</li>
					<li>Contact Github</li>
					<li>Pricing</li>
					<li>API</li>
					<li>Training</li>
					<li>Blog</li>
					<li>About</li>
				</ul>
			</div>
		</footer>
	);
};

export { Footer };
