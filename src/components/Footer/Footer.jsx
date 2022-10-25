import React from "react";
import HeroImg from "../HeroImg/HeroImg";
import { makeStyles } from "@mui/styles";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

const useStyles = makeStyles((theme) => ({
	footer: {
		padding: "2rem 0",
		display: "flex",
		flexDirection: "column",
		margin: "50px auto",
		width: "100%",
		alignItems: "center",
		backgroundColor: "#362417",
		color: "#ffffff",
		fontSize: "0.9rem",
	},
}));

const currentYear = new Date().getFullYear();

const Footer = () => {
	const classes = useStyles();

	return (
		<Box className={classes.footer}>
			<HeroImg />
			<p>
				PicAndEdit makes it easier for both individuals and businesses to have a
				central point from where they can create exciting image transformations
				with one click. <br /> Here, you can create without any huge creativity
				process. Our <b style={{ fontSize: "1.3rem" }}>PicsArt</b> APIs will do
				the hardwork for you.
			</p>
			<p>Copyright © {currentYear}</p>
		</Box>
	);
};

export default Footer;

export const SimpleFooter = () => {
	const classes = useStyles();
	return (
		<Box className={classes.footer}>
			<Stack direction="row" justifyContent="space-between" alignItems="center">
				<HeroImg />
				<p>Copyright © {currentYear}</p>
			</Stack>
		</Box>
	);
};
