import Axios from "axios";
import { useMutation, useQuery } from "react-query";
import { useMemo } from "react";

let apiKey = "AeGNHQYU1meYoWsUAfCyMfLCVI7ZQtdF";

/**
 * Use API Query
 *
 * @param {string} queryKey
 * @param {(client: import('axios').AxiosInstance) => {}} queryFn
 * @param {object} options
 * @returns
 */
export function useApiQuery(queryKey, queryFn, options) {
	const api = useMemo(() => {
		const instance = Axios.create({
			baseURL: "https://api.picsart.io/tools/1.0/",
			headers: {
				"accept": "application/json",
				"X-Picsart-API-Key": apiKey,
			},
		});
		if (options.image_url) {
			instance["headers"] = {
				"accept": "application/json",
				"X-Picsart-API-Key": apiKey,
				image_url: options.image_url,
			};
		}

		return instance;
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return useQuery(
		queryKey,
		() => queryFn(api).then((response) => response.data),
		options
	);
}

export function useApiMutation(mutationFn, options) {
	const api = useMemo(() => {
		const instance = Axios.create({
			baseURL: "https://api.picsart.io/tools/1.0/",
			headers: {
				"accept": "application/json",
				"X-Picsart-API-Key": apiKey,
			},
		});
		return instance;
	}, []);

	return useMutation(
		(...args) => mutationFn(api, ...args).then((response) => response.data),
		options
	);
}
