import React from "react";
import { BigHeader, SmallHeader } from "./components";

const Header = () => {
	return (
		<>
			{/* big screens header */}
			<BigHeader />
			<SmallHeader />
			{/* mobile screens header */}
		</>
	);
};

export { Header };
