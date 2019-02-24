import React from "react";
import PropTypes from "prop-types";
import { compose } from "@utils/compose";
import Text from "@components/Text";
import Alert from "@components/Alert";
import Email from "./components/Email";
import Name from "./components/Name";
import Password from "./components/Password";
import RepeatPassword from "./components/RepeatPassword";
import SubmitButton from "./components/SubmitButton";
import LoginButton from "./components/LoginButton";
import * as context from "./context";
import styles from "./styles";

class RegisterForm extends React.PureComponent {
	render = () => {
		const { errorMessage } = this.props;

		return (
			<React.Fragment>
				<Text className="m0">
					Зарегистрируйтесь в системе, чтобы вы смогли лайкать записи и писать
					комментарии
				</Text>
				<div className="mt1">
					<Email />
				</div>
				<div className="mt1">
					<Name />
				</div>
				<div className="mt1">
					<Password />
				</div>
				<div className="mt1">
					<RepeatPassword />
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
						<SubmitButton />
						<LoginButton />
					</div>
				</div>
			</React.Fragment>
		);
	};
}

RegisterForm.propTypes = {
	errorMessage: PropTypes.string
};

RegisterForm.defaultProps = {
	errorMessage: null
};

const mapContextToProps = context => ({
	errorMessage: context.selectors.selectErrorMessage(context)
});

const enhance = compose(
	context.withRegisterFormProvider,
	context.withRegisterFormContext(mapContextToProps)
);

export default enhance(RegisterForm);
