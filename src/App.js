import { useState, useEffect } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { getPhotos } from "./galleryState";
function App() {
	const dispatch = useDispatch();
	const photos = useSelector((state) => state.gallery.photos);
	const isLoading = useSelector((state) => state.gallery.isLoading);
	useEffect(() => {
		dispatch(getPhotos());
	}
		, [dispatch]);
	return (<div className="App">
		<h1>Photo Gallery</h1>
		<p>Click on the image to view the next one</p>
		<hr/>
		<div className = "Gallery">
			{photos.map(()=>{})
}
		</div>
	</div>
	)
}
export default App;