import React from "react";
import Nav from "./components/Navbar/Nav";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Create from "./Pages/createPage";
import Home from "./Pages/home";
import { PhotoEditContextProvider } from "./Services/axiosCalls";

const App = () => {
	let routes = {
		"/": <Home />,
		"/create": <Create />,
		"/dashboard": <Home />,
	};
	return (
		<Router>
			<PhotoEditContextProvider>
				<div>
					<Nav />
				</div>
				<Routes>
					{Object.entries(routes).map(([path, Component]) => (
						<Route key={path} path={path} element={Component} />
					))}
				</Routes>
			</PhotoEditContextProvider>
		</Router>
	);
};

export default App;
