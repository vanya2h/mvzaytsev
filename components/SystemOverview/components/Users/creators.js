import { axios } from "@utils/axios";

export const createLoadMoreFunction = () => {
	return skip =>
		axios.get("/user/entries", {
			params: {
				skip,
				limit: 10
			}
		});
};
