import { useState, createContext } from "react";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
// import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Preview from "./Preview";
import { axiosCall } from "../Services/axiosCalls";
export const PhotoEditContext = createContext({
	image_id1: "",
	image_url1: "",
	format: "",
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
				{file !== "" && <Preview />}
			</Stack>
		</PhotoEditContext.Provider>
	);
}
