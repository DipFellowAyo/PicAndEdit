import axios from "axios";
import { createContext, useEffect, useState } from "react";

export async function axiosCall(url, data, method) {
	console.log("API", data);

	if (data.image_url !== "") {
		data.image = "";
		data.image_id = "";
	}

	let enpointData = Object.entries(data).filter(([key, value]) => value !== "");
	data = Object.fromEntries(enpointData);

	let formdata = new FormData();
	for (const key in data) {
		formdata.append(key, data[key]);
	}

	let reqOptions = {
		url: "https://api.picsart.io/tools/1.0" + url,
		method: method ? method : "POST",
		headers: {
			"x-picsart-api-key": "AeGNHQYU1meYoWsUAfCyMfLCVI7ZQtdF",
		},
		data: formdata,
	};
	return await axios.request(reqOptions);
}

export const endpoints = {
	removebg: "/removebg",
	upload: "/upload",
	adjust: "/adjust",
	blur: "/blur",
	styletransfer: "/styletransfer",
};

export const PhotoEditContext = createContext({
	format: "",
});

export const PhotoEditContextProvider = ({ children }) => {
	const oldData = JSON.parse(localStorage.getItem("lastConfig"));
	console.log(oldData?.image_url);

	const [uploadData, setUploadData] = useState({
		// REMOVE BACKGROUND VALUE
		currentTool: "removebg",
		format: "",
		image: "",
		image_url: oldData?.image_url ?? "", // Enter the URL of a public-facing image.
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

		// UPLOAD VALUE
		brightness: "",
		contrast: "",
		clarity: "",
		saturation: "",
		hue: "",
		shadows: "",
		highlights: "",
		temperature: "",
		sharpen: "",
		noise: "",
		vignette: "",
	});
	useEffect(() => {
		localStorage.setItem("lastConfig", JSON.stringify(uploadData));
		console.log(uploadData);
	}, [uploadData]);

	return (
		<PhotoEditContext.Provider
			value={{
				uploadData,
				setUploadData,
			}}
		>
			{children}
		</PhotoEditContext.Provider>
	);
};
