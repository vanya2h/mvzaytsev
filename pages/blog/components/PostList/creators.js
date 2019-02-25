import { axios } from "@utils/axios";

export const createLoadMoreFunction = () => {
	return skip =>
		axios.get("/post/entries", {
			params: {
				limit: 10,
				skip
			}
		});
};
