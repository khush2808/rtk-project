import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getPhotos = createAsyncThunk('photos/getPhotos', async () => {
	const response = await fetch("https://jsonplaceholder.typicode.com/photos");
	const data = await response.json();
	return data;
});

export const gallerySlice = createSlice({
	name: "gallery",
	initialState: {
		photos: [],
		isLoading: false
	},
	extraReducers: {
		[getPhotos.pending]: (state) => {
			state.isLoading = true;
		},
		[getPhotos.fulfilled]: (state, action) => {
			state.isLoading = false;
			state.photos = action.payload;
		},
		[getPhotos.rejected]: (state) => {
			state.isLoading = false;
		},
	},
});

export default gallerySlice.reducer;