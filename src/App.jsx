import React from "react";
import Nav from "./components/Navbar/Nav";
import Footer from "./components/Footer/Footer";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import routes from "./Services/routes";

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
