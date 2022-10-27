import { useState, createContext } from "react";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
// import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Preview from "./Preview";
import { axiosCall } from "../Services/axiosCalls";
export const PhotoEditContext = createContext({
	// REMOVE BACKGROUND VALUE
	image_id1: "",
	image_url1: "",
	format: "",
	image: "",
	image_url: "", // Enter the URL of a public-facing image.
	image_id: "", // Enter the ID of an image that you have previously uploaded to the API.
	output_type: "cutout", //cutout returns the person as a sticker while mask returns a mask photo of the person.
	bg_image: "", // Click the Browse button to upload an image file. This only has an effect when output=cutout.
	bg_image_url: "", //Enter the URL of a public-facing image. If this has a value, the output value is dismissed.
	bg_image_id: "", //Enter the ID of an image previously uploaded to Picsart. See /upload method. If this has a value, the output value is dismissed.
	bg_color: "", // Can be a hexcolor code (e.g., #82d5fa, #fff) or a color name (e.g., blue). For semi-transparency, 4-/8-digit hexcodes are also supported (e.g., #18d4ff87). (If this parameter is present, the other bg_ parameters must be empty, besides bg_size).
	bg_blur: "", //value from 0 to +100.
	bg_width: "", //Size, in pixels, for the width. If left blank, the background is left at its original width.
	bg_height: "", // Size, in pixels, for the height. If left blank, the background is left at its original height.
	scale: "", // Fit is where the longer side (width/height) fits the background. Fill is where the shorter side fits the background. Fit is the default.

	// ENHANCE VALUES
});
// 8cfde35f-884c-46ca-a815-44b4e0d5bc97
// https://cdn.picsart.io/8cfde35f-884c-46ca-a815-44b4e0d5bc97
const endpoints = {
	removeBackground: "/remove-background",
	upload: "/upload",
};

export default function UploadBox() {
	const [file, setFile] = useState("");
	const handleFileChange = (e) => {
		// const files = e.target.files;
		// const filesArr = Array.prototype.slice.call(files);
		// setFile(URL.createObjectURL(e.target.files[0]));

		let data = {
			image: e.target.files[0],
			image_url: "",
		};

		axiosCall(endpoints.upload, data).then(
			(res) => {
				console.log(res.data);
				setFile(res.data.data.url);
				PhotoEditContext.image_id1 = res.data.data.id;
				PhotoEditContext.image_url1 = res.data.data.url;
			},
			(err) => {
				console.log(err);
			}
		);
	};

	return (
		<PhotoEditContext.Provider value={{ file, setFile }}>
			<Stack
				direction="column"
				divider={<Divider orientation="horizontal" flexItem />}
				spacing={2}
				sx={{ width: "100%" }}
				justifyContent="space-around"
			>
				<Stack
					direction="row"
					divider={<Divider orientation="horizontal" flexItem />}
					spacing={2}
					sx={{ width: "100%" }}
					justifyContent="space-around"
				>
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
					<TextField
						id="standard-basic"
						label="Image URL"
						onChange={(e) => console.log(e.target.value)}
						variant="standard"
					/>
				</Stack>
				{file !== "" && <Preview />}
			</Stack>
		</PhotoEditContext.Provider>
	);
}
