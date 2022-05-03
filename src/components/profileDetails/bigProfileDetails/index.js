import React from "react";
import { useSelector } from "react-redux";
import { Emoji, GroupIcon, LocationIcon, WorkIcon } from "../../../assets";
import { Button } from "../../button";

import styles from "../styles.module.css";

const BigProfileDetails = () => {
	const { user } = useSelector((state) => state.authSlice);

	return (
		<div className={`${styles["big-container"]}`}>
			<div className={styles["big-avatar"]}>
				<img src={user?.avatar_url} alt="avatar" />
				<span className={styles["big-status"]}>
					<Emoji />
				</span>
			</div>
			<div className={styles["big-details"]}>
				<h1 className={styles["big-name"]}>{user?.name}</h1>
				<h2 className={styles["big-username"]}>{user?.login}</h2>
				<p className={styles["big-description"]}>{user?.bio}</p>
				<Button>Edit Profile</Button>
			</div>
			<div className={styles["big-more-details"]}>
				<div className={`${styles["big-socials"]}`}>
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
				<div className={`${styles["big-work-details"]}`}>
					<ul>
						<li>
							<span>
								<WorkIcon />
							</span>
							<span>{user?.company}</span>
						</li>
						<li>
							<span>
								<LocationIcon />
							</span>
							<span>{user?.location}</span>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export { BigProfileDetails };
