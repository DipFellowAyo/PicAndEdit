import React from "react";
import Nav from "./components/Navbar/Nav";
import Footer from "./components/Footer/Footer";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Create from "./Pages/createPage";
import Home from "./Pages/home";

const App = () => {
	let routes = {
		"/": <Home />,
		"/create": <Create />,
		"/dashboard": <Home />,
	};
	return (
		<Router>
			<div>
				<Nav />
			</div>
			<Routes>
				{Object.entries(routes).map(([path, Component]) => (
					<Route path={path} element={Component} />
				))}
			</Routes>
			<Footer />
		</Router>
	);
};

export default App;
