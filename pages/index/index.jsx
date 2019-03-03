import React from "react";
import HeadComp from "next/head";
import Head from "./components/Head";
import AboutMe from "./components/AboutMe";

const IndexPage = () => (
	<React.Fragment>
		<HeadComp>
			<title>Максим Зайцев - личный сайт</title>
		</HeadComp>
		<AboutMe />
	</React.Fragment>
);

IndexPage.before = <Head />;

export default IndexPage;
