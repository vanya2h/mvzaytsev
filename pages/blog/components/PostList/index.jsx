import React from "react";
import PropTypes from "prop-types";
import compose from "@utils/compose";
import { connect } from "react-redux";
import Loader from "@components/Loader";
import Button from "@components/Button";
import SmallContainer from "@components/SmallContainer";
import { fetchPosts } from "@store/actions/indexPage";
import Text from "@components/Text";
import Post from "@components/@views/Post";
import styles from "./styles";

class PostList extends React.PureComponent {
	componentDidMount = () => {
		const { postsIds, fetchPosts } = this.props;

		if (!postsIds) {
			fetchPosts();
		}
	};

	render = () => {
		const {
			postsIds,
			fetchPosts,
			isOverflow,
			isHydrating,
			hasError
		} = this.props;

		if (hasError) {
			return (
				<SmallContainer>
					<Text>
						😑 В данный момент не удаётся загрузить последние посты из блога.
						Попробуйте позже
					</Text>
				</SmallContainer>
			);
		}

		if (!postsIds) {
			return (
				<SmallContainer>
					<Loader centered />
				</SmallContainer>
			);
		}

		return (
			<div className="flex flex-column">
				{postsIds.map((id, index) => (
					<div key={index} className={styles.item}>
						<Post postId={id} />
					</div>
				))}
				{!isOverflow && (
					<div
						style={{
							textAlign: "center"
						}}
						className="mt2"
					>
						<Button loading={isHydrating} onClick={fetchPosts} primary>
							Подгрузить ещё 10 постов
						</Button>
					</div>
				)}
			</div>
		);
	};
}

PostList.propTypes = {
	postsIds: PropTypes.array,
	isHydrating: PropTypes.bool,
	hasError: PropTypes.bool,
	isOverflow: PropTypes.bool.isRequired,
	fetchPosts: PropTypes.func.isRequired
};

PostList.defaultProps = {
	postsIds: null,
	isHydrating: false,
	hasError: false
};

const mapStoreToProps = store =>
	console.log(store) || {
		postsIds: store.indexPage.posts.postsIds,
		isHydrating: store.indexPage.posts.isHydrating,
		hasError: store.indexPage.posts.hasError,
		isOverflow: store.indexPage.posts.isOverflow
	};

const mapDispatchToProps = dispatch => ({
	fetchPosts: () => dispatch(fetchPosts())
});

const enhance = compose(
	connect(
		mapStoreToProps,
		mapDispatchToProps
	)
);

export default enhance(PostList);
