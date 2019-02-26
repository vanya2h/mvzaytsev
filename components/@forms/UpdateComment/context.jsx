import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { collectionsUpdate } from "@store/actions/collections";
import { MODEL_COMMENT } from "@consts/_models";
import { compose } from "@utils/compose";
import { withEntity } from "@HOC/utils/withEntity";
import { parseFormError } from "@utils/parseFormError";
import { withAsyncSetState } from "@HOC/utils/withAsyncSetState";
import * as selectors from "./selectors";
import { createSubmitFunction } from "./creators";

const updateCommentFormContext = React.createContext();

class UpdateCommentFormProviderClass extends React.PureComponent {
	constructor(props) {
		super(props);

		this.state = {
			temporaryData: {},
			typeErrors: null,
			isUpdated: false,
			error: null,
			isHydrating: false
		};

		this.selectors = selectors;
		this.submit = createSubmitFunction(props.commentId);
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

	update = async () => {
		const { temporaryData } = this.state;
		const { updateComment } = this.props;

		try {
			await this.asyncSetState({
				isHydrating: true,
				error: null
			});

			const response = await this.submit(temporaryData);

			await updateComment(response.data);

			await this.asyncSetState({
				isHydrating: false,
				isUpdated: true
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
		<updateCommentFormContext.Provider
			value={{
				...this.state,
				selectors: this.selectors,
				handleTemporaryData: this.handleTemporaryData,
				comment: this.props.comment,
				update: this.update
			}}
		>
			{this.props.children}
		</updateCommentFormContext.Provider>
	);
}

UpdateCommentFormProviderClass.propTypes = {
	children: PropTypes.element.isRequired,
	updateComment: PropTypes.func.isRequired,
	commentId: PropTypes.string.isRequired,
	comment: PropTypes.object.isRequired
};

const mapDispatchToProps = (dispatch, ownProps) => ({
	updateComment: data =>
		dispatch(collectionsUpdate(MODEL_COMMENT, ownProps.commentId, data))
});

const enhance = compose(
	withEntity(props => ({
		model: MODEL_COMMENT,
		entity: props.commentId
	}))(comment => ({
		comment
	})),
	connect(
		null,
		mapDispatchToProps
	),
	withAsyncSetState
);

export const UpdateCommentFormProvider = enhance(
	UpdateCommentFormProviderClass
);

export const withUpdateCommentFormProvider = Enhanceable => {
	class ComponentWithUpdateCommentFormProvider extends React.PureComponent {
		render = () => (
			<UpdateCommentFormProvider {...this.props}>
				<Enhanceable {...this.props} />
			</UpdateCommentFormProvider>
		);
	}

	return ComponentWithUpdateCommentFormProvider;
};

export const withUpdateCommentFormContext = mapContextToProps => Enhanceable => {
	class ComponentWithUpdateCommentFormContext extends React.PureComponent {
		render = () => (
			<updateCommentFormContext.Consumer>
				{context => (
					<Enhanceable {...mapContextToProps(context)} {...this.props} />
				)}
			</updateCommentFormContext.Consumer>
		);
	}

	return ComponentWithUpdateCommentFormContext;
};
