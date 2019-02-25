import React from "react";
import PropTypes from "prop-types";
import { MODEL_POST } from "@consts/_models";
import { compose } from "@utils/compose";
import { axios } from "@utils/axios";
import { resolveEntityId } from "@utils/resolveEntityId";
import { withEntity } from "@HOC/utils/withEntity";

class PostResolver extends React.PureComponent {
	render = () => {
		const { post, children, skeleton } = this.props;

		if (!post) return skeleton;

		return children(post);
	};
}

PostResolver.propTypes = {
	post: PropTypes.object,
	skeleton: PropTypes.any,
	children: PropTypes.func.isRequired
};

PostResolver.defaultProps = {
	skeleton: null
};

const mapEntityContext = post => ({
	post
});

const mapPropsToOptions = props => ({
	entity: props.post,
	model: MODEL_POST,
	loadEntity: () =>
		axios.get("/post/entry", {
			params: {
				postId: resolveEntityId(props.post)
			}
		})
});

const enhance = compose(withEntity(mapPropsToOptions)(mapEntityContext));

export default enhance(PostResolver);
