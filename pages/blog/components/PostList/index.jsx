import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "next/router";
import compose from "@utils/compose";
import { MODEL_POST } from "@consts/_models";
import SmallContainer from "@components/SmallContainer";
import Text from "@components/Text";
import * as entityList from "@providers/entityList";
import PostListView from "@components/@views/Post/PostList";
import PostResolver from "@components/@resolvers/Post";
import styles from "./styles";
import { createLoadMoreFunction } from "./creators";
import PostSkeleton from "./components/PostSkeleton";

class PostList extends React.Component {
	componentDidUpdate = prevProps => {
		const { postIds, router } = this.props;

		if (
			postIds !== null &&
			prevProps.postIds === null &&
			!router.query.postId
		) {
			router.push(`/blog/${postIds[0]}`);
		}
	};

	render = () => {
		const {
			postIds,
			loadMore,
			router,
			isHydrating,
			isOverflowed,
			error
		} = this.props;

		if (error) {
			return (
				<SmallContainer>
					<Text>
						😑 В данный момент не удаётся загрузить последние посты из блога.
						Попробуйте позже
					</Text>
				</SmallContainer>
			);
		}

		if (!postIds) {
			return (
				<div className="flex flex-column">
					{Array(5).fill(
						<div className={styles.item}>
							<PostSkeleton />
						</div>
					)}
				</div>
			);
		}

		return (
			<div className="flex flex-column">
				{postIds.map((postId, index) => (
					<div key={index} className={styles.item}>
						<PostResolver post={postId}>
							{post => (
								<PostListView
									active={postId === router.query.postId}
									post={post}
								/>
							)}
						</PostResolver>
					</div>
				))}
				{!isOverflowed && (
					<div className="mt2">
						{!isHydrating ? (
							<a onClick={loadMore}>Загрузить ещё</a>
						) : (
							<span>Подождите..</span>
						)}
					</div>
				)}
			</div>
		);
	};
}

PostList.propTypes = {
	loadMore: PropTypes.func.isRequired,
	router: PropTypes.any.isRequired,
	isHydrating: PropTypes.bool.isRequired,
	error: PropTypes.object,
	isOverflowed: PropTypes.bool.isRequired,
	postIds: PropTypes.array
};

PostList.defaultProps = {
	error: null,
	postIds: null
};

const enhance = compose(
	withRouter,
	entityList.withEntityListProvider(() => ({
		loadMore: createLoadMoreFunction(),
		id: "posts-blog",
		model: MODEL_POST
	})),
	entityList.withEntityListContext(context => ({
		isHydrating: context.isHydrating,
		isOverflowed: context.isOverflowed,
		postIds: context.entityIds,
		loadMore: context.loadMore,
		error: context.error
	}))
);

export default enhance(PostList);
