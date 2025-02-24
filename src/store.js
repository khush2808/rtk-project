import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { jsonPlaceholderApi } from "./services/jsonPlaceholderApi";
export const store = configureStore({
	reducer: {
		[jsonPlaceholderApi.reducerPath]: jsonPlaceholderApi.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		// Adding the jsonPlaceholderApi.middleware to handle API requests and manage caching, invalidation, etc.
		getDefaultMiddleware().concat(jsonPlaceholderApi.middleware),
});

setupListeners(store.dispatch);