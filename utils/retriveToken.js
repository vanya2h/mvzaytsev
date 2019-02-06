import cookies from "js-cookie";
import { isBrowser } from "./isBrowser";

export const retriveToken = req => {
	if (req) {
		return req.cookies && req.cookies["x-access-token"];
	}

	if (isBrowser) {
		return cookies.get("x-access-token");
	}

	return null;
};

export default retriveToken;
