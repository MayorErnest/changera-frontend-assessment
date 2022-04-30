import React, { useRef, useState } from "react";
import { BellIcon, GithubLogo, PlusIcon } from "../../../../assets";
import { useOnClickOutside } from "../../../../hooks";

import styles from "../../styles.module.css";

const BigHeader = () => {
	const [showDesktopDropDown, setshowDesktopDropDown] = useState(false);

	const ref = useRef();

	useOnClickOutside(ref, () => setshowDesktopDropDown(false));

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
						<span class={`${styles["dropdown-caret"]}`}></span>
					</span>
					<span
						className={`${styles["big-dropDown-container"]}`}
						onClick={() =>
							setshowDesktopDropDown(!showDesktopDropDown)
						}
					>
						<span className={styles.avatar}></span>
						<span class={`${styles["dropdown-caret"]}`}></span>
						{showDesktopDropDown ? (
							<div
								className={`${styles["big-dropDown"]}`}
								ref={ref}
							>
								<div>Sign in as MayorErnest</div>
								<div>Sign out</div>
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
