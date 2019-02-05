import React from "react";
import PropTypes from "prop-types";
import compose from "@utils/compose";
import { connect } from "react-redux";
import Loader from "@components/Loader";
import SmallContainer from "@components/SmallContainer";
import { fetchBlogs } from "@store/actions/indexPage";
import Text from "@components/Text";
import Blog from "@components/@views/Blog";

class BlogList extends React.PureComponent {
	componentDidMount = () => {
		const { blogsIds, fetchBlogs } = this.props;

		if (!blogsIds) {
			fetchBlogs();
		}
	};

	render = () => {
		const { blogsIds, isHydrating, hasError } = this.props;

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

		if (isHydrating || !blogsIds) {
			return (
				<SmallContainer>
					<Loader centered />
				</SmallContainer>
			);
		}

		return (
			<div className="flex flex-column">
				{blogsIds.map((id, index) => (
					<Blog key={index} blog={id} />
				))}
			</div>
		);
	};
}

BlogList.propTypes = {
	blogsIds: PropTypes.array,
	isHydrating: PropTypes.bool,
	hasError: PropTypes.bool,
	fetchBlogs: PropTypes.func.isRequired
};

BlogList.defaultProps = {
	blogsIds: null,
	isHydrating: false,
	hasError: false
};

const mapStoreToProps = store =>
	console.log(store) || {
		blogsIds: store.indexPage.blogs.blogsIds,
		isHydrating: store.indexPage.blogs.isHydrating,
		hasError: store.indexPage.blogs.hasError
	};

const mapDispatchToProps = dispatch => ({
	fetchBlogs: () => dispatch(fetchBlogs())
});

const enhance = compose(
	connect(
		mapStoreToProps,
		mapDispatchToProps
	)
);

export default enhance(BlogList);
