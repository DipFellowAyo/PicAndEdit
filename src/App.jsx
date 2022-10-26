import React from "react";
import Nav from "./components/Navbar/Nav";
import Footer from "./components/Footer/Footer";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import routes from "./Services/routes";
import "./App.css";

// import { createContext } from "react";

// const PhotoEditContext = createContext({
// 	image: "gvkbjl",
// });

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
			{/* <PhotoEditContext.Provider value="John Doe">
				<div>
					<Nav />
				</div>
				<Routes>
					{Object.entries(routes).map(([path, Component]) => (
						<Route path={path} element={Component} />
					))}
				</Routes>
			</PhotoEditContext.Provider> */}
		</Router>
	);
};

export default App;
