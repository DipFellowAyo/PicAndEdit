import { useContext } from "react";
import Box from "@mui/material/Box";
import { doables } from "../Pages/createPage";
import Stack from "@mui/material/Stack";
import { RemoveBackground } from "./RemoveBackground";
import Divider from "@mui/material/Divider";
import { PhotoEditContext } from "./uploadBox";

export default function Preview() {
	const { file, setFile } = useContext(PhotoEditContext);

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
					background: `url(${file})`,
					backgroundSize: "contain",
					backgroundRepeat: "no-repeat",
					backgroundPosition: "center",
				}}
			>
				{/* <img src={file} height="100%" width="100%" /> */}
			</Box>

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
