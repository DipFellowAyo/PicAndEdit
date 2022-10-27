import React from "react";
import "./Nav.css";
import HeroImg from "../HeroImg/HeroImg";
import { Link } from "react-router-dom";

export const navMapper = {
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
					<button className={className} key={title}>
						<Link
							to={link}
							style={{
								width: "100%",
								height: "100%",
								textDecoration: "none",
								color: "inherit",
							}}
						>
							{title}
						</Link>
					</button>
				))}
			</div>
		</nav>
	);
};

export default Nav;
