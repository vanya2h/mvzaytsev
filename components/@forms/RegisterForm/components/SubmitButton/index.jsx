import React from "react";
import PropTypes from "prop-types";
import Button from "@components/Button";
import { compose } from "@utils/compose";
import { withRegisterFormContext } from "../../context";

class SubmitButton extends React.PureComponent {
	render = () => {
		const { register, isHydrating } = this.props;
		return (
			<Button primary loading={isHydrating} onClick={register}>
				Готово
			</Button>
		);
	};
}

SubmitButton.propTypes = {
	register: PropTypes.func.isRequired,
	isHydrating: PropTypes.bool.isRequired
};

const enhance = compose(
	withRegisterFormContext(context => ({
		register: context.register,
		isHydrating: context.isHydrating
	}))
);

export default enhance(SubmitButton);
