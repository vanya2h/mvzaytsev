import { axios } from "@utils/axios";

export const createSubmitFunction = () => {
	return data => axios.get("/user/signup", data);
};
