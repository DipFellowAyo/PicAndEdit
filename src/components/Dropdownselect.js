import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { PhotoEditContext } from "../Services/axiosCalls";

export default function Dropdownselect({ type }) {
	const [value, setValue] = React.useState("");
	const { uploadData, setUploadData } = React.useContext(PhotoEditContext);

	const handleChange = (event) => {
		setValue(event.target.value);
		setUploadData({ ...uploadData, [type]: event.target.value });
	};

	const data = {
		format: ["JPG", "PNG", "TIFF", "WEBP"],
		scale: ["fit", "fill"],
		output_type: ["cutout", "mask"],
		level: ["l1", "l2", "l3", "l4", "l5"],
	};

	return (
		<Box sx={{ minWidth: 120, padding: 1 }}>
			<FormControl fullWidth>
				<InputLabel id="demo-simple-select-label">
					{type.toUpperCase()}
				</InputLabel>
				<Select
					labelId="demo-simple-select-label"
					id="demo-simple-select"
					value={value}
					label={type}
					onChange={handleChange}
				>
					{data[type].map((format) => {
						return (
							<MenuItem key={format} value={format}>
								{format.toUpperCase()}
							</MenuItem>
						);
					})}
				</Select>
			</FormControl>
		</Box>
	);
}
