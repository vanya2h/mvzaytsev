import { axios } from "@utils/axios";
import cookie from "js-cookie";

export const createSubmitFunction = commentId => {
	return data =>
		axios.put("/comment/entry", data, {
			headers: {
				authorization: cookie.get("x-access-token")
			},
			params: {
				commentId
			}
		});
};

export default createSubmitFunction;
