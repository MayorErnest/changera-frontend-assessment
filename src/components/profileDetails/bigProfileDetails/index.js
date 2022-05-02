import React from "react";
import { Emoji, GroupIcon, LocationIcon, WorkIcon } from "../../../assets";
import { Button } from "../../button";

import styles from "../styles.module.css";

const BigProfileDetails = () => {
	return (
		<div className={`${styles["big-container"]}`}>
			<div className={styles["big-avatar"]}>
				<span className={styles["big-status"]}>
					<Emoji />
				</span>
			</div>
			<div className={styles["big-details"]}>
				<h1 className={styles["big-name"]}>Obumma Ernest</h1>
				<h2 className={styles["big-username"]}>MayorErnest</h2>
				<p className={styles["big-description"]}>Software Developer.</p>
				<Button>Edit Profile</Button>
			</div>
			<div className={styles["big-more-details"]}>
				<div className={`${styles["big-socials"]}`}>
					<ul>
						<li>
							<GroupIcon />
							<span>5</span>
							<span>Followers</span>
						</li>
						<li>
							<span>5</span>
							<span>Following</span>
						</li>
					</ul>
				</div>
				<div className={`${styles["big-work-details"]}`}>
					<ul>
						<li>
							<span>
								<WorkIcon />
							</span>
							<span>Freelancer</span>
						</li>
						<li>
							<span>
								<LocationIcon />
							</span>
							<span>Sub-Saharan Africa</span>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export { BigProfileDetails };
