import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "next/router";
import Heading from "@components/Heading";
import PostResolver from "@components/@resolvers/Post";
import PostSingle from "@components/@views/Post/PostSingle";
import Text from "@components/Text";
import CommentList from "../CommentList";
import PostSkeleton from "./components/PostSkeleton";
import PostList from "../PostList";
import styles from "./styles";

class Display extends React.Component {
	render = () => {
		const { postId } = this.props.router.query;

		return (
			<div className={styles.layout}>
				<div className={styles.main}>
					{postId && (
						<PostResolver
							key={postId}
							skeleton={<PostSkeleton />}
							post={postId}
						>
							{post => <PostSingle key={postId} post={post} />}
						</PostResolver>
					)}
					<div className="mt3">
						{postId && <CommentList key={postId} postId={postId} />}
					</div>
				</div>
				<div className={styles.aside}>
					<Heading size={3}>Публикации</Heading>
					<Text relaxed>Все мои записи в хронологическом порядке</Text>
					<div className="mt2">
						<PostList />
					</div>
				</div>
			</div>
		);
	};
}

Display.propTypes = {
	router: PropTypes.any.isRequired
};

export default withRouter(Display);
