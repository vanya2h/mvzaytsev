import axiosFabrica from "axios";
import { config } from "./config";
console.log(config.api);
export const axios = axiosFabrica.create({
	baseURL: config.api,
	timeout: 20000
});

export default axios;
