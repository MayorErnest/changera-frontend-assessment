import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDate } from "../../utils";

import {
	BlockIcon,
	BookClosedIcon,
	BookIcon,
	CancelIcon,
	HolocronIcon,
	StarIcon,
	TickIcon,
} from "../../assets";

import {
	Button,
	Footer,
	Header,
	RepoCard,
	BigProfileDetails,
	SmallProfileDetails,
	Loader,
} from "../../components";

import { fetchRepo } from "../../store/slices";

import styles from "./styles.module.css";
import { useOnClickOutside } from "../../hooks";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
	const [showSortDropDown, setshowSortDropDown] = useState(false);
	const [sortParameter, setsortParameter] = useState("created");

	const dropDownRef = useRef();

	useOnClickOutside(dropDownRef, () => setshowSortDropDown(false));

	const dispatch = useDispatch();

	const { repo } = useSelector((state) => state.repoSlice);

	const { user } = useSelector((state) => state.authSlice);

	const navigate = useNavigate();

	// protect route
	useEffect(() => {
		if (!user) {
			navigate("/");
		}
	}, [navigate, user]);

	useEffect(() => {
		dispatch(fetchRepo("unicodeveloper", sortParameter));
	}, [dispatch, sortParameter]);

	if (repo === null) {
		return <Loader />;
	}

	return (
		<>
			<Header />
			<main className={styles.container}>
				<SmallProfileDetails />
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
										{repo?.length ? (
											<span className={styles.count}>
												{repo?.length}
											</span>
										) : (
											""
										)}
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
											className={`${styles["dropdown-caret"]}`}
										></span>
									</Button>
									<Button>
										<span>Language</span>
										<span
											className={`${styles["dropdown-caret"]}`}
										></span>
									</Button>
									<Button
										className={`${styles["sort-button"]}`}
										onClick={() =>
											setshowSortDropDown(
												!showSortDropDown
											)
										}
										ref={dropDownRef}
									>
										<span>Sort</span>
										<span
											className={`${styles["dropdown-caret"]}`}
										></span>
										{showSortDropDown ? (
											<div
												className={`${styles["sort-dropDown"]}`}
											>
												<div>
													Select Order
													<span>
														<CancelIcon />
													</span>
												</div>
												<ul>
													<li
														onClick={() =>
															setsortParameter(
																"created"
															)
														}
													>
														{sortParameter ===
														"created" ? (
															<TickIcon />
														) : (
															""
														)}
														Created
													</li>
													<li
														onClick={() =>
															setsortParameter(
																"updated"
															)
														}
													>
														{sortParameter ===
														"updated" ? (
															<TickIcon />
														) : (
															""
														)}
														Updated
													</li>
													<li
														onClick={() =>
															setsortParameter(
																"full_name"
															)
														}
													>
														{sortParameter ===
														"full_name" ? (
															<TickIcon />
														) : (
															""
														)}
														Name
													</li>
												</ul>
											</div>
										) : (
											""
										)}
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
									{repo?.map(
										(
											{ name, description, updated_at },
											index
										) => (
											<li key={name + index}>
												<RepoCard
													title={name}
													description={description}
													dateUpdated={getDate(
														updated_at
													)}
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
