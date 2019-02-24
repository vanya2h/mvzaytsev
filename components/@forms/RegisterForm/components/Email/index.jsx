import React from "react";
import PropTypes from "prop-types";
import Input from "@components/Input";
import { compose } from "@utils/compose";
import Text from "@components/Text";
import { withRegisterFormContext } from "../../context";
import styles from "./styles";

class Email extends React.PureComponent {
	render = () => {
		const { value, onChange, typeError } = this.props;
		return (
			<React.Fragment>
				<Text bold as="label" htmlFor="login">
					E-mail
				</Text>
				<div className="mt1">
					<Input
						onChange={onChange}
						value={value}
						type="email"
						id="email"
						name="login"
						placeholder="Ваш E-mail адрес"
						fluid
					/>
				</div>
				{typeError && (
					<div className="mt1">
						<Text className={styles.error}>{typeError}</Text>
					</div>
				)}
			</React.Fragment>
		);
	};
}

Email.propTypes = {
	value: PropTypes.string,
	onChange: PropTypes.func.isRequired,
	typeError: PropTypes.string
};

Email.defaultProps = {
	value: null,
	typeError: null
};

const enhance = compose(
	withRegisterFormContext(context => ({
		value: context.selectors.selectTemporaryField(context, {
			field: "email"
		}),
		typeError: context.selectors.selectTypeErrorMessage(context, {
			field: "email"
		}),
		onChange: value =>
			context.handleTemporaryData({
				email: value
			})
	}))
);

export default enhance(Email);
