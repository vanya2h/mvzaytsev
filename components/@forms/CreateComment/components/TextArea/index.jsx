import React from "react";
import PropTypes from "prop-types";
import TextArea from "@components/TextArea";
import { compose } from "@utils/compose";
import Text from "@components/Text";
import { withCreateCommentFormContext } from "../../context";
import styles from "./styles";

class TextAreaWrapper extends React.PureComponent {
	render = () => {
		const { value, onChange, typeError } = this.props;

		return (
			<React.Fragment>
				<div className="mt1">
					<TextArea
						onChange={onChange}
						value={value || ""}
						id="content"
						name="content"
						className={styles.textarea}
						placeholder="Ваш комментарий к посту.."
						fluid
					/>
				</div>
				{typeError && (
					<div className="mt1">
						<Text className={styles.error}>{typeError}</Text>
					</div>
				)}
			</React.Fragment>
		);
	};
}

TextAreaWrapper.propTypes = {
	value: PropTypes.string,
	onChange: PropTypes.func.isRequired,
	typeError: PropTypes.string
};

TextAreaWrapper.defaultProps = {
	value: null,
	typeError: null
};

const enhance = compose(
	withCreateCommentFormContext(context => ({
		value: context.selectors.selectTemporaryField(context, {
			field: "content"
		}),
		typeError: context.selectors.selectTypeErrorMessage(context, {
			field: "content"
		}),
		onChange: value =>
			context.handleTemporaryData({
				content: value
			})
	}))
);

export default enhance(TextAreaWrapper);
