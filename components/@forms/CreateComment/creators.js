import { axios } from "@utils/axios";
import cookies from "js-cookie";

export const createSubmitFunction = postId => {
	return data =>
		axios.post(
			"/comment/entry",
			{
				postId,
				...data
			},
			{
				headers: {
					authorization: cookies.get("x-access-token")
				}
			}
		);
};
