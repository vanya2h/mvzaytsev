import React from "react";
import PropTypes from "prop-types";
import Input from "@components/Input";
import { compose } from "@utils/compose";
import Text from "@components/Text";
import { withRegisterFormContext } from "../../context";
import styles from "./styles";

class Password extends React.PureComponent {
	render = () => {
		const { value, onChange, typeError } = this.props;
		return (
			<React.Fragment>
				<Text bold as="label" htmlFor="password">
					Новый пароль
				</Text>
				<div className="mt1">
					<Input
						onChange={onChange}
						value={value}
						type="password"
						id="password"
						name="password"
						placeholder="Введите пароль"
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

Password.propTypes = {
	value: PropTypes.string,
	onChange: PropTypes.func.isRequired,
	typeError: PropTypes.string
};

Password.defaultProps = {
	value: null,
	typeError: null
};

const enhance = compose(
	withRegisterFormContext(context => ({
		value: context.selectors.selectTemporaryField(context, {
			field: "password"
		}),
		typeError: context.selectors.selectTypeErrorMessage(context, {
			field: "password"
		}),
		onChange: value =>
			context.handleTemporaryData({
				password: value
			})
	}))
);

export default enhance(Password);
