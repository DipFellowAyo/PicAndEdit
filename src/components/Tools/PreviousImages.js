import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useContext } from "react";
import { PhotoEditContext } from "../../Services/axiosCalls";

export default function PreviousImages() {
	const { uploadData, setUploadData } = useContext(PhotoEditContext);

	let previousImages = JSON.parse(localStorage.getItem("previousImages")) ?? [];

	previousImages = previousImages.filter((image) => image !== "");

	return (
		<Box
			sx={{
				width: "100%",
			}}
		>
			<Typography variant="h5" gutterBottom noWrap={true} color="grey" m={3}>
				Your History...
			</Typography>
			<Grid
				container
				rowSpacing={1}
				columnSpacing={{ xs: 1, sm: 2, md: 3 }}
				sx={{
					width: "100%",
				}}
			>
				{previousImages.map((image) => {
					return (
						<Grid
							key={image}
							item
							onClick={() => {
								setUploadData({
									...uploadData,
									image_url: image,
								});
							}}
							xs={2}
							sx={{
								width: "100%",
								margin: ".5rem",
								borderRadius: "1rem",
								height: "100px",
								background: `url(${image})`,
								backgroundColor: "#e8e8e8",
								backgroundSize: "contain",
								backgroundRepeat: "no-repeat",
								backgroundPosition: "center",
								display: "flex",
								justifyContent: "center",
								alignItems: "center",
								cursor: "pointer",
								"&:hover": {
									boxShadow: "2px 2px 2px 1px rgba(0, 0, 0, 0.2)",
								},
							}}
						/>
					);
				})}
			</Grid>
		</Box>
	);
}
