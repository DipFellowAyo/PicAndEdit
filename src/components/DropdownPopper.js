import React, { useEffect, useRef, useState } from "react";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import MenuList from "@mui/material/MenuList";
import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
	navItem: {
		width: "100%",
		height: "100%",
		display: "flex",
		flexGrow: "1",
		fontWeight: "bold",
		listStyle: "none",
		margin: "0 0 0 0",
		padding: "0.5rem 0",
		cursor: "pointer",
		color: "#fff",
		textTransform: "capitalize",
		position: "relative",
	},
}));

export default function DropDownPopper(item, popup) {
	const classes = useStyles();
	const [open, setOpen] = useState(false);
	const anchorRef = useRef(null);

	const handleToggle = () => {
		setOpen((prevOpen) => !prevOpen);
	};

	const handleClose = (event) => {
		if (anchorRef.current && anchorRef.current.contains(event.target)) {
			return;
		}
		setOpen(false);
	};

	function handleListKeyDown(event) {
		if (event.key === "Tab") {
			event.preventDefault();
			setOpen(false);
		} else if (event.key === "Escape") {
			setOpen(false);
		}
	}

	// return focus to the button when we transitioned from !open -> open
	const prevOpen = useRef(open);

	useEffect(() => {
		if (prevOpen.current === true && open === false) {
			anchorRef.current.focus();
		}

		prevOpen.current = open;
	}, [open]);

	return (
		// <Stack direction="row" spacing={2}>
		<Box>
			<Box
				ref={anchorRef}
				id="composition-button"
				aria-controls={open ? "composition-menu" : undefined}
				aria-expanded={open ? "true" : undefined}
				aria-haspopup="true"
				onClick={handleToggle}
				className={classes.navItem}
			>
				{item}
			</Box>
			<Popper
				open={open}
				anchorEl={anchorRef.current}
				role={undefined}
				placement="bottom-start"
				transition
				disablePortal
				sx={{ zIndex: "99999" }}
			>
				{({ TransitionProps, placement }) => (
					<Grow
						// style={{ background: "blue" }}
						{...TransitionProps}
						style={{
							background: "none",
							marginTop: "1rem",
							transformOrigin:
								placement === "bottom-start" ? "left top" : "left bottom",
						}}
					>
						<Paper>
							<ClickAwayListener onClickAway={handleClose}>
								<MenuList
									autoFocusItem={open}
									id="composition-menu"
									aria-labelledby="composition-button"
									onKeyDown={handleListKeyDown}
								>
									{popup}
								</MenuList>
							</ClickAwayListener>
						</Paper>
					</Grow>
				)}
			</Popper>
		</Box>
		// </Stack>
	);
}
