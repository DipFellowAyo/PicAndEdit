import { useContext } from "react";
import {
	axiosCall,
	endpoints,
	PhotoEditContext,
} from "../../Services/axiosCalls";
import { Button, Grid, Stack, Tooltip } from "@mui/material";
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
		const files = e.target.files;
		// const filesArr = Array.prototype.slice.call(files);
		setUploadData({
			...uploadData,
			reference_image: files[0],
			reference_image_url: "",
		});
		let data = {
			image: e.target.files[0],
			image_url: "",
		};
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

			{/* <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
				{Object.entries(elements).map((item) => {
					console.log(item[1]);
					return (
						<Grid item xs={6}>
							<Typography gutterBottom>{item[1]["name"]}</Typography>
							<AppSlider
								element={item[1]["name"].toLocaleLowerCase()}
								values={item[1]["values"]}
							/>
						</Grid>
					);
				})}
			</Grid> */}
			<Tooltip title="Smaller numbers preserve more from the original image, bigger numbers make the original image look closer to the reference image. ">
				<Dropdownselect type="level" />
			</Tooltip>

			<Stack
				direction="row"
				justifyContent="space-around"
				alignItems="center"
				spacing={1}
			>
				<Dropdownselect type="format" />
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
