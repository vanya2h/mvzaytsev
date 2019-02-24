import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import cookies from "js-cookie";
import { userAuth } from "@store/actions/user";
import { compose } from "@utils/compose";
import { parseFormError } from "@utils/parseFormError";
import { withAsyncSetState } from "@HOC/utils/withAsyncSetState";
import * as selectors from "./selectors";
import { createSubmitFunction } from "./creators";

const registerFormContext = React.createContext();

class RegisterFormProviderClass extends React.PureComponent {
	constructor(props) {
		super(props);

		this.state = {
			temporaryData: {},
			typeErrors: null,
			error: null,
			isHydrating: false
		};

		this.selectors = selectors;
		this.submit = createSubmitFunction();
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

	register = async () => {
		const { temporaryData } = this.state;
		const { userAuth } = this.props;

		try {
			await this.asyncSetState({
				isHydrating: true,
				error: null
			});

			const response = await this.submit(temporaryData);

			await cookies.set("x-access-token", response.data.token);

			await userAuth(response.data.user);
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

	render = () => (
		<registerFormContext.Provider
			value={{
				...this.state,
				selectors: this.selectors,
				handleTemporaryData: this.handleTemporaryData,
				register: this.register
			}}
		>
			{this.props.children}
		</registerFormContext.Provider>
	);
}

RegisterFormProviderClass.propTypes = {
	children: PropTypes.element.isRequired,
	userAuth: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
	userAuth: (user, token) => dispatch(userAuth(user, token))
});

const enhance = compose(
	connect(
		null,
		mapDispatchToProps
	),
	withAsyncSetState
);

export const RegisterFormProvider = enhance(RegisterFormProviderClass);

export const withRegisterFormProvider = Enhanceable => {
	class ComponentWithRegisterFormProvider extends React.PureComponent {
		render = () => (
			<RegisterFormProvider {...this.props}>
				<Enhanceable {...this.props} />
			</RegisterFormProvider>
		);
	}

	return ComponentWithRegisterFormProvider;
};

export const withRegisterFormContext = mapContextToProps => Enhanceable => {
	class ComponentWithregisterFormContext extends React.PureComponent {
		render = () => (
			<registerFormContext.Consumer>
				{context => (
					<Enhanceable {...mapContextToProps(context)} {...this.props} />
				)}
			</registerFormContext.Consumer>
		);
	}

	return ComponentWithregisterFormContext;
};
