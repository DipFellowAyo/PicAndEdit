import { useContext } from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { RemoveBackground } from "./Tools/RemoveBackground";
import Divider from "@mui/material/Divider";
import { PhotoEditContext } from "../Services/axiosCalls";
import { Adjust } from "./Tools/Adjust";
import { StyleTransfer } from "./Tools/StyleTransfer";
import { Grid } from "@mui/material";
import PreviousImages from "./Tools/PreviousImages";

export default function Preview() {
	const { uploadData } = useContext(PhotoEditContext);

	const previewImage =
		uploadData.image_url ?? URL.createObjectURL(uploadData.image);

	let bg_image = uploadData.bg_image
		? URL.createObjectURL(uploadData.bg_image)
		: null;

	if (uploadData.currentTool === "Style Transfer") {
		bg_image = uploadData.reference_image
			? URL.createObjectURL(uploadData.reference_image)
			: null;
	}

	const toolBox = {
		"Remove Background": <RemoveBackground />,
		Enhance: <RemoveBackground />,
		Effects: <RemoveBackground />,
		Adjust: <Adjust />,
		"Style Transfer": <StyleTransfer />,
		"Content Generation": <RemoveBackground />,
		Conversion: <RemoveBackground />,
		"Previous Images": <PreviousImages />, 
	};

	return (
		<Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
			<Grid item xs={6}>
				<Stack
					direction="column"
					divider={<Divider orientation="horizontal" flexItem />}
					sx={{
						width: "100%",
						height: "100%",
						alignItems: "center",
						justifyContent: "space-around",
					}}
				>
					<Box
						sx={{
							width: "100%",
							height: "300px",
							background: `url(${previewImage})`,
							backgroundSize: "contain",
							backgroundRepeat: "no-repeat",
							backgroundPosition: "center",
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
						}}
					></Box>
					{bg_image && (
						<Box
							sx={{
								margin: "2rem",
								width: "100%",
								height: "300px",
								background: `url(${bg_image})`,
								backgroundSize: "contain",
								backgroundRepeat: "no-repeat",
								backgroundPosition: "center",
							}}
						></Box>
					)}
				</Stack>
			</Grid>

			<Grid item xs={6}>
				<Stack
					direction="row"
					justifyContent="space-around"
					alignItems="center"
					spacing={2}
					padding={3}
				>
					{toolBox[uploadData.currentTool]}
				</Stack>
			</Grid>
		</Grid>
	);
}
