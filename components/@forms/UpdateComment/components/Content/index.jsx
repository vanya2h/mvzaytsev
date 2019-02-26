import React from "react";
import PropTypes from "prop-types";
import TextArea from "@components/TextArea";
import { compose } from "@utils/compose";
import Text from "@components/Text";
import { withUpdateCommentFormContext } from "../../context";
import styles from "./styles";

class Content extends React.PureComponent {
	render = () => {
		const { value, onChange, typeError } = this.props;
		return (
			<React.Fragment>
				<Text bold as="label" htmlFor="content">
					Контент комментария
				</Text>
				<div className="mt1">
					<TextArea
						onChange={onChange}
						value={value}
						type="text"
						id="content"
						name="content"
						placeholder="Введите новое содержимое для комментария"
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

Content.propTypes = {
	value: PropTypes.string,
	onChange: PropTypes.func.isRequired,
	typeError: PropTypes.string
};

Content.defaultProps = {
	value: null,
	typeError: null
};

const enhance = compose(
	withUpdateCommentFormContext(context => ({
		value: context.selectors.selectField(context, {
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

export default enhance(Content);
