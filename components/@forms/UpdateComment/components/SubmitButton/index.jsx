import React from "react";
import PropTypes from "prop-types";
import Button from "@components/Button";
import { compose } from "@utils/compose";
import { withUpdateCommentFormContext } from "../../context";

class SubmitButton extends React.PureComponent {
	render = () => {
		const { update, isHydrating } = this.props;

		return (
			<Button primary loading={isHydrating} onClick={update}>
				Обновить
			</Button>
		);
	};
}

SubmitButton.propTypes = {
	update: PropTypes.func.isRequired,
	isHydrating: PropTypes.bool.isRequired
};

const enhance = compose(
	withUpdateCommentFormContext(context => ({
		update: context.update,
		isHydrating: context.isHydrating
	}))
);

export default enhance(SubmitButton);
