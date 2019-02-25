import React from "react";
import PropTypes from "prop-types";
import Button from "@components/Button";
import { compose } from "@utils/compose";
import { withCreateCommentFormContext } from "../../context";

class SubmitButton extends React.PureComponent {
	render = () => {
		const { createComment, isHydrating } = this.props;
		return (
			<Button primary loading={isHydrating} onClick={createComment}>
				Отправить комментарий
			</Button>
		);
	};
}

SubmitButton.propTypes = {
	createComment: PropTypes.func.isRequired,
	isHydrating: PropTypes.bool.isRequired
};

const enhance = compose(
	withCreateCommentFormContext(context => ({
		createComment: context.createComment,
		isHydrating: context.isHydrating
	}))
);

export default enhance(SubmitButton);
