import { useContext } from "react";
import Box from "@mui/material/Box";
import { doables } from "../Pages/createPage";
import Stack from "@mui/material/Stack";
import DropDownPopper from "./DropdownPopper";
import { RemoveBackground } from "./RemoveBackground";
import Divider from "@mui/material/Divider";
import { PhotoEditContext } from "./uploadBox";

export default function Preview() {
	const { file, setFile } = useContext(PhotoEditContext);

	return (
		<Box>
			<Box
				sx={{
					width: "100%",
					height: "400px",
					background: `url(${file})`,
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
				{Object.entries(doables)
					.slice(1)
					.map(([doable]) => {
						return DropDownPopper(
							<Box
								sx={{
									color: "#000000",
								}}
							>
								{doable}
							</Box>,
							<RemoveBackground />
						);
					})}
			</Stack>
		</Box>
	);
}
