import createNativeError from "./createNativeError";

const isHtml = response =>
	response.headers["content-type"].indexOf("html") !== -1;
const isString = string => typeof string === "string";

export const parseError = error => {
	if (!error) {
		return createNativeError("Неизвестная ошибка клиента. Попробуйте позже");
	}
	if (error.status === "unhandled") {
		return error;
	}
	if (error.response) {
		if (error.response.status === 422) {
			return error.response.data.errors;
		}

		if (isString(error.response.data)) {
			if (isHtml(error.response)) {
				return createNativeError(
					"Неизвестная ошибка сервера. Попробуйте позже"
				);
			}
			return createNativeError(error.response.data);
		}

		if (error.response.data.message) {
			return createNativeError(error.response.data.message);
		}

		return createNativeError("Неизвестная ошибка сервера. Попробуйте позже");
	}
	return createNativeError("Неизвестная ошибка клиента. Попробуйте позже");
};

export default parseError;
