import { axios } from "@utils/axios";
import cookies from "js-cookie";

export const createLikeFunction = postId => {
	return () =>
		axios.get("/post/like", {
			params: {
				postId
			},
			headers: {
				authorization: cookies.get("x-access-token")
			}
		});
};
