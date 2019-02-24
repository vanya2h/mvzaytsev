import React from "react";
import PropTypes from "prop-types";
import Input from "@components/Input";
import { compose } from "@utils/compose";
import Text from "@components/Text";
import { withRegisterFormContext } from "../../context";
import styles from "./styles";

class Name extends React.PureComponent {
	render = () => {
		const { value, onChange, typeError } = this.props;
		return (
			<React.Fragment>
				<Text bold as="label" htmlFor="name">
					Отображаемое имя
				</Text>
				<div className="mt1">
					<Input
						onChange={onChange}
						value={value}
						id="name"
						name="name"
						placeholder="Например, Иван Иванов"
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

Name.propTypes = {
	value: PropTypes.string,
	onChange: PropTypes.func.isRequired,
	typeError: PropTypes.string
};

Name.defaultProps = {
	value: null,
	typeError: null
};

const enhance = compose(
	withRegisterFormContext(context => ({
		value: context.selectors.selectTemporaryField(context, {
			field: "name"
		}),
		typeError: context.selectors.selectTypeErrorMessage(context, {
			field: "name"
		}),
		onChange: value =>
			context.handleTemporaryData({
				name: value
			})
	}))
);

export default enhance(Name);
