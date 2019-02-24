import React from "react";
import PropTypes from "prop-types";
import moment from "moment";
import Button from "@components/Button";
import { connect } from "react-redux";
import { compose } from "@utils/compose";
import { selectUserField } from "@store/selectors/user";
import { withEmailConfirmationFormContext } from "../../context";

class ResendButton extends React.PureComponent {
	constructor(props) {
		super(props);

		this.state = {
			remaining: 0
		};

		this.interval = null;
	}

	componentDidMount = () => {
		this.startTimerIfNeeded();
	};

	componentDidUpdate = prevProps => {
		const { emailSendedAt } = this.props;

		if (emailSendedAt !== prevProps.emailSendedAt) {
			this.startTimerIfNeeded();
		}
	};

	startTimerIfNeeded = () => {
		const { emailSendedAt } = this.props;

		const difference = moment().diff(moment(emailSendedAt), "seconds");

		if (difference < 60) {
			this.setState(
				{
					remaining: 60 - difference
				},
				() => {
					this.interval = setInterval(this.nextTick, 1000);
				}
			);
		}
	};

	nextTick = () => {
		const { remaining } = this.state;

		if (remaining > 0) {
			return this.setState(state => ({
				remaining: state.remaining - 1
			}));
		}

		return clearInterval(this.interval);
	};

	mayUserSend = () => {
		const { emailSendedAt } = this.props;

		const difference = moment().diff(moment(emailSendedAt), "seconds");

		return difference > 60;
	};

	render = () => {
		const { sendEmail, isHydrating } = this.props;
		const { remaining } = this.state;

		return (
			<Button
				primary
				disabled={remaining > 0}
				loading={isHydrating}
				onClick={sendEmail}
			>
				{remaining > 0 ? `Подождите ${remaining}` : "Отправить ещё"}
			</Button>
		);
	};
}

ResendButton.propTypes = {
	emailSendedAt: PropTypes.func.isRequired,
	isHydrating: PropTypes.bool.isRequired,
	sendEmail: PropTypes.bool.isRequired
};

const enhance = compose(
	withEmailConfirmationFormContext(context => ({
		isHydrating: context.isHydrating,
		sendEmail: context.sendEmail
	})),
	connect(store => ({
		emailSendedAt: selectUserField(store, {
			field: "emailSendedAt"
		})
	}))
);

export default enhance(ResendButton);
