import { useContext, useState } from "react";
import {
	axiosCall,
	endpoints,
	PhotoEditContext,
} from "../../Services/axiosCalls";
import { Button, Grid, Stack } from "@mui/material";
import Typography from "@mui/material/Typography";
import Dropdownselect from "../Dropdownselect";
import AppSlider from "../Slider";

export const Adjust = () => {
	const { uploadData, setUploadData } = useContext(PhotoEditContext);
	const handleClick = () => {
		axiosCall(endpoints.adjust, uploadData).then(
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

	const elements = [
		{
			name: "Brightness",
			values: [-100, 100],
		},
		{
			name: "Contrast",
			values: [-100, 100],
		},
		{
			name: "Clarity",
			values: [-100, 100],
		},
		{
			name: "Saturation",
			values: [-100, 100],
		},
		{
			name: "Hue",
			values: [-100, 100],
		},
		{
			name: "Shadows",
			values: [-100, 100],
		},
		{
			name: "Highlights",
			values: [-100, 100],
		},
		{
			name: "Temperature",
			values: [-100, 100],
		},
		{
			name: "Sharpen",
			values: [0, 100],
		},
		{
			name: "Noise",
			values: [0, 100],
		},

		{
			name: "Vignette",
			values: [0, 100],
		},
	];

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

			<Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
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
			</Grid>
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
