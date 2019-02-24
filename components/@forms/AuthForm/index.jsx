import React from "react";
import PropTypes from "prop-types";
import Text from "@components/Text";
import { compose } from "@utils/compose";
import Alert from "@components/Alert";
import Email from "./components/Email";
import Password from "./components/Password";
import AuthButton from "./components/AuthButton";
import RegisterButton from "./components/RegisterButton";
import * as context from "./context";
import styles from "./styles";

class AuthForm extends React.PureComponent {
	submit = event => {
		const { submit } = this.props;
		event.preventDefault();

		submit();
	};

	render = () => {
		const { errorMessage } = this.props;

		return (
			<form onSubmit={this.submit}>
				<Text className="m0">
					Просто введите логин и пароль, чтобы получить доступ к админке
				</Text>
				<div className="mt2">
					<Email />
				</div>
				<div className="mt2">
					<Password />
				</div>
				{errorMessage && (
					<div className="mt2">
						<Alert error>
							<React.Fragment>🤫 {errorMessage}</React.Fragment>
						</Alert>
					</div>
				)}
				<div className="mt2">
					<div className={styles.buttons}>
						<AuthButton />
						<RegisterButton />
					</div>
				</div>
			</form>
		);
	};
}

AuthForm.propTypes = {
	errorMessage: PropTypes.string,
	submit: PropTypes.func.isRequired
};

const enhance = compose(
	context.withAuthFormProvider,
	context.withAuthFormContext(context => ({
		errorMessage: context.selectors.selectErrorMessage(context),
		submit: context.makeAuth
	}))
);

export default enhance(AuthForm);
