import React from "react";
import PropTypes from "prop-types";
import Input from "@components/Input";
import { compose } from "@utils/compose";
import Text from "@components/Text";
import { withAuthFormContext } from "../../context";
import styles from "./styles";

class Login extends React.PureComponent {
	render = () => {
		const { value, onChange, typeError } = this.props;
		return (
			<React.Fragment>
				<Text bold as="label" htmlFor="login">
					Логин
				</Text>
				<div className="mt1">
					<Input
						onChange={onChange}
						value={value}
						name="login"
						placeholder="Сюда вводите логин"
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

Login.propTypes = {
	value: PropTypes.string,
	onChange: PropTypes.func.isRequired,
	typeError: PropTypes.string
};

Login.defaultProps = {
	value: null,
	typeError: null
};

const enhance = compose(
	withAuthFormContext(context => ({
		value: context.credentials.login,
		typeError: context.selectTypeError("login"),
		onChange: value =>
			context.handleCredentials({
				login: value
			})
	}))
);

export default enhance(Login);
