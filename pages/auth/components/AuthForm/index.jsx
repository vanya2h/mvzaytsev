import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Text from "@components/Text";
import Alert from "@components/Alert";
import Login from "./components/Login";
import Hello from "./components/Hello";
import Password from "./components/Password";
import AuthButton from "./components/AuthButton";
import { compose } from "@utils/compose";
import { withAuthFormProvider, withAuthFormContext } from "./context";
import { selectIsAuthed } from "@store/selectors/user";

class AuthForm extends React.PureComponent {
	render = () => {
		const { isAuthed, errorMessage } = this.props;

		if (isAuthed) {
			return <Hello />;
		}

		return (
			<React.Fragment>
				<Text className="m0">
					Просто введите логин и пароль, чтобы получить доступ к админке
				</Text>
				<div className="mt2">
					<Login />
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
					<AuthButton />
				</div>
			</React.Fragment>
		);
	};
}

AuthForm.propTypes = {
	isAuthed: PropTypes.bool.isRequired,
	errorMessage: PropTypes.string
};

const mapStoreToProps = store => ({
	isAuthed: selectIsAuthed(store)
});

const enhance = compose(
	connect(mapStoreToProps),
	withAuthFormProvider,
	withAuthFormContext(context => ({
		errorMessage: context.error && context.error.message
	}))
);

export default enhance(AuthForm);
