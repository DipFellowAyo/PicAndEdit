import React from "react";
import Nav from "./components/Navbar/Nav";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Create from "./Pages/createPage";
import Home from "./Pages/home";
import { createContext } from "react";

const PhotoEditContext = createContext({
	image: "gvkbjl",
});

const App = () => {
	let routes = {
		"/": <Home />,
		"/create": <Create />,
		"/dashboard": <Home />,
	};
	return (
		<Router>
			<PhotoEditContext.Provider value="John Doe">
				<div>
					<Nav />
				</div>
				<Routes>
					{Object.entries(routes).map(([path, Component]) => (
						<Route path={path} element={Component} />
					))}
				</Routes>
			</PhotoEditContext.Provider>
		</Router>
	);
};

export default App;
