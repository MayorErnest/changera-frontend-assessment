import React from "react";
import { Chart1, Chart2, StarIcon } from "../../assets";

import styles from "./styles.module.css";

const RepoCard = ({ title, description, dateUpdated, isEven }) => {
	return (
		<div className={`${styles.container}`}>
			<div>
				<h1 className={styles.title}>
					{title} <span>Public</span>
				</h1>
				<h2 className={styles.description}>{description}</h2>
				<h2 className={styles["date-updated"]}>{`Updated ${
					dateUpdated ? dateUpdated : "N/A"
				}`}</h2>
			</div>
			<div className={styles["chart-buttons"]}>
				<div>
					<button className={`${styles.button}`}>
						<StarIcon />
						Star
					</button>
					<button className={`${styles.button}`}>
						<span class={`${styles["dropdown-caret"]}`}></span>
					</button>
				</div>
				<div className={styles.chart}>
					{isEven ? <Chart1 /> : <Chart2 />}
				</div>
			</div>
		</div>
	);
};

export { RepoCard };
