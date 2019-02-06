import { parseError } from "./parseError";

export const to = promise => {
	return promise
		.then(data => {
			return [null, data];
		})
		.catch(err => [parseError(err)]);
};

export default to;
