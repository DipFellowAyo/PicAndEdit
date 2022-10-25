import React from "react";
import "./Nav.css";
import HeroImg from "../HeroImg/HeroImg";
import { Link } from "react-router-dom";

const navMapper = {
	Home: { link: "/", className: "btn0" },
	Create: { link: "/create", className: "btn1" },
	"Brand ur Biz": { link: "/brand", className: "btn2" },
};

const Nav = () => {
	return (
		<nav>
			<div>
				<HeroImg />
			</div>
			<div className="navBtns">
				{Object.entries(navMapper).map(([title, { link, className }]) => (
					<Link
						to={link}
						style={{
							textDecoration: "none",
							color: className === "btn2" ? "#fff" : "#000",
						}}
					>
						<button className={className}>{title}</button>{" "}
					</Link>
				))}
			</div>
		</nav>
	);
};

export default Nav;
