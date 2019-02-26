import React from "react";
import PropTypes from "prop-types";
import { compose } from "@utils/compose";
import Alert from "@components/Alert";
import Content from "./components/Content";
import CreatedAt from "./components/CreatedAt";
import SubmitButton from "./components/SubmitButton";
import * as context from "./context";

class UpdateComment extends React.PureComponent {
	render = () => {
		const { errorMessage, isUpdated } = this.props;

		return (
			<React.Fragment>
				<div className="mt1">
					<Content />
				</div>
				<div className="mt1">
					<CreatedAt />
				</div>
				{isUpdated && (
					<div className="mt2">
						<Alert success>
							<React.Fragment>
								🤫 Комментарий успешно обновлён, ура
							</React.Fragment>
						</Alert>
					</div>
				)}
				{errorMessage && (
					<div className="mt2">
						<Alert error>
							<React.Fragment>🤫 {errorMessage}</React.Fragment>
						</Alert>
					</div>
				)}
				<div className="mt2">
					<SubmitButton />
				</div>
			</React.Fragment>
		);
	};
}

UpdateComment.propTypes = {
	errorMessage: PropTypes.string,
	isUpdated: PropTypes.bool.isRequired
};

UpdateComment.defaultProps = {
	errorMessage: null
};

const mapContextToProps = context => ({
	errorMessage: context.selectors.selectErrorMessage(context),
	isUpdated: context.isUpdated
});

const enhance = compose(
	context.withUpdateCommentFormProvider,
	context.withUpdateCommentFormContext(mapContextToProps)
);

export default enhance(UpdateComment);
