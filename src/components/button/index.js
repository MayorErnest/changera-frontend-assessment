import React from "react";

import styles from "./styles.module.css";

const Button = ({ children, btnType = "primary", className, ...rest }) => {
	return (
		<button
			className={`${styles["container"]} ${
				btnType === "secondary" ? styles.secondary : ""
			} ${className ? className : ""}`}
			{...rest}
		>
			{children}
		</button>
	);
};

export { Button };
