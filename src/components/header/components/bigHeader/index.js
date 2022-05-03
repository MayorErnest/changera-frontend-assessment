import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BellIcon, GithubLogo, PlusIcon } from "../../../../assets";
import { useOnClickOutside } from "../../../../hooks";
import { logout } from "../../../../store/slices";

import styles from "../../styles.module.css";

const BigHeader = () => {
	const [showDesktopDropDown, setshowDesktopDropDown] = useState(false);

	const dispatch = useDispatch();

	const { user } = useSelector((state) => state.authSlice);

	const ref = useRef();

	useOnClickOutside(ref, () => setshowDesktopDropDown(false));

	async function signOut() {
		dispatch(logout());
	}

	return (
		<header className={styles.container}>
			<div>
				<div className={styles["container-item-a"]}>
					<GithubLogo />
					<div className={styles.input}>
						<input placeholder="Search or jump to..." />
						<span>/</span>
					</div>
					<ul>
						<li>Pull requests</li>
						<li>Issues</li>
						<li>Marketplace</li>
						<li>Explore</li>
					</ul>
				</div>
				<div className={styles["container-item-b"]}>
					<span>
						<BellIcon />
					</span>
					<span>
						<PlusIcon />
						<span className={`${styles["dropdown-caret"]}`}></span>
					</span>
					<span
						className={`${styles["big-dropDown-container"]}`}
						onClick={() =>
							setshowDesktopDropDown(!showDesktopDropDown)
						}
						ref={ref}
					>
						<span className={styles.avatar}>
							<img src={user?.avatar_url} alt="avatar" />
						</span>
						<span className={`${styles["dropdown-caret"]}`}></span>
						{showDesktopDropDown ? (
							<div className={`${styles["big-dropDown"]}`}>
								<div>Sign in as {user?.name}</div>
								<div onClick={signOut}>Sign out</div>
							</div>
						) : (
							""
						)}
					</span>
				</div>
			</div>
		</header>
	);
};

export { BigHeader };
