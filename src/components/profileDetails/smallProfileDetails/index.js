import React from "react";
import { useSelector } from "react-redux";
import { Emoji, GroupIcon } from "../../../assets";
import { Button } from "../../button";

import styles from "../styles.module.css";

const SmallProfileDetails = () => {
	const { user } = useSelector((state) => state.authSlice);

	return (
		<div className={`${styles["small-container"]}`}>
			<div className={styles["small-avatar-name-container"]}>
				<div className={styles["small-avatar"]}>
					<img src={user?.avatar_url} alt="avatar" />
				</div>
				<div className={styles["small-name-container"]}>
					<h1 className={styles["small-name"]}>{user?.name}</h1>
					<h2 className={styles["small-username"]}>{user?.login}</h2>
				</div>
			</div>
			<div className={styles["small-input"]}>
				<span className={styles["small-status"]}>
					<Emoji />
				</span>
				<input placeholder="Set status" />
			</div>
			<div className={styles["small-details"]}>
				<p className={styles["small-description"]}>{user?.bio}</p>
				<Button>Edit Profile</Button>
			</div>
			<div className={styles["small-more-details"]}>
				<div className={`${styles["small-socials"]}`}>
					<ul>
						<li>
							<GroupIcon />
							<span>{user?.followers}</span>
							<span>Followers</span>
						</li>
						<li>
							<span>{user?.following}</span>
							<span>Following</span>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export { SmallProfileDetails };
