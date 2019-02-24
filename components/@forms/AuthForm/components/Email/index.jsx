import React from "react";
import PropTypes from "prop-types";
import Input from "@components/Input";
import { compose } from "@utils/compose";
import Text from "@components/Text";
import { withAuthFormContext } from "../../context";
import styles from "./styles";

class Email extends React.PureComponent {
	render = () => {
		const { value, onChange, typeError } = this.props;
		return (
			<React.Fragment>
				<Text bold as="label" htmlFor="email">
					Логин
				</Text>
				<div className="mt1">
					<Input
						onChange={onChange}
						value={value}
						name="email"
						placeholder="Ваш E-mail адрес"
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

Email.propTypes = {
	value: PropTypes.string,
	onChange: PropTypes.func.isRequired,
	typeError: PropTypes.string
};

Email.defaultProps = {
	value: null,
	typeError: null
};

const enhance = compose(
	withAuthFormContext(context => ({
		value: context.selectors.selectTemporaryField(context, {
			field: "email"
		}),
		typeError: context.selectors.selectTypeErrorMessage(context, {
			field: "email"
		}),
		onChange: value =>
			context.handleCredentials({
				email: value
			})
	}))
);

export default enhance(Email);
