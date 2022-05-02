import React from "react";
import { Emoji, GroupIcon } from "../../../assets";
import { Button } from "../../button";

import styles from "../styles.module.css";

const SmallProfileDetails = () => {
	return (
		<div className={`${styles["small-container"]}`}>
			<div className={styles["small-avatar-name-container"]}>
				<div className={styles["small-avatar"]}></div>
				<div className={styles["small-name-container"]}>
					<h1 className={styles["small-name"]}>Obumma Ernest</h1>
					<h2 className={styles["small-username"]}>MayorErnest</h2>
				</div>
			</div>
			<div className={styles["small-input"]}>
				<span className={styles["small-status"]}>
					<Emoji />
				</span>
				<input placeholder="Set status" />
			</div>
			<div className={styles["small-details"]}>
				<p className={styles["small-description"]}>
					Software Developer.
				</p>
				<Button>Edit Profile</Button>
			</div>
			<div className={styles["small-more-details"]}>
				<div className={`${styles["small-socials"]}`}>
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
			</div>
		</div>
	);
};

export { SmallProfileDetails };
