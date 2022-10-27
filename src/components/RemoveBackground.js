import { useContext, useState } from "react";
import { axiosCall, endpoints, PhotoEditContext } from "../Services/axiosCalls";
import { Button, Stack } from "@mui/material";
import { SketchPicker } from "react-color";
import Typography from "@mui/material/Typography";
import Dropdownselect from "./Dropdownselect";
import AppSlider from "./Slider";

export const RemoveBackground = () => {
	const { uploadData, setUploadData } = useContext(PhotoEditContext);
	const handleClick = () => {
		axiosCall(endpoints.removebg, uploadData).then(
			(res) => {
				setUploadData({
					...uploadData,
					image_url: res.data.data.url,
					image_id: res.data.data.id,
				});
			},
			(err) => {
				console.log(err);
			}
		);
	};

	const handleColorChange = (color) => {
		setUploadData({ ...uploadData, bg_color: color.hex });
	};

	return (
		<Stack
			direction="column"
			justifyContent="space-around"
			alignItems="center"
			spacing={2}
			sx={{
				padding: "5rem",
				backgroundColor: "#ffffff",
			}}
		>
			<Typography gutterBottom>Remove Background</Typography>
			<Stack
				direction="row"
				justifyContent="space-around"
				alignItems="center"
				spacing={1}
			>
				<SketchPicker
					color={PhotoEditContext.bg_color}
					onChangeComplete={handleColorChange}
				/>
				<Stack
					direction="column"
					justifyContent="space-around"
					alignItems="center"
					spacing={1}
				>
					<Dropdownselect type="format" />
					<Dropdownselect type="scale" />
					<Dropdownselect type="output_type" />
				</Stack>
			</Stack>
			<Typography gutterBottom>Image Blur</Typography>
			<AppSlider element="bg_blur" />

			{/* <Button variant="text" component="label">
				Upload Background
				<input
					id="fileUpolad"
					type="file"
					// onChange={handleFileChange}
					// background image
					multiple
					style={{ visibility: "hidden", position: "absolute" }}
				/>
			</Button> */}

			{/* backgroound width height crop  bg_width, bg_height*/}

			<Button
				onClick={() => {
					handleClick();
				}}
			>
				Apply
			</Button>
		</Stack>
	);
};
