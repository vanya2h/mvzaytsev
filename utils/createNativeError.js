export const createNativeError = message => ({
	message,
	status: "unhandled"
});

export default createNativeError;
