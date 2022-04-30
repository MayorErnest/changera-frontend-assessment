import React from "react";
import { Footer, Header } from "../../components";

import styles from "./styles.module.css";

const Dashboard = () => {
	return (
		<>
			<Header />
			<main className={styles.container}></main>
			<Footer />
		</>
	);
};

export { Dashboard };
