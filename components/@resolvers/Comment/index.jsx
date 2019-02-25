import React from "react";
import PropTypes from "prop-types";
import { MODEL_COMMENT } from "@consts/_models";
import { compose } from "@utils/compose";
import { axios } from "@utils/axios";
import { resolveEntityId } from "@utils/resolveEntityId";
import { withEntity } from "@HOC/utils/withEntity";

class CommentResolver extends React.PureComponent {
	render = () => {
		const { comment, children } = this.props;

		if (!comment) {
			return null;
		}

		return children(comment);
	};
}

CommentResolver.propTypes = {
	comment: PropTypes.object,
	children: PropTypes.func.isRequired
};

const mapEntityContext = comment => ({
	comment
});

const mapPropsToOptions = props => ({
	entity: props.comment,
	model: MODEL_COMMENT,
	loadEntity: () =>
		axios.get("/comment/entry", {
			params: {
				commentId: resolveEntityId(props.comment)
			}
		})
});

const enhance = compose(withEntity(mapPropsToOptions)(mapEntityContext));

export default enhance(CommentResolver);
