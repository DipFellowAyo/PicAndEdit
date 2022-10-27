import { useContext } from "react";
import {
	axiosCall,
	endpoints,
	PhotoEditContext,
} from "../../Services/axiosCalls";
import { Button, Stack, Tooltip } from "@mui/material";
import Typography from "@mui/material/Typography";
import Dropdownselect from "../Dropdownselect";

export const StyleTransfer = () => {
	const { uploadData, setUploadData } = useContext(PhotoEditContext);
	const handleClick = () => {
		axiosCall(endpoints.styletransfer, uploadData).then(
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
		console.log(e.target.files[0]);
		const files = e.target.files;
		// const filesArr = Array.prototype.slice.call(files);
		setUploadData({
			...uploadData,
			reference_image: files[0],
			reference_image_url: null,
			bg_image: null, // Click the Browse button to upload an image file. This only has an effect when output=cutout.
			bg_image_url: null, //
			bg_image_id: null,
			reference_image_id: null,
		});
	};
	// exactly one of (reference_image, reference_image_id, reference_image_url) are expected, got 2

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

			<Stack direction="row" spacing={2} alignItems="center">
				<Typography noWrap={true}>Upload Reference Image</Typography>
				<Button variant="text" component="label">
					Upload
					<input
						id="fileUpolad"
						type="file"
						onChange={handleFileChange}
						multiple
						style={{ visibility: "hidden", position: "absolute" }}
					/>
				</Button>
			</Stack>

			<Stack
				direction="row"
				justifyContent="space-around"
				alignItems="center"
				spacing={1}
			>
				<Dropdownselect type="level" />
				<Dropdownselect type="format" />
			</Stack>
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
