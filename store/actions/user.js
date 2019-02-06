import * as actionTypes from "../consts/user";

export const userAuth = user => ({
	type: actionTypes.USER_AUTH,
	payload: {
		user
	}
});

export const userLogout = () => ({
	type: actionTypes.USER_LOGOUT
});
