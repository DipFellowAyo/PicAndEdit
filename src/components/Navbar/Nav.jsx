import React from "react";
import "./Nav.css";
import HeroImg from "../HeroImg/HeroImg";
import { Link } from "react-router-dom";
import { Stack } from "@mui/system";
import { Button } from "@mui/material";

export const navMapper = {
	Create: { link: "/create", className: "btn1" },
};

const Nav = () => {
	return (
		<Stack direction="row" justifyContent="space-around">
			<HeroImg />

			<Link
				to="/"
				style={{
					textDecoration: "none",
					color: "inherit",
				}}
			>
				<Button
					variant="text"
					component="label"
					onClick={() => {
						window.location.href = "/create";
					}}
				>
					Create
				</Button>
			</Link>
		</Stack>
	);
};

export default Nav;
