import React from "react";
import PropTypes from "prop-types";
import cookies from "js-cookie";
import { connect } from "react-redux";
import { withAsyncSetState } from "@HOC/utils/withAsyncSetState";
import { userAuth } from "@store/actions/user";
import { collectionsInsert } from "@store/actions/collections";
import { parseFormError } from "@utils/parseFormError";
import { compose } from "@utils/compose";
import { createAuthFunction } from "./creators";
import * as selectors from "./selectors";

export const authFormContext = React.createContext();

class AuthFormProviderClass extends React.PureComponent {
	constructor(props) {
		super(props);

		this.auth = createAuthFunction();

		this.state = {
			temporaryData: {},
			error: null,
			isHydrating: false,
			typeErrors: false
		};

		this.selectors = selectors;
	}

	handleCredentials = data => {
		return this.asyncSetState(state => ({
			temporaryData: {
				...state.temporaryData,
				...data
			}
		}));
	};

	makeAuth = async () => {
		const { userAuth, insertUserInCollections } = this.props;
		const { temporaryData } = this.state;

		try {
			await this.asyncSetState({
				isHydrating: true,
				error: null
			});

			const response = await this.auth(temporaryData);

			await cookies.set("x-access-token", response.data.token);
			await insertUserInCollections(response.data.user);
			await userAuth(response.data.user, response.data.token);

			await this.asyncSetState({
				isHydrating: false
			});
		} catch (reason) {
			const [error, typeErrors] = parseFormError(reason);

			await this.asyncSetState({
				isHydrating: false,
				error,
				typeErrors
			});

			return Promise.reject(reason);
		}
	};

	render = () => {
		return (
			<authFormContext.Provider
				value={{
					...this.state,
					handleCredentials: this.handleCredentials,
					makeAuth: this.makeAuth,
					selectors: this.selectors
				}}
			>
				{this.props.children}
			</authFormContext.Provider>
		);
	};
}

AuthFormProviderClass.propTypes = {
	children: PropTypes.element.isRequired,
	userAuth: PropTypes.func.isRequired,
	insertUserInCollections: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
	userAuth: (user, token) => dispatch(userAuth(user, token)),
	insertUserInCollections: user => dispatch(collectionsInsert("User", [user]))
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
