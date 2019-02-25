import colors from "colors";
import express from "express";
import next from "next";
import { axios } from "@utils/axios";
import cookieParser from "cookie-parser";
import { config } from "../utils";

const envConfig = config;

const dev = process.env.NODE_ENV !== "production";

const app = next({ dev });
const handle = app.getRequestHandler();

export default dirname =>
	app.prepare().then(() => {
		const server = express();

		server.use(cookieParser());
		server.use("/static", express.static(dirname + "/.next/static"));

		server.get("/blog/:id", async (req, res) => {
			if (req.params.id) {
				return app.render(req, res, "/blog", { postId: req.params.id });
			}

			const response = await axios.get("/post/latest");
			return app.render(req, res, "/blog", { postId: response.data });
		});

		server.get("*", (req, res) => handle(req, res));

		server.listen(envConfig.port, err => {
			if (err) {
				throw new Error(err);
			}

			// eslint-disable-next-line no-console
			console.log(
				colors.cyan(`Сервер запущен по следующему адресу: ${envConfig.url}`)
			);
		});
	});
