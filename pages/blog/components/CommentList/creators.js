import { axios } from "@utils/axios";

export const createLoadMoreFunction = postId => {
	return skip =>
		axios.get("/comment/entries", {
			params: {
				postId,
				limit: 10,
				skip
			}
		});
};
