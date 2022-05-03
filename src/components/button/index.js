import React, { forwardRef } from "react";

import styles from "./styles.module.css";

const Button = forwardRef(
	({ children, btnType = "primary", className, ...rest }, ref) => {
		return (
			<button
				className={`${styles["container"]} ${
					btnType === "secondary" ? styles.secondary : ""
				} ${className ? className : ""}`}
				ref={ref}
				{...rest}
			>
				{children}
			</button>
		);
	}
);

export { Button };
