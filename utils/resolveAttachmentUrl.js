import { config } from "./config";

export const resolveAttachmentUrl = url => {
	return `${config.api}/uploads/${url}`;
};

export default resolveAttachmentUrl;
