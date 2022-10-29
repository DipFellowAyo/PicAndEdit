import React from "react";
import { Link } from "react-router-dom";
import "./HeroImg.css";

const HeroImg = () => {
	return (
		<Link
			to="/"
			style={{
				textDecoration: "none",
				color: "inherit",
			}}
		>
			{" "}
			<div className="heroImg">
				<h1>
					Pic<span>And</span>Edit
				</h1>
				<img
					src={process.env.PUBLIC_URL + "./images/PicAndEdit.png"}
					alt="PicAndEdit_logo"
				/>
			</div>
		</Link>
	);
};

export default HeroImg;
