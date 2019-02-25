import React from "react";
import PropTypes from "prop-types";
import { compose } from "@utils/compose";
import Alert from "@components/Alert";
import Author from "./components/Author";
import SubmitButton from "./components/SubmitButton";
import TextArea from "./components/TextArea";
import * as context from "./context";
import styles from "./styles";

class CreateComment extends React.PureComponent {
	render = () => {
		const { errorMessage } = this.props;

		return (
			<div className={styles.wrapper}>
				<div className={styles.author}>
					<Author />
				</div>
				<div className="mt1">
					<TextArea />
				</div>
				{errorMessage && <Alert error>{errorMessage}</Alert>}
				<div className="mt2">
					<SubmitButton />
				</div>
			</div>
		);
	};
}

CreateComment.propTypes = {
	errorMessage: PropTypes.string
};

CreateComment.defaultProps = {
	errorMessage: null
};

const mapContextToProps = context => ({
	errorMessage: context.selectors.selectErrorMessage(context)
});

const enhance = compose(
	context.withCreateCommentFormProvider,
	context.withCreateCommentFormContext(mapContextToProps)
);

export default enhance(CreateComment);
