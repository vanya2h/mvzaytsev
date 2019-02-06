import React from "react";
import PropTypes from "prop-types";
import Button from "@components/Button";
import { compose } from "@utils/compose";
import { withAuthFormContext } from "../../context";

class AuthButton extends React.PureComponent {
	render = () => {
		const { makeAuth, isHydrating } = this.props;
		return (
			<Button primary loading={isHydrating} onClick={makeAuth}>
				Поехали!
			</Button>
		);
	};
}

AuthButton.propTypes = {
	makeAuth: PropTypes.func.isRequired,
	isHydrating: PropTypes.bool.isRequired
};

const enhance = compose(
	withAuthFormContext(context => ({
		makeAuth: context.makeAuth,
		isHydrating: context.isHydrating
	}))
);

export default enhance(AuthButton);
