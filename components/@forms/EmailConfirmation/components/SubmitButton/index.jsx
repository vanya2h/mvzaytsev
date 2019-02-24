import React from "react";
import PropTypes from "prop-types";
import Button from "@components/Button";
import { compose } from "@utils/compose";
import { withEmailConfirmationFormContext } from "../../context";

class SubmitButton extends React.PureComponent {
	render = () => {
		const { confirm, isHydrating } = this.props;
		return (
			<Button primary loading={isHydrating} onClick={confirm}>
				Готово
			</Button>
		);
	};
}

SubmitButton.propTypes = {
	confirm: PropTypes.func.isRequired,
	isHydrating: PropTypes.bool.isRequired
};

const enhance = compose(
	withEmailConfirmationFormContext(context => ({
		confirm: context.confirm,
		isHydrating: context.isHydrating
	}))
);

export default enhance(SubmitButton);
