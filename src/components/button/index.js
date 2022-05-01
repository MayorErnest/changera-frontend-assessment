import React from "react";

import styles from "./styles.module.css";

const Button = ({ children, btnType = "primary" }) => {
	return (
		<button
			className={`${styles["container"]} ${
				btnType === "secondary" ? styles.secondary : ""
			}`}
		>
			{children}
		</button>
	);
};

export { Button };
