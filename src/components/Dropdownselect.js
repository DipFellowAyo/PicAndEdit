import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { PhotoEditContext } from "./uploadBox";

export default function Dropdownselect({ type }) {
	const handleChange = (event) => {
		PhotoEditContext[type] = event.target.value;
	};

	console.log(type);

	const data = {
		format: ["JPG", "PNG", "TIFF", "WEBP"],
		scale: ["fit", "fill"],
	};

	return (
		<Box sx={{ minWidth: 120 }}>
			<FormControl fullWidth>
				<InputLabel id="demo-simple-select-label">{type}</InputLabel>
				<Select
					labelId="demo-simple-select-label"
					id="demo-simple-select"
					value={type}
					label={type}
					onChange={handleChange}
				>
					{data[type].map((format) => {
						return <MenuItem value={format}>{format}</MenuItem>;
					})}
				</Select>
			</FormControl>
		</Box>
	);
}
