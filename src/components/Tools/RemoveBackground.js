import { useContext } from "react";
import {
	axiosCall,
	endpoints,
	PhotoEditContext,
} from "../../Services/axiosCalls";
import { Button, Divider, Stack, Tooltip } from "@mui/material";
import { SketchPicker } from "react-color";
import Typography from "@mui/material/Typography";
import Dropdownselect from "../Dropdownselect";
import AppSlider from "../Slider";
import { Box } from "@mui/system";

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
	const handleFileChange = (e) => {
		const files = e.target.files;
		setUploadData({
			...uploadData,
			bg_image: files[0],
			bg_image_url: "",
			bg_color: "",
		});
	};

	const handleColorChange = (color) => {
		setUploadData({
			...uploadData,
			bg_color: color.hex,
			bg_image: "",
			bg_image_url: "",
			bg_image_id: "",
		});
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
			<Typography variant="h4" gutterBottom noWrap={true} color="grey">
				{uploadData.currentTool}
			</Typography>
			<Stack
				direction="row"
				justifyContent="space-around"
				alignItems="center"
				spacing={1}
			>
				<Tooltip title="Select background color">
					<Box>
						<SketchPicker
							color={uploadData.bg_color}
							onChangeComplete={handleColorChange}
							disableAlpha={true}
						/>
					</Box>
				</Tooltip>

				<Stack
					direction="column"
					justifyContent="space-around"
					alignItems="center"
					spacing={1}
				>
					<Dropdownselect type="format" />
					<Dropdownselect type="scale" />
					<Dropdownselect type="output_type" />{" "}
					<Stack>
						<Typography gutterBottom>Image Blur</Typography>
						<AppSlider element="bg_blur" values={[0, 100]} />
					</Stack>
				</Stack>
			</Stack>

			<Stack
				direction="row"
				spacing={2}
				alignItems="center"
				divider={<Divider orientation="vertical" flexItem />}
			>
				<Button variant="text" component="label">
					Upload Background Image
					<input
						id="fileUpolad"
						type="file"
						onChange={handleFileChange}
						multiple
						style={{ visibility: "hidden", position: "absolute" }}
					/>
				</Button>{" "}
				<Button
					onClick={() => {
						handleClick();
					}}
				>
					Apply
				</Button>
			</Stack>
		</Stack>
	);
};
