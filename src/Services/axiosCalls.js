import axios from "axios";

export async function axiosCall(url, data, method) {

    //  if data is empty, filter 

	let headersList = {
		"x-picsart-api-key": "AeGNHQYU1meYoWsUAfCyMfLCVI7ZQtdF",
	};

	let formdata = new FormData();
	for (const key in data) {
		formdata.append(key, data[key]);
	}
	let bodyContent = formdata;

	let reqOptions = {
		url: "https://api.picsart.io/tools/1.0" + url,
		method: method ? method : "POST",
		headers: headersList,
		data: bodyContent,
	};
	return await axios.request(reqOptions);
}
