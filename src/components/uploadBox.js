import * as React from "react";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
// import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Preview from "./Preview";

export default function UploadBox() {
	const [file, setFile] = React.useState("");
	const handleFileChange = (e) => {
		const files = e.target.files;
		const filesArr = Array.prototype.slice.call(files);
		setFile(URL.createObjectURL(e.target.files[0]));
	};
	return (
		<Stack
			direction="column"
			divider={<Divider orientation="horizontal" flexItem />}
			spacing={2}
			sx={{ width: "100%" }}
			justifyContent="space-around"
		>
			<Button variant="text" component="label">
				Upload{" "}
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
			{file !== "" && <Preview file={file} />}
		</Stack>
	);
}
