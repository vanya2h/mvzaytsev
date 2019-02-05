import siteConfig from "@root/config";

const configureConfig = () => {
	if (process.browser) {
		return siteConfig[window.NODE_ENV || "development"];
	}
	return siteConfig[process.env.NODE_ENV || "development"];
};

export const config = configureConfig();

export default config;
