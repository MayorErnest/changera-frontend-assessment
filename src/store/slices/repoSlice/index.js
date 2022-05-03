import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Slice
const repoSlice = createSlice({
	name: "repo",
	initialState: {
		repo: null,
	},
	reducers: {
		getRepos: (state, action) => {
			state.repo = action.payload;
		},
	},
});

export default repoSlice.reducer;

// Actions
const { getRepos } = repoSlice.actions;

export const fetchRepo = (userName, sortParameter) => async (dispatch) => {
	axios
		.get(
			`${process.env.REACT_APP_GITHUB_BASE_USER_URL}/${userName}/repos?per_page=20&sort=${sortParameter}`
		)
		.then((data) => dispatch(getRepos(data?.data)))
		.catch((error) => console.log(error));
};
