import createNativeError from "./createNativeError";

const isHtml = response =>
	response.headers["content-type"].indexOf("html") !== -1;
const isString = string => typeof string === "string";

export const parseFormError = error => {
	if (!error) {
		return [
			createNativeError("Неизвестная ошибка клиента. Попробуйте позже"),
			null
		];
	}
	if (error.status === "unhandled") {
		return [error, null];
	}
	if (error.response) {
		if (error.response.status === 422) {
			return [null, error.response.data.errors];
		}

		if (isString(error.response.data)) {
			if (isHtml(error.response)) {
				return [
					createNativeError("Неизвестная ошибка сервера. Попробуйте позже"),
					null
				];
			}
			return [createNativeError(error.response.data), null];
		}

		if (error.response.data.message) {
			return [createNativeError(error.response.data.message), null];
		}

		return [
			createNativeError("Неизвестная ошибка сервера. Попробуйте позже"),
			null
		];
	}
	return [
		createNativeError("Неизвестная ошибка клиента. Попробуйте позже"),
		null
	];
};

export default parseFormError;
