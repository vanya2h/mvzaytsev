import cookies from "js-cookie";
import * as actionTypes from "../consts/user";

export const userAuth = user => ({
	type: actionTypes.USER_AUTH,
	payload: {
		user
	}
});

export const userLogout = () => {
	cookies.remove("x-access-token");

	return {
		type: actionTypes.USER_LOGOUT
	};
};

export const updateUser = user => ({
	type: actionTypes.USER_UPDATE_USER,
	payload: user
});
