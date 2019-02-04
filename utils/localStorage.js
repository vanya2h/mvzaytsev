import { isBrowser } from "./isBrowser";

export const save = (data, key) => {
	if (!isBrowser || !window.localStorage || !window.JSON || !key) {
		return;
	}

	window.localStorage.setItem(key, JSON.stringify(data));
};

export const get = key => {
	if (!isBrowser || !window.localStorage || !window.JSON || !key) {
		return;
	}
	const item = window.localStorage.getItem(key);

	if (!item) {
		return;
	}

	return JSON.parse(item);
};

export const remove = key => {
	if (isBrowser || !window.localStorage || !window.JSON || !key) {
		return;
	}
	window.localStorage.removeItem(key);
};

export const localStorage = {
	remove,
	save,
	get
};

export default localStorage;
