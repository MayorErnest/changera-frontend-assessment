import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Dashboard, Login } from "../pages";

const Router = () => (
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<Login />} />
			<Route path="/dashboard" element={<Dashboard />} />
		</Routes>
	</BrowserRouter>
);

export default Router;
