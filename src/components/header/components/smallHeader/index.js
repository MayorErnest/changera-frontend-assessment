import React, { useState } from "react";
import {
	BellIcon,
	GithubLogo,
	HamburgerIcon,
	SignOutIcon,
} from "../../../../assets";

import styles from "../../styles.module.css";

const SmallHeader = () => {
	const [showMobileDropDown, setshowMobileDropDown] = useState(false);

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
								<span className={styles.avatar}></span>
								<span>MayorErnest</span>
							</li>
							<li>
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
