import React from "react";
import PropTypes from "prop-types";
import Input from "@components/Input";
import Text from "@components/Text";
import { compose } from "@utils/compose";
import { withAuthFormContext } from "../../context";
import styles from "./styles";

class Password extends React.PureComponent {
	render = () => {
		const { value, onChange, typeError } = this.props;

		return (
			<React.Fragment>
				<Input
					type="password"
					onChange={onChange}
					value={value}
					name="password"
					placeholder="А сюда свой пароль"
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

Password.propTypes = {
	value: PropTypes.string,
	onChange: PropTypes.func.isRequired,
	typeError: PropTypes.func.isRequired
};

Password.defaultProps = {
	value: null
};

const enhance = compose(
	withAuthFormContext(context => ({
		value: context.credentials.password,
		typeError: context.selectTypeError("password"),
		onChange: value =>
			context.handleCredentials({
				password: value
			})
	}))
);

export default enhance(Password);
