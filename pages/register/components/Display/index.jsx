import React from "react";
import PropTypes from "prop-types";
import { compose } from "@utils/compose";
import { connect } from "react-redux";
import * as selectors from "@store/selectors/user";
import RegisterForm from "@components/@forms/RegisterForm";
import EmailConfirmation from "@components/@forms/EmailConfirmation";
import Done from "../Done";

class Display extends React.PureComponent {
	render = () => {
		const { isVerified, isAuthed } = this.props;

		if (!isAuthed) {
			return <RegisterForm />;
		}

		if (!isVerified) {
			return <EmailConfirmation />;
		}

		return <Done />;
	};
}

Display.propTypes = {
	isVerified: PropTypes.bool.isRequired,
	isAuthed: PropTypes.bool.isRequired
};

const enhance = compose(
	connect(store => ({
		isVerified: selectors.selectIsVerified(store),
		isAuthed: selectors.selectIsAuthed(store)
	}))
);

export default enhance(Display);
