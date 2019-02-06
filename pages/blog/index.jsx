import React from "react";
import Head from "next/head";
import PostList from "./components/PostList";
import styles from "./styles";

const BlogPage = () => (
	<div className={styles.authPage}>
		<Head>
			<title>Мой персональный блог - Максим Зайцев</title>
		</Head>
		<div className="mt3">
			<PostList />
		</div>
	</div>
);

BlogPage.hero = {
	title: "Мой блог",
	description: "В этом разделе я пишу о своей жизни, жизни своего класса"
};

export default BlogPage;
