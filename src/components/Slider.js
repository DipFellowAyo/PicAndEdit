import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { useContext } from "react";
import { PhotoEditContext } from "../Services/axiosCalls";

export default function AppSlider({ element }) {
	const { uploadData, setUploadData } = useContext(PhotoEditContext);
	const handleChange = (event, value) => {
		setUploadData({ ...uploadData, [element]: value });
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
