import { axios } from "@utils/axios";

export const createAuthFunction = () => {
	return data => axios.post("/user/signin", data);
};
