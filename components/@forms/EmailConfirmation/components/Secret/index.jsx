import React from "react";
import PropTypes from "prop-types";
import Input from "@components/Input";
import { compose } from "@utils/compose";
import Text from "@components/Text";
import { withEmailConfirmationFormContext } from "../../context";
import styles from "./styles";

class Secret extends React.PureComponent {
	render = () => {
		const { value, onChange, typeError } = this.props;

		return (
			<React.Fragment>
				<Text bold as="label" htmlFor="login">
					Секретный код
				</Text>
				<div className="mt1">
					<Input
						onChange={onChange}
						value={value}
						id="secret"
						name="login"
						placeholder="Код из 6 символов"
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

Secret.propTypes = {
	value: PropTypes.string,
	onChange: PropTypes.func.isRequired,
	typeError: PropTypes.string
};

Secret.defaultProps = {
	value: null,
	typeError: null
};

const enhance = compose(
	withEmailConfirmationFormContext(context => ({
		value: context.selectors.selectTemporaryField(context, {
			field: "secret"
		}),
		typeError: context.selectors.selectTypeErrorMessage(context, {
			field: "secret"
		}),
		onChange: value =>
			context.handleTemporaryData({
				secret: value
			})
	}))
);

export default enhance(Secret);
