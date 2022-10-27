/* eslint-disable no-unused-vars */
import { useContext, useState } from "react";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Preview from "./Preview";
import { axiosCall, endpoints, PhotoEditContext } from "../Services/axiosCalls";

export default function UploadBox() {
	const { uploadData, setUploadData } = useContext(PhotoEditContext);

	const handleFileChange = (e) => {
		const files = e.target.files;
		// const filesArr = Array.prototype.slice.call(files);
		setUploadData({ ...uploadData, image: files[0], image_url: "" });
		let data = {
			image: e.target.files[0],
			image_url: "",
		};

		axiosCall(endpoints.upload, data).then(
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

	return (
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
			{uploadData.image !== "" || uploadData.image_url !== "" && <Preview />}
		</Stack>
	);
}
