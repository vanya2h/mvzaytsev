import React from "react";
import PropTypes from "prop-types";
import { MODEL_ATTACHMENT } from "@consts/_models";
import { compose } from "@utils/compose";
import { axios } from "@utils/axios";
import { resolveEntityId } from "@utils/resolveEntityId";
import { withEntity } from "@HOC/utils/withEntity";

class AttachmentResolver extends React.PureComponent {
	render = () => {
		const { attachment, children } = this.props;

		if (!attachment) {
			return null;
		}

		return children(attachment);
	};
}

AttachmentResolver.propTypes = {
	attachment: PropTypes.object,
	children: PropTypes.func.isRequired
};

const mapEntityContext = attachment => ({
	attachment
});

const mapPropsToOptions = props => ({
	entity: props.attachment,
	model: MODEL_ATTACHMENT,
	loadEntity: () =>
		axios.get("/attachment/entry", {
			params: {
				attachmentId: resolveEntityId(props.attachment)
			}
		})
});

const enhance = compose(withEntity(mapPropsToOptions)(mapEntityContext));

export default enhance(AttachmentResolver);
