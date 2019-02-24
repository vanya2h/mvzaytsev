import React from "react";
import PropTypes from "prop-types";
import { compose } from "@utils/compose";
import { connect } from "react-redux";
import Text from "@components/Text";
import Alert from "@components/Alert";
import { selectUserField } from "@store/selectors/user";
import Secret from "./components/Secret";
import SubmitButton from "./components/SubmitButton";
import ResendButton from "./components/ResendButton";
import * as context from "./context";
import styles from "./styles";

class EmailConfirmation extends React.PureComponent {
	render = () => {
		const { errorMessage, email } = this.props;

		return (
			<React.Fragment>
				<Text className="m0">
					На вашу почту <b>{email}</b> было отправлено письмо с кодом
					подтверждения. Прежде, чем вы завершите регистрацию, вам необходимо
					ввести данный код
				</Text>
				<div className="mt1">
					<Secret />
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
						<ResendButton />
					</div>
				</div>
			</React.Fragment>
		);
	};
}

EmailConfirmation.propTypes = {
	email: PropTypes.string.isRequired,
	errorMessage: PropTypes.string
};

EmailConfirmation.defaultProps = {
	errorMessage: null
};

const mapContextToProps = context => ({
	errorMessage: context.selectors.selectErrorMessage(context)
});

const enhance = compose(
	context.withEmailConfirmationFormProvider,
	context.withEmailConfirmationFormContext(mapContextToProps),
	connect(store => ({
		email: selectUserField(store, {
			field: "email"
		})
	}))
);

export default enhance(EmailConfirmation);
