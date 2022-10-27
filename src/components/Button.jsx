import { makeStyles } from "@mui/styles";
import React from "react";

const useStyles = makeStyles((theme) => ({
	buttonContainer: {
		width: "20%",
		margin: "auto",
		cursor: "pointer",
		backgroundColor: "#362417",
		color: "#ffffff",
		borderRadius: "15px 225px 255px 15px 15px 255px 225px 15px",
		borderStyle: "solid",
		borderWidth: "2px",
		boxShadow: "rgba(0, 0, 0, .2) 15px 28px 25px -18px",
		boxSizing: "border-box",
		fontFamily: "Neucha, sans-serif",
		fontSize: "1.1rem",
		outline: "none",
		padding: ".75rem",
		transition: "all 235ms ease-in-out",
		borderBottomLeftRadius: "15px 255px",
		borderBottomRightRadius: "225px 15px",
		borderTopLeftRadius: "255px 15px",
		borderTopRightRadius: "15px 225px",
		webkitUserSelect: "none",
		touchAction: "manipulation",
		userSelect: "none",

		"&:hover": {
			boxShadow: "rgba(0, 0, 0, .3) 2px 8px 8px -5px",
			transform: "translate3d(0, 2px, 0)",
		},
		"&:focus": {
			boxShadow: "rgba(0, 0, 0, .3) 2px 8px 4px -6px",
		},
	},
}));

const Button = (prop) => {
	const classes = useStyles();

	return (
		<div className={classes.buttonContainer}
      sx={{
        
      }}
    >
			<h5>{prop.title}</h5>
		</div>
	);
};

export default Button;
