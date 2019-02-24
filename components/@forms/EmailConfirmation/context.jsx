import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { MODEL_USER } from "@consts/_models";
import { compose } from "@utils/compose";
import { collectionsUpdate } from "@store/actions/collections";
import { selectUserField, selectUserId } from "@store/selectors/user";
import { parseFormError } from "@utils/parseFormError";
import { withAsyncSetState } from "@HOC/utils/withAsyncSetState";
import * as selectors from "./selectors";
import * as creators from "./creators";

const emailConfirmationFormContext = React.createContext();

class EmailConfirmationFormProviderClass extends React.PureComponent {
	constructor(props) {
		super(props);

		this.state = {
			temporaryData: {},
			typeErrors: null,
			error: null,
			isHydrating: false
		};

		this.submit = creators.createSubmitFunction(props.userId);
		this.resend = creators.createSendEmail(props.email);
		this.selectors = selectors;
	}

	handleTemporaryData = async data => {
		await this.asyncSetState(state => ({
			temporaryData: {
				...state.temporaryData,
				...data
			}
		}));

		return Promise.resolve(this.state.data);
	};

	confirm = async () => {
		const { temporaryData } = this.state;
		const { updateUser, userId } = this.props;

		try {
			await this.asyncSetState({
				isHydrating: true,
				error: null
			});

			const response = await this.submit(temporaryData);

			await updateUser(userId, response.data);

			await this.asyncSetState({
				isHydrating: false
			});

			return Promise.resolve(true);
		} catch (reason) {
			const [error, typeErrors] = parseFormError(reason);

			await this.asyncSetState({
				isHydrating: false,
				typeErrors,
				error
			});

			return Promise.reject(reason);
		}
	};

	sendEmail = async () => {
		const { updateUser, userId } = this.props;

		try {
			await this.asyncSetState({
				isHydrating: true,
				error: null
			});

			const response = await this.resend();

			await updateUser(userId, response.data);

			await this.asyncSetState({
				isHydrating: false
			});

			return Promise.resolve(response.data);
		} catch (reason) {
			const [error, typeErrors] = parseFormError(reason);

			await this.asyncSetState({
				error,
				typeErrors,
				isHydrating: false
			});

			return Promise.reject(reason);
		}
	};

	render = () => (
		<emailConfirmationFormContext.Provider
			value={{
				...this.state,
				selectors: this.selectors,
				handleTemporaryData: this.handleTemporaryData,
				confirm: this.confirm,
				sendEmail: this.sendEmail
			}}
		>
			{this.props.children}
		</emailConfirmationFormContext.Provider>
	);
}

EmailConfirmationFormProviderClass.propTypes = {
	children: PropTypes.element.isRequired,
	updateUser: PropTypes.func.isRequired,
	email: PropTypes.string.isRequired,
	userId: PropTypes.string.isRequired
};

const mapStateToProps = store => ({
	email: selectUserField(store, {
		field: "email"
	}),
	userId: selectUserId(store)
});

const mapDispatchToProps = dispatch => ({
	updateUser: (userId, data) =>
		dispatch(collectionsUpdate(MODEL_USER, userId, data))
});

const enhance = compose(
	connect(
		mapStateToProps,
		mapDispatchToProps
	),
	withAsyncSetState
);

export const EmailConfirmationFormProvider = enhance(
	EmailConfirmationFormProviderClass
);

export const withEmailConfirmationFormProvider = Enhanceable => {
	class ComponentWithEmailConfirmationFormProvider extends React.PureComponent {
		render = () => (
			<EmailConfirmationFormProvider {...this.props}>
				<Enhanceable {...this.props} />
			</EmailConfirmationFormProvider>
		);
	}

	return ComponentWithEmailConfirmationFormProvider;
};

export const withEmailConfirmationFormContext = mapContextToProps => Enhanceable => {
	class ComponentWithemailConfirmationFormContext extends React.PureComponent {
		render = () => (
			<emailConfirmationFormContext.Consumer>
				{context => (
					<Enhanceable {...mapContextToProps(context)} {...this.props} />
				)}
			</emailConfirmationFormContext.Consumer>
		);
	}

	return ComponentWithemailConfirmationFormContext;
};
