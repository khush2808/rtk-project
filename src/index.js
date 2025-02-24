import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import {configureStore,} from "@reduxjs/toolkit";
import App from "./App";
import "./index.css";
import galleryReducer from "./galleryState";
const store = configureStore({
	reducer: {
		gallery: galleryReducer
	}
});

ReactDOM.createRoot(document.getElementById("root")).render(
    <Provider store={store}>
      <App />
    </Provider>
);