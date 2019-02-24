import React from "react";
import PropTypes from "prop-types";
import Input from "@components/Input";
import { compose } from "@utils/compose";
import Text from "@components/Text";
import { withRegisterFormContext } from "../../context";
import styles from "./styles";

class RepeatPassword extends React.PureComponent {
	render = () => {
		const { value, onChange, typeError } = this.props;
		return (
			<React.Fragment>
				<Input
					onChange={onChange}
					value={value}
					type="password"
					id="passwordrepeat"
					name="passwordrepeat"
					placeholder="Пароль ещё раз"
					fluid
				/>
				{typeError && (
					<div className="mt1">
						<Text className={styles.error}>{typeError}</Text>
					</div>
				)}
			</React.Fragment>
		);
	};
}

RepeatPassword.propTypes = {
	value: PropTypes.string,
	onChange: PropTypes.func.isRequired,
	typeError: PropTypes.string
};

RepeatPassword.defaultProps = {
	value: null,
	typeError: null
};

const enhance = compose(
	withRegisterFormContext(context => ({
		value: context.selectors.selectTemporaryField(context, {
			field: "passwordRepeat"
		}),
		typeError: context.selectors.selectTypeErrorMessage(context, {
			field: "passwordRepeat"
		}),
		onChange: value =>
			context.handleTemporaryData({
				passwordRepeat: value
			})
	}))
);

export default enhance(RepeatPassword);
