import { axios } from "@utils/axios";
import cookies from "js-cookie";

export const createFetchAnalytics = () => {
	return () =>
		axios.get("/analytics/overview", {
			headers: {
				authorization: cookies.get("x-access-token")
			}
		});
};
