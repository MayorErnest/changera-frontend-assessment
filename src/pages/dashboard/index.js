import React from "react";

import {
	BlockIcon,
	BookClosedIcon,
	BookIcon,
	HolocronIcon,
	StarIcon,
} from "../../assets";

import {
	Button,
	Footer,
	Header,
	RepoCard,
	BigProfileDetails,
} from "../../components";

import styles from "./styles.module.css";

const Dashboard = () => {
	return (
		<>
			<Header />
			<main className={styles.container}>
				<section className={`${styles["tabs-section"]}`}>
					<div className={styles["tabs-grid"]}>
						<div className="container">
							<div
								className={`${styles["tabs-grid-item"]}`}
							></div>
							<div className={`${styles["tabs-container"]}`}>
								<ul className={`${styles.tabs}`}>
									<li>
										<span>
											<BookIcon />
										</span>
										<span>Overview</span>
									</li>
									<li>
										<span>
											<BookClosedIcon />
										</span>
										<span>Respositories</span>
										<span className={styles.count}>38</span>
									</li>
									<li>
										<span>
											<BlockIcon />
										</span>
										<span>Projects</span>
									</li>
									<li>
										<span>
											<HolocronIcon />
										</span>
										<span>Packages</span>
									</li>
									<li>
										<span>
											<StarIcon />
										</span>
										<span>Stars</span>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</section>
				<section className={`${styles["details-repos"]}`}>
					<div className="container">
						<div>
							<BigProfileDetails />
						</div>
						<div className={`${styles["repo-container"]}`}>
							<div>
								<div className={styles.input}>
									<input placeholder="Find a repository..." />
								</div>
								<div className={styles["filter-buttons"]}>
									<Button>
										<span>Type</span>
										<span
											class={`${styles["dropdown-caret"]}`}
										></span>
									</Button>
									<Button>
										<span>Language</span>
										<span
											class={`${styles["dropdown-caret"]}`}
										></span>
									</Button>
									<Button>
										<span>Sort</span>
										<span
											class={`${styles["dropdown-caret"]}`}
										></span>
									</Button>
								</div>
								<Button
									btnType="secondary"
									className={`${styles["new-button"]}`}
								>
									<BookClosedIcon />
									<span>New</span>
								</Button>
							</div>
							<div className={`${styles["repo-list"]}`}>
								<ul>
									{[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0].map(
										(item, index) => (
											<li key={item + index}>
												<RepoCard
													title={
														"The Chosen One No Cap About that!!!"
													}
													description={
														"The Joker task that you should know about!!"
													}
													isEven={index % 2 === 0}
												/>
											</li>
										)
									)}
								</ul>
							</div>
						</div>
					</div>
				</section>
			</main>
			<Footer />
		</>
	);
};

export { Dashboard };
