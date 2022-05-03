import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { supabase } from "../../../supaBaseClient";

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
export const login = () => async (dispatch) => {
	axios
		.get(`https://api.github.com/users/${"unicodeveloper"}`)
		.then((data) => {
			dispatch(loginSuccess(data.data));
			console.log(data.data);
			window.location.replace("/dashboard");
		})
		.catch((error) => console.log(error));
	// await supabase.auth
	// 	.signIn({
	// 		provider: "github",
	// 	})
	// 	.then((data) => {
	// 		console.log(data, "please");
	// 		dispatch(loginSuccess(data));
	// 		// window.location.replace("/dashboard");
	// 	})
	// 	.catch((error) => console.log(error));
};
export const logout = () => async (dispatch) => {
	await supabase.auth
		.signOut()
		.then(() => {
			dispatch(logoutSuccess());
			window.location.replace("/");
			console.log(supabase.auth);
		})
		.catch((error) => console.log(error));
};
