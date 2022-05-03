import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import {
	persistStore,
	persistReducer,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

import authSlice from "./slices/authSlice";
import repoSlice from "./slices/repoSlice";

const reducer = combineReducers({
	authSlice,
	repoSlice,
});

const persistConfig = {
	key: "counter",
	storage,
};

const persistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
	persistedReducer,
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [
					FLUSH,
					REHYDRATE,
					PAUSE,
					PERSIST,
					PURGE,
					REGISTER,
				],
			},
		}),
});

const persistor = persistStore(store);

export { store, persistor };
