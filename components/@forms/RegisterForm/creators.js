import { axios } from "@utils/axios";

export const createSubmitFunction = () => {
	return data => axios.post("/user/signup", data);
};
