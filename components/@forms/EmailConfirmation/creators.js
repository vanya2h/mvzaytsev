import { axios } from "@utils/axios";

export const createSubmitFunction = userId => {
	return data =>
		axios.post("/user/confirm", {
			userId,
			...data
		});
};

export const createSendEmail = email => {
	return () =>
		axios.get("/user/resend", {
			params: {
				email
			}
		});
};
