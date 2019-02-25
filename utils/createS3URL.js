import { config } from "@utils/config";

export const createS3URL = key => {
	return `https://s3.eu-central-1.amazonaws.com/${config.bucket}/${key}`;
};

export default createS3URL;
