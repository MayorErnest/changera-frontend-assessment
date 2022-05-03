import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
// import { supabase } from "../../../supaBaseClient";

// import { supabase } from "../../supaBaseClient";

// Slice
const authSlice = createSlice({
	name: "user",
	initialState: {
		user: null,
	},
	reducers: {
		loginSuccess: (state, action) => {
			state.user = action.payload;
		},
		logoutSuccess: (state, action) => {
			state.user = null;
			state.repo = null;
		},
	},
});

export default authSlice.reducer;

// Actions
const { loginSuccess, logoutSuccess } = authSlice.actions;
export const login = (userName) => async (dispatch) => {
	axios
		.get(`${process.env.REACT_APP_GITHUB_BASE_USER_URL}/${userName}`)
		.then((data) => {
			dispatch(loginSuccess(data.data));
			window.location.replace("/dashboard");
		})
		.catch((error) => console.log(error));
};
export const logout = () => async (dispatch) => {
	dispatch(logoutSuccess());
	window.location.replace("/");
};
