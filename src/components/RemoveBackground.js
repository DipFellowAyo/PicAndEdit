import React from "react";
import Box from "@mui/material/Box";
import { useApiQuery } from "../Services/apicalls";

const endpoints = {
	removebg: {
		link: "/removebg",
		image: "string($binary)",
		image_url: "string", // Enter the URL of a public-facing image.
		image_id: "string", // Enter the ID of an image that you have previously uploaded to the API.
		output_type: "string", //cutout returns the person as a sticker while mask returns a mask photo of the person.
		bg_image: "string($binary)", // Click the Browse button to upload an image file. This only has an effect when output=cutout.
		bg_image_url: "string", //Enter the URL of a public-facing image. If this has a value, the output value is dismissed.
		bg_image_id: "string", //Enter the ID of an image previously uploaded to Picsart. See /upload method. If this has a value, the output value is dismissed.
		bg_color: "string", // Can be a hexcolor code (e.g., #82d5fa, #fff) or a color name (e.g., blue). For semi-transparency, 4-/8-digit hexcodes are also supported (e.g., #18d4ff87). (If this parameter is present, the other bg_ parameters must be empty, besides bg_size).
		bg_blur: "integer", //Enter an "integer" value from 0 to +100.
		bg_width: "integer", //Size, in pixels, for the width. If left blank, the background is left at its original width.
		bg_height: "integer", // Size, in pixels, for the height. If left blank, the background is left at its original height.
		scale: "string", // Fit is where the longer side (width/height) fits the background. Fill is where the shorter side fits the background. Fit is the default.
		format: "string",
	},
};

export default function RemoveBackground() {
	let name = endpoints.removebg.link;

	const { data: removebg } = useApiQuery(endpoints.removebg.link, (client) =>
		client.get(endpoints.removebg.link)
	);

	return (
		<Box>
			<div>removeBackground</div>
			{/* color picker bg_color*/}
			{/* background image */}
			{/* background image bg_blur: slider 0 - 100 */}
			{/* backgroound width height crop  bg_width, bg_height*/}
			{/* scale:  fit || fill */}
			{/* format:  JPG || PNG | TIFF || WEBP */}
			{/* output_type: cutout || mask */}
		</Box>
	);
}
