import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withAsyncSetState } from "@HOC/utils/withAsyncSetState";
import { userAuth } from "@store/actions/user";
import { axios } from "@utils/axios";
import { parseFormError } from "@utils/parseFormError";
import cookies from "js-cookie";
import { compose } from "@utils/compose";

export const authFormContext = React.createContext();

class AuthFormProviderClass extends React.PureComponent {
	state = {
		credentials: {},
		error: null,
		isHydrating: false,
		typeErrors: false
	};

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

	makeAuth = () => {
		const { userAuth } = this.props;
		const { credentials } = this.state;

		return this.asyncSetState({
			isHydrating: true,
			error: null
		})
			.then(() => axios.post("/user/signin", credentials))
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
					makeAuth: this.makeAuth,
					selectTypeError: this.selectTypeError
				}}
			>
				{this.props.children}
			</authFormContext.Provider>
		);
	};
}

AuthFormProviderClass.propTypes = {
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

export const AuthFormProvider = enhance(AuthFormProviderClass);

export const withAuthFormProvider = Enhanceable => {
	const ComponentWithAuthFormProvider = props => (
		<AuthFormProvider {...props}>
			<Enhanceable {...props} />
		</AuthFormProvider>
	);

	return ComponentWithAuthFormProvider;
};

export const withAuthFormContext = mapContextToProps => Enhanceable => {
	const ComponentWithAuthFormContext = props => (
		<authFormContext.Consumer>
			{context => <Enhanceable {...mapContextToProps(context)} {...props} />}
		</authFormContext.Consumer>
	);

	return ComponentWithAuthFormContext;
};
