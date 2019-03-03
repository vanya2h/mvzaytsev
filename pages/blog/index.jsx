import React from "react";
import Head from "next/head";
import PropTypes from "prop-types";
import Display from "./components/Display";
import styles from "./styles";

class BlogPage extends React.Component {
	static async getInitialProps(req) {
		return {
			postId: req.query.postId
		};
	}

	render = () => {
		const { postId } = this.props;

		return (
			<div className={styles.authPage}>
				<Head>
					<title>Мой персональный блог - Максим Зайцев</title>
				</Head>
				<Display key={postId} postId={postId} />
			</div>
		);
	};
}

BlogPage.propTypes = {
	postId: PropTypes.string
};

export default BlogPage;
