import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	BellIcon,
	GithubLogo,
	HamburgerIcon,
	SignOutIcon,
} from "../../../../assets";
import { logout } from "../../../../store/slices";
import { supabase } from "../../../../supaBaseClient";

import styles from "../../styles.module.css";

const SmallHeader = () => {
	const [showMobileDropDown, setshowMobileDropDown] = useState(false);

	const dispatch = useDispatch();

	const { user } = useSelector((state) => state.authSlice);

	async function signOut() {
		await supabase.auth.signOut().then(() => dispatch(logout()));
	}

	return (
		<header className={`${styles["container-small"]}`}>
			<div className="container">
				<HamburgerIcon
					onClick={() => setshowMobileDropDown(!showMobileDropDown)}
				/>
				<GithubLogo />
				<BellIcon />
			</div>
			{showMobileDropDown ? (
				<div className={`container ${styles["mobile-dropdown"]}`}>
					<div className={`${styles.input} ${styles["input-small"]}`}>
						<input placeholder="Search or jump to..." />
						<span>/</span>
					</div>
					<div className={`${styles["small-nav-links"]}`}>
						<ul>
							<li>Dashboard</li>
							<li>Pull requests</li>
							<li>Issues</li>
							<li>Marketplace</li>
							<li>Explore</li>
							<li>Codespaces</li>
							<li>Sponspors</li>
							<li>Settings</li>
							<li>
								<span className={styles.avatar}>
									{" "}
									<img src={user?.avatar_url} alt="avatar" />
								</span>
								<span>{user?.name}</span>
							</li>
							<li onClick={signOut}>
								<span>
									<SignOutIcon />
								</span>
								<span>Sign out</span>
							</li>
						</ul>
					</div>
				</div>
			) : (
				""
			)}
		</header>
	);
};

export { SmallHeader };
