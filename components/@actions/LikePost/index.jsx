import React from "react";
import { withRouter } from "next/router";
import PropTypes from "prop-types";
import * as userSelectors from "@store/selectors/user";
import { connect } from "react-redux";
import { collectionsUpdate } from "@store/actions/collections";
import { withAsyncSetState } from "@HOC/utils/withAsyncSetState";
import PostResolver from "@components/@resolvers/Post";
import { MODEL_POST } from "@consts/_models";
import { compose } from "@utils/compose";
import { parseError } from "@utils/parseError";
import { createLikeFunction } from "./creators";

class LikePost extends React.PureComponent {
	constructor(props) {
		super(props);

		this.state = {
			isHydrating: false,
			error: null
		};
	}

	toggle = async () => {
		const { updatePost, postId, userId, router } = this.props;

		if (!userId) {
			return router.push("/auth");
		}

		try {
			await this.asyncSetState({
				isHydrating: true,
				error: null
			});

			const response = await createLikeFunction(postId)();

			await updatePost(response.data);

			await this.asyncSetState({
				isHydrating: false
			});

			return Promise.resolve(true);
		} catch (reason) {
			const error = parseError();

			await this.asyncSetState({
				error,
				isHydrating: false
			});

			return Promise.reject(reason);
		}
	};
	render = () => {
		const { children, isLiked, likesCount } = this.props;

		return children({
			isLiked,
			likesCount,
			toggle: this.toggle
		});
	};
}

LikePost.propTypes = {
	children: PropTypes.func.isRequired,
	isLiked: PropTypes.bool,
	userId: PropTypes.string,
	postId: PropTypes.string.isRequired,
	router: PropTypes.any.isRequired,
	likesCount: PropTypes.number,
	updatePost: PropTypes.func.isRequired
};

LikePost.defaultProps = {
	likesCount: 0,
	userId: null,
	isLiked: false
};

const withResolver = Enhanceable => {
	class LikeWithPostResolver extends React.PureComponent {
		render = () => {
			const { postId, userId } = this.props;

			return (
				<PostResolver post={postId}>
					{post => (
						<Enhanceable
							likesCount={post.likes.length}
							isLiked={post.likes.indexOf(userId) !== -1}
							{...this.props}
						/>
					)}
				</PostResolver>
			);
		};
	}

	return LikeWithPostResolver;
};

const attachUserId = store => ({
	userId: userSelectors.selectUserId(store)
});

const attachUpdatePostFunction = (dispatch, ownProps) => ({
	updatePost: nextPost =>
		dispatch(collectionsUpdate(MODEL_POST, ownProps.postId, nextPost))
});

const enhance = compose(
	connect(attachUserId),
	withResolver,
	connect(
		null,
		attachUpdatePostFunction
	),
	withRouter,
	withAsyncSetState
);

export default enhance(LikePost);
