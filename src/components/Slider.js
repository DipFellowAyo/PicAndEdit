import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { useContext, useState } from "react";
import { PhotoEditContext } from "../Services/axiosCalls";

export default function AppSlider({ element, values }) {
	const { uploadData, setUploadData } = useContext(PhotoEditContext);
	const [value, setValue] = useState(null);
	const handleChange = (event, value) => {
		setUploadData({ ...uploadData, [element]: value });
		setValue(value);
	};

	return (
		<Box width={100} min={values[0] || 0}>
			<Slider
				value={value}
				size="small"
				defaultValue={(values[1] + values[0]) / 2}
				aria-label="Small"
				valueLabelDisplay="auto"
				onChange={(e, value) => handleChange(e, value)}
				max={values[1] || 100}
				min={values[0] || 0}
				sx={{
					display: "flex",
					alignItems: "flex-start",
					justifyContent: "flex-start",
				}}
			/>
		</Box>
	);
}
