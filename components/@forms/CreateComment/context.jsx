import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { MODEL_COMMENT } from "@consts/_models";
import { compose } from "@utils/compose";
import { collectionsInsert } from "@store/actions/collections";
import { parseFormError } from "@utils/parseFormError";
import { withAsyncSetState } from "@HOC/utils/withAsyncSetState";
import * as selectors from "./selectors";
import * as creators from "./creators";
import { isFunction } from "util";

const createCommentFormContext = React.createContext();

class CreateCommentFormProviderClass extends React.PureComponent {
	constructor(props) {
		super(props);

		this.state = {
			temporaryData: {},
			typeErrors: null,
			error: null,
			isHydrating: false
		};

		this.submit = creators.createSubmitFunction(props.postId);
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

	createComment = async () => {
		const { temporaryData } = this.state;
		const { onCreate, insertInCollections } = this.props;

		try {
			await this.asyncSetState({
				isHydrating: true,
				error: null,
				typeErrors: null
			});

			const response = await this.submit(temporaryData);

			await insertInCollections(response.data);

			if (isFunction(onCreate)) {
				await onCreate(response.data);
			}

			await this.asyncSetState({
				isHydrating: false,
				temporaryData: {}
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
		<createCommentFormContext.Provider
			value={{
				...this.state,
				selectors: this.selectors,
				handleTemporaryData: this.handleTemporaryData,
				createComment: this.createComment
			}}
		>
			{this.props.children}
		</createCommentFormContext.Provider>
	);
}

CreateCommentFormProviderClass.propTypes = {
	children: PropTypes.element.isRequired,
	insertInCollections: PropTypes.func.isRequired,
	postId: PropTypes.string.isRequired
};

const mapDispatchToProps = dispatch => ({
	insertInCollections: comment =>
		dispatch(collectionsInsert(MODEL_COMMENT, [comment]))
});

const enhance = compose(
	connect(
		null,
		mapDispatchToProps
	),
	withAsyncSetState
);

export const CreateCommentFormProvider = enhance(
	CreateCommentFormProviderClass
);

export const withCreateCommentFormProvider = Enhanceable => {
	class ComponentWithCreateCommentFormProvider extends React.PureComponent {
		render = () => (
			<CreateCommentFormProvider {...this.props}>
				<Enhanceable {...this.props} />
			</CreateCommentFormProvider>
		);
	}

	return ComponentWithCreateCommentFormProvider;
};

export const withCreateCommentFormContext = mapContextToProps => Enhanceable => {
	class ComponentWithcreateCommentFormContext extends React.PureComponent {
		render = () => (
			<createCommentFormContext.Consumer>
				{context => (
					<Enhanceable {...mapContextToProps(context)} {...this.props} />
				)}
			</createCommentFormContext.Consumer>
		);
	}

	return ComponentWithcreateCommentFormContext;
};
