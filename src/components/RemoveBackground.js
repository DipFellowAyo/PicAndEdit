import { useContext, useState } from "react";
import Box from "@mui/material/Box";
import { PhotoEditContext } from "./uploadBox";
import { axiosCall } from "../Services/axiosCalls";
import { Button } from "@mui/material";
import { SketchPicker } from "react-color";
import Typography from "@mui/material/Typography";
import Dropdownselect from "./Dropdownselect";

export const RemoveBackground = () => {
	const { file, setFile } = useContext(PhotoEditContext);
	const [removebg, setRremovebg] = useState({
		image: "",
		image_url: file, // Enter the URL of a public-facing image.
		image_id: "", // Enter the ID of an image that you have previously uploaded to the API.
		output_type: "cutout", //cutout returns the person as a sticker while mask returns a mask photo of the person.
		bg_image: "", // Click the Browse button to upload an image file. This only has an effect when output=cutout.
		bg_image_url: "", //Enter the URL of a public-facing image. If this has a value, the output value is dismissed.
		bg_image_id: "", //Enter the ID of an image previously uploaded to Picsart. See /upload method. If this has a value, the output value is dismissed.
		bg_color: "", // Can be a hexcolor code (e.g., #82d5fa, #fff) or a color name (e.g., blue). For semi-transparency, 4-/8-digit hexcodes are also supported (e.g., #18d4ff87). (If this parameter is present, the other bg_ parameters must be empty, besides bg_size).
		bg_blur: "", //value from 0 to +100.
		bg_width: "", //Size, in pixels, for the width. If left blank, the background is left at its original width.
		bg_height: "", // Size, in pixels, for the height. If left blank, the background is left at its original height.
		scale: "", // Fit is where the longer side (width/height) fits the background. Fill is where the shorter side fits the background. Fit is the default.
		format: "JPG",
	});

	const endpoints = {
		upload: {
			link: "/upload",
			image: "",
			image_url: "",
		},
	};

	let name = "/removebg";
	let enpointData = Object.entries(removebg).filter(
		([key, value]) => value !== ""
	);

	let data = Object.fromEntries(enpointData);

	const handleClick = () => {
		axiosCall(name, data).then(
			(res) => {
				console.log(res);
				setFile(res.data.data.url);
				PhotoEditContext.image_id1 = res.data.data.id;
			},
			(err) => {
				console.log(PhotoEditContext.image_id1);
			}
		);
	};

	const handleColorChange = (color) => {
		setRremovebg({ ...removebg, bg_color: color.hex });
	};

	return (
		<Box
			sx={{
				padding: "5rem",
				backgroundColor: "#ffffff",
			}}
		>
			<Typography gutterBottom>Remove Background</Typography>
			<SketchPicker
				color={removebg.bg_color}
				onChangeComplete={handleColorChange}
			/>

			<Dropdownselect type="format" />

			<Dropdownselect type="scale" />
			<Button variant="text" component="label">
				Upload Background
				<input
					id="fileUpolad"
					type="file"
					// onChange={handleFileChange}
					// background image
					multiple
					style={{ visibility: "hidden", position: "absolute" }}
				/>
			</Button>

			{/* background image bg_blur: slider 0 - 100 */}
			{/* backgroound width height crop  bg_width, bg_height*/}
			{/* output_type: cutout || mask */}
			<Button
				onClick={() => {
					handleClick();
				}}
			>
				Apply
			</Button>
		</Box>
	);
};
