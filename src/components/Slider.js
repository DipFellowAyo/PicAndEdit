import { useState } from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { PhotoEditContext } from "./uploadBox";

export default function AppSlider({ element }) {
	const handleChange = (event, value) => {
		PhotoEditContext[element] = value;
	};

	return (
		<Box width={300}>
			<Slider
				size="small"
				defaultValue={50}
				aria-label="Small"
				valueLabelDisplay="auto"
				onChange={(e, value) => handleChange(e, value)}
				max={100}
				min={0}
			/>
		</Box>
	);
}
