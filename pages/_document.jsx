import React from "react";
import Document, { Head, Main, NextScript } from "next/document";
import flush from "styled-jsx/server";

class MyDocument extends Document {
	static getInitialProps({ renderPage }) {
		const { html, head, errorHtml, chunks } = renderPage();

		const styles = flush();

		return {
			html,
			head,
			errorHtml,
			chunks,
			styles
		};
	}

	render() {
		const script = `
			window.ENV = "${process.env.NODE_ENV}";
			window.PORT = ${process.env.PORT}
		`;
		return (
			<html>
				<Head>
					<script dangerouslySetInnerHTML={{ __html: script }} />
					<link rel="stylesheet" href="/static/normalize.css" />
					<link rel="stylesheet" href="/static/nprogress.css" />
					<link rel="stylesheet" href="/static/flexboxes.css" />
					<link rel="stylesheet" href="/static/utils.css" />
					<link rel="stylesheet" href="/static/paddings.css" />
					<link rel="stylesheet" href="/static/margins.css" />
					<link
						href="https://fonts.googleapis.com/css?family=Lato:400,700|Ubuntu:400,700"
						rel="stylesheet"
					/>
					<meta name="theme-color" content="#ffffff" />
					<meta name="viewport" content="width=device-width, initial-scale=1" />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</html>
		);
	}
}

export default MyDocument;
