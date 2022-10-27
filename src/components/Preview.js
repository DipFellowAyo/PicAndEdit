import { useContext } from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { RemoveBackground } from "./Tools/RemoveBackground";
import Divider from "@mui/material/Divider";
import { PhotoEditContext } from "../Services/axiosCalls";
import { Adjust } from "./Tools/Adjust";
import { StyleTransfer } from "./Tools/StyleTransfer";

export default function Preview() {
	const { uploadData } = useContext(PhotoEditContext);

	const previewImage =
		uploadData.image_url ?? URL.createObjectURL(uploadData.image);

	const toolBox = {
		"Remove Background": <RemoveBackground title={uploadData.currentTool} />,
		Enhance: <RemoveBackground />,
		Effects: <RemoveBackground />,
		Adjust: <Adjust />,
		"Style Transfer": <StyleTransfer />,
		"Content Generation": <RemoveBackground />,
		Conversion: <RemoveBackground />,
	};

	return (
		<Stack
			direction="row"
			divider={<Divider orientation="vertical" flexItem />}
			spacing={2}
			justifyContent="space-around"
			alignItems="center"
		>
			<Box
				sx={{
					width: "100%",
					height: "600px",
					background: `url(${previewImage})`,
					backgroundSize: "contain",
					backgroundRepeat: "no-repeat",
					backgroundPosition: "center",
				}}
			></Box>

			<Stack
				direction="row"
				justifyContent="space-around"
				alignItems="center"
				spacing={2}
				padding={4}
				divider={<Divider orientation="vertical" flexItem />}
			>
				{toolBox[uploadData.currentTool]}
			</Stack>
		</Stack>
	);
}
