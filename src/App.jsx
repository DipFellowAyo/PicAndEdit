import React from "react";
import Nav from "./components/Navbar/Nav";
import Footer from "./components/Footer/Footer";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./Pages/homePage";
import Create from "./Pages/createPage";

let routes = {
	"/": () => <Home />,
	"/create": () => <Create />,
	"/dashboard": () => <Home />,
};

const App = () => {
	return (
		<Router>
			<div>
				<Nav />
			</div>
			<Routes>
				{Object.entries(routes).map(([path, Component]) => (
					<Route key={path} path={path} element={<Component />} />
				))}
			</Routes>
			<Footer />
		</Router>
	);
};

export default App;
