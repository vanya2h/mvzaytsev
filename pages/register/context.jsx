import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withAsyncSetState } from "@HOC/utils/withAsyncSetState";
import { userAuth } from "@store/actions/user";
import { parseFormError } from "@utils/parseFormError";
import cookies from "js-cookie";
import { compose } from "@utils/compose";
import { createSubmitFunction } from "./creators";

export const authFormContext = React.createContext();

class RegisterFormProviderClass extends React.PureComponent {
	constructor(props) {
		super(props);

		this.state = {
			credentials: {},
			error: null,
			isHydrating: false,
			typeErrors: false
		};

		this.submit = createSubmitFunction();
	}

	handleCredentials = data => {
		return this.asyncSetState(state => ({
			credentials: {
				...state.credentials,
				...data
			}
		}));
	};

	selectTypeError = field => {
		const { typeErrors } = this.state;

		return typeErrors && typeErrors[field] && typeErrors[field].msg;
	};

	register = () => {
		const { temporaryData } = this.state;
		const { userAuth } = this.props;

		return this.asyncSetState({
			isHydrating: true,
			error: null
		})
			.then(() => this.submit(temporaryData))
			.then(({ data }) => {
				cookies.set("x-access-token", data.token);
				return userAuth(data.user, data.token);
			})
			.then(() =>
				this.asyncSetState({
					isHydrating: false
				})
			)
			.catch(reason => {
				console.log(reason);
				const [error, typeErrors] = parseFormError(reason);

				return this.asyncSetState({
					isHydrating: false,
					error,
					typeErrors
				});
			});
	};

	render = () => {
		return (
			<authFormContext.Provider
				value={{
					...this.state,
					handleCredentials: this.handleCredentials,
					register: this.register,
					selectTypeError: this.selectTypeError
				}}
			>
				{this.props.children}
			</authFormContext.Provider>
		);
	};
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
	const ComponentWithRegisterFormProvider = props => (
		<RegisterFormProvider {...props}>
			<Enhanceable {...props} />
		</RegisterFormProvider>
	);

	return ComponentWithRegisterFormProvider;
};

export const withRegisterFormContext = mapContextToProps => Enhanceable => {
	const ComponentWithRegisterFormContext = props => (
		<authFormContext.Consumer>
			{context => <Enhanceable {...mapContextToProps(context)} {...props} />}
		</authFormContext.Consumer>
	);

	return ComponentWithRegisterFormContext;
};
