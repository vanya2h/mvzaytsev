import axiosFabrica from "axios";
import { config } from "./config";

export const axios = axiosFabrica.create({
	baseURL: `${config.url}/api`,
	timeout: 20000
});

export default axios;
