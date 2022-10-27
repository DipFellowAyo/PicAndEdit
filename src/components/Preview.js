import { useContext } from "react";
import Box from "@mui/material/Box";
import { doables } from "../Pages/createPage";
import Stack from "@mui/material/Stack";
import { RemoveBackground } from "./RemoveBackground";
import Divider from "@mui/material/Divider";
import { PhotoEditContext } from "../Services/axiosCalls";

export default function Preview() {
	const { uploadData } = useContext(PhotoEditContext);

	const previewImage =
		uploadData.image_url ?? URL.createObjectURL(uploadData.image);

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
				<RemoveBackground />
			</Stack>
		</Stack>
	);
}
